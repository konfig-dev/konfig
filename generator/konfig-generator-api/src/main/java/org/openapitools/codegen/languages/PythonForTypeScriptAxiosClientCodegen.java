/*
 * Copyright 2018 OpenAPI-Generator Contributors (https://openapi-generator.tech)
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

import com.github.curiousoddman.rgxgen.RgxGen;
import com.github.curiousoddman.rgxgen.config.RgxGenOption;
import com.github.curiousoddman.rgxgen.config.RgxGenProperties;
import com.google.common.base.CaseFormat;
import io.swagger.v3.core.util.Json;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.PathItem;
import io.swagger.v3.oas.models.Paths;
import io.swagger.v3.oas.models.media.*;
import io.swagger.v3.oas.models.parameters.Parameter;
import io.swagger.v3.oas.models.parameters.RequestBody;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.tags.Tag;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.codegen.*;
import org.openapitools.codegen.CodegenDiscriminator.MappedModel;
import org.openapitools.codegen.api.TemplatePathLocator;
import org.openapitools.codegen.api.TemplateProcessor;
import org.openapitools.codegen.api.TemplatingEngineAdapter;
import org.openapitools.codegen.ignore.CodegenIgnoreProcessor;
import org.openapitools.codegen.meta.GeneratorMetadata;
import org.openapitools.codegen.meta.Stability;
import org.openapitools.codegen.meta.features.*;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;
import org.openapitools.codegen.model.OperationMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.templating.CommonTemplateContentLocator;
import org.openapitools.codegen.templating.GeneratorTemplateContentLocator;
import org.openapitools.codegen.templating.HandlebarsEngineAdapter;
import org.openapitools.codegen.templating.TemplateManagerOptions;
import org.openapitools.codegen.utils.ModelUtils;
import org.openapitools.codegen.utils.ProcessUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Path;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static org.openapitools.codegen.utils.OnceLogger.once;
import static org.openapitools.codegen.utils.StringUtils.camelize;
import static org.openapitools.codegen.utils.StringUtils.underscore;

/**
 * This is just a super hacky way for me to override the "None" / "True" / "False" values from the PythonClientCodeGen implementation
 */
public class PythonForTypeScriptAxiosClientCodegen extends PythonClientCodegen {
    private final Logger LOGGER = LoggerFactory.getLogger(PythonForTypeScriptAxiosClientCodegen.class);

    public PythonForTypeScriptAxiosClientCodegen(OpenAPI openAPI) {
        super();
        this.openAPI = openAPI;
        booleanTrueLiteral = "true";
        booleanFalseLiteral = "false";
        nullLiteral = "null";
    }

    @Override
    public String binaryExample(String example) {
        return "fs.readFileSync(\"" + example + "\")";
    }

    @Override
    public String toParamName(String name) {
        return new TypeScriptAxiosClientCodegen().toParamName(name);
    }

    @Override
    public String toVarName(String name) {
        return new TypeScriptAxiosClientCodegen().toVarName(name);
    }
}