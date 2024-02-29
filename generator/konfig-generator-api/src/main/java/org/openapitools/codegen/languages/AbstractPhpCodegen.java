//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package org.openapitools.codegen.languages;

import io.swagger.v3.oas.models.media.ArraySchema;
import io.swagger.v3.oas.models.media.Schema;
import io.swagger.v3.oas.models.media.StringSchema;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.codegen.CliOption;
import org.openapitools.codegen.CodegenConfig;
import org.openapitools.codegen.CodegenOperation;
import org.openapitools.codegen.CodegenParameter;
import org.openapitools.codegen.CodegenProperty;
import org.openapitools.codegen.DefaultCodegen;
import org.openapitools.codegen.GeneratorLanguage;
import org.openapitools.codegen.SupportingFile;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;
import org.openapitools.codegen.model.OperationMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.utils.CamelizeOption;
import org.openapitools.codegen.utils.ModelUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class AbstractPhpCodegen extends DefaultCodegen implements CodegenConfig {
    private final Logger LOGGER = LoggerFactory.getLogger(AbstractPhpCodegen.class);
    public static final String VARIABLE_NAMING_CONVENTION = "variableNamingConvention";
    public static final String PACKAGE_NAME = "packageName";
    public static final String SRC_BASE_PATH = "srcBasePath";
    protected String invokerPackage = "php";
    protected String packageName = "php-base";
    protected String artifactVersion = null;
    protected String srcBasePath = "lib";
    protected String testBasePath = "test";
    protected String docsBasePath = "docs";
    protected String apiDirName = "Api";
    protected String modelDirName = "Model";
    protected String variableNamingConvention = "snake_case";
    protected String apiDocPath;
    protected String modelDocPath;
    protected String interfaceNamePrefix;
    protected String interfaceNameSuffix;
    protected String abstractNamePrefix;
    protected String abstractNameSuffix;
    protected String traitNamePrefix;
    protected String traitNameSuffix;
    private Map<String, String> schemaKeyToModelNameCache;

    public AbstractPhpCodegen() {
        this.apiDocPath = this.docsBasePath + "/" + this.apiDirName;
        this.modelDocPath = this.docsBasePath + "/" + this.modelDirName;
        this.interfaceNamePrefix = "";
        this.interfaceNameSuffix = "Interface";
        this.abstractNamePrefix = "Abstract";
        this.abstractNameSuffix = "";
        this.traitNamePrefix = "";
        this.traitNameSuffix = "Trait";
        this.schemaKeyToModelNameCache = new HashMap();
        this.modelTemplateFiles.put("model.mustache", ".php");
        this.apiTemplateFiles.put("api.mustache", ".php");
        this.apiTestTemplateFiles.put("api_test.mustache", ".php");
        this.modelDocTemplateFiles.put("model_doc.mustache", ".md");
        this.apiDocTemplateFiles.put("api_doc.mustache", ".md");
        this.apiPackage = this.invokerPackage + "\\" + this.apiDirName;
        this.modelPackage = this.invokerPackage + "\\" + this.modelDirName;
        this.setReservedWordsLowerCase(Arrays.asList("resourcePath", "httpBody", "queryParams", "headerParams", "formParams", "_header_accept", "_tempBody", "__halt_compiler", "abstract", "and", "array", "as", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "die", "do", "echo", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "eval", "exit", "extends", "final", "for", "foreach", "function", "global", "goto", "if", "implements", "include", "include_once", "instanceof", "insteadof", "interface", "isset", "list", "namespace", "new", "or", "print", "private", "protected", "public", "require", "require_once", "return", "static", "switch", "throw", "trait", "try", "unset", "use", "var", "while", "xor"));
        this.languageSpecificPrimitives = new HashSet(Arrays.asList("bool", "boolean", "int", "integer", "float", "string", "object", "array", "\\DateTime", "\\SplFileObject", "mixed", "number", "void", "byte"));
        this.instantiationTypes.put("array", "array");
        this.instantiationTypes.put("map", "array");
        String primitives = "'" + StringUtils.join(this.languageSpecificPrimitives, "', '") + "'";
        this.additionalProperties.put("primitives", primitives);
        this.typeMapping = new HashMap();
        this.typeMapping.put("integer", "int");
        this.typeMapping.put("long", "int");
        this.typeMapping.put("number", "float");
        this.typeMapping.put("float", "float");
        this.typeMapping.put("decimal", "float");
        this.typeMapping.put("double", "float");
        this.typeMapping.put("string", "string");
        this.typeMapping.put("byte", "int");
        this.typeMapping.put("boolean", "bool");
        this.typeMapping.put("date", "\\DateTime");
        this.typeMapping.put("Date", "\\DateTime");
        this.typeMapping.put("DateTime", "\\DateTime");
        this.typeMapping.put("file", "\\SplFileObject");
        this.typeMapping.put("map", "array");
        this.typeMapping.put("array", "array");
        this.typeMapping.put("list", "array");
        this.typeMapping.put("object", "object");
        this.typeMapping.put("binary", "string");
        this.typeMapping.put("ByteArray", "string");
        this.typeMapping.put("UUID", "string");
        this.typeMapping.put("URI", "string");
        this.typeMapping.put("AnyType", "mixed");
        this.cliOptions.add(new CliOption("modelPackage", "package for generated models"));
        this.cliOptions.add(new CliOption("apiPackage", "package for generated api classes"));
        this.cliOptions.add((new CliOption("variableNamingConvention", "naming convention of variable name, e.g. camelCase.")).defaultValue("snake_case"));
        this.cliOptions.add(new CliOption("invokerPackage", "The main namespace to use for all classes. e.g. Yay\\Pets"));
        this.cliOptions.add(new CliOption("packageName", "The main package name for classes. e.g. GeneratedPetstore"));
        this.cliOptions.add(new CliOption("srcBasePath", "The directory to serve as source root."));
        this.cliOptions.add(new CliOption("artifactVersion", "The version to use in the composer package version field. e.g. 1.2.3"));
    }

    public void processOpts() {
        super.processOpts();
        if (StringUtils.isEmpty(System.getenv("PHP_POST_PROCESS_FILE"))) {
            this.LOGGER.info("Environment variable PHP_POST_PROCESS_FILE not defined so the PHP code may not be properly formatted. To define it, try 'export PHP_POST_PROCESS_FILE=\"/usr/local/bin/prettier --write\"' (Linux/Mac)");
            this.LOGGER.info("NOTE: To enable file post-processing, 'enablePostProcessFile' must be set to `true` (--enable-post-process-file for CLI).");
        }

        if (this.additionalProperties.containsKey("packageName")) {
            this.setPackageName((String)this.additionalProperties.get("packageName"));
        } else {
            this.additionalProperties.put("packageName", this.packageName);
        }

        if (this.additionalProperties.containsKey("srcBasePath")) {
            this.setSrcBasePath((String)this.additionalProperties.get("srcBasePath"));
        } else {
            this.additionalProperties.put("srcBasePath", this.srcBasePath);
        }

        if (this.additionalProperties.containsKey("invokerPackage")) {
            this.setInvokerPackage((String)this.additionalProperties.get("invokerPackage"));
            this.apiPackage = this.invokerPackage + "\\" + this.apiDirName;
            this.modelPackage = this.invokerPackage + "\\" + this.modelDirName;
        } else {
            this.additionalProperties.put("invokerPackage", this.invokerPackage);
        }

        if (this.additionalProperties.containsKey("modelPackage")) {
            this.modelPackage = this.invokerPackage + "\\" + (String)this.additionalProperties.get("modelPackage");
        }

        this.additionalProperties.put("modelPackage", this.modelPackage);
        if (this.additionalProperties.containsKey("apiPackage")) {
            this.apiPackage = this.invokerPackage + "\\" + (String)this.additionalProperties.get("apiPackage");
        }

        this.additionalProperties.put("apiPackage", this.apiPackage);
        if (this.additionalProperties.containsKey("artifactVersion")) {
            this.setArtifactVersion((String)this.additionalProperties.get("artifactVersion"));
        } else {
            this.additionalProperties.put("artifactVersion", this.artifactVersion);
        }

        if (this.additionalProperties.containsKey("variableNamingConvention")) {
            this.setParameterNamingConvention((String)this.additionalProperties.get("variableNamingConvention"));
        }

        if (this.additionalProperties.containsKey("gitUserId")) {
            this.setGitUserId((String)this.additionalProperties.get("gitUserId"));
        }

        if (this.additionalProperties.containsKey("gitRepoId")) {
            this.setGitRepoId((String)this.additionalProperties.get("gitRepoId"));
        }

        if (!this.getComposerPackageName().isEmpty()) {
            this.additionalProperties.put("composerPackageName", this.getComposerPackageName());
        }

        this.additionalProperties.put("escapedInvokerPackage", this.invokerPackage.replace("\\", "\\\\"));
        this.additionalProperties.put("apiSrcPath", "./" + this.toSrcPath(this.apiPackage, this.srcBasePath));
        this.additionalProperties.put("modelSrcPath", "./" + this.toSrcPath(this.modelPackage, this.srcBasePath));
        this.additionalProperties.put("apiTestPath", "./" + this.testBasePath + "/" + this.apiDirName);
        this.additionalProperties.put("modelTestPath", "./" + this.testBasePath + "/" + this.modelDirName);
        this.additionalProperties.put("apiDocPath", this.apiDocPath);
        this.additionalProperties.put("modelDocPath", this.modelDocPath);
        this.additionalProperties.put("testBasePath", this.testBasePath);
        this.additionalProperties.put("interfaceNamePrefix", this.interfaceNamePrefix);
        this.additionalProperties.put("interfaceNameSuffix", this.interfaceNameSuffix);
        this.additionalProperties.put("abstractNamePrefix", this.abstractNamePrefix);
        this.additionalProperties.put("abstractNameSuffix", this.abstractNameSuffix);
        this.additionalProperties.put("traitNamePrefix", this.traitNamePrefix);
        this.additionalProperties.put("traitNameSuffix", this.traitNameSuffix);
        this.supportingFiles.add(new SupportingFile("gitignore", "", ".gitignore"));
    }

    public String getPackageName() {
        return this.packageName;
    }

    public String toSrcPath(String packageName, String basePath) {
        String modifiedPackageName = packageName.replace(this.invokerPackage, "");
        String modifiedBasePath = basePath;
        if (basePath != null && !basePath.isEmpty()) {
            modifiedBasePath = basePath.replaceAll("[\\\\/]?$", "") + File.separator;
        }

        String packagePath = StringUtils.removeStart(modifiedPackageName.replaceAll("[\\.\\\\/]", Matcher.quoteReplacement("/")), File.separator);
        return StringUtils.removeEnd(modifiedBasePath + packagePath, File.separator);
    }

    public String escapeReservedWord(String name) {
        return this.reservedWordsMappings().containsKey(name) ? (String)this.reservedWordsMappings().get(name) : "_" + name;
    }

    public String apiFileFolder() {
        return this.outputFolder + File.separator + this.toSrcPath(this.apiPackage, this.srcBasePath);
    }

    public String modelFileFolder() {
        return this.outputFolder + File.separator + this.toSrcPath(this.modelPackage, this.srcBasePath);
    }

    public String apiTestFileFolder() {
        return this.outputFolder + File.separator + this.testBasePath + File.separator + this.apiDirName;
    }

    public String modelTestFileFolder() {
        return this.outputFolder + File.separator + this.testBasePath + File.separator + this.modelDirName;
    }

    public String apiDocFileFolder() {
        return this.outputFolder + File.separator + this.apiDocPath;
    }

    public String modelDocFileFolder() {
        return this.outputFolder + File.separator + this.modelDocPath;
    }

    public String toModelDocFilename(String name) {
        return this.toModelName(name);
    }

    public String toApiDocFilename(String name) {
        return this.toApiName(name);
    }

    public String getTypeDeclaration(Schema p) {
        if (ModelUtils.isArraySchema(p)) {
            ArraySchema ap = (ArraySchema)p;
            Schema inner = ap.getItems();
            if (inner == null) {
                this.LOGGER.warn("{}(array property) does not have a proper inner type defined.Default to string", ap.getName());
                inner = (new StringSchema()).description("TODO default missing array inner type to string");
            }

            return this.getTypeDeclaration(inner) + "[]";
        } else if (ModelUtils.isMapSchema(p)) {
            Schema inner = this.getAdditionalProperties(p);
            if (inner == null) {
                this.LOGGER.warn("{}(map property) does not have a proper inner type defined. Default to string", p.getName());
                inner = (new StringSchema()).description("TODO default missing map inner type to string");
            }

            return this.getSchemaType(p) + "<string," + this.getTypeDeclaration(inner) + ">";
        } else if (StringUtils.isNotBlank(p.get$ref())) {
            String type = super.getTypeDeclaration(p);
            return !this.languageSpecificPrimitives.contains(type) ? "\\" + this.modelPackage + "\\" + type : type;
        } else {
            return super.getTypeDeclaration(p);
        }
    }

    public String getTypeDeclaration(String name) {
        return !this.languageSpecificPrimitives.contains(name) ? "\\" + this.modelPackage + "\\" + name : super.getTypeDeclaration(name);
    }

    public String getSchemaType(Schema p) {
        String openAPIType = super.getSchemaType(p);
        String type = null;
        if (openAPIType == null) {
            this.LOGGER.error("OpenAPI Type for {} is null. Default to UNKNOWN_OPENAPI_TYPE instead.", p.getName());
            openAPIType = "UNKNOWN_OPENAPI_TYPE";
        }

        if (this.typeMapping.containsKey(openAPIType)) {
            type = (String)this.typeMapping.get(openAPIType);
            if (this.languageSpecificPrimitives.contains(type)) {
                return type;
            }

            if (this.instantiationTypes.containsKey(type)) {
                return type;
            }
        } else {
            type = openAPIType;
        }

        return this.toModelName(type);
    }

    public String getInvokerPackage() {
        return this.invokerPackage;
    }

    public void setInvokerPackage(String invokerPackage) {
        this.invokerPackage = invokerPackage;
    }

    public void setArtifactVersion(String artifactVersion) {
        this.artifactVersion = artifactVersion;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public void setSrcBasePath(String srcBasePath) {
        this.srcBasePath = srcBasePath;
    }

    public void setParameterNamingConvention(String variableNamingConvention) {
        this.variableNamingConvention = variableNamingConvention;
    }

    public String toVarName(String name) {
        name = name.replaceAll("^@", "at_");
        name = this.sanitizeName(name);
        if ("camelCase".equals(this.variableNamingConvention)) {
            name = org.openapitools.codegen.utils.StringUtils.camelize(name, CamelizeOption.LOWERCASE_FIRST_LETTER);
        } else if ("PascalCase".equals(this.variableNamingConvention)) {
            name = org.openapitools.codegen.utils.StringUtils.camelize(name, CamelizeOption.UPPERCASE_FIRST_CHAR);
        } else {
            name = org.openapitools.codegen.utils.StringUtils.underscore(name);
        }

        if (name.matches("^\\d.*")) {
            name = "_" + name;
        }

        return name;
    }

    public String toParamName(String name) {
        return this.toVarName(name);
    }

    private String toGenericName(String name) {
        name = name.replaceAll("\\]", "");
        name = name.replaceAll("[^\\w\\\\]+", "_");
        name = name.replaceAll("$", "");
        if (this.isReservedWord(name)) {
            this.LOGGER.warn("{} (reserved word) cannot be used as model name. Renamed to {}", name, org.openapitools.codegen.utils.StringUtils.camelize("model_" + name));
            name = "model_" + name;
        }

        if (name.matches("^\\d.*")) {
            this.LOGGER.warn("{} (model name starts with number) cannot be used as model name. Renamed to {}", name, org.openapitools.codegen.utils.StringUtils.camelize("model_" + name));
            name = "model_" + name;
        }

        return name;
    }

    public String toModelName(String name) {
        String origName = name;
        if (this.schemaKeyToModelNameCache.containsKey(name)) {
            return (String)this.schemaKeyToModelNameCache.get(name);
        } else {
            name = this.toGenericName(name);
            if (!name.matches("^\\\\.*")) {
                if (!StringUtils.isEmpty(this.modelNamePrefix)) {
                    name = this.modelNamePrefix + "_" + name;
                }

                if (!StringUtils.isEmpty(this.modelNameSuffix)) {
                    name = name + "_" + this.modelNameSuffix;
                }
            }

            String camelizedName = org.openapitools.codegen.utils.StringUtils.camelize(name);
            this.schemaKeyToModelNameCache.put(origName, camelizedName);
            return camelizedName;
        }
    }

    public String toModelFilename(String name) {
        return this.toModelName(name);
    }

    public String toModelTestFilename(String name) {
        return this.toModelName(name) + "Test";
    }

    public String toInterfaceName(String name) {
        return org.openapitools.codegen.utils.StringUtils.camelize(this.interfaceNamePrefix + name + this.interfaceNameSuffix);
    }

    public String toAbstractName(String name) {
        return org.openapitools.codegen.utils.StringUtils.camelize(this.abstractNamePrefix + name + this.abstractNameSuffix);
    }

    public String toTraitName(String name) {
        return org.openapitools.codegen.utils.StringUtils.camelize(this.traitNamePrefix + name + this.traitNameSuffix);
    }

    public String toOperationId(String operationId) {
        if (StringUtils.isEmpty(operationId)) {
            throw new RuntimeException("Empty method name (operationId) not allowed");
        } else {
            if (this.isReservedWord(operationId)) {
                this.LOGGER.warn("{} (reserved word) cannot be used as method name. Renamed to {}", operationId, org.openapitools.codegen.utils.StringUtils.camelize(this.sanitizeName("call_" + operationId), CamelizeOption.LOWERCASE_FIRST_LETTER));
                operationId = "call_" + operationId;
            }

            if (operationId.matches("^\\d.*")) {
                this.LOGGER.warn("{} (starting with a number) cannot be used as method name. Renamed to {}", operationId, org.openapitools.codegen.utils.StringUtils.camelize(this.sanitizeName("call_" + operationId), CamelizeOption.LOWERCASE_FIRST_LETTER));
                operationId = "call_" + operationId;
            }

            return org.openapitools.codegen.utils.StringUtils.camelize(this.sanitizeName(operationId), CamelizeOption.LOWERCASE_FIRST_LETTER);
        }
    }

    public String toDefaultValue(Schema p) {
        if (ModelUtils.isBooleanSchema(p)) {
            if (p.getDefault() != null) {
                return p.getDefault().toString();
            }
        } else if (!ModelUtils.isDateSchema(p) && !ModelUtils.isDateTimeSchema(p)) {
            if (ModelUtils.isNumberSchema(p)) {
                if (p.getDefault() != null) {
                    return p.getDefault().toString();
                }
            } else if (ModelUtils.isIntegerSchema(p)) {
                if (p.getDefault() != null) {
                    return p.getDefault().toString();
                }
            } else if (ModelUtils.isStringSchema(p) && p.getDefault() != null) {
                return "'" + p.getDefault() + "'";
            }
        }

        return null;
    }

    public void setParameterExampleValue(CodegenParameter p) {
        String example;
        if (p.defaultValue == null) {
            example = p.example;
        } else {
            example = p.defaultValue;
        }

        String type = p.baseType;
        if (type == null) {
            type = p.dataType;
        }

        if (!"String".equalsIgnoreCase(type) && !p.isString) {
            if (!"Integer".equals(type) && !"int".equals(type)) {
                if (!"Float".equalsIgnoreCase(type) && !"Double".equalsIgnoreCase(type)) {
                    if (!"BOOLEAN".equalsIgnoreCase(type) && !"bool".equalsIgnoreCase(type)) {
                        if (!"\\SplFileObject".equalsIgnoreCase(type) && !p.isFile) {
                            if ("\\Date".equalsIgnoreCase(type)) {
                                if (example == null) {
                                    example = "2013-10-20";
                                }

                                example = "new \\DateTime(\"" + this.escapeText(example) + "\")";
                            } else if ("\\DateTime".equalsIgnoreCase(type)) {
                                if (example == null) {
                                    example = "2013-10-20T19:20:30+01:00";
                                }

                                example = "new \\DateTime(\"" + this.escapeText(example) + "\")";
                            } else if ("object".equals(type)) {
                                example = "new \\stdClass";
                            } else if (!this.languageSpecificPrimitives.contains(type)) {
                                example = "new " + this.getTypeDeclaration(type) + "()";
                            } else {
                                this.LOGGER.warn("Type {} not handled properly in setParameterExampleValue", type);
                            }
                        } else {
                            if (example == null) {
                                example = "/path/to/file.txt";
                            }

                            example = "\"" + this.escapeText(example) + "\"";
                        }
                    } else if (example == null) {
                        example = "True";
                    }
                } else if (example == null) {
                    example = "3.4";
                }
            } else if (example == null) {
                example = "56";
            }
        } else {
            if (example == null) {
                example = "'" + p.paramName + "_example'";
            }

            example = this.escapeText(example);
        }

        if (example == null) {
            example = "NULL";
        } else if (Boolean.TRUE.equals(p.isArray)) {
            example = "array(" + example + ")";
        } else if (Boolean.TRUE.equals(p.isMap)) {
            example = "array('key' => " + example + ")";
        }

        p.example = example;
    }

    public String toEnumValue(String value, String datatype) {
        return !"int".equals(datatype) && !"float".equals(datatype) ? "'" + this.escapeText(value) + "'" : value;
    }

    public String toEnumDefaultValue(String value, String datatype) {
        return "self::" + datatype + "_" + value;
    }

    public String toEnumVarName(String name, String datatype) {
        if (name.length() == 0) {
            return "EMPTY";
        } else if (name.trim().length() == 0) {
            return "SPACE_" + name.length();
        } else if (this.getSymbolName(name) != null) {
            return this.getSymbolName(name).toUpperCase(Locale.ROOT);
        } else {
            String varName;
            if (!"int".equals(datatype) && !"float".equals(datatype)) {
                varName = this.sanitizeName(org.openapitools.codegen.utils.StringUtils.underscore(name).toUpperCase(Locale.ROOT));
                varName = varName.replaceFirst("^_", "");
                varName = varName.replaceFirst("_$", "");
                return !this.isReservedWord(varName) && !varName.matches("\\d.*") ? varName : this.escapeReservedWord(varName);
            } else {
                varName = name.replaceAll("-", "MINUS_");
                varName = varName.replaceAll("\\+", "PLUS_");
                varName = varName.replaceAll("\\.", "_DOT_");
                return varName;
            }
        }
    }

    public String toEnumName(CodegenProperty property) {
        String enumName = org.openapitools.codegen.utils.StringUtils.underscore(this.toGenericName(property.name)).toUpperCase(Locale.ROOT);
        enumName = enumName.replace("[]", "");
        return enumName.matches("\\d.*") ? "_" + enumName : enumName;
    }

    public ModelsMap postProcessModels(ModelsMap objs) {
        return this.postProcessModelsEnum(objs);
    }

    public OperationsMap postProcessOperationsWithModels(OperationsMap objs, List<ModelMap> allModels) {
        OperationMap operations = objs.getOperations();
        List<CodegenOperation> operationList = operations.getOperation();
        Iterator var5 = operationList.iterator();

        while(var5.hasNext()) {
            CodegenOperation op = (CodegenOperation)var5.next();
            op.vendorExtensions.put("x-test-operation-id", org.openapitools.codegen.utils.StringUtils.camelize(op.operationId));
        }

        return objs;
    }

    public String escapeQuotationMark(String input) {
        return input.replace("'", "");
    }

    public String escapeUnsafeCharacters(String input) {
        return input.replace("*/", "*_/").replace("/*", "/_*");
    }

    public String escapeText(String input) {
        if (input == null) {
            return input;
        } else {
            return input.trim().length() == 0 ? input : super.escapeText(input).trim();
        }
    }

    public void escapeMediaType(List<CodegenOperation> operationList) {
        Iterator var2 = operationList.iterator();

        while(true) {
            CodegenOperation op;
            do {
                if (!var2.hasNext()) {
                    return;
                }

                op = (CodegenOperation)var2.next();
            } while(!op.hasProduces);

            List<Map<String, String>> c = op.produces;
            Iterator var5 = c.iterator();

            while(var5.hasNext()) {
                Map<String, String> mediaType = (Map)var5.next();
                if ("*/*".equals(mediaType.get("mediaType"))) {
                    mediaType.put("mediaType", "*_/_*");
                }
            }
        }
    }

    protected String extractSimpleName(String phpClassName) {
        if (phpClassName == null) {
            return null;
        } else {
            int lastBackslashIndex = phpClassName.lastIndexOf(92);
            return phpClassName.substring(lastBackslashIndex + 1);
        }
    }

    public void postProcessFile(File file, String fileType) {
        if (file != null) {
            String phpPostProcessFile = System.getenv("PHP_POST_PROCESS_FILE");
            if (!StringUtils.isEmpty(phpPostProcessFile)) {
                if ("php".equals(FilenameUtils.getExtension(file.toString()))) {
                    String command = phpPostProcessFile + " " + file;

                    try {
                        Process p = Runtime.getRuntime().exec(command);
                        p.waitFor();
                        int exitValue = p.exitValue();
                        if (exitValue != 0) {
                            this.LOGGER.error("Error running the command ({}). Exit value: {}", command, exitValue);
                        } else {
                            this.LOGGER.info("Successfully executed: {}", command);
                        }
                    } catch (IOException | InterruptedException var7) {
                        this.LOGGER.error("Error running the command ({}). Exception: {}", command, var7.getMessage());
                        Thread.currentThread().interrupt();
                    }
                }

            }
        }
    }

    public String getComposerPackageName() {
        String packageName = this.getGitUserId() + "/" + this.getGitRepoId();
        return !packageName.contentEquals("/") && !packageName.contentEquals("null/null") && Pattern.matches("^[a-z0-9]([_.-]?[a-z0-9]+)*/[a-z0-9](([_.]?|-{0,2})[a-z0-9]+)*$", packageName) ? packageName : "";
    }

    public boolean isDataTypeString(String dataType) {
        return "string".equals(dataType);
    }

    public GeneratorLanguage generatorLanguage() {
        return GeneratorLanguage.PHP;
    }
}
