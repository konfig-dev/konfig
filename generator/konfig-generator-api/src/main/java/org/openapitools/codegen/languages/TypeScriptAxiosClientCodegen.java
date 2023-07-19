/*
 * Copyright 2018 OpenAPI-Generator Contributors (https://openapi-generator.tech)
 * Copyright 2018 SmartBear Software
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.openapitools.codegen.languages;

import io.swagger.v3.oas.models.media.ComposedSchema;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.parameters.RequestBody;
import io.swagger.v3.parser.util.SchemaTypeUtil;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.codegen.*;
import org.openapitools.codegen.meta.features.DocumentationFeature;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;
import org.openapitools.codegen.model.OperationMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.utils.ModelUtils;

import java.util.*;

public class TypeScriptAxiosClientCodegen extends AbstractTypeScriptClientCodegen {

    public static final String NPM_REPOSITORY = "npmRepository";
    public static final String WITH_INTERFACES = "withInterfaces";
    public static final String SEPARATE_MODELS_AND_API = "withSeparateModelsAndApi";
    public static final String WITHOUT_PREFIX_ENUMS = "withoutPrefixEnums";
    public static final String USE_SINGLE_REQUEST_PARAMETER = "useSingleRequestParameter";
    public static final String WITH_NODE_IMPORTS = "withNodeImports";
    public static final String STRING_ENUMS = "stringEnums";
    public static final String STRING_ENUMS_DESC = "Generate string enums instead of objects for enum values.";

    protected String npmRepository = null;
    protected Boolean stringEnums = false;

    protected String apiDocPath = "docs/";

    private String tsModelPackage = "";

    /**
     * For some reason the camelize function in StringUtils would turn
     */
    public static String toCamelCase(String input, boolean pascalCase) {
        StringBuilder result = new StringBuilder();
        boolean capitalizeNext = pascalCase ? true : false;
        for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);
            if (currentChar == '_' || currentChar == '-' || currentChar == ' ') {
                capitalizeNext = true;
            } else {
                if (capitalizeNext) {
                    result.append(Character.toUpperCase(currentChar));
                    capitalizeNext = false;
                } else {
                    result.append(Character.toLowerCase(currentChar));
                }
            }
        }
        return result.toString();
    }

    @Override
    public String sanitizeTag(String tag) {
        return toCamelCase(sanitizeName(tag), true);
    }

    public TypeScriptAxiosClientCodegen() {
        super();

        modifyFeatureSet(features -> features.includeDocumentationFeatures(DocumentationFeature.Readme));

        // clear import mapping (from default generator) as TS does not use it
        // at the moment
        importMapping.clear();

        outputFolder = "generated-code/typescript-axios";
        embeddedTemplateDir = templateDir = "typescript-axios";

        this.cliOptions.add(new CliOption(NPM_REPOSITORY, "Use this property to set an url of your private npmRepo in the package.json"));
        this.cliOptions.add(new CliOption(WITH_INTERFACES, "Setting this property to true will generate interfaces next to the default class implementations.", SchemaTypeUtil.BOOLEAN_TYPE).defaultValue(Boolean.FALSE.toString()));
        this.cliOptions.add(new CliOption(SEPARATE_MODELS_AND_API, "Put the model and api in separate folders and in separate classes", SchemaTypeUtil.BOOLEAN_TYPE).defaultValue(Boolean.FALSE.toString()));
        this.cliOptions.add(new CliOption(WITHOUT_PREFIX_ENUMS, "Don't prefix enum names with class names", SchemaTypeUtil.BOOLEAN_TYPE).defaultValue(Boolean.FALSE.toString()));
        this.cliOptions.add(new CliOption(USE_SINGLE_REQUEST_PARAMETER, "Setting this property to true will generate functions with a single argument containing all API endpoint parameters instead of one argument per parameter.", SchemaTypeUtil.BOOLEAN_TYPE).defaultValue(Boolean.FALSE.toString()));
        this.cliOptions.add(new CliOption(WITH_NODE_IMPORTS, "Setting this property to true adds imports for NodeJS", SchemaTypeUtil.BOOLEAN_TYPE).defaultValue(Boolean.FALSE.toString()));
        this.cliOptions.add(new CliOption(STRING_ENUMS, STRING_ENUMS_DESC).defaultValue(String.valueOf(this.stringEnums)));
        // Templates have no mapping between formatted property names and original base names so use only "original" and remove this option
        removeOption(CodegenConstants.MODEL_PROPERTY_NAMING);
    }

    @Override
    public String getName() {
        return "typescript-axios";
    }

    @Override
    public String getHelp() {
        return "Generates a TypeScript client library using axios.";
    }

    public String getNpmRepository() {
        return npmRepository;
    }

    public void setNpmRepository(String npmRepository) {
        this.npmRepository = npmRepository;
    }

    private static String getRelativeToRoot(String path) {
        StringBuilder sb = new StringBuilder();
        int slashCount = path.split("/").length;
        if (slashCount == 0) {
            sb.append("./");
        } else {
            for (int i = 0; i < slashCount; ++i) {
                sb.append("../");
            }
        }
        return sb.toString();
    }

    @Override
    public String apiDocFileFolder() {
        return outputFolder + "/" +  apiDocPath;
    }

    @Override
    public void processOpts() {
        super.processOpts();
        tsModelPackage = modelPackage.replaceAll("\\.", "/");
        String tsApiPackage = apiPackage.replaceAll("\\.", "/");

        String modelRelativeToRoot = getRelativeToRoot(tsModelPackage);
        String apiRelativeToRoot = getRelativeToRoot(tsApiPackage);

        additionalProperties.put("tsModelPackage", tsModelPackage);
        additionalProperties.put("tsApiPackage", tsApiPackage);
        additionalProperties.put("apiRelativeToRoot", apiRelativeToRoot);
        additionalProperties.put("modelRelativeToRoot", modelRelativeToRoot);

        supportingFiles.add(new SupportingFile("index.mustache", "", "index.ts"));
        supportingFiles.add(new SupportingFile("baseApi.mustache", "", "base.ts"));
        supportingFiles.add(new SupportingFile("common.mustache", "", "common.ts"));
        supportingFiles.add(new SupportingFile("api.mustache", "", "api.ts"));
        supportingFiles.add(new SupportingFile("configuration.mustache", "", "configuration.ts"));
        supportingFiles.add(new SupportingFile("git_push.sh.mustache", "", "git_push.sh"));
        supportingFiles.add(new SupportingFile("gitignore", "", ".gitignore"));
        supportingFiles.add(new SupportingFile("npmignore", "", ".npmignore"));
        supportingFiles.add(new SupportingFile("client.mustache", "", "client.ts"));
        supportingFiles.add(new SupportingFile("clientCustom.mustache", "", "client-custom.ts"));
        supportingFiles.add(new SupportingFile("page.mustache", "pagination", "page.ts"));
        supportingFiles.add(new SupportingFile("pageable.mustache", "pagination", "pageable.ts"));
        supportingFiles.add(new SupportingFile("page-types.mustache", "pagination", "page-types.ts"));
        supportingFiles.add(new SupportingFile("paginate.mustache", "pagination", "paginate.ts"));
        supportingFiles.add(new SupportingFile("requestBeforeHook.mustache", "", "requestBeforeHook.ts"));
        supportingFiles.add(new SupportingFile("requestBeforeUrlHook.mustache", "", "requestBeforeUrlHook.ts"));
        supportingFiles.add(new SupportingFile("requestAfterHook.mustache", "", "requestAfterHook.ts"));

        if (additionalProperties.containsKey(SEPARATE_MODELS_AND_API)) {
            boolean separateModelsAndApi = Boolean.parseBoolean(additionalProperties.get(SEPARATE_MODELS_AND_API).toString());
            if (separateModelsAndApi) {
                if (StringUtils.isAnyBlank(modelPackage, apiPackage)) {
                    throw new RuntimeException("apiPackage and modelPackage must be defined");
                }
                modelTemplateFiles.put("model.mustache", ".ts");
                apiTemplateFiles.put("apiInner.mustache", ".ts");
                apiTemplateFiles.put("apiCustom.mustache", "-custom.ts");
                apiDocTemplateFiles.put("api_doc.mustache", ".md");
                supportingFiles.add(new SupportingFile("modelIndex.mustache", tsModelPackage, "index.ts"));
            }
        }

        additionalProperties.put("apiDocPath", apiDocPath);

        if (additionalProperties.containsKey(STRING_ENUMS)) {
            this.stringEnums = Boolean.parseBoolean(additionalProperties.get(STRING_ENUMS).toString());
            additionalProperties.put("stringEnums", this.stringEnums);
        }

        if (additionalProperties.containsKey(NPM_NAME)) {
            addNpmPackageGeneration();
        }

    }

    @Override
    public void setParameterExampleValue(CodegenParameter codegenParameter, Parameter parameter) {
        // hacky workaround by using Python's implementation here
        // got a NPE when I don't add this here. I'm scared I might be missing other things but it seems work
        PythonForTypeScriptAxiosClientCodegen pythonClientCodegen = new PythonForTypeScriptAxiosClientCodegen(this.openAPI);
        pythonClientCodegen.setParameterExampleValue(codegenParameter, parameter);
    }

    @Override
    public void setParameterExampleValue(CodegenParameter codegenParameter, RequestBody requestBody) {
        // hacky workaround by using Python's implementation here
        // got a NPE when I don't add this here. I'm scared I might be missing other things but it seems work
        PythonForTypeScriptAxiosClientCodegen pythonClientCodegen = new PythonForTypeScriptAxiosClientCodegen(this.openAPI);
        pythonClientCodegen.setParameterExampleValue(codegenParameter, requestBody);
    }

    @Override
    public OperationsMap postProcessOperationsWithModels(OperationsMap objs, List<ModelMap> allModels) {
        objs = super.postProcessOperationsWithModels(objs, allModels);
        OperationMap vals = objs.getOperations();
        List<CodegenOperation> operations = vals.getOperation();

        // If single parameter schema exists then generate value for singleParameterExample
        operations.stream()
                        .forEach(co -> {
                            String singleParameterSchemaName = (String) co.vendorExtensions.get("x-konfig-single-parameter-schema");
                            if (singleParameterSchemaName == null) return;
                            Map<String, Schema> allDefinitions = ModelUtils.getSchemas(this.openAPI);
                            Schema refSchema = allDefinitions.get(singleParameterSchemaName);
                            if (refSchema == null) return;
                            PythonForTypeScriptAxiosClientCodegen pythonCodegen = new PythonForTypeScriptAxiosClientCodegen(this.openAPI);
                            co.singleParameterExample = pythonCodegen.toExampleValue(refSchema);
                        });
        /*
            Filter all the operations that are multipart/form-data operations and set the vendor extension flag
            'multipartFormData' for the template to work with.
         */
        operations.stream()
                .filter(op -> op.hasConsumes)
                .filter(op -> op.consumes.stream().anyMatch(opc -> opc.values().stream().anyMatch("multipart/form-data"::equals)))
                .forEach(op -> op.vendorExtensions.putIfAbsent("multipartFormData", true));
        return objs;
    }

    @Override
    public void postProcessParameter(CodegenParameter parameter) {
        super.postProcessParameter(parameter);
        if (parameter.dataType != null && parameter.dataType.equals("string") && parameter.dataFormat != null && parameter.dataFormat.equals("date")) {
            parameter.dataType = "string | Date";
        }
        if (parameter.isFormParam && parameter.isArray && "binary".equals(parameter.dataFormat)) {
            parameter.isCollectionFormatMulti = true;
        }
    }

    @Override
    public Map<String, ModelsMap> postProcessAllModels(Map<String, ModelsMap> objs) {
        Map<String, ModelsMap> result = super.postProcessAllModels(objs);
        for (ModelsMap entry : result.values()) {
            for (ModelMap model : entry.getModels()) {
                CodegenModel codegenModel = model.getModel();
                model.put("hasAllOf", codegenModel.allOf.size() > 0);
                model.put("hasOneOf", codegenModel.oneOf.size() > 0);
            }
        }

        // allOf with one element and fields means the allOf part should be removed
        // this happened when generating Suger's TS SDK:
        //           "setup": {
        //            "description": "Not original fields. They are populated by other API calls",
        //            "allOf": [
        //              {
        //                "$ref": "#/components/schemas/AzureProductSetup"
        //              }
        //            ]
        //          },
        // ...
        // ...
        // ...
        //       "AzureProductSetup": {
        //        "type": "object",
        //        "properties": {
        //          "callToAction": {
        //            "type": "string",
        //            "enum": [
        //              "free",
        //              "free-trial",
        //              "contact-me"
        //            ]
        //          },
        //          "channelStates": {
        //            "type": "array",
        //            "items": {
        //              "$ref": "#/components/schemas/AzureTypeValue"
        //            }
        //          },
        //          "enableTestDrive": {
        //            "type": "boolean"
        //          },
        //          "resourceType": {
        //            "type": "string",
        //            "enum": [
        //              "AzureProductSetup"
        //            ]
        //          },
        //          "sellingOption": {
        //            "type": "string",
        //            "enum": [
        //              "ListingOnly",
        //              "ListAndSell"
        //            ]
        //          },
        //          "testDriveType": {
        //            "type": "string"
        //          },
        //          "trialUri": {
        //            "type": "string"
        //          }
        //        }
        //      },
        for (Map.Entry<String, ModelsMap> modelMap : objs.entrySet()) {
            for (ModelMap model : modelMap.getValue().getModels()) {
                if (model.getModel().allOf.size() == 1 && model.getModel().hasVars) {
                    model.getModel().allOf.clear();
                }
            }
        }

        return result;
    }

    @Override
    public Map<String, Object> postProcessSupportingFileData(Map<String, Object> objs) {
        Map<String, Object> bundle = super.postProcessSupportingFileData(objs);

        // construct dependencies as string
        List<String> dependencies = new ArrayList<>();
        dependencies.add("    \"axios\": \"^0.26.1\"");
        if ((Boolean) bundle.getOrDefault("includeEventSourceParser", false))
            dependencies.add("\"eventsource-parser\": \"^1.0.0\"");
        if ((Boolean) bundle.getOrDefault("includeFetchAdapter", false))
            dependencies.add("\"konfig-axios-fetch-adapter\": \"^1.0.6\"");
        if ((Boolean) ((Map) bundle.getOrDefault("infoExtensions", new HashMap<String, Object>())).getOrDefault("x-konfig-uses-multipart-form-data", false)) {
            dependencies.add("\"buffer\": \"^6.0.3\"");
            dependencies.add("\"file-type\": \"16.5.4\"");
            dependencies.add("\"form-data\": \"^4.0.0\"");
        }
        bundle.put("dependencies", String.join(",\n    ", dependencies));

        return bundle;
    }

    @Override
    protected void addAdditionPropertiesToCodeGenModel(CodegenModel codegenModel, Schema schema) {
        codegenModel.additionalPropertiesType = getTypeDeclaration(getAdditionalProperties(schema));
        addImport(codegenModel, codegenModel.additionalPropertiesType);
    }

    @Override
    public ModelsMap postProcessModels(ModelsMap objs) {
        List<ModelMap> models = postProcessModelsEnum(objs).getModels();

        boolean withoutPrefixEnums = false;
        if (additionalProperties.containsKey(WITHOUT_PREFIX_ENUMS)) {
            withoutPrefixEnums = Boolean.parseBoolean(additionalProperties.get(WITHOUT_PREFIX_ENUMS).toString());
        }

        for (ModelMap mo  : models) {
            CodegenModel cm = mo.getModel();

            // Deduce the model file name in kebab case
            cm.classFilename = cm.classname.replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT);

            //processed enum names
            if(!withoutPrefixEnums) {
                cm.imports = new TreeSet<>(cm.imports);
                // name enum with model name, e.g. StatusEnum => PetStatusEnum
                for (CodegenProperty var : cm.vars) {
                    if (Boolean.TRUE.equals(var.isEnum)) {
                        var.datatypeWithEnum = var.datatypeWithEnum.replace(var.enumName, cm.classname + var.enumName);
                        var.enumName = var.enumName.replace(var.enumName, cm.classname + var.enumName);
                    }
                }
                if (cm.parent != null) {
                    for (CodegenProperty var : cm.allVars) {
                        if (Boolean.TRUE.equals(var.isEnum)) {
                            var.datatypeWithEnum = var.datatypeWithEnum.replace(var.enumName, cm.classname + var.enumName);
                            var.enumName = var.enumName.replace(var.enumName, cm.classname + var.enumName);
                        }
                    }
                }
            }
        }

        // Apply the model file name to the imports as well
        for (Map<String, String> m : objs.getImports()) {
            String javaImport = m.get("import").substring(modelPackage.length() + 1);
            String tsImport = tsModelPackage + "/" + javaImport;
            m.put("tsImport", tsImport);
            m.put("class", javaImport);
            m.put("filename", javaImport.replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT));
        }
        return objs;
    }

    /**
     * Overriding toRegularExpression() to avoid escapeText() being called,
     * as it would return a broken regular expression if any escaped character / metacharacter were present.
     */
    @Override
    public String toRegularExpression(String pattern) {
        return addRegularExpressionDelimiter(pattern);
    }

    @Override
    public String toModelFilename(String name) {
        return super.toModelFilename(name).replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT);
    }

    @Override
    public String toApiFilename(String name) {
        return super.toApiFilename(name).replaceAll("([a-z0-9])([A-Z])", "$1-$2").toLowerCase(Locale.ROOT);
    }

    private void addNpmPackageGeneration() {

        if (additionalProperties.containsKey(NPM_REPOSITORY)) {
            this.setNpmRepository(additionalProperties.get(NPM_REPOSITORY).toString());
        }

        //Files for building our lib
        supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));
        supportingFiles.add(new SupportingFile("package.mustache", "", "package.json"));
        supportingFiles.add(new SupportingFile("tsconfig.mustache", "", "tsconfig.json"));
        supportingFiles.add(new SupportingFile("index.test.mustache", "", "index.test.ts"));
        supportingFiles.add(new SupportingFile("tsconfig.test.mustache", "", "tsconfig.test.json"));
        supportingFiles.add(new SupportingFile("yarn.mustache", "", "yarn.lock"));
        supportingFiles.add(new SupportingFile("jest.config.mustache", "", "jest.config.ts"));
        // in case ECMAScript 6 is supported add another tsconfig for an ESM (ECMAScript Module)
        if (supportsES6) {
            supportingFiles.add(new SupportingFile("tsconfig.esm.mustache", "", "tsconfig.esm.json"));
        }
    }

    @Override
    protected void updatePropertyForAnyType(CodegenProperty property, Schema p) {
        // The 'null' value is allowed when the OAS schema is 'any type'.
        // See https://github.com/OAI/OpenAPI-Specification/issues/1389
        // custom line here, do not set property.isNullable = true
        if (languageSpecificPrimitives.contains(property.dataType)) {
            property.isPrimitiveType = true;
        }
        if (ModelUtils.isMapSchema(p)) {
            // an object or anyType composed schema that has additionalProperties set
            // some of our code assumes that any type schema with properties defined will be a map
            // even though it should allow in any type and have map constraints for properties
            updatePropertyForMap(property, p);
        }
    }

    @Override
    protected void addImport(ComposedSchema composed, Schema childSchema, CodegenModel model, String modelName) {
        // import everything (including child schema of a composed schema)
        addImport(model, modelName);
    }
}
