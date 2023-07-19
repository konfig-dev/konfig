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

import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.parameters.RequestBody;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.codegen.CliOption;
import org.openapitools.codegen.CodegenConstants;
import org.openapitools.codegen.CodegenParameter;
import org.openapitools.codegen.CodegenType;
import org.openapitools.codegen.SupportingFile;
import org.openapitools.codegen.meta.features.*;
import org.openapitools.codegen.utils.CamelizeOption;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.EnumSet;
import java.util.List;

import static org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen.toCamelCase;

public class PhpClientCodegen extends AbstractPhpCodegen {
    @SuppressWarnings("hiding")
    private final Logger LOGGER = LoggerFactory.getLogger(PhpClientCodegen.class);

    public PhpClientCodegen() {
        super();

        modifyFeatureSet(features -> features
                .includeDocumentationFeatures(DocumentationFeature.Readme)
                .wireFormatFeatures(EnumSet.of(WireFormatFeature.JSON, WireFormatFeature.XML))
                .securityFeatures(EnumSet.noneOf(SecurityFeature.class))
                .excludeGlobalFeatures(
                        GlobalFeature.XMLStructureDefinitions,
                        GlobalFeature.Callbacks,
                        GlobalFeature.LinkObjects,
                        GlobalFeature.ParameterStyling
                )
                .excludeSchemaSupportFeatures(
                        SchemaSupportFeature.Polymorphism
                )
        );

        // clear import mapping (from default generator) as php does not use it
        // at the moment
        importMapping.clear();

        setInvokerPackage("OpenAPI\\Client");
        setApiPackage(getInvokerPackage() + "\\" + apiDirName);
        setModelPackage(getInvokerPackage() + "\\" + modelDirName);
        setPackageName("OpenAPIClient-php");
        supportsInheritance = true;
        setOutputDir("generated-code" + File.separator + "php");
        modelTestTemplateFiles.put("model_test.mustache", ".php");
        embeddedTemplateDir = templateDir = "php";

        // default HIDE_GENERATION_TIMESTAMP to true
        hideGenerationTimestamp = Boolean.TRUE;

        // provide primitives to mustache template
        List sortedLanguageSpecificPrimitives = new ArrayList(languageSpecificPrimitives);
        Collections.sort(sortedLanguageSpecificPrimitives);
        String primitives = "'" + StringUtils.join(sortedLanguageSpecificPrimitives, "', '") + "'";
        additionalProperties.put("primitives", primitives);

        cliOptions.add(new CliOption(CodegenConstants.HIDE_GENERATION_TIMESTAMP, CodegenConstants.ALLOW_UNICODE_IDENTIFIERS_DESC)
                .defaultValue(Boolean.TRUE.toString()));
    }

    @Override
    public CodegenType getTag() {
        return CodegenType.CLIENT;
    }

    @Override
    public String getName() {
        return "php";
    }

    @Override
    public String getHelp() {
        return "Generates a PHP client library.";
    }

    @Override
    public void setParameterExampleValue(CodegenParameter p) {
        // hacky workaround by using Python's implementation here
        PythonClientCodegen pythonClientCodegen = new PythonClientCodegen();
        pythonClientCodegen.objectFieldDelimiter = " => ";
        pythonClientCodegen.objectOpenChar = "[";
        pythonClientCodegen.objectCloseChar = "]";
        // got a NPE when I don't add this here. I'm scared I might be missing other things but it seems work
        pythonClientCodegen.setOpenAPI(this.openAPI);
        pythonClientCodegen.setParameterExampleValue(p, p.oasSchema);
    }

    @Override
    public void setParameterExampleValue(CodegenParameter codegenParameter, Parameter parameter) {
        // hacky workaround by using Python's implementation here
        PythonClientCodegen pythonClientCodegen = new PythonClientCodegen();
        pythonClientCodegen.objectFieldDelimiter = " => ";
        pythonClientCodegen.objectOpenChar = "[";
        pythonClientCodegen.objectCloseChar = "]";
        // got a NPE when I don't add this here. I'm scared I might be missing other things but it seems work
        pythonClientCodegen.setOpenAPI(this.openAPI);
        pythonClientCodegen.setParameterExampleValue(codegenParameter, parameter);
    }

    @Override
    public void setParameterExampleValue(CodegenParameter codegenParameter, RequestBody requestBody) {
        // hacky workaround by using Python's implementation here
        PythonClientCodegen pythonClientCodegen = new PythonClientCodegen();
        pythonClientCodegen.objectFieldDelimiter = " => ";
        pythonClientCodegen.objectOpenChar = "[";
        pythonClientCodegen.objectCloseChar = "]";
        // got a NPE when I don't add this here. I'm scared I might be missing other things but it seems work
        pythonClientCodegen.setOpenAPI(this.openAPI);
        pythonClientCodegen.setParameterExampleValue(codegenParameter, requestBody);
    }

    // Dylan: for SnapTrade this ensures "API Disclaimer" is turned into -> "ApiDisclaimer" which is then turned into
    // "apiDisclaimer" as a variable name in the top-level client.
    // Update: We also need to make sure we turn "InstallmentPlan" to "installmentPlan"
    @Override
    public String sanitizeTag(String tag) {
        // "API Disclaimer" -> "ApiDisclaimer"
        if (sanitizeName(tag).contains("_"))
            return toCamelCase(sanitizeName(tag), true);
        // "InstallmentPlan" -> "installmentPlan"
        return org.openapitools.codegen.utils.StringUtils.camelize(tag, CamelizeOption.LOWERCASE_FIRST_LETTER);
    }

    @Override
    public void processOpts() {
        super.processOpts();

        supportingFiles.add(new SupportingFile("ApiException.mustache", toSrcPath(invokerPackage, srcBasePath), "ApiException.php"));
        supportingFiles.add(new SupportingFile("CustomApi.mustache", toSrcPath(invokerPackage, srcBasePath), "CustomApi.php"));
        supportingFiles.add(new SupportingFile("Configuration.mustache", toSrcPath(invokerPackage, srcBasePath), "Configuration.php"));
        supportingFiles.add(new SupportingFile("Client.mustache", toSrcPath(invokerPackage, srcBasePath), "Client.php"));
        supportingFiles.add(new SupportingFile("ObjectSerializer.mustache", toSrcPath(invokerPackage, srcBasePath), "ObjectSerializer.php"));
        supportingFiles.add(new SupportingFile("ModelInterface.mustache", toSrcPath(modelPackage, srcBasePath), "ModelInterface.php"));
        supportingFiles.add(new SupportingFile("HeaderSelector.mustache", toSrcPath(invokerPackage, srcBasePath), "HeaderSelector.php"));
        supportingFiles.add(new SupportingFile("RequestOptions.mustache", toSrcPath(invokerPackage, srcBasePath), "RequestOptions.php"));
        supportingFiles.add(new SupportingFile("composer.mustache", "", "composer.json"));
        supportingFiles.add(new SupportingFile("launch.mustache", ".vscode", "launch.json"));
        supportingFiles.add(new SupportingFile("SimpleTest.mustache", "test", "SimpleTest.php"));
        supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));
        supportingFiles.add(new SupportingFile("phpunit.xml.mustache", "", "phpunit.xml.dist"));
        supportingFiles.add(new SupportingFile(".travis.yml", "", ".travis.yml"));
        supportingFiles.add(new SupportingFile(".php-cs-fixer.dist.php", "", ".php-cs-fixer.dist.php"));
        supportingFiles.add(new SupportingFile("git_push.sh.mustache", "", "git_push.sh"));
    }
}
