package org.openapitools.codegen.languages;

import com.google.common.base.CaseFormat;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.media.Schema;
import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.openapitools.codegen.*;
import org.openapitools.codegen.languages.features.BeanValidationFeatures;
import org.openapitools.codegen.languages.features.GzipFeatures;
import org.openapitools.codegen.languages.features.PerformBeanValidationFeatures;
import org.openapitools.codegen.meta.features.DocumentationFeature;
import org.openapitools.codegen.meta.features.GlobalFeature;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;
import org.openapitools.codegen.model.OperationMap;
import org.openapitools.codegen.model.OperationsMap;
import org.openapitools.codegen.templating.mustache.CaseFormatLambda;
import org.openapitools.codegen.utils.CamelizeOption;
import org.openapitools.codegen.utils.ProcessUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JavaClientCodegen extends AbstractJavaCodegen implements BeanValidationFeatures, PerformBeanValidationFeatures, GzipFeatures {
    static final String MEDIA_TYPE = "mediaType";
    private final Logger LOGGER = LoggerFactory.getLogger(JavaClientCodegen.class);
    public static final String USE_RX_JAVA2 = "useRxJava2";
    public static final String USE_RX_JAVA3 = "useRxJava3";
    public static final String DO_NOT_USE_RX = "doNotUseRx";
    public static final String USE_PLAY_WS = "usePlayWS";
    public static final String ASYNC_NATIVE = "asyncNative";
    public static final String CONFIG_KEY = "configKey";
    public static final String PARCELABLE_MODEL = "parcelableModel";
    public static final String USE_RUNTIME_EXCEPTION = "useRuntimeException";
    public static final String USE_REFLECTION_EQUALS_HASHCODE = "useReflectionEqualsHashCode";
    public static final String CASE_INSENSITIVE_RESPONSE_HEADERS = "caseInsensitiveResponseHeaders";
    public static final String MICROPROFILE_FRAMEWORK = "microprofileFramework";
    public static final String USE_ABSTRACTION_FOR_FILES = "useAbstractionForFiles";
    public static final String DYNAMIC_OPERATIONS = "dynamicOperations";
    public static final String SUPPORT_STREAMING = "supportStreaming";
    public static final String GRADLE_PROPERTIES = "gradleProperties";
    public static final String ERROR_OBJECT_TYPE = "errorObjectType";
    public static final String FEIGN = "feign";
    public static final String GOOGLE_API_CLIENT = "google-api-client";
    public static final String JERSEY1 = "jersey1";
    public static final String JERSEY2 = "jersey2";
    public static final String JERSEY3 = "jersey3";
    public static final String NATIVE = "native";
    public static final String OKHTTP_GSON = "okhttp-gson";
    public static final String RESTEASY = "resteasy";
    public static final String RESTTEMPLATE = "resttemplate";
    public static final String WEBCLIENT = "webclient";
    public static final String REST_ASSURED = "rest-assured";
    public static final String RETROFIT_2 = "retrofit2";
    public static final String VERTX = "vertx";
    public static final String MICROPROFILE = "microprofile";
    public static final String APACHE = "apache-httpclient";
    public static final String MICROPROFILE_REST_CLIENT_VERSION = "microprofileRestClientVersion";
    public static final String MICROPROFILE_REST_CLIENT_DEFAULT_VERSION = "2.0";
    public static final String MICROPROFILE_REST_CLIENT_DEFAULT_ROOT_PACKAGE = "javax";
    public static final String MICROPROFILE_DEFAULT = "default";
    public static final String MICROPROFILE_KUMULUZEE = "kumuluzee";
    public static final String SERIALIZATION_LIBRARY_GSON = "gson";
    public static final String SERIALIZATION_LIBRARY_JACKSON = "jackson";
    public static final String SERIALIZATION_LIBRARY_JSONB = "jsonb";
    protected String gradleWrapperPackage = "gradle.wrapper";
    protected boolean useRxJava = false;
    protected boolean useRxJava2 = false;
    protected boolean useRxJava3 = false;
    protected boolean doNotUseRx = true;
    protected boolean usePlayWS = false;
    protected String microprofileFramework = "default";
    protected String configKey = null;
    protected boolean asyncNative = false;
    protected boolean parcelableModel = false;
    protected boolean useBeanValidation = false;
    protected boolean performBeanValidation = false;
    protected boolean useGzipFeature = false;
    protected boolean useRuntimeException = false;
    protected boolean useReflectionEqualsHashCode = false;
    protected boolean caseInsensitiveResponseHeaders = false;
    protected boolean useAbstractionForFiles = false;
    protected boolean dynamicOperations = false;
    protected boolean supportStreaming = false;
    protected String gradleProperties;
    protected String errorObjectType;
    protected String authFolder;
    protected String serializationLibrary = null;
    protected boolean useOneOfDiscriminatorLookup = false;
    protected String rootJavaEEPackage;
    protected Map<String, MpRestClientVersion> mpRestClientVersions = new HashMap();
    protected boolean useSingleRequestParameter = false;

    public JavaClientCodegen() {
        this.modifyFeatureSet((features) -> {
            features.includeDocumentationFeatures(new DocumentationFeature[]{DocumentationFeature.Readme}).includeGlobalFeatures(new GlobalFeature[]{GlobalFeature.ParameterizedServer});
        });
        this.outputFolder = "generated-code" + File.separator + "java";
        this.embeddedTemplateDir = this.templateDir = "Java";
        this.invokerPackage = "org.openapitools.client";
        this.artifactId = "openapi-java-client";
        this.apiPackage = "org.openapitools.client.api";
        this.modelPackage = "org.openapitools.client.model";
        this.rootJavaEEPackage = "javax";
        this.updateOption("invokerPackage", this.getInvokerPackage());
        this.updateOption("artifactId", this.getArtifactId());
        this.updateOption("apiPackage", this.apiPackage);
        this.updateOption("modelPackage", this.modelPackage);
        this.modelTestTemplateFiles.put("model_test.mustache", ".java");
        this.cliOptions.add(CliOption.newBoolean("useRxJava2", "Whether to use the RxJava2 adapter with the retrofit2 library. IMPORTANT: This option has been deprecated."));
        this.cliOptions.add(CliOption.newBoolean("useRxJava3", "Whether to use the RxJava3 adapter with the retrofit2 library. IMPORTANT: This option has been deprecated."));
        this.cliOptions.add(CliOption.newBoolean("parcelableModel", "Whether to generate models for Android that implement Parcelable with the okhttp-gson library."));
        this.cliOptions.add(CliOption.newBoolean("usePlayWS", "Use Play! Async HTTP client (Play WS API)"));
        this.cliOptions.add(CliOption.newBoolean("useBeanValidation", "Use BeanValidation API annotations"));
        this.cliOptions.add(CliOption.newBoolean("performBeanValidation", "Perform BeanValidation"));
        this.cliOptions.add(CliOption.newBoolean("useGzipFeature", "Send gzip-encoded requests"));
        this.cliOptions.add(CliOption.newBoolean("useRuntimeException", "Use RuntimeException instead of Exception"));
        this.cliOptions.add(CliOption.newBoolean("asyncNative", "If true, async handlers will be used, instead of the sync version"));
        this.cliOptions.add(CliOption.newBoolean("useReflectionEqualsHashCode", "Use org.apache.commons.lang3.builder for equals and hashCode in the models. WARNING: This will fail under a security manager, unless the appropriate permissions are set up correctly and also there's potential performance impact."));
        this.cliOptions.add(CliOption.newBoolean("caseInsensitiveResponseHeaders", "Make API response's headers case-insensitive. Available on okhttp-gson, jersey2 libraries"));
        this.cliOptions.add(CliOption.newString("microprofileFramework", "Framework for microprofile. Possible values \"kumuluzee\""));
        this.cliOptions.add(CliOption.newBoolean("useAbstractionForFiles", "Use alternative types instead of java.io.File to allow passing bytes without a file on disk. Available on resttemplate, webclient, libraries"));
        this.cliOptions.add(CliOption.newBoolean("dynamicOperations", "Generate operations dynamically at runtime from an OAS", this.dynamicOperations));
        this.cliOptions.add(CliOption.newBoolean("supportStreaming", "Support streaming endpoint (beta)", this.supportStreaming));
        this.cliOptions.add(CliOption.newString("gradleProperties", "Append additional Gradle properties to the gradle.properties file"));
        this.cliOptions.add(CliOption.newString("errorObjectType", "Error Object type. (This option is for okhttp-gson-next-gen only)"));
        this.cliOptions.add(CliOption.newString("configKey", "Config key in @RegisterRestClient. Default to none. Only `microprofile` supports this option."));
        this.cliOptions.add(CliOption.newBoolean("useOneOfDiscriminatorLookup", "Use the discriminator's mapping in oneOf to speed up the model lookup. IMPORTANT: Validation (e.g. one and only one match in oneOf's schemas) will be skipped. Only jersey2, jersey3, native, okhttp-gson support this option."));
        this.cliOptions.add(CliOption.newString("microprofileRestClientVersion", "Version of MicroProfile Rest Client API."));
        this.cliOptions.add(CliOption.newBoolean("useSingleRequestParameter", "Setting this property to true will generate functions with a single argument containing all API endpoint parameters instead of one argument per parameter. ONLY jersey2, jersey3, okhttp-gson support this option."));
        this.supportedLibraries.put("jersey1", "HTTP client: Jersey client 1.19.x. JSON processing: Jackson 2.9.x. Enable gzip request encoding using '-DuseGzipFeature=true'. IMPORTANT NOTE: jersey 1.x is no longer actively maintained so please upgrade to 'jersey3' or other HTTP libraries instead.");
        this.supportedLibraries.put("jersey2", "HTTP client: Jersey client 2.25.1. JSON processing: Jackson 2.9.x");
        this.supportedLibraries.put("jersey3", "HTTP client: Jersey client 3.x. JSON processing: Jackson 2.x");
        this.supportedLibraries.put("feign", "HTTP client: OpenFeign 10.x. JSON processing: Jackson 2.9.x.");
        this.supportedLibraries.put("okhttp-gson", "[DEFAULT] HTTP client: OkHttp 3.x. JSON processing: Gson 2.8.x. Enable Parcelable models on Android using '-DparcelableModel=true'. Enable gzip request encoding using '-DuseGzipFeature=true'.");
        this.supportedLibraries.put("retrofit2", "HTTP client: OkHttp 3.x. JSON processing: Gson 2.x (Retrofit 2.3.0). Enable the RxJava adapter using '-DuseRxJava[2/3]=true'. (RxJava 1.x or 2.x or 3.x)");
        this.supportedLibraries.put("resttemplate", "HTTP client: Spring RestTemplate 4.x. JSON processing: Jackson 2.9.x");
        this.supportedLibraries.put("webclient", "HTTP client: Spring WebClient 5.x. JSON processing: Jackson 2.9.x");
        this.supportedLibraries.put("resteasy", "HTTP client: Resteasy client 3.x. JSON processing: Jackson 2.9.x");
        this.supportedLibraries.put("vertx", "HTTP client: VertX client 3.x. JSON processing: Jackson 2.9.x");
        this.supportedLibraries.put("google-api-client", "HTTP client: Google API client 1.x. JSON processing: Jackson 2.9.x");
        this.supportedLibraries.put("rest-assured", "HTTP client: rest-assured : 4.x. JSON processing: Gson 2.x or Jackson 2.10.x. Only for Java 8");
        this.supportedLibraries.put("native", "HTTP client: Java native HttpClient. JSON processing: Jackson 2.9.x. Only for Java11+");
        this.supportedLibraries.put("microprofile", "HTTP client: Microprofile client 1.x. JSON processing: JSON-B");
        this.supportedLibraries.put("apache-httpclient", "HTTP client: Apache httpclient 4.x");
        CliOption libraryOption = new CliOption("library", "library template (sub-template) to use");
        libraryOption.setEnum(this.supportedLibraries);
        libraryOption.setDefault("okhttp-gson");
        this.cliOptions.add(libraryOption);
        this.setLibrary("okhttp-gson");
        CliOption serializationLibrary = new CliOption("serializationLibrary", "Serialization library, default depends on value of the option library");
        Map<String, String> serializationOptions = new HashMap();
        serializationOptions.put("gson", "Use Gson as serialization library");
        serializationOptions.put("jackson", "Use Jackson as serialization library");
        serializationOptions.put("jsonb", "Use JSON-B as serialization library");
        serializationLibrary.setEnum(serializationOptions);
        this.cliOptions.add(serializationLibrary);
        this.setLegacyDiscriminatorBehavior(false);
        this.initMpRestClientVersionToRootPackage();
    }

    private void initMpRestClientVersionToRootPackage() {
        this.mpRestClientVersions.put("1.4.1", new MpRestClientVersion("javax", "pom.mustache"));
        this.mpRestClientVersions.put("2.0", new MpRestClientVersion("javax", "pom.mustache"));
        this.mpRestClientVersions.put("3.0", new MpRestClientVersion("jakarta", "pom_3.0.mustache"));
    }

    public CodegenType getTag() {
        return CodegenType.CLIENT;
    }

    public String getName() {
        return "java";
    }

    public String getHelp() {
        return "Generates a Java client library (HTTP lib: Jersey (1.x, 2.x), Retrofit (2.x), OpenFeign (10.x) and more.";
    }

    public void addOperationToGroup(String tag, String resourcePath, Operation operation, CodegenOperation co, Map<String, List<CodegenOperation>> operations) {
        Map<DefaultGenerator.PathKey, List<CodegenOperation>> operationsWithPathKey = new HashMap<>();
        for (Map.Entry<String, List<CodegenOperation>> entry : operations.entrySet()) {
            DefaultGenerator.PathKey pathKey = new DefaultGenerator.PathKey(entry.getKey(), entry.getKey());
            operationsWithPathKey.put(pathKey, entry.getValue());
        }
        super.addOperationToGroup(tag, tag, resourcePath, operation, co, operationsWithPathKey);
        if ("microprofile".equals(this.getLibrary())) {
            co.subresourceOperation = !co.path.isEmpty();
        }

    }

    public void processOpts() {
        if (!"webclient".equals(this.getLibrary()) && !"native".equals(this.getLibrary())) {
            if ("microprofile".equals(this.getLibrary())) {
                this.dateLibrary = "legacy";
            }
        } else {
            this.dateLibrary = "java8";
        }

        super.processOpts();
        if (this.additionalProperties.containsKey("useOneOfDiscriminatorLookup")) {
            this.setUseOneOfDiscriminatorLookup(this.convertPropertyToBooleanAndWriteBack("useOneOfDiscriminatorLookup"));
        } else {
            this.additionalProperties.put("useOneOfDiscriminatorLookup", this.useOneOfDiscriminatorLookup);
        }

        if (this.additionalProperties.containsKey("useRxJava2") && this.additionalProperties.containsKey("useRxJava3")) {
            this.LOGGER.warn("You specified all RxJava versions 2 and 3 but they are mutually exclusive. Defaulting to v3.");
            this.setUseRxJava3(Boolean.parseBoolean(this.additionalProperties.get("useRxJava3").toString()));
        } else if (this.additionalProperties.containsKey("useRxJava2") && this.additionalProperties.containsKey("useRxJava3")) {
            this.LOGGER.warn("You specified both RxJava versions 2 and 3 but they are mutually exclusive. Defaulting to v3.");
            this.setUseRxJava3(Boolean.parseBoolean(this.additionalProperties.get("useRxJava3").toString()));
        } else {
            if (this.additionalProperties.containsKey("useRxJava2")) {
                this.setUseRxJava2(Boolean.parseBoolean(this.additionalProperties.get("useRxJava2").toString()));
            }

            if (this.additionalProperties.containsKey("useRxJava3")) {
                this.setUseRxJava3(Boolean.parseBoolean(this.additionalProperties.get("useRxJava3").toString()));
            }
        }

        if (this.additionalProperties.containsKey("useSingleRequestParameter")) {
            this.setUseSingleRequestParameter(this.convertPropertyToBoolean("useSingleRequestParameter"));
        }

        this.writePropertyBack("useSingleRequestParameter", this.getUseSingleRequestParameter());
        if (!this.useRxJava && !this.useRxJava2 && !this.useRxJava3) {
            this.additionalProperties.put("doNotUseRx", true);
        }

        if (this.additionalProperties.containsKey("usePlayWS")) {
            this.setUsePlayWS(Boolean.parseBoolean(this.additionalProperties.get("usePlayWS").toString()));
        }

        this.additionalProperties.put("usePlayWS", this.usePlayWS);
        if (this.additionalProperties.containsKey("microprofileFramework")) {
            if (!"kumuluzee".equals(this.microprofileFramework)) {
                throw new RuntimeException("Invalid microprofileFramework '" + this.microprofileFramework + "'. Must be 'kumuluzee' or none.");
            }

            this.setMicroprofileFramework(this.additionalProperties.get("microprofileFramework").toString());
        }

        this.additionalProperties.put("microprofileFramework", this.microprofileFramework);
        String invokerFolder;
        if (!this.additionalProperties.containsKey("microprofileRestClientVersion")) {
            this.additionalProperties.put("microprofileRestClientVersion", "2.0");
        } else {
            invokerFolder = (String)this.additionalProperties.get("microprofileRestClientVersion");
            if (!this.mpRestClientVersions.containsKey(invokerFolder)) {
                throw new IllegalArgumentException(String.format(Locale.ROOT, "Version %s of MicroProfile Rest Client is not supported or incorrect. Supported versions are %s", invokerFolder, String.join(", ", this.mpRestClientVersions.keySet())));
            }
        }

        if (!this.additionalProperties.containsKey("rootJavaEEPackage")) {
            invokerFolder = (String)this.additionalProperties.get("microprofileRestClientVersion");
            if (this.mpRestClientVersions.containsKey(invokerFolder)) {
                this.rootJavaEEPackage = ((MpRestClientVersion)this.mpRestClientVersions.get(invokerFolder)).rootPackage;
            }

            this.additionalProperties.put("rootJavaEEPackage", this.rootJavaEEPackage);
        }

        if (this.additionalProperties.containsKey("configKey")) {
            this.setConfigKey(this.additionalProperties.get("configKey").toString());
        }

        if (this.additionalProperties.containsKey("asyncNative")) {
            this.setAsyncNative(this.convertPropertyToBooleanAndWriteBack("asyncNative"));
        }

        if (this.additionalProperties.containsKey("parcelableModel")) {
            this.setParcelableModel(Boolean.parseBoolean(this.additionalProperties.get("parcelableModel").toString()));
        }

        this.additionalProperties.put("parcelableModel", this.parcelableModel);
        if (this.additionalProperties.containsKey("useBeanValidation")) {
            this.setUseBeanValidation(this.convertPropertyToBooleanAndWriteBack("useBeanValidation"));
        }

        if (this.additionalProperties.containsKey("performBeanValidation")) {
            this.setPerformBeanValidation(this.convertPropertyToBooleanAndWriteBack("performBeanValidation"));
        }

        if (this.additionalProperties.containsKey("useGzipFeature")) {
            this.setUseGzipFeature(this.convertPropertyToBooleanAndWriteBack("useGzipFeature"));
        }

        if (this.additionalProperties.containsKey("useRuntimeException")) {
            this.setUseRuntimeException(this.convertPropertyToBooleanAndWriteBack("useRuntimeException"));
        }

        if (this.additionalProperties.containsKey("useReflectionEqualsHashCode")) {
            this.setUseReflectionEqualsHashCode(this.convertPropertyToBooleanAndWriteBack("useReflectionEqualsHashCode"));
        }

        if (this.additionalProperties.containsKey("caseInsensitiveResponseHeaders")) {
            this.setUseReflectionEqualsHashCode(this.convertPropertyToBooleanAndWriteBack("caseInsensitiveResponseHeaders"));
        }

        if (this.additionalProperties.containsKey("useAbstractionForFiles")) {
            this.setUseAbstractionForFiles(this.convertPropertyToBooleanAndWriteBack("useAbstractionForFiles"));
        }

        if (this.additionalProperties.containsKey("dynamicOperations")) {
            this.setDynamicOperations(Boolean.parseBoolean(this.additionalProperties.get("dynamicOperations").toString()));
        }

        this.additionalProperties.put("dynamicOperations", this.dynamicOperations);
        if (this.additionalProperties.containsKey("supportStreaming")) {
            this.setSupportStreaming(Boolean.parseBoolean(this.additionalProperties.get("supportStreaming").toString()));
        }

        this.additionalProperties.put("supportStreaming", this.supportStreaming);
        if (this.additionalProperties.containsKey("gradleProperties")) {
            this.setGradleProperties(this.additionalProperties.get("gradleProperties").toString());
        }

        this.additionalProperties.put("gradleProperties", this.gradleProperties);
        if (this.additionalProperties.containsKey("errorObjectType")) {
            this.setErrorObjectType(this.additionalProperties.get("errorObjectType").toString());
        }

        this.additionalProperties.put("errorObjectType", this.errorObjectType);
        invokerFolder = (this.sourceFolder + '/' + this.invokerPackage).replace(".", "/");
        String apiFolder = (this.sourceFolder + '/' + this.apiPackage).replace(".", "/");
        String modelsFolder = (this.sourceFolder + File.separator + this.modelPackage().replace('.', File.separatorChar)).replace('/', File.separatorChar);
        this.authFolder = (this.sourceFolder + '/' + this.invokerPackage + ".auth").replace(".", "/");
        this.supportingFiles.add((new SupportingFile("pom.mustache", "", "pom.xml")).doNotOverwrite());
        this.supportingFiles.add((new SupportingFile("README.mustache", "", "README.md")).doNotOverwrite());
        this.supportingFiles.add((new SupportingFile("build.gradle.mustache", "", "build.gradle")).doNotOverwrite());
        this.supportingFiles.add((new SupportingFile("build.sbt.mustache", "", "build.sbt")).doNotOverwrite());
        this.supportingFiles.add((new SupportingFile("settings.gradle.mustache", "", "settings.gradle")).doNotOverwrite());
        this.supportingFiles.add((new SupportingFile("gradle.properties.mustache", "", "gradle.properties")).doNotOverwrite());
        this.supportingFiles.add((new SupportingFile("manifest.mustache", this.projectFolder, "AndroidManifest.xml")).doNotOverwrite());
        this.supportingFiles.add(new SupportingFile("travis.mustache", "", ".travis.yml"));
        this.supportingFiles.add(new SupportingFile("ApiClient.mustache", invokerFolder, "ApiClient.java"));
        this.supportingFiles.add(new SupportingFile("ServerConfiguration.mustache", invokerFolder, "ServerConfiguration.java"));
        this.supportingFiles.add(new SupportingFile("ServerVariable.mustache", invokerFolder, "ServerVariable.java"));
        if (this.dynamicOperations) {
            this.supportingFiles.add(new SupportingFile("openapi.mustache", this.projectFolder + "/resources/openapi", "openapi.yaml"));
            this.supportingFiles.add(new SupportingFile("apiOperation.mustache", invokerFolder, "ApiOperation.java"));
        } else {
            this.supportingFiles.add(new SupportingFile("openapi.mustache", "api", "openapi.yaml"));
        }

        if (this.additionalProperties.containsKey("jsr310") && (this.isLibrary("webclient") || this.isLibrary("vertx") || this.isLibrary("resttemplate") || this.isLibrary("resteasy") || this.isLibrary("microprofile") || this.isLibrary("jersey1") || this.isLibrary("jersey2") || this.isLibrary("jersey3") || this.isLibrary("apache-httpclient"))) {
            this.supportingFiles.add(new SupportingFile("JavaTimeFormatter.mustache", invokerFolder, "JavaTimeFormatter.java"));
        }

        if (!"resttemplate".equals(this.getLibrary()) && !this.isLibrary("rest-assured") && !this.isLibrary("native") && !this.isLibrary("microprofile")) {
            this.supportingFiles.add(new SupportingFile("StringUtil.mustache", invokerFolder, "StringUtil.java"));
        }

        if (!this.isLibrary("google-api-client") && !this.isLibrary("rest-assured") && !this.isLibrary("native") && !this.isLibrary("microprofile")) {
            this.supportingFiles.add(new SupportingFile("auth/HttpBasicAuth.mustache", this.authFolder, "HttpBasicAuth.java"));
            this.supportingFiles.add(new SupportingFile("auth/HttpBearerAuth.mustache", this.authFolder, "HttpBearerAuth.java"));
            this.supportingFiles.add(new SupportingFile("auth/ApiKeyAuth.mustache", this.authFolder, "ApiKeyAuth.java"));
        }

        this.supportingFiles.add(new SupportingFile("gradlew.mustache", "", "gradlew"));
        this.supportingFiles.add(new SupportingFile("gradlew.bat.mustache", "", "gradlew.bat"));
        this.supportingFiles.add(new SupportingFile("gradle-wrapper.properties.mustache", this.gradleWrapperPackage.replace(".", File.separator), "gradle-wrapper.properties"));
        this.supportingFiles.add(new SupportingFile("gradle-wrapper.jar", this.gradleWrapperPackage.replace(".", File.separator), "gradle-wrapper.jar"));
        this.supportingFiles.add(new SupportingFile("git_push.sh.mustache", "", "git_push.sh"));
        this.supportingFiles.add(new SupportingFile("gitignore.mustache", "", ".gitignore"));
        if (this.performBeanValidation) {
            this.supportingFiles.add(new SupportingFile("BeanValidationException.mustache", invokerFolder, "BeanValidationException.java"));
        }

        if (this.additionalProperties.containsKey("serializationLibrary")) {
            this.setSerializationLibrary(this.additionalProperties.get("serializationLibrary").toString());
        }

        if ("feign".equals(this.getLibrary())) {
            this.modelDocTemplateFiles.remove("model_doc.mustache");
            this.apiDocTemplateFiles.remove("api_doc.mustache");
            this.supportingFiles.add(new SupportingFile("model/ApiResponse.mustache", modelsFolder, "ApiResponse.java"));
            this.supportingFiles.add(new SupportingFile("ApiResponseDecoder.mustache", invokerFolder, "ApiResponseDecoder.java"));
            this.reservedWords.remove("file");
        }

        if (!"feign".equals(this.getLibrary()) && !"resttemplate".equals(this.getLibrary()) && !"retrofit2".equals(this.getLibrary()) && !"google-api-client".equals(this.getLibrary()) && !"rest-assured".equals(this.getLibrary()) && !"webclient".equals(this.getLibrary()) && !"microprofile".equals(this.getLibrary())) {
            this.supportingFiles.add(new SupportingFile("apiException.mustache", invokerFolder, "ApiException.java"));
            this.supportingFiles.add(new SupportingFile("Configuration.mustache", invokerFolder, "Configuration.java"));
            this.supportingFiles.add(new SupportingFile("Pair.mustache", invokerFolder, "Pair.java"));
        }

        if (!"feign".equals(this.getLibrary()) && !"resttemplate".equals(this.getLibrary()) && !"retrofit2".equals(this.getLibrary()) && !"google-api-client".equals(this.getLibrary()) && !"rest-assured".equals(this.getLibrary()) && !"native".equals(this.getLibrary()) && !"microprofile".equals(this.getLibrary())) {
            this.supportingFiles.add(new SupportingFile("auth/Authentication.mustache", this.authFolder, "Authentication.java"));
        }

        String apiExceptionFolder;
        if ("feign".equals(this.getLibrary())) {
            this.forceSerializationLibrary("jackson");
            this.supportingFiles.add(new SupportingFile("ParamExpander.mustache", invokerFolder, "ParamExpander.java"));
            this.supportingFiles.add(new SupportingFile("EncodingUtils.mustache", invokerFolder, "EncodingUtils.java"));
            this.supportingFiles.add(new SupportingFile("auth/DefaultApi20Impl.mustache", this.authFolder, "DefaultApi20Impl.java"));
        } else if (!"okhttp-gson".equals(this.getLibrary()) && !StringUtils.isEmpty(this.getLibrary())) {
            if ("retrofit2".equals(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("auth/OAuthOkHttpClient.mustache", this.authFolder, "OAuthOkHttpClient.java"));
                this.supportingFiles.add(new SupportingFile("CollectionFormats.mustache", invokerFolder, "CollectionFormats.java"));
                this.forceSerializationLibrary("gson");
                if ("retrofit2".equals(this.getLibrary()) && !this.usePlayWS) {
                    this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
                }
            } else if ("jersey2".equals(this.getLibrary())) {
                this.additionalProperties.put("jersey2", true);
                this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
                this.supportingFiles.add(new SupportingFile("ApiResponse.mustache", invokerFolder, "ApiResponse.java"));
                if (ProcessUtils.hasHttpSignatureMethods(this.openAPI)) {
                    this.supportingFiles.add(new SupportingFile("auth/HttpSignatureAuth.mustache", this.authFolder, "HttpSignatureAuth.java"));
                }

                this.supportingFiles.add(new SupportingFile("AbstractOpenApiSchema.mustache", modelsFolder, "AbstractOpenApiSchema.java"));
                this.forceSerializationLibrary("jackson");
                this.supportsAdditionalPropertiesWithComposedSchema = true;
            } else if ("jersey3".equals(this.getLibrary())) {
                this.additionalProperties.put("jersey3", true);
                this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
                this.supportingFiles.add(new SupportingFile("ApiResponse.mustache", invokerFolder, "ApiResponse.java"));
                if (ProcessUtils.hasHttpSignatureMethods(this.openAPI)) {
                    this.supportingFiles.add(new SupportingFile("auth/HttpSignatureAuth.mustache", this.authFolder, "HttpSignatureAuth.java"));
                }

                this.supportingFiles.add(new SupportingFile("AbstractOpenApiSchema.mustache", modelsFolder, "AbstractOpenApiSchema.java"));
                this.forceSerializationLibrary("jackson");
                this.supportsAdditionalPropertiesWithComposedSchema = true;
            } else if ("native".equals(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("ApiResponse.mustache", invokerFolder, "ApiResponse.java"));
                this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
                this.supportingFiles.add(new SupportingFile("AbstractOpenApiSchema.mustache", modelsFolder, "AbstractOpenApiSchema.java"));
                this.forceSerializationLibrary("jackson");
            } else if ("resteasy".equals(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
                this.forceSerializationLibrary("jackson");
            } else if ("jersey1".equals(this.getLibrary())) {
                this.forceSerializationLibrary("jackson");
            } else if ("resttemplate".equals(this.getLibrary())) {
                this.forceSerializationLibrary("jackson");
                this.supportingFiles.add(new SupportingFile("auth/Authentication.mustache", this.authFolder, "Authentication.java"));
            } else if ("webclient".equals(this.getLibrary())) {
                this.forceSerializationLibrary("jackson");
            } else if ("vertx".equals(this.getLibrary())) {
                this.typeMapping.put("file", "AsyncFile");
                this.importMapping.put("AsyncFile", "io.vertx.core.file.AsyncFile");
                this.forceSerializationLibrary("jackson");
                this.apiTemplateFiles.put("apiImpl.mustache", "Impl.java");
                this.apiTemplateFiles.put("rxApiImpl.mustache", ".java");
                this.supportingFiles.remove(new SupportingFile("manifest.mustache", this.projectFolder, "AndroidManifest.xml"));
            } else if ("google-api-client".equals(this.getLibrary())) {
                this.forceSerializationLibrary("jackson");
            } else if ("rest-assured".equals(this.getLibrary())) {
                if (this.getSerializationLibrary() == null) {
                    this.LOGGER.info("No serializationLibrary configured, using '{}' as fallback", "gson");
                    this.setSerializationLibrary("gson");
                }

                if ("jackson".equals(this.getSerializationLibrary())) {
                    this.supportingFiles.add(new SupportingFile("JacksonObjectMapper.mustache", invokerFolder, "JacksonObjectMapper.java"));
                } else if ("gson".equals(this.getSerializationLibrary())) {
                    this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
                    this.supportingFiles.add(new SupportingFile("GsonObjectMapper.mustache", invokerFolder, "GsonObjectMapper.java"));
                }

                this.supportingFiles.add(new SupportingFile("Oper.mustache", apiFolder, "Oper.java"));
                this.additionalProperties.put("convert", new CaseFormatLambda(CaseFormat.LOWER_CAMEL, CaseFormat.UPPER_UNDERSCORE));
                this.apiTemplateFiles.put("api.mustache", ".java");
                this.supportingFiles.add(new SupportingFile("ResponseSpecBuilders.mustache", invokerFolder, "ResponseSpecBuilders.java"));
            } else if ("microprofile".equals(this.getLibrary())) {
                this.supportingFiles.clear();
                apiExceptionFolder = (this.sourceFolder + File.separator + this.apiPackage().replace('.', File.separatorChar)).replace('/', File.separatorChar);
                String mpRestClientVersion = (String)this.additionalProperties.get("microprofileRestClientVersion");
                String pomTemplate = ((MpRestClientVersion)this.mpRestClientVersions.get(mpRestClientVersion)).pomTemplate;
                this.supportingFiles.add(new SupportingFile(pomTemplate, "", "pom.xml"));
                this.supportingFiles.add(new SupportingFile("README.mustache", "", "README.md"));
                this.supportingFiles.add(new SupportingFile("api_exception.mustache", apiExceptionFolder, "ApiException.java"));
                this.supportingFiles.add(new SupportingFile("api_exception_mapper.mustache", apiExceptionFolder, "ApiExceptionMapper.java"));
                this.serializationLibrary = "none";
                if (this.microprofileFramework.equals("kumuluzee")) {
                    this.supportingFiles.add(new SupportingFile("kumuluzee.pom.mustache", "", "pom.xml"));
                    this.supportingFiles.add(new SupportingFile("kumuluzee.config.yaml.mustache", "src/main/resources", "config.yaml"));
                    this.supportingFiles.add(new SupportingFile("kumuluzee.beans.xml.mustache", "src/main/resources/META-INF", "beans.xml"));
                }

                if ("3.0".equals(mpRestClientVersion)) {
                    this.additionalProperties.put("microprofile3", true);
                }
            } else if ("apache-httpclient".equals(this.getLibrary())) {
                this.forceSerializationLibrary("jackson");
            } else {
                this.LOGGER.error("Unknown library option (-l/--library): {}", this.getLibrary());
            }
        } else {
            this.supportingFiles.add(new SupportingFile("ApiCallback.mustache", invokerFolder, "ApiCallback.java"));
            this.supportingFiles.add(new SupportingFile("ApiResponse.mustache", invokerFolder, "ApiResponse.java"));
            this.supportingFiles.add(new SupportingFile("JSON.mustache", invokerFolder, "JSON.java"));
            this.supportingFiles.add(new SupportingFile("ProgressRequestBody.mustache", invokerFolder, "ProgressRequestBody.java"));
            this.supportingFiles.add(new SupportingFile("ProgressResponseBody.mustache", invokerFolder, "ProgressResponseBody.java"));
            this.supportingFiles.add(new SupportingFile("GzipRequestInterceptor.mustache", invokerFolder, "GzipRequestInterceptor.java"));
            if ("okhttp-gson".equals(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("AbstractOpenApiSchema.mustache", modelsFolder, "AbstractOpenApiSchema.java"));
            }

            this.forceSerializationLibrary("gson");
            this.supportsAdditionalPropertiesWithComposedSchema = true;
        }

        if (this.usePlayWS) {
            Iterator<SupportingFile> iter = this.supportingFiles.iterator();

            while(iter.hasNext()) {
                SupportingFile sf = (SupportingFile)iter.next();
                if (sf.getTemplateFile().startsWith("auth/")) {
                    iter.remove();
                }
            }

            this.apiTemplateFiles.remove("api.mustache");
            this.apiTemplateFiles.put("play26/api.mustache", ".java");
            this.supportingFiles.add(new SupportingFile("play26/ApiClient.mustache", invokerFolder, "ApiClient.java"));
            this.supportingFiles.add(new SupportingFile("play26/Play26CallFactory.mustache", invokerFolder, "Play26CallFactory.java"));
            this.supportingFiles.add(new SupportingFile("play26/Play26CallAdapterFactory.mustache", invokerFolder, "Play26CallAdapterFactory.java"));
            this.supportingFiles.add(new SupportingFile("play-common/auth/ApiKeyAuth.mustache", this.authFolder, "ApiKeyAuth.java"));
            this.supportingFiles.add(new SupportingFile("auth/Authentication.mustache", this.authFolder, "Authentication.java"));
            this.supportingFiles.add(new SupportingFile("Pair.mustache", invokerFolder, "Pair.java"));
            this.forceSerializationLibrary("jackson");
        }

        if (this.getSerializationLibrary() == null) {
            this.LOGGER.info("No serializationLibrary configured, using '{}' as fallback", "gson");
            this.setSerializationLibrary("gson");
        }

        switch (this.getSerializationLibrary()) {
            case "jackson":
                this.additionalProperties.put("jackson", "true");
                this.additionalProperties.remove("gson");
                this.additionalProperties.remove("jsonb");
                this.supportingFiles.add(new SupportingFile("RFC3339DateFormat.mustache", invokerFolder, "RFC3339DateFormat.java"));
                break;
            case "gson":
                this.additionalProperties.put("gson", "true");
                this.additionalProperties.remove("jackson");
                this.additionalProperties.remove("jsonb");
                break;
            case "jsonb":
                this.additionalProperties.put("jsonb", "true");
                this.additionalProperties.remove("jackson");
                this.additionalProperties.remove("gson");
                break;
            default:
                this.additionalProperties.remove("jackson");
                this.additionalProperties.remove("gson");
                this.additionalProperties.remove("jsonb");
        }

        if (ProcessUtils.hasOAuthMethods(this.openAPI)) {
            if ("okhttp-gson".equals(this.getLibrary()) || StringUtils.isEmpty(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("auth/OAuthOkHttpClient.mustache", this.authFolder, "OAuthOkHttpClient.java"));
                this.supportingFiles.add(new SupportingFile("auth/RetryingOAuth.mustache", this.authFolder, "RetryingOAuth.java"));
            }

            if (!"google-api-client".equals(this.getLibrary()) && !"rest-assured".equals(this.getLibrary()) && !this.usePlayWS && !"native".equals(this.getLibrary()) && !"microprofile".equals(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("auth/OAuth.mustache", this.authFolder, "OAuth.java"));
                this.supportingFiles.add(new SupportingFile("auth/OAuthFlow.mustache", this.authFolder, "OAuthFlow.java"));
            }

            if ("feign".equals(this.getLibrary())) {
                this.supportingFiles.add(new SupportingFile("auth/OauthPasswordGrant.mustache", this.authFolder, "OauthPasswordGrant.java"));
                this.supportingFiles.add(new SupportingFile("auth/OauthClientCredentialsGrant.mustache", this.authFolder, "OauthClientCredentialsGrant.java"));
                this.supportingFiles.add(new SupportingFile("auth/ApiErrorDecoder.mustache", this.authFolder, "ApiErrorDecoder.java"));
            }
        }

    }

    public OperationsMap postProcessOperationsWithModels(OperationsMap objs, List<ModelMap> allModels) {
        super.postProcessOperationsWithModels(objs, allModels);
        OperationMap operations;
        List operationList;
        Iterator var5;
        CodegenOperation operation;
        if (this.useSingleRequestParameter && ("jersey2".equals(this.getLibrary()) || "jersey3".equals(this.getLibrary()) || "okhttp-gson".equals(this.getLibrary()))) {
            operations = objs.getOperations();
            if (operations != null) {
                operationList = operations.getOperation();
                var5 = operationList.iterator();

                while(var5.hasNext()) {
                    operation = (CodegenOperation)var5.next();
                    if (!operation.vendorExtensions.containsKey("x-group-parameters")) {
                        operation.vendorExtensions.put("x-group-parameters", true);
                    }
                }
            }
        }

        if ("retrofit2".equals(this.getLibrary())) {
            operations = objs.getOperations();
            if (operations != null) {
                operationList = operations.getOperation();
                var5 = operationList.iterator();

                while(var5.hasNext()) {
                    operation = (CodegenOperation)var5.next();
                    if (operation.hasConsumes == Boolean.TRUE) {
                        if (isMultipartType(operation.consumes)) {
                            operation.isMultipart = Boolean.TRUE;
                        } else {
                            operation.prioritizedContentTypes = prioritizeContentTypes(operation.consumes);
                        }
                    }

                    if (StringUtils.isNotEmpty(operation.path) && operation.path.startsWith("/")) {
                        operation.path = operation.path.substring(1);
                    }

                    if (operation.allParams != null) {
                        Collections.sort(operation.allParams, new Comparator<CodegenParameter>() {
                            public int compare(CodegenParameter one, CodegenParameter another) {
                                if (one.isPathParam && another.isQueryParam) {
                                    return -1;
                                } else {
                                    return one.isQueryParam && another.isPathParam ? 1 : 0;
                                }
                            }
                        });
                    }
                }
            }
        }

        if ("feign".equals(this.getLibrary())) {
            operations = objs.getOperations();
            operationList = operations.getOperation();
            Pattern methodPattern = Pattern.compile("^(.*):([^:]*)$");
            Iterator var14 = operationList.iterator();

            while(var14.hasNext()) {
                CodegenOperation op = (CodegenOperation)var14.next();
                String path = op.path;
                String method = "";
                Matcher m = methodPattern.matcher(path);
                if (m.find()) {
                    path = m.group(1);
                    method = m.group(2);
                }

                String[] items = path.split("/", -1);

                for(int i = 0; i < items.length; ++i) {
                    if (items[i].matches("^\\{(.*)\\}$")) {
                        items[i] = "{" + org.openapitools.codegen.utils.StringUtils.camelize(items[i].substring(1, items[i].length() - 1), CamelizeOption.LOWERCASE_FIRST_LETTER) + "}";
                    }
                }

                op.path = StringUtils.join(items, "/");
                if (!method.isEmpty()) {
                    op.path = op.path + ":" + method;
                }
            }
        }

        if ("microprofile".equals(this.getLibrary())) {
            objs = AbstractJavaJAXRSServerCodegen.jaxrsPostProcessOperations(objs);
        }

        return objs;
    }

    public String apiFilename(String templateName, String tag) {
        if ("vertx".equals(this.getLibrary())) {
            String suffix = (String)this.apiTemplateFiles().get(templateName);
            String subFolder = "";
            if (templateName.startsWith("rx")) {
                subFolder = "/rxjava";
            }

            return this.apiFileFolder() + subFolder + '/' + this.toApiFilename(tag) + suffix;
        } else {
            return super.apiFilename(templateName, tag);
        }
    }

    static List<Map<String, String>> prioritizeContentTypes(List<Map<String, String>> consumes) {
        if (consumes.size() <= 1) {
            return consumes;
        } else {
            List<Map<String, String>> prioritizedContentTypes = new ArrayList(consumes.size());
            List<Map<String, String>> jsonVendorMimeTypes = new ArrayList(consumes.size());
            List<Map<String, String>> jsonMimeTypes = new ArrayList(consumes.size());
            Iterator var4 = consumes.iterator();

            while(var4.hasNext()) {
                Map<String, String> consume = (Map)var4.next();
                if (isJsonVendorMimeType((String)consume.get("mediaType"))) {
                    jsonVendorMimeTypes.add(consume);
                } else if (isJsonMimeType((String)consume.get("mediaType"))) {
                    jsonMimeTypes.add(consume);
                } else {
                    prioritizedContentTypes.add(consume);
                }
            }

            prioritizedContentTypes.addAll(0, jsonMimeTypes);
            prioritizedContentTypes.addAll(0, jsonVendorMimeTypes);
            return prioritizedContentTypes;
        }
    }

    private static boolean isMultipartType(List<Map<String, String>> consumes) {
        Map<String, String> firstType = (Map)consumes.get(0);
        return firstType != null && "multipart/form-data".equals(firstType.get("mediaType"));
    }

    public void postProcessModelProperty(CodegenModel model, CodegenProperty property) {
        super.postProcessModelProperty(model, property);
        if (!BooleanUtils.toBoolean(model.isEnum)) {
            if (this.additionalProperties.containsKey("jackson")) {
                model.imports.add("JsonProperty");
                model.imports.add("JsonValue");
                model.imports.add("JsonInclude");
                model.imports.add("JsonTypeName");
            }

            if (this.additionalProperties.containsKey("gson")) {
                model.imports.add("SerializedName");
                model.imports.add("TypeAdapter");
                model.imports.add("JsonAdapter");
                model.imports.add("JsonReader");
                model.imports.add("JsonWriter");
                model.imports.add("IOException");
            }
        } else if (this.additionalProperties.containsKey("jackson")) {
            model.imports.add("JsonValue");
            model.imports.add("JsonCreator");
        }

        if ("microprofile".equals(this.getLibrary())) {
            model.imports.remove("ApiModelProperty");
            model.imports.remove("ApiModel");
            model.imports.remove("JsonSerialize");
            model.imports.remove("ToStringSerializer");
        }

        if ("set".equals(property.containerType) && !"jackson".equals(this.serializationLibrary)) {
            model.imports.remove("JsonDeserialize");
            property.vendorExtensions.remove("x-setter-extra-annotation");
        }

    }

    public CodegenModel fromModel(String name, Schema model) {
        CodegenModel codegenModel = super.fromModel(name, model);
        if ("microprofile".equals(this.getLibrary()) && codegenModel.imports.contains("ApiModel")) {
            codegenModel.imports.remove("ApiModel");
        }

        return codegenModel;
    }

    public ModelsMap postProcessModelsEnum(ModelsMap objs) {
        objs = super.postProcessModelsEnum(objs);
        if (this.additionalProperties.containsKey("gson")) {
            List<Map<String, String>> imports = objs.getImports();
            Iterator var3 = objs.getModels().iterator();

            while(var3.hasNext()) {
                ModelMap mo = (ModelMap)var3.next();
                CodegenModel cm = mo.getModel();
                if (Boolean.TRUE.equals(cm.isEnum) && cm.allowableValues != null) {
                    cm.imports.add(this.importMapping.get("SerializedName"));
                    Map<String, String> item = new HashMap();
                    item.put("import", this.importMapping.get("SerializedName"));
                    imports.add(item);
                }
            }
        }

        return objs;
    }

    public ModelsMap postProcessModels(ModelsMap objs) {
        objs = super.postProcessModels(objs);
        List<ModelMap> models = objs.getModels();
        if (this.additionalProperties.containsKey("jackson") && !"jersey1".equals(this.getLibrary())) {
            List<Map<String, String>> imports = objs.getImports();
            Iterator var4 = models.iterator();

            label82:
            while(var4.hasNext()) {
                ModelMap mo = (ModelMap)var4.next();
                CodegenModel cm = mo.getModel();
                boolean addNullableImports = false;
                Iterator var8 = cm.vars.iterator();

                while(true) {
                    CodegenProperty var;
                    do {
                        if (!var8.hasNext()) {
                            if (addNullableImports) {
                                Map<String, String> imports2Classnames = new HashMap();
                                imports2Classnames.put("JsonNullable", "org.openapitools.jackson.nullable.JsonNullable");
                                imports2Classnames.put("NoSuchElementException", "java.util.NoSuchElementException");
                                imports2Classnames.put("JsonIgnore", "com.fasterxml.jackson.annotation.JsonIgnore");
                                addImports(imports, cm, imports2Classnames);
                            }
                            continue label82;
                        }

                        var = (CodegenProperty)var8.next();
                        addNullableImports = this.isAddNullableImports(cm, addNullableImports, var);
                    } while(!Boolean.TRUE.equals(var.getVendorExtensions().get("x-enum-as-string")));

                    var.datatypeWithEnum = var.dataType;
                    if (StringUtils.isNotEmpty(var.defaultValue)) {
                        String defaultValue = var.defaultValue.substring(var.defaultValue.lastIndexOf(46) + 1);
                        Iterator var11 = ((List)var.getAllowableValues().get("enumVars")).iterator();

                        while(var11.hasNext()) {
                            Map<String, Object> enumVars = (Map)var11.next();
                            if (defaultValue.equals(enumVars.get("name"))) {
                                var.defaultValue = (String)enumVars.get("value");
                            }
                        }
                    }

                    cm.imports.add("Set");
                    Map<String, String> importsSet = new HashMap();
                    importsSet.put("import", "java.util.Set");
                    imports.add(importsSet);
                    Map<String, String> importsHashSet = new HashMap();
                    importsHashSet.put("import", "java.util.HashSet");
                    imports.add(importsHashSet);
                }
            }
        }

        Iterator var13 = models.iterator();

        while(var13.hasNext()) {
            ModelMap mo = (ModelMap)var13.next();
            CodegenModel cm = mo.getModel();
            cm.getVendorExtensions().putIfAbsent("x-implements", new ArrayList());
            if ("jersey2".equals(this.getLibrary()) || "jersey3".equals(this.getLibrary()) || "native".equals(this.getLibrary()) || "okhttp-gson".equals(this.getLibrary())) {
                if (cm.oneOf != null && !cm.oneOf.isEmpty() && cm.oneOf.contains("ModelNull")) {
                    cm.isNullable = true;
                    cm.oneOf.remove("ModelNull");
                }

                if (cm.anyOf != null && !cm.anyOf.isEmpty() && cm.anyOf.contains("ModelNull")) {
                    cm.isNullable = true;
                    cm.anyOf.remove("ModelNull");
                }
            }

            if (this.parcelableModel) {
                ((ArrayList)cm.getVendorExtensions().get("x-implements")).add("Parcelable");
            }
        }

        return objs;
    }

    public void setUseOneOfDiscriminatorLookup(boolean useOneOfDiscriminatorLookup) {
        this.useOneOfDiscriminatorLookup = useOneOfDiscriminatorLookup;
    }

    public boolean getUseOneOfDiscriminatorLookup() {
        return this.useOneOfDiscriminatorLookup;
    }

    private boolean getUseSingleRequestParameter() {
        return this.useSingleRequestParameter;
    }

    private void setUseSingleRequestParameter(boolean useSingleRequestParameter) {
        this.useSingleRequestParameter = useSingleRequestParameter;
    }

    public void setUseRxJava(boolean useRxJava) {
        this.useRxJava = useRxJava;
        this.doNotUseRx = false;
    }

    public void setUseRxJava2(boolean useRxJava2) {
        this.useRxJava2 = useRxJava2;
        this.doNotUseRx = false;
    }

    public void setUseRxJava3(boolean useRxJava3) {
        this.useRxJava3 = useRxJava3;
        this.doNotUseRx = false;
    }

    public void setDoNotUseRx(boolean doNotUseRx) {
        this.doNotUseRx = doNotUseRx;
    }

    public void setUsePlayWS(boolean usePlayWS) {
        this.usePlayWS = usePlayWS;
    }

    public void setAsyncNative(boolean asyncNative) {
        this.asyncNative = asyncNative;
    }

    public void setMicroprofileFramework(String microprofileFramework) {
        this.microprofileFramework = microprofileFramework;
    }

    public void setConfigKey(String configKey) {
        this.configKey = configKey;
    }

    public void setParcelableModel(boolean parcelableModel) {
        this.parcelableModel = parcelableModel;
    }

    public void setUseBeanValidation(boolean useBeanValidation) {
        this.useBeanValidation = useBeanValidation;
    }

    public void setPerformBeanValidation(boolean performBeanValidation) {
        this.performBeanValidation = performBeanValidation;
    }

    public void setUseGzipFeature(boolean useGzipFeature) {
        this.useGzipFeature = useGzipFeature;
    }

    public void setUseRuntimeException(boolean useRuntimeException) {
        this.useRuntimeException = useRuntimeException;
    }

    public void setUseReflectionEqualsHashCode(boolean useReflectionEqualsHashCode) {
        this.useReflectionEqualsHashCode = useReflectionEqualsHashCode;
    }

    public void setCaseInsensitiveResponseHeaders(Boolean caseInsensitiveResponseHeaders) {
        this.caseInsensitiveResponseHeaders = caseInsensitiveResponseHeaders;
    }

    public void setUseAbstractionForFiles(boolean useAbstractionForFiles) {
        this.useAbstractionForFiles = useAbstractionForFiles;
    }

    public void setDynamicOperations(boolean dynamicOperations) {
        this.dynamicOperations = dynamicOperations;
    }

    public void setSupportStreaming(boolean supportStreaming) {
        this.supportStreaming = supportStreaming;
    }

    public void setGradleProperties(String gradleProperties) {
        this.gradleProperties = gradleProperties;
    }

    public void setErrorObjectType(String errorObjectType) {
        this.errorObjectType = errorObjectType;
    }

    public String getSerializationLibrary() {
        return this.serializationLibrary;
    }

    public void setSerializationLibrary(String serializationLibrary) {
        if ("jackson".equalsIgnoreCase(serializationLibrary)) {
            this.serializationLibrary = "jackson";
        } else if ("gson".equalsIgnoreCase(serializationLibrary)) {
            this.serializationLibrary = "gson";
        } else {
            if (!"jsonb".equalsIgnoreCase(serializationLibrary)) {
                throw new IllegalArgumentException("Unexpected serializationLibrary value: " + serializationLibrary);
            }

            this.serializationLibrary = "jsonb";
        }

    }

    public void forceSerializationLibrary(String serializationLibrary) {
        if (this.serializationLibrary != null && !this.serializationLibrary.equalsIgnoreCase(serializationLibrary)) {
            this.LOGGER.warn("The configured serializationLibrary '{}', is not supported by the library: '{}', switching back to: {}", new Object[]{this.serializationLibrary, this.getLibrary(), serializationLibrary});
        }

        this.setSerializationLibrary(serializationLibrary);
    }

    public Map<String, Object> postProcessSupportingFileData(Map<String, Object> objs) {
        this.generateYAMLSpecFile(objs);
        return super.postProcessSupportingFileData(objs);
    }

    public String toApiVarName(String name) {
        String apiVarName = super.toApiVarName(name);
        if (this.reservedWords.contains(apiVarName)) {
            apiVarName = this.escapeReservedWord(apiVarName);
        }

        return apiVarName;
    }

    public void addImportsToOneOfInterface(List<Map<String, String>> imports) {
        Iterator var2 = Arrays.asList("JsonSubTypes", "JsonTypeInfo", "JsonIgnoreProperties").iterator();

        while(var2.hasNext()) {
            String i = (String)var2.next();
            Map<String, String> oneImport = new HashMap();
            oneImport.put("import", this.importMapping.get(i));
            if (!imports.contains(oneImport)) {
                imports.add(oneImport);
            }
        }

    }

    public List<VendorExtension> getSupportedVendorExtensions() {
        List<VendorExtension> extensions = super.getSupportedVendorExtensions();
        extensions.add(VendorExtension.X_WEBCLIENT_BLOCKING);
        return extensions;
    }

    private static class MpRestClientVersion {
        public final String rootPackage;
        public final String pomTemplate;

        public MpRestClientVersion(String rootPackage, String pomTemplate) {
            this.rootPackage = rootPackage;
            this.pomTemplate = pomTemplate;
        }
    }
}
