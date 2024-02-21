package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.konfigthis.model.AdditionalPropertiesClientStateWithExamplesInner;
import com.konfigthis.model.AdditionalPropertiesReadmeHeader;
import com.konfigthis.model.AdditionalPropertiesReadmeOperation;
import com.konfigthis.model.AdditionalPropertiesTopLevelOperationsInner;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;

import java.util.*;
import javax.annotation.Generated;

/**
 * Additional properties depending on the generator specified
 */

@Schema(name = "AdditionalProperties", description = "Additional properties depending on the generator specified")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class AdditionalProperties {

  @JsonProperty("objectPropertyNamingConvention")
  private String objectPropertyNamingConvention;

  @JsonProperty("dependencies")
  @Valid
  private Map<String, String> dependencies = null;

  @JsonProperty("readmeHeader")
  private AdditionalPropertiesReadmeHeader readmeHeader;

  @JsonProperty("removeDefaultConfigurationParameters")
  private Boolean removeDefaultConfigurationParameters;

  @JsonProperty("omitSecurityRequirementsFromTopLevelClient")
  @Valid
  private List<String> omitSecurityRequirementsFromTopLevelClient = null;

  @JsonProperty("isGitSubmodule")
  private Boolean isGitSubmodule;

  @JsonProperty("gitDefaultBranch")
  private String gitDefaultBranch;

  @JsonProperty("gitRepoName")
  private String gitRepoName;

  @JsonProperty("clientName")
  private String clientName;

  @JsonProperty("pubName")
  private String pubName;

  @JsonProperty("pubLibrary")
  private String pubLibrary;

  @JsonProperty("pubDescription")
  private String pubDescription;

  @JsonProperty("pubAuthor")
  private String pubAuthor;

  @JsonProperty("pythonResponseTypeVersion")
  private String pythonResponseTypeVersion;

  @JsonProperty("pubAuthorEmail")
  private String pubAuthorEmail;

  @JsonProperty("pubHomepage")
  private String pubHomepage;

  @JsonProperty("pubPublishTo")
  private String pubPublishTo;

  @JsonProperty("pubRepository")
  private String pubRepository;

  @JsonProperty("pubVersion")
  private String pubVersion;

  @JsonProperty("useAxios0_27_2")
  private Boolean useAxios0272;

  @JsonProperty("useAiohttp3_8")
  private Boolean useAiohttp38;

  @JsonProperty("readmeOperation")
  private AdditionalPropertiesReadmeOperation readmeOperation;

  @JsonProperty("moduleName")
  private String moduleName;

  @JsonProperty("gitLabProjectId")
  private String gitLabProjectId;

  @JsonProperty("outputDirectory")
  private String outputDirectory;

  @JsonProperty("topLevelOperations")
  @Valid
  private List<AdditionalPropertiesTopLevelOperationsInner> topLevelOperations = null;

  @JsonProperty("useSecurityKeyName")
  private Boolean useSecurityKeyName;

  @JsonProperty("omitInfoDescription")
  private Boolean omitInfoDescription;

  @JsonProperty("omitModelDocumentation")
  private Boolean omitModelDocumentation;

  @JsonProperty("omitApiDocumentation")
  private Boolean omitApiDocumentation;

  @JsonProperty("mockServerPort")
  private BigDecimal mockServerPort;

  @JsonProperty("useSecurityKeyNameAsPropertyName")
  private Boolean useSecurityKeyNameAsPropertyName;

  @JsonProperty("tagPriority")
  @Valid
  private List<String> tagPriority = null;

  @JsonProperty("useDescriptionInOperationTableDocumentation")
  private Boolean useDescriptionInOperationTableDocumentation;

  @JsonProperty("setSkipSerializationToTrueByDefault")
  private Boolean setSkipSerializationToTrueByDefault;

  @JsonProperty("includeFetchAdapter")
  private Boolean includeFetchAdapter;

  @JsonProperty("packagistUsername")
  private String packagistUsername;

  @JsonProperty("toStringReturnsJson")
  private Boolean toStringReturnsJson;

  @JsonProperty("includeEventSourceParser")
  private Boolean includeEventSourceParser;

  @JsonProperty("keepAllParametersOptional")
  private Boolean keepAllParametersOptional;

  @JsonProperty("apiDocumentationAuthenticationPartial")
  private String apiDocumentationAuthenticationPartial;

  @JsonProperty("composerPackageName")
  private String composerPackageName;

  @JsonProperty("defaultTimeout")
  private BigDecimal defaultTimeout;

  @JsonProperty("defaultAsyncTimeout")
  private BigDecimal defaultAsyncTimeout;

  @JsonProperty("supportPhp7")
  private Boolean supportPhp7;

  @JsonProperty("useSingleRequestParameter")
  private Boolean useSingleRequestParameter;

  @JsonProperty("artifactUrl")
  private String artifactUrl;

  @JsonProperty("artifactId")
  private String artifactId;

  @JsonProperty("groupId")
  private String groupId;

  @JsonProperty("invokerPackage")
  private String invokerPackage;

  @JsonProperty("modelPackage")
  private String modelPackage;

  @JsonProperty("apiPackage")
  private String apiPackage;

  @JsonProperty("projectName")
  private String projectName;

  @JsonProperty("podVersion")
  private String podVersion;

  @JsonProperty("removeKonfigBranding")
  private Boolean removeKonfigBranding;

  @JsonProperty("podName")
  private String podName;

  @JsonProperty("classPrefix")
  private String classPrefix;

  @JsonProperty("authorName")
  private String authorName;

  @JsonProperty("authorEmail")
  private String authorEmail;

  @JsonProperty("podAuthors")
  private String podAuthors;

  @JsonProperty("swiftPackagePath")
  private String swiftPackagePath;

  @JsonProperty("disallowAdditionalPropertiesIfNotPresent")
  private Boolean disallowAdditionalPropertiesIfNotPresent;

  @JsonProperty("packageVersion")
  private String packageVersion;

  @JsonProperty("packageUrl")
  private String packageUrl;

  @JsonProperty("npmVersion")
  private String npmVersion;

  @JsonProperty("gemName")
  private String gemName;

  @JsonProperty("gemVersion")
  private String gemVersion;

  @JsonProperty("userAgent")
  private String userAgent;

  @JsonProperty("npmName")
  private String npmName;

  @JsonProperty("readmeSnippet")
  private String readmeSnippet;

  @JsonProperty("readmeHeaderSnippet")
  private String readmeHeaderSnippet;

  @JsonProperty("asyncReadmeSnippet")
  private String asyncReadmeSnippet;

  @JsonProperty("readmeSupportingDescriptionSnippet")
  private String readmeSupportingDescriptionSnippet;

  @JsonProperty("readmeDescriptionSnippet")
  private String readmeDescriptionSnippet;

  @JsonProperty("apiKeyAlias")
  @Valid
  private Map<String, String> apiKeyAlias = null;

  @JsonProperty("clientState")
  @Valid
  private List<String> clientState = null;

  @JsonProperty("clientStateWithExamples")
  @Valid
  private List<AdditionalPropertiesClientStateWithExamplesInner> clientStateWithExamples = null;

  @JsonProperty("clientStateIsOptional")
  private Boolean clientStateIsOptional;

  public AdditionalProperties objectPropertyNamingConvention(String objectPropertyNamingConvention) {
    this.objectPropertyNamingConvention = objectPropertyNamingConvention;
    return this;
  }

  /**
   * Get objectPropertyNamingConvention
   * 
   * @return objectPropertyNamingConvention
   */

  @Schema(name = "objectPropertyNamingConvention", required = false)
  public String getObjectPropertyNamingConvention() {
    return objectPropertyNamingConvention;
  }

  public void setObjectPropertyNamingConvention(String objectPropertyNamingConvention) {
    this.objectPropertyNamingConvention = objectPropertyNamingConvention;
  }

  public AdditionalProperties dependencies(Map<String, String> dependencies) {
    this.dependencies = dependencies;
    return this;
  }

  public AdditionalProperties putDependenciesItem(String key, String dependenciesItem) {
    if (this.dependencies == null) {
      this.dependencies = new HashMap<>();
    }
    this.dependencies.put(key, dependenciesItem);
    return this;
  }

  /**
   * Get dependencies
   * 
   * @return dependencies
   */

  @Schema(name = "dependencies", required = false)
  public Map<String, String> getDependencies() {
    return dependencies;
  }

  public void setDependencies(Map<String, String> dependencies) {
    this.dependencies = dependencies;
  }

  public AdditionalProperties readmeHeader(AdditionalPropertiesReadmeHeader readmeHeader) {
    this.readmeHeader = readmeHeader;
    return this;
  }

  /**
   * Get readmeHeader
   * 
   * @return readmeHeader
   */
  @Valid
  @Schema(name = "readmeHeader", required = false)
  public AdditionalPropertiesReadmeHeader getReadmeHeader() {
    return readmeHeader;
  }

  public void setReadmeHeader(AdditionalPropertiesReadmeHeader readmeHeader) {
    this.readmeHeader = readmeHeader;
  }

  public AdditionalProperties removeDefaultConfigurationParameters(Boolean removeDefaultConfigurationParameters) {
    this.removeDefaultConfigurationParameters = removeDefaultConfigurationParameters;
    return this;
  }

  /**
   * Get removeDefaultConfigurationParameters
   * 
   * @return removeDefaultConfigurationParameters
   */

  @Schema(name = "removeDefaultConfigurationParameters", required = false)
  public Boolean getRemoveDefaultConfigurationParameters() {
    return removeDefaultConfigurationParameters;
  }

  public void setRemoveDefaultConfigurationParameters(Boolean removeDefaultConfigurationParameters) {
    this.removeDefaultConfigurationParameters = removeDefaultConfigurationParameters;
  }

  public AdditionalProperties omitSecurityRequirementsFromTopLevelClient(
      List<String> omitSecurityRequirementsFromTopLevelClient) {
    this.omitSecurityRequirementsFromTopLevelClient = omitSecurityRequirementsFromTopLevelClient;
    return this;
  }

  public AdditionalProperties addomitSecurityRequirementsFromTopLevelClientItem(
      String omitSecurityRequirementsFromTopLevelClientItem) {
    if (this.omitSecurityRequirementsFromTopLevelClient == null) {
      this.omitSecurityRequirementsFromTopLevelClient = new ArrayList<>();
    }
    this.omitSecurityRequirementsFromTopLevelClient.add(omitSecurityRequirementsFromTopLevelClientItem);
    return this;
  }

  /**
   * Get omitSecurityRequirementsFromTopLevelClient
   * 
   * @return omitSecurityRequirementsFromTopLevelClient
   */

  @Schema(name = "omitSecurityRequirementsFromTopLevelClient", required = false)
  public List<String> getomitSecurityRequirementsFromTopLevelClient() {
    return omitSecurityRequirementsFromTopLevelClient;
  }

  public void setomitSecurityRequirementsFromTopLevelClient(List<String> omitSecurityRequirementsFromTopLevelClient) {
    this.omitSecurityRequirementsFromTopLevelClient = omitSecurityRequirementsFromTopLevelClient;
  }

  public AdditionalProperties isGitSubmodule(Boolean isGitSubmodule) {
    this.isGitSubmodule = isGitSubmodule;
    return this;
  }

  /**
   * Get isGitSubmodule
   * 
   * @return isGitSubmodule
   */

  @Schema(name = "isGitSubmodule", required = false)
  public Boolean getIsGitSubmodule() {
    return isGitSubmodule;
  }

  public void setIsGitSubmodule(Boolean isGitSubmodule) {
    this.isGitSubmodule = isGitSubmodule;
  }

  public AdditionalProperties gitDefaultBranch(String gitDefaultBranch) {
    this.gitDefaultBranch = gitDefaultBranch;
    return this;
  }

  /**
   * Get gitDefaultBranch
   * 
   * @return gitDefaultBranch
   */

  @Schema(name = "gitDefaultBranch", required = false)
  public String getGitDefaultBranch() {
    return gitDefaultBranch;
  }

  public void setGitDefaultBranch(String gitDefaultBranch) {
    this.gitDefaultBranch = gitDefaultBranch;
  }

  public AdditionalProperties gitRepoName(String gitRepoName) {
    this.gitRepoName = gitRepoName;
    return this;
  }

  /**
   * Get gitRepoName
   * 
   * @return gitRepoName
   */

  @Schema(name = "gitRepoName", required = false)
  public String getGitRepoName() {
    return gitRepoName;
  }

  public void setGitRepoName(String gitRepoName) {
    this.gitRepoName = gitRepoName;
  }

  public AdditionalProperties clientName(String clientName) {
    this.clientName = clientName;
    return this;
  }

  /**
   * Get clientName
   * 
   * @return clientName
   */

  @Schema(name = "clientName", required = false)
  public String getClientName() {
    return clientName;
  }

  public void setClientName(String clientName) {
    this.clientName = clientName;
  }

  public AdditionalProperties pubName(String pubName) {
    this.pubName = pubName;
    return this;
  }

  /**
   * Get pubName
   * 
   * @return pubName
   */

  @Schema(name = "pubName", required = false)
  public String getPubName() {
    return pubName;
  }

  public void setPubName(String pubName) {
    this.pubName = pubName;
  }

  public AdditionalProperties pubLibrary(String pubLibrary) {
    this.pubLibrary = pubLibrary;
    return this;
  }

  /**
   * Get pubLibrary
   * 
   * @return pubLibrary
   */

  @Schema(name = "pubLibrary", required = false)
  public String getPubLibrary() {
    return pubLibrary;
  }

  public void setPubLibrary(String pubLibrary) {
    this.pubLibrary = pubLibrary;
  }

  public AdditionalProperties pubDescription(String pubDescription) {
    this.pubDescription = pubDescription;
    return this;
  }

  /**
   * Get pubDescription
   * 
   * @return pubDescription
   */

  @Schema(name = "pubDescription", required = false)
  public String getPubDescription() {
    return pubDescription;
  }

  public void setPubDescription(String pubDescription) {
    this.pubDescription = pubDescription;
  }

  public AdditionalProperties pubAuthor(String pubAuthor) {
    this.pubAuthor = pubAuthor;
    return this;
  }

  /**
   * Get pubAuthor
   * 
   * @return pubAuthor
   */

  @Schema(name = "pubAuthor", required = false)
  public String getPubAuthor() {
    return pubAuthor;
  }

  public void setPubAuthor(String pubAuthor) {
    this.pubAuthor = pubAuthor;
  }

  public AdditionalProperties pythonResponseTypeVersion(String pythonResponseTypeVersion) {
    this.pythonResponseTypeVersion = pythonResponseTypeVersion;
    return this;
  }

  /**
   * Get pythonResponseTypeVersion
   * 
   * @return pythonResponseTypeVersion
   */

  @Schema(name = "pythonResponseTypeVersion", required = false)
  public String getPythonResponseTypeVersion() {
    return pythonResponseTypeVersion;
  }

  public void setPythonResponseTypeVersion(String pythonResponseTypeVersion) {
    this.pythonResponseTypeVersion = pythonResponseTypeVersion;
  }

  public AdditionalProperties pubAuthorEmail(String pubAuthorEmail) {
    this.pubAuthorEmail = pubAuthorEmail;
    return this;
  }

  /**
   * Get pubAuthorEmail
   * 
   * @return pubAuthorEmail
   */

  @Schema(name = "pubAuthorEmail", required = false)
  public String getPubAuthorEmail() {
    return pubAuthorEmail;
  }

  public void setPubAuthorEmail(String pubAuthorEmail) {
    this.pubAuthorEmail = pubAuthorEmail;
  }

  public AdditionalProperties pubHomepage(String pubHomepage) {
    this.pubHomepage = pubHomepage;
    return this;
  }

  /**
   * Get pubHomepage
   * 
   * @return pubHomepage
   */

  @Schema(name = "pubHomepage", required = false)
  public String getPubHomepage() {
    return pubHomepage;
  }

  public void setPubHomepage(String pubHomepage) {
    this.pubHomepage = pubHomepage;
  }

  public AdditionalProperties pubPublishTo(String pubPublishTo) {
    this.pubPublishTo = pubPublishTo;
    return this;
  }

  /**
   * Get pubPublishTo
   * 
   * @return pubPublishTo
   */

  @Schema(name = "pubPublishTo", required = false)
  public String getPubPublishTo() {
    return pubPublishTo;
  }

  public void setPubPublishTo(String pubPublishTo) {
    this.pubPublishTo = pubPublishTo;
  }

  public AdditionalProperties pubRepository(String pubRepository) {
    this.pubRepository = pubRepository;
    return this;
  }

  /**
   * Get pubRepository
   * 
   * @return pubRepository
   */

  @Schema(name = "pubRepository", required = false)
  public String getPubRepository() {
    return pubRepository;
  }

  public void setPubRepository(String pubRepository) {
    this.pubRepository = pubRepository;
  }

  public AdditionalProperties pubVersion(String pubVersion) {
    this.pubVersion = pubVersion;
    return this;
  }

  /**
   * Get pubVersion
   * 
   * @return pubVersion
   */

  @Schema(name = "pubVersion", required = false)
  public String getPubVersion() {
    return pubVersion;
  }

  public void setPubVersion(String pubVersion) {
    this.pubVersion = pubVersion;
  }

  public AdditionalProperties useAxios0272(Boolean useAxios0272) {
    this.useAxios0272 = useAxios0272;
    return this;
  }

  /**
   * Get useAxios0272
   * 
   * @return useAxios0272
   */

  @Schema(name = "useAxios0_27_2", required = false)
  public Boolean getUseAxios0272() {
    return useAxios0272;
  }

  public void setUseAxios0272(Boolean useAxios0272) {
    this.useAxios0272 = useAxios0272;
  }

  public AdditionalProperties useAiohttp38(Boolean useAiohttp38) {
    this.useAiohttp38 = useAiohttp38;
    return this;
  }

  /**
   * Get useAiohttp38
   * 
   * @return useAiohttp38
   */

  @Schema(name = "useAiohttp3_8", required = false)
  public Boolean getUseAiohttp38() {
    return useAiohttp38;
  }

  public void setUseAiohttp38(Boolean useAiohttp38) {
    this.useAiohttp38 = useAiohttp38;
  }

  public AdditionalProperties readmeOperation(AdditionalPropertiesReadmeOperation readmeOperation) {
    this.readmeOperation = readmeOperation;
    return this;
  }

  /**
   * Get readmeOperation
   * 
   * @return readmeOperation
   */
  @Valid
  @Schema(name = "readmeOperation", required = false)
  public AdditionalPropertiesReadmeOperation getReadmeOperation() {
    return readmeOperation;
  }

  public void setReadmeOperation(AdditionalPropertiesReadmeOperation readmeOperation) {
    this.readmeOperation = readmeOperation;
  }

  public AdditionalProperties moduleName(String moduleName) {
    this.moduleName = moduleName;
    return this;
  }

  /**
   * Get moduleName
   * 
   * @return moduleName
   */

  @Schema(name = "moduleName", required = false)
  public String getModuleName() {
    return moduleName;
  }

  public void setModuleName(String moduleName) {
    this.moduleName = moduleName;
  }

  public AdditionalProperties gitLabProjectId(String gitLabProjectId) {
    this.gitLabProjectId = gitLabProjectId;
    return this;
  }

  /**
   * Get gitLabProjectId
   * 
   * @return gitLabProjectId
   */

  @Schema(name = "gitLabProjectId", required = false)
  public String getGitLabProjectId() {
    return gitLabProjectId;
  }

  public void setGitLabProjectId(String gitLabProjectId) {
    this.gitLabProjectId = gitLabProjectId;
  }

  public AdditionalProperties outputDirectory(String outputDirectory) {
    this.outputDirectory = outputDirectory;
    return this;
  }

  /**
   * Get outputDirectory
   * 
   * @return outputDirectory
   */

  @Schema(name = "outputDirectory", required = false)
  public String getOutputDirectory() {
    return outputDirectory;
  }

  public void setOutputDirectory(String outputDirectory) {
    this.outputDirectory = outputDirectory;
  }

  public AdditionalProperties topLevelOperations(List<AdditionalPropertiesTopLevelOperationsInner> topLevelOperations) {
    this.topLevelOperations = topLevelOperations;
    return this;
  }

  public AdditionalProperties addTopLevelOperationsItem(
      AdditionalPropertiesTopLevelOperationsInner topLevelOperationsItem) {
    if (this.topLevelOperations == null) {
      this.topLevelOperations = new ArrayList<>();
    }
    this.topLevelOperations.add(topLevelOperationsItem);
    return this;
  }

  /**
   * Get topLevelOperations
   * 
   * @return topLevelOperations
   */
  @Valid
  @Schema(name = "topLevelOperations", required = false)
  public List<AdditionalPropertiesTopLevelOperationsInner> getTopLevelOperations() {
    return topLevelOperations;
  }

  public void setTopLevelOperations(List<AdditionalPropertiesTopLevelOperationsInner> topLevelOperations) {
    this.topLevelOperations = topLevelOperations;
  }

  public AdditionalProperties useSecurityKeyName(Boolean useSecurityKeyName) {
    this.useSecurityKeyName = useSecurityKeyName;
    return this;
  }

  /**
   * Get useSecurityKeyName
   * 
   * @return useSecurityKeyName
   */

  @Schema(name = "useSecurityKeyName", required = false)
  public Boolean getUseSecurityKeyName() {
    return useSecurityKeyName;
  }

  public void setUseSecurityKeyName(Boolean useSecurityKeyName) {
    this.useSecurityKeyName = useSecurityKeyName;
  }

  public AdditionalProperties omitInfoDescription(Boolean omitInfoDescription) {
    this.omitInfoDescription = omitInfoDescription;
    return this;
  }

  /**
   * Get omitInfoDescription
   * 
   * @return omitInfoDescription
   */

  @Schema(name = "omitInfoDescription", required = false)
  public Boolean getOmitInfoDescription() {
    return omitInfoDescription;
  }

  public void setOmitInfoDescription(Boolean omitInfoDescription) {
    this.omitInfoDescription = omitInfoDescription;
  }

  public AdditionalProperties omitModelDocumentation(Boolean omitModelDocumentation) {
    this.omitModelDocumentation = omitModelDocumentation;
    return this;
  }

  /**
   * Get omitModelDocumentation
   * 
   * @return omitModelDocumentation
   */

  @Schema(name = "omitModelDocumentation", required = false)
  public Boolean getOmitModelDocumentation() {
    return omitModelDocumentation;
  }

  public void setOmitModelDocumentation(Boolean omitModelDocumentation) {
    this.omitModelDocumentation = omitModelDocumentation;
  }

  public AdditionalProperties omitApiDocumentation(Boolean omitApiDocumentation) {
    this.omitApiDocumentation = omitApiDocumentation;
    return this;
  }

  /**
   * Get omitApiDocumentation
   * 
   * @return omitApiDocumentation
   */

  @Schema(name = "omitApiDocumentation", required = false)
  public Boolean getOmitApiDocumentation() {
    return omitApiDocumentation;
  }

  public void setOmitApiDocumentation(Boolean omitApiDocumentation) {
    this.omitApiDocumentation = omitApiDocumentation;
  }

  public AdditionalProperties mockServerPort(BigDecimal mockServerPort) {
    this.mockServerPort = mockServerPort;
    return this;
  }

  /**
   * Get mockServerPort
   * 
   * @return mockServerPort
   */
  @Valid
  @Schema(name = "mockServerPort", required = false)
  public BigDecimal getMockServerPort() {
    return mockServerPort;
  }

  public void setMockServerPort(BigDecimal mockServerPort) {
    this.mockServerPort = mockServerPort;
  }

  public AdditionalProperties useSecurityKeyNameAsPropertyName(Boolean useSecurityKeyNameAsPropertyName) {
    this.useSecurityKeyNameAsPropertyName = useSecurityKeyNameAsPropertyName;
    return this;
  }

  /**
   * Get useSecurityKeyNameAsPropertyName
   * 
   * @return useSecurityKeyNameAsPropertyName
   */

  @Schema(name = "useSecurityKeyNameAsPropertyName", required = false)
  public Boolean getUseSecurityKeyNameAsPropertyName() {
    return useSecurityKeyNameAsPropertyName;
  }

  public void setUseSecurityKeyNameAsPropertyName(Boolean useSecurityKeyNameAsPropertyName) {
    this.useSecurityKeyNameAsPropertyName = useSecurityKeyNameAsPropertyName;
  }

  public AdditionalProperties tagPriority(List<String> tagPriority) {
    this.tagPriority = tagPriority;
    return this;
  }

  public AdditionalProperties addTagPriorityItem(String tagPriorityItem) {
    if (this.tagPriority == null) {
      this.tagPriority = new ArrayList<>();
    }
    this.tagPriority.add(tagPriorityItem);
    return this;
  }

  /**
   * Get tagPriority
   * 
   * @return tagPriority
   */

  @Schema(name = "tagPriority", required = false)
  public List<String> getTagPriority() {
    return tagPriority;
  }

  public void setTagPriority(List<String> tagPriority) {
    this.tagPriority = tagPriority;
  }

  public AdditionalProperties useDescriptionInOperationTableDocumentation(
      Boolean useDescriptionInOperationTableDocumentation) {
    this.useDescriptionInOperationTableDocumentation = useDescriptionInOperationTableDocumentation;
    return this;
  }

  /**
   * Get useDescriptionInOperationTableDocumentation
   * 
   * @return useDescriptionInOperationTableDocumentation
   */

  @Schema(name = "useDescriptionInOperationTableDocumentation", required = false)
  public Boolean getUseDescriptionInOperationTableDocumentation() {
    return useDescriptionInOperationTableDocumentation;
  }

  public void setUseDescriptionInOperationTableDocumentation(Boolean useDescriptionInOperationTableDocumentation) {
    this.useDescriptionInOperationTableDocumentation = useDescriptionInOperationTableDocumentation;
  }

  public AdditionalProperties setSkipSerializationToTrueByDefault(Boolean setSkipSerializationToTrueByDefault) {
    this.setSkipSerializationToTrueByDefault = setSkipSerializationToTrueByDefault;
    return this;
  }

  /**
   * Get setSkipSerializationToTrueByDefault
   * 
   * @return setSkipSerializationToTrueByDefault
   */

  @Schema(name = "setSkipSerializationToTrueByDefault", required = false)
  public Boolean getSetSkipSerializationToTrueByDefault() {
    return setSkipSerializationToTrueByDefault;
  }

  public void setSetSkipSerializationToTrueByDefault(Boolean setSkipSerializationToTrueByDefault) {
    this.setSkipSerializationToTrueByDefault = setSkipSerializationToTrueByDefault;
  }

  public AdditionalProperties includeFetchAdapter(Boolean includeFetchAdapter) {
    this.includeFetchAdapter = includeFetchAdapter;
    return this;
  }

  /**
   * Get includeFetchAdapter
   * 
   * @return includeFetchAdapter
   */

  @Schema(name = "includeFetchAdapter", required = false)
  public Boolean getIncludeFetchAdapter() {
    return includeFetchAdapter;
  }

  public void setIncludeFetchAdapter(Boolean includeFetchAdapter) {
    this.includeFetchAdapter = includeFetchAdapter;
  }

  public AdditionalProperties packagistUsername(String packagistUsername) {
    this.packagistUsername = packagistUsername;
    return this;
  }

  /**
   * Get packagistUsername
   * 
   * @return packagistUsername
   */

  @Schema(name = "packagistUsername", required = false)
  public String getPackagistUsername() {
    return packagistUsername;
  }

  public void setPackagistUsername(String packagistUsername) {
    this.packagistUsername = packagistUsername;
  }

  public AdditionalProperties toStringReturnsJson(Boolean toStringReturnsJson) {
    this.toStringReturnsJson = toStringReturnsJson;
    return this;
  }

  /**
   * Get toStringReturnsJson
   * 
   * @return toStringReturnsJson
   */

  @Schema(name = "toStringReturnsJson", required = false)
  public Boolean getToStringReturnsJson() {
    return toStringReturnsJson;
  }

  public void setToStringReturnsJson(Boolean toStringReturnsJson) {
    this.toStringReturnsJson = toStringReturnsJson;
  }

  public AdditionalProperties includeEventSourceParser(Boolean includeEventSourceParser) {
    this.includeEventSourceParser = includeEventSourceParser;
    return this;
  }

  /**
   * Get includeEventSourceParser
   * 
   * @return includeEventSourceParser
   */

  @Schema(name = "includeEventSourceParser", required = false)
  public Boolean getIncludeEventSourceParser() {
    return includeEventSourceParser;
  }

  public void setIncludeEventSourceParser(Boolean includeEventSourceParser) {
    this.includeEventSourceParser = includeEventSourceParser;
  }

  public AdditionalProperties keepAllParametersOptional(Boolean keepAllParametersOptional) {
    this.keepAllParametersOptional = keepAllParametersOptional;
    return this;
  }

  /**
   * Get keepAllParametersOptional
   * 
   * @return keepAllParametersOptional
   */

  @Schema(name = "keepAllParametersOptional", required = false)
  public Boolean getKeepAllParametersOptional() {
    return keepAllParametersOptional;
  }

  public void setKeepAllParametersOptional(Boolean keepAllParametersOptional) {
    this.keepAllParametersOptional = keepAllParametersOptional;
  }

  public AdditionalProperties apiDocumentationAuthenticationPartial(String apiDocumentationAuthenticationPartial) {
    this.apiDocumentationAuthenticationPartial = apiDocumentationAuthenticationPartial;
    return this;
  }

  /**
   * Get apiDocumentationAuthenticationPartial
   * 
   * @return apiDocumentationAuthenticationPartial
   */

  @Schema(name = "apiDocumentationAuthenticationPartial", required = false)
  public String getApiDocumentationAuthenticationPartial() {
    return apiDocumentationAuthenticationPartial;
  }

  public void setApiDocumentationAuthenticationPartial(String apiDocumentationAuthenticationPartial) {
    this.apiDocumentationAuthenticationPartial = apiDocumentationAuthenticationPartial;
  }

  public AdditionalProperties composerPackageName(String composerPackageName) {
    this.composerPackageName = composerPackageName;
    return this;
  }

  /**
   * Get composerPackageName
   * 
   * @return composerPackageName
   */

  @Schema(name = "composerPackageName", required = false)
  public String getComposerPackageName() {
    return composerPackageName;
  }

  public void setComposerPackageName(String composerPackageName) {
    this.composerPackageName = composerPackageName;
  }

  public AdditionalProperties defaultTimeout(BigDecimal defaultTimeout) {
    this.defaultTimeout = defaultTimeout;
    return this;
  }

  /**
   * Get defaultTimeout
   * 
   * @return defaultTimeout
   */
  @Valid
  @Schema(name = "defaultTimeout", required = false)
  public BigDecimal getDefaultTimeout() {
    return defaultTimeout;
  }

  public void setDefaultTimeout(BigDecimal defaultTimeout) {
    this.defaultTimeout = defaultTimeout;
  }

  public AdditionalProperties defaultAsyncTimeout(BigDecimal defaultAsyncTimeout) {
    this.defaultAsyncTimeout = defaultAsyncTimeout;
    return this;
  }

  /**
   * Get defaultAsyncTimeout
   * 
   * @return defaultAsyncTimeout
   */
  @Valid
  @Schema(name = "defaultAsyncTimeout", required = false)
  public BigDecimal getDefaultAsyncTimeout() {
    return defaultAsyncTimeout;
  }

  public void setDefaultAsyncTimeout(BigDecimal defaultAsyncTimeout) {
    this.defaultAsyncTimeout = defaultAsyncTimeout;
  }

  public AdditionalProperties supportPhp7(Boolean supportPhp7) {
    this.supportPhp7 = supportPhp7;
    return this;
  }

  /**
   * Get supportPhp7
   * 
   * @return supportPhp7
   */

  @Schema(name = "supportPhp7", required = false)
  public Boolean getSupportPhp7() {
    return supportPhp7;
  }

  public void setSupportPhp7(Boolean supportPhp7) {
    this.supportPhp7 = supportPhp7;
  }

  public AdditionalProperties useSingleRequestParameter(Boolean useSingleRequestParameter) {
    this.useSingleRequestParameter = useSingleRequestParameter;
    return this;
  }

  /**
   * Get useSingleRequestParameter
   * 
   * @return useSingleRequestParameter
   */

  @Schema(name = "useSingleRequestParameter", required = false)
  public Boolean getUseSingleRequestParameter() {
    return useSingleRequestParameter;
  }

  public void setUseSingleRequestParameter(Boolean useSingleRequestParameter) {
    this.useSingleRequestParameter = useSingleRequestParameter;
  }

  public AdditionalProperties artifactUrl(String artifactUrl) {
    this.artifactUrl = artifactUrl;
    return this;
  }

  /**
   * Get artifactUrl
   * 
   * @return artifactUrl
   */

  @Schema(name = "artifactUrl", required = false)
  public String getArtifactUrl() {
    return artifactUrl;
  }

  public void setArtifactUrl(String artifactUrl) {
    this.artifactUrl = artifactUrl;
  }

  public AdditionalProperties artifactId(String artifactId) {
    this.artifactId = artifactId;
    return this;
  }

  /**
   * Get artifactId
   * 
   * @return artifactId
   */

  @Schema(name = "artifactId", required = false)
  public String getArtifactId() {
    return artifactId;
  }

  public void setArtifactId(String artifactId) {
    this.artifactId = artifactId;
  }

  public AdditionalProperties groupId(String groupId) {
    this.groupId = groupId;
    return this;
  }

  /**
   * Get groupId
   * 
   * @return groupId
   */

  @Schema(name = "groupId", required = false)
  public String getGroupId() {
    return groupId;
  }

  public void setGroupId(String groupId) {
    this.groupId = groupId;
  }

  public AdditionalProperties invokerPackage(String invokerPackage) {
    this.invokerPackage = invokerPackage;
    return this;
  }

  /**
   * Get invokerPackage
   * 
   * @return invokerPackage
   */

  @Schema(name = "invokerPackage", required = false)
  public String getInvokerPackage() {
    return invokerPackage;
  }

  public void setInvokerPackage(String invokerPackage) {
    this.invokerPackage = invokerPackage;
  }

  public AdditionalProperties modelPackage(String modelPackage) {
    this.modelPackage = modelPackage;
    return this;
  }

  /**
   * Get modelPackage
   * 
   * @return modelPackage
   */

  @Schema(name = "modelPackage", required = false)
  public String getModelPackage() {
    return modelPackage;
  }

  public void setModelPackage(String modelPackage) {
    this.modelPackage = modelPackage;
  }

  public AdditionalProperties apiPackage(String apiPackage) {
    this.apiPackage = apiPackage;
    return this;
  }

  /**
   * Get apiPackage
   * 
   * @return apiPackage
   */

  @Schema(name = "apiPackage", required = false)
  public String getApiPackage() {
    return apiPackage;
  }

  public void setApiPackage(String apiPackage) {
    this.apiPackage = apiPackage;
  }

  public AdditionalProperties projectName(String projectName) {
    this.projectName = projectName;
    return this;
  }

  /**
   * Get projectName
   * 
   * @return projectName
   */

  @Schema(name = "projectName", required = false)
  public String getProjectName() {
    return projectName;
  }

  public void setProjectName(String projectName) {
    this.projectName = projectName;
  }

  public AdditionalProperties podVersion(String podVersion) {
    this.podVersion = podVersion;
    return this;
  }

  /**
   * Get podVersion
   * 
   * @return podVersion
   */

  @Schema(name = "podVersion", required = false)
  public String getPodVersion() {
    return podVersion;
  }

  public void setPodVersion(String podVersion) {
    this.podVersion = podVersion;
  }

  public AdditionalProperties removeKonfigBranding(Boolean removeKonfigBranding) {
    this.removeKonfigBranding = removeKonfigBranding;
    return this;
  }

  /**
   * Get removeKonfigBranding
   * 
   * @return removeKonfigBranding
   */

  @Schema(name = "removeKonfigBranding", required = false)
  public Boolean getRemoveKonfigBranding() {
    return removeKonfigBranding;
  }

  public void setRemoveKonfigBranding(Boolean removeKonfigBranding) {
    this.removeKonfigBranding = removeKonfigBranding;
  }

  public AdditionalProperties podName(String podName) {
    this.podName = podName;
    return this;
  }

  /**
   * Get podName
   * 
   * @return podName
   */

  @Schema(name = "podName", required = false)
  public String getPodName() {
    return podName;
  }

  public void setPodName(String podName) {
    this.podName = podName;
  }

  public AdditionalProperties classPrefix(String classPrefix) {
    this.classPrefix = classPrefix;
    return this;
  }

  /**
   * Get classPrefix
   * 
   * @return classPrefix
   */

  @Schema(name = "classPrefix", required = false)
  public String getClassPrefix() {
    return classPrefix;
  }

  public void setClassPrefix(String classPrefix) {
    this.classPrefix = classPrefix;
  }

  public AdditionalProperties authorName(String authorName) {
    this.authorName = authorName;
    return this;
  }

  /**
   * Get authorName
   * 
   * @return authorName
   */

  @Schema(name = "authorName", required = false)
  public String getAuthorName() {
    return authorName;
  }

  public void setAuthorName(String authorName) {
    this.authorName = authorName;
  }

  public AdditionalProperties authorEmail(String authorEmail) {
    this.authorEmail = authorEmail;
    return this;
  }

  /**
   * Get authorEmail
   * 
   * @return authorEmail
   */

  @Schema(name = "authorEmail", required = false)
  public String getAuthorEmail() {
    return authorEmail;
  }

  public void setAuthorEmail(String authorEmail) {
    this.authorEmail = authorEmail;
  }

  public AdditionalProperties podAuthors(String podAuthors) {
    this.podAuthors = podAuthors;
    return this;
  }

  /**
   * Get podAuthors
   * 
   * @return podAuthors
   */

  @Schema(name = "podAuthors", required = false)
  public String getPodAuthors() {
    return podAuthors;
  }

  public void setPodAuthors(String podAuthors) {
    this.podAuthors = podAuthors;
  }

  public AdditionalProperties swiftPackagePath(String swiftPackagePath) {
    this.swiftPackagePath = swiftPackagePath;
    return this;
  }

  /**
   * Get swiftPackagePath
   * 
   * @return swiftPackagePath
   */

  @Schema(name = "swiftPackagePath", required = false)
  public String getSwiftPackagePath() {
    return swiftPackagePath;
  }

  public void setSwiftPackagePath(String swiftPackagePath) {
    this.swiftPackagePath = swiftPackagePath;
  }

  public AdditionalProperties disallowAdditionalPropertiesIfNotPresent(
      Boolean disallowAdditionalPropertiesIfNotPresent) {
    this.disallowAdditionalPropertiesIfNotPresent = disallowAdditionalPropertiesIfNotPresent;
    return this;
  }

  /**
   * Get disallowAdditionalPropertiesIfNotPresent
   * 
   * @return disallowAdditionalPropertiesIfNotPresent
   */

  @Schema(name = "disallowAdditionalPropertiesIfNotPresent", required = false)
  public Boolean getDisallowAdditionalPropertiesIfNotPresent() {
    return disallowAdditionalPropertiesIfNotPresent;
  }

  public void setDisallowAdditionalPropertiesIfNotPresent(Boolean disallowAdditionalPropertiesIfNotPresent) {
    this.disallowAdditionalPropertiesIfNotPresent = disallowAdditionalPropertiesIfNotPresent;
  }

  public AdditionalProperties packageVersion(String packageVersion) {
    this.packageVersion = packageVersion;
    return this;
  }

  /**
   * Get packageVersion
   * 
   * @return packageVersion
   */

  @Schema(name = "packageVersion", required = false)
  public String getPackageVersion() {
    return packageVersion;
  }

  public void setPackageVersion(String packageVersion) {
    this.packageVersion = packageVersion;
  }

  public AdditionalProperties packageUrl(String packageUrl) {
    this.packageUrl = packageUrl;
    return this;
  }

  /**
   * Get packageUrl
   * 
   * @return packageUrl
   */

  @Schema(name = "packageUrl", required = false)
  public String getPackageUrl() {
    return packageUrl;
  }

  public void setPackageUrl(String packageUrl) {
    this.packageUrl = packageUrl;
  }

  public AdditionalProperties npmVersion(String npmVersion) {
    this.npmVersion = npmVersion;
    return this;
  }

  /**
   * Get npmVersion
   * 
   * @return npmVersion
   */

  @Schema(name = "npmVersion", required = false)
  public String getNpmVersion() {
    return npmVersion;
  }

  public void setNpmVersion(String npmVersion) {
    this.npmVersion = npmVersion;
  }

  public AdditionalProperties gemName(String gemName) {
    this.gemName = gemName;
    return this;
  }

  /**
   * Get gemName
   * 
   * @return gemName
   */

  @Schema(name = "gemName", required = false)
  public String getGemName() {
    return gemName;
  }

  public void setGemName(String gemName) {
    this.gemName = gemName;
  }

  public AdditionalProperties gemVersion(String gemVersion) {
    this.gemVersion = gemVersion;
    return this;
  }

  /**
   * Get gemVersion
   * 
   * @return gemVersion
   */

  @Schema(name = "gemVersion", required = false)
  public String getGemVersion() {
    return gemVersion;
  }

  public void setGemVersion(String gemVersion) {
    this.gemVersion = gemVersion;
  }

  public AdditionalProperties userAgent(String userAgent) {
    this.userAgent = userAgent;
    return this;
  }

  /**
   * Get userAgent
   * 
   * @return userAgent
   */

  @Schema(name = "userAgent", required = false)
  public String getUserAgent() {
    return userAgent;
  }

  public void setUserAgent(String userAgent) {
    this.userAgent = userAgent;
  }

  public AdditionalProperties npmName(String npmName) {
    this.npmName = npmName;
    return this;
  }

  /**
   * Get npmName
   * 
   * @return npmName
   */

  @Schema(name = "npmName", required = false)
  public String getNpmName() {
    return npmName;
  }

  public void setNpmName(String npmName) {
    this.npmName = npmName;
  }

  public AdditionalProperties readmeSnippet(String readmeSnippet) {
    this.readmeSnippet = readmeSnippet;
    return this;
  }

  /**
   * Get readmeSnippet
   * 
   * @return readmeSnippet
   */

  @Schema(name = "readmeSnippet", required = false)
  public String getReadmeSnippet() {
    return readmeSnippet;
  }

  public void setReadmeSnippet(String readmeSnippet) {
    this.readmeSnippet = readmeSnippet;
  }

  public AdditionalProperties readmeHeaderSnippet(String readmeHeaderSnippet) {
    this.readmeHeaderSnippet = readmeHeaderSnippet;
    return this;
  }

  /**
   * Get readmeHeaderSnippet
   * 
   * @return readmeHeaderSnippet
   */

  @Schema(name = "readmeHeaderSnippet", required = false)
  public String getReadmeHeaderSnippet() {
    return readmeHeaderSnippet;
  }

  public void setReadmeHeaderSnippet(String readmeHeaderSnippet) {
    this.readmeHeaderSnippet = readmeHeaderSnippet;
  }

  public AdditionalProperties asyncReadmeSnippet(String asyncReadmeSnippet) {
    this.asyncReadmeSnippet = asyncReadmeSnippet;
    return this;
  }

  /**
   * Get asyncReadmeSnippet
   * 
   * @return asyncReadmeSnippet
   */

  @Schema(name = "asyncReadmeSnippet", required = false)
  public String getAsyncReadmeSnippet() {
    return asyncReadmeSnippet;
  }

  public void setAsyncReadmeSnippet(String asyncReadmeSnippet) {
    this.asyncReadmeSnippet = asyncReadmeSnippet;
  }

  public AdditionalProperties readmeSupportingDescriptionSnippet(String readmeSupportingDescriptionSnippet) {
    this.readmeSupportingDescriptionSnippet = readmeSupportingDescriptionSnippet;
    return this;
  }

  /**
   * Get readmeSupportingDescriptionSnippet
   * 
   * @return readmeSupportingDescriptionSnippet
   */

  @Schema(name = "readmeSupportingDescriptionSnippet", required = false)
  public String getReadmeSupportingDescriptionSnippet() {
    return readmeSupportingDescriptionSnippet;
  }

  public void setReadmeSupportingDescriptionSnippet(String readmeSupportingDescriptionSnippet) {
    this.readmeSupportingDescriptionSnippet = readmeSupportingDescriptionSnippet;
  }

  public AdditionalProperties readmeDescriptionSnippet(String readmeDescriptionSnippet) {
    this.readmeDescriptionSnippet = readmeDescriptionSnippet;
    return this;
  }

  /**
   * Get readmeDescriptionSnippet
   * 
   * @return readmeDescriptionSnippet
   */

  @Schema(name = "readmeDescriptionSnippet", required = false)
  public String getReadmeDescriptionSnippet() {
    return readmeDescriptionSnippet;
  }

  public void setReadmeDescriptionSnippet(String readmeDescriptionSnippet) {
    this.readmeDescriptionSnippet = readmeDescriptionSnippet;
  }

  public AdditionalProperties apiKeyAlias(Map<String, String> apiKeyAlias) {
    this.apiKeyAlias = apiKeyAlias;
    return this;
  }

  public AdditionalProperties putApiKeyAliasItem(String key, String apiKeyAliasItem) {
    if (this.apiKeyAlias == null) {
      this.apiKeyAlias = new HashMap<>();
    }
    this.apiKeyAlias.put(key, apiKeyAliasItem);
    return this;
  }

  /**
   * Get apiKeyAlias
   * 
   * @return apiKeyAlias
   */

  @Schema(name = "apiKeyAlias", required = false)
  public Map<String, String> getApiKeyAlias() {
    return apiKeyAlias;
  }

  public void setApiKeyAlias(Map<String, String> apiKeyAlias) {
    this.apiKeyAlias = apiKeyAlias;
  }

  public AdditionalProperties clientState(List<String> clientState) {
    this.clientState = clientState;
    return this;
  }

  public AdditionalProperties addClientStateItem(String clientStateItem) {
    if (this.clientState == null) {
      this.clientState = new ArrayList<>();
    }
    this.clientState.add(clientStateItem);
    return this;
  }

  /**
   * Get clientState
   * 
   * @return clientState
   */

  @Schema(name = "clientState", required = false)
  public List<String> getClientState() {
    return clientState;
  }

  public void setClientState(List<String> clientState) {
    this.clientState = clientState;
  }

  public AdditionalProperties clientStateWithExamples(
      List<AdditionalPropertiesClientStateWithExamplesInner> clientStateWithExamples) {
    this.clientStateWithExamples = clientStateWithExamples;
    return this;
  }

  public AdditionalProperties addClientStateWithExamplesItem(
      AdditionalPropertiesClientStateWithExamplesInner clientStateWithExamplesItem) {
    if (this.clientStateWithExamples == null) {
      this.clientStateWithExamples = new ArrayList<>();
    }
    this.clientStateWithExamples.add(clientStateWithExamplesItem);
    return this;
  }

  /**
   * Get clientStateWithExamples
   * 
   * @return clientStateWithExamples
   */
  @Valid
  @Schema(name = "clientStateWithExamples", required = false)
  public List<AdditionalPropertiesClientStateWithExamplesInner> getClientStateWithExamples() {
    return clientStateWithExamples;
  }

  public void setClientStateWithExamples(
      List<AdditionalPropertiesClientStateWithExamplesInner> clientStateWithExamples) {
    this.clientStateWithExamples = clientStateWithExamples;
  }

  public AdditionalProperties clientStateIsOptional(Boolean clientStateIsOptional) {
    this.clientStateIsOptional = clientStateIsOptional;
    return this;
  }

  /**
   * Get clientStateIsOptional
   * 
   * @return clientStateIsOptional
   */

  @Schema(name = "clientStateIsOptional", required = false)
  public Boolean getClientStateIsOptional() {
    return clientStateIsOptional;
  }

  public void setClientStateIsOptional(Boolean clientStateIsOptional) {
    this.clientStateIsOptional = clientStateIsOptional;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AdditionalProperties additionalProperties = (AdditionalProperties) o;
    return Objects.equals(this.objectPropertyNamingConvention, additionalProperties.objectPropertyNamingConvention) &&
        Objects.equals(this.dependencies, additionalProperties.dependencies) &&
        Objects.equals(this.readmeHeader, additionalProperties.readmeHeader) &&
        Objects.equals(this.removeDefaultConfigurationParameters,
            additionalProperties.removeDefaultConfigurationParameters)
        &&
        Objects.equals(this.omitSecurityRequirementsFromTopLevelClient,
            additionalProperties.omitSecurityRequirementsFromTopLevelClient)
        &&
        Objects.equals(this.isGitSubmodule, additionalProperties.isGitSubmodule) &&
        Objects.equals(this.gitDefaultBranch, additionalProperties.gitDefaultBranch) &&
        Objects.equals(this.gitRepoName, additionalProperties.gitRepoName) &&
        Objects.equals(this.clientName, additionalProperties.clientName) &&
        Objects.equals(this.pubName, additionalProperties.pubName) &&
        Objects.equals(this.pubLibrary, additionalProperties.pubLibrary) &&
        Objects.equals(this.pubDescription, additionalProperties.pubDescription) &&
        Objects.equals(this.pubAuthor, additionalProperties.pubAuthor) &&
        Objects.equals(this.pythonResponseTypeVersion, additionalProperties.pythonResponseTypeVersion) &&
        Objects.equals(this.pubAuthorEmail, additionalProperties.pubAuthorEmail) &&
        Objects.equals(this.pubHomepage, additionalProperties.pubHomepage) &&
        Objects.equals(this.pubPublishTo, additionalProperties.pubPublishTo) &&
        Objects.equals(this.pubRepository, additionalProperties.pubRepository) &&
        Objects.equals(this.pubVersion, additionalProperties.pubVersion) &&
        Objects.equals(this.useAxios0272, additionalProperties.useAxios0272) &&
        Objects.equals(this.useAiohttp38, additionalProperties.useAiohttp38) &&
        Objects.equals(this.readmeOperation, additionalProperties.readmeOperation) &&
        Objects.equals(this.moduleName, additionalProperties.moduleName) &&
        Objects.equals(this.gitLabProjectId, additionalProperties.gitLabProjectId) &&
        Objects.equals(this.outputDirectory, additionalProperties.outputDirectory) &&
        Objects.equals(this.topLevelOperations, additionalProperties.topLevelOperations) &&
        Objects.equals(this.useSecurityKeyName, additionalProperties.useSecurityKeyName) &&
        Objects.equals(this.omitInfoDescription, additionalProperties.omitInfoDescription) &&
        Objects.equals(this.omitModelDocumentation, additionalProperties.omitModelDocumentation) &&
        Objects.equals(this.omitApiDocumentation, additionalProperties.omitApiDocumentation) &&
        Objects.equals(this.mockServerPort, additionalProperties.mockServerPort) &&
        Objects.equals(this.useSecurityKeyNameAsPropertyName, additionalProperties.useSecurityKeyNameAsPropertyName) &&
        Objects.equals(this.tagPriority, additionalProperties.tagPriority) &&
        Objects.equals(this.useDescriptionInOperationTableDocumentation,
            additionalProperties.useDescriptionInOperationTableDocumentation)
        &&
        Objects.equals(this.setSkipSerializationToTrueByDefault,
            additionalProperties.setSkipSerializationToTrueByDefault)
        &&
        Objects.equals(this.includeFetchAdapter, additionalProperties.includeFetchAdapter) &&
        Objects.equals(this.packagistUsername, additionalProperties.packagistUsername) &&
        Objects.equals(this.toStringReturnsJson, additionalProperties.toStringReturnsJson) &&
        Objects.equals(this.includeEventSourceParser, additionalProperties.includeEventSourceParser) &&
        Objects.equals(this.keepAllParametersOptional, additionalProperties.keepAllParametersOptional) &&
        Objects.equals(this.apiDocumentationAuthenticationPartial,
            additionalProperties.apiDocumentationAuthenticationPartial)
        &&
        Objects.equals(this.composerPackageName, additionalProperties.composerPackageName) &&
        Objects.equals(this.defaultTimeout, additionalProperties.defaultTimeout) &&
        Objects.equals(this.defaultAsyncTimeout, additionalProperties.defaultAsyncTimeout) &&
        Objects.equals(this.supportPhp7, additionalProperties.supportPhp7) &&
        Objects.equals(this.useSingleRequestParameter, additionalProperties.useSingleRequestParameter) &&
        Objects.equals(this.artifactUrl, additionalProperties.artifactUrl) &&
        Objects.equals(this.artifactId, additionalProperties.artifactId) &&
        Objects.equals(this.groupId, additionalProperties.groupId) &&
        Objects.equals(this.invokerPackage, additionalProperties.invokerPackage) &&
        Objects.equals(this.modelPackage, additionalProperties.modelPackage) &&
        Objects.equals(this.apiPackage, additionalProperties.apiPackage) &&
        Objects.equals(this.projectName, additionalProperties.projectName) &&
        Objects.equals(this.podVersion, additionalProperties.podVersion) &&
        Objects.equals(this.removeKonfigBranding, additionalProperties.removeKonfigBranding) &&
        Objects.equals(this.podName, additionalProperties.podName) &&
        Objects.equals(this.classPrefix, additionalProperties.classPrefix) &&
        Objects.equals(this.authorName, additionalProperties.authorName) &&
        Objects.equals(this.authorEmail, additionalProperties.authorEmail) &&
        Objects.equals(this.podAuthors, additionalProperties.podAuthors) &&
        Objects.equals(this.swiftPackagePath, additionalProperties.swiftPackagePath) &&
        Objects.equals(this.disallowAdditionalPropertiesIfNotPresent,
            additionalProperties.disallowAdditionalPropertiesIfNotPresent)
        &&
        Objects.equals(this.packageVersion, additionalProperties.packageVersion) &&
        Objects.equals(this.packageUrl, additionalProperties.packageUrl) &&
        Objects.equals(this.npmVersion, additionalProperties.npmVersion) &&
        Objects.equals(this.gemName, additionalProperties.gemName) &&
        Objects.equals(this.gemVersion, additionalProperties.gemVersion) &&
        Objects.equals(this.userAgent, additionalProperties.userAgent) &&
        Objects.equals(this.npmName, additionalProperties.npmName) &&
        Objects.equals(this.readmeSnippet, additionalProperties.readmeSnippet) &&
        Objects.equals(this.readmeHeaderSnippet, additionalProperties.readmeHeaderSnippet) &&
        Objects.equals(this.asyncReadmeSnippet, additionalProperties.asyncReadmeSnippet) &&
        Objects.equals(this.readmeSupportingDescriptionSnippet, additionalProperties.readmeSupportingDescriptionSnippet)
        &&
        Objects.equals(this.readmeDescriptionSnippet, additionalProperties.readmeDescriptionSnippet) &&
        Objects.equals(this.apiKeyAlias, additionalProperties.apiKeyAlias) &&
        Objects.equals(this.clientState, additionalProperties.clientState) &&
        Objects.equals(this.clientStateWithExamples, additionalProperties.clientStateWithExamples) &&
        Objects.equals(this.clientStateIsOptional, additionalProperties.clientStateIsOptional);
  }

  @Override
  public int hashCode() {
    return Objects.hash(objectPropertyNamingConvention, dependencies, readmeHeader,
        removeDefaultConfigurationParameters, omitSecurityRequirementsFromTopLevelClient, isGitSubmodule,
        gitDefaultBranch, gitRepoName, clientName, pubName, pubLibrary, pubDescription, pubAuthor,
        pythonResponseTypeVersion, pubAuthorEmail, pubHomepage, pubPublishTo, pubRepository, pubVersion, useAxios0272,
        useAiohttp38, readmeOperation, moduleName, gitLabProjectId, outputDirectory, topLevelOperations,
        useSecurityKeyName, omitInfoDescription, omitModelDocumentation, omitApiDocumentation, mockServerPort,
        useSecurityKeyNameAsPropertyName, tagPriority, useDescriptionInOperationTableDocumentation,
        setSkipSerializationToTrueByDefault, includeFetchAdapter, packagistUsername, toStringReturnsJson,
        includeEventSourceParser, keepAllParametersOptional, apiDocumentationAuthenticationPartial, composerPackageName,
        defaultTimeout, defaultAsyncTimeout, supportPhp7, useSingleRequestParameter, artifactUrl, artifactId, groupId,
        invokerPackage, modelPackage, apiPackage, projectName, podVersion, removeKonfigBranding, podName, classPrefix,
        authorName, authorEmail, podAuthors, swiftPackagePath, disallowAdditionalPropertiesIfNotPresent, packageVersion,
        packageUrl, npmVersion, gemName, gemVersion, userAgent, npmName, readmeSnippet, readmeHeaderSnippet,
        asyncReadmeSnippet, readmeSupportingDescriptionSnippet, readmeDescriptionSnippet, apiKeyAlias, clientState,
        clientStateWithExamples, clientStateIsOptional);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AdditionalProperties {\n");
    sb.append("    objectPropertyNamingConvention: ").append(toIndentedString(objectPropertyNamingConvention))
        .append("\n");
    sb.append("    dependencies: ").append(toIndentedString(dependencies)).append("\n");
    sb.append("    readmeHeader: ").append(toIndentedString(readmeHeader)).append("\n");
    sb.append("    removeDefaultConfigurationParameters: ")
        .append(toIndentedString(removeDefaultConfigurationParameters)).append("\n");
    sb.append("    omitSecurityRequirementsFromTopLevelClient: ")
        .append(toIndentedString(omitSecurityRequirementsFromTopLevelClient)).append("\n");
    sb.append("    isGitSubmodule: ").append(toIndentedString(isGitSubmodule)).append("\n");
    sb.append("    gitDefaultBranch: ").append(toIndentedString(gitDefaultBranch)).append("\n");
    sb.append("    gitRepoName: ").append(toIndentedString(gitRepoName)).append("\n");
    sb.append("    clientName: ").append(toIndentedString(clientName)).append("\n");
    sb.append("    pubName: ").append(toIndentedString(pubName)).append("\n");
    sb.append("    pubLibrary: ").append(toIndentedString(pubLibrary)).append("\n");
    sb.append("    pubDescription: ").append(toIndentedString(pubDescription)).append("\n");
    sb.append("    pubAuthor: ").append(toIndentedString(pubAuthor)).append("\n");
    sb.append("    pythonResponseTypeVersion: ").append(toIndentedString(pythonResponseTypeVersion)).append("\n");
    sb.append("    pubAuthorEmail: ").append(toIndentedString(pubAuthorEmail)).append("\n");
    sb.append("    pubHomepage: ").append(toIndentedString(pubHomepage)).append("\n");
    sb.append("    pubPublishTo: ").append(toIndentedString(pubPublishTo)).append("\n");
    sb.append("    pubRepository: ").append(toIndentedString(pubRepository)).append("\n");
    sb.append("    pubVersion: ").append(toIndentedString(pubVersion)).append("\n");
    sb.append("    useAxios0272: ").append(toIndentedString(useAxios0272)).append("\n");
    sb.append("    useAiohttp38: ").append(toIndentedString(useAiohttp38)).append("\n");
    sb.append("    readmeOperation: ").append(toIndentedString(readmeOperation)).append("\n");
    sb.append("    moduleName: ").append(toIndentedString(moduleName)).append("\n");
    sb.append("    gitLabProjectId: ").append(toIndentedString(gitLabProjectId)).append("\n");
    sb.append("    outputDirectory: ").append(toIndentedString(outputDirectory)).append("\n");
    sb.append("    topLevelOperations: ").append(toIndentedString(topLevelOperations)).append("\n");
    sb.append("    useSecurityKeyName: ").append(toIndentedString(useSecurityKeyName)).append("\n");
    sb.append("    omitInfoDescription: ").append(toIndentedString(omitInfoDescription)).append("\n");
    sb.append("    omitModelDocumentation: ").append(toIndentedString(omitModelDocumentation)).append("\n");
    sb.append("    omitApiDocumentation: ").append(toIndentedString(omitApiDocumentation)).append("\n");
    sb.append("    mockServerPort: ").append(toIndentedString(mockServerPort)).append("\n");
    sb.append("    useSecurityKeyNameAsPropertyName: ").append(toIndentedString(useSecurityKeyNameAsPropertyName))
        .append("\n");
    sb.append("    tagPriority: ").append(toIndentedString(tagPriority)).append("\n");
    sb.append("    useDescriptionInOperationTableDocumentation: ")
        .append(toIndentedString(useDescriptionInOperationTableDocumentation)).append("\n");
    sb.append("    setSkipSerializationToTrueByDefault: ").append(toIndentedString(setSkipSerializationToTrueByDefault))
        .append("\n");
    sb.append("    includeFetchAdapter: ").append(toIndentedString(includeFetchAdapter)).append("\n");
    sb.append("    packagistUsername: ").append(toIndentedString(packagistUsername)).append("\n");
    sb.append("    toStringReturnsJson: ").append(toIndentedString(toStringReturnsJson)).append("\n");
    sb.append("    includeEventSourceParser: ").append(toIndentedString(includeEventSourceParser)).append("\n");
    sb.append("    keepAllParametersOptional: ").append(toIndentedString(keepAllParametersOptional)).append("\n");
    sb.append("    apiDocumentationAuthenticationPartial: ")
        .append(toIndentedString(apiDocumentationAuthenticationPartial)).append("\n");
    sb.append("    composerPackageName: ").append(toIndentedString(composerPackageName)).append("\n");
    sb.append("    defaultTimeout: ").append(toIndentedString(defaultTimeout)).append("\n");
    sb.append("    defaultAsyncTimeout: ").append(toIndentedString(defaultAsyncTimeout)).append("\n");
    sb.append("    supportPhp7: ").append(toIndentedString(supportPhp7)).append("\n");
    sb.append("    useSingleRequestParameter: ").append(toIndentedString(useSingleRequestParameter)).append("\n");
    sb.append("    artifactUrl: ").append(toIndentedString(artifactUrl)).append("\n");
    sb.append("    artifactId: ").append(toIndentedString(artifactId)).append("\n");
    sb.append("    groupId: ").append(toIndentedString(groupId)).append("\n");
    sb.append("    invokerPackage: ").append(toIndentedString(invokerPackage)).append("\n");
    sb.append("    modelPackage: ").append(toIndentedString(modelPackage)).append("\n");
    sb.append("    apiPackage: ").append(toIndentedString(apiPackage)).append("\n");
    sb.append("    projectName: ").append(toIndentedString(projectName)).append("\n");
    sb.append("    podVersion: ").append(toIndentedString(podVersion)).append("\n");
    sb.append("    removeKonfigBranding: ").append(toIndentedString(removeKonfigBranding)).append("\n");
    sb.append("    podName: ").append(toIndentedString(podName)).append("\n");
    sb.append("    classPrefix: ").append(toIndentedString(classPrefix)).append("\n");
    sb.append("    authorName: ").append(toIndentedString(authorName)).append("\n");
    sb.append("    authorEmail: ").append(toIndentedString(authorEmail)).append("\n");
    sb.append("    podAuthors: ").append(toIndentedString(podAuthors)).append("\n");
    sb.append("    swiftPackagePath: ").append(toIndentedString(swiftPackagePath)).append("\n");
    sb.append("    disallowAdditionalPropertiesIfNotPresent: ")
        .append(toIndentedString(disallowAdditionalPropertiesIfNotPresent)).append("\n");
    sb.append("    packageVersion: ").append(toIndentedString(packageVersion)).append("\n");
    sb.append("    packageUrl: ").append(toIndentedString(packageUrl)).append("\n");
    sb.append("    npmVersion: ").append(toIndentedString(npmVersion)).append("\n");
    sb.append("    gemName: ").append(toIndentedString(gemName)).append("\n");
    sb.append("    gemVersion: ").append(toIndentedString(gemVersion)).append("\n");
    sb.append("    userAgent: ").append(toIndentedString(userAgent)).append("\n");
    sb.append("    npmName: ").append(toIndentedString(npmName)).append("\n");
    sb.append("    readmeSnippet: ").append(toIndentedString(readmeSnippet)).append("\n");
    sb.append("    readmeHeaderSnippet: ").append(toIndentedString(readmeHeaderSnippet)).append("\n");
    sb.append("    asyncReadmeSnippet: ").append(toIndentedString(asyncReadmeSnippet)).append("\n");
    sb.append("    readmeSupportingDescriptionSnippet: ").append(toIndentedString(readmeSupportingDescriptionSnippet))
        .append("\n");
    sb.append("    readmeDescriptionSnippet: ").append(toIndentedString(readmeDescriptionSnippet)).append("\n");
    sb.append("    apiKeyAlias: ").append(toIndentedString(apiKeyAlias)).append("\n");
    sb.append("    clientState: ").append(toIndentedString(clientState)).append("\n");
    sb.append("    clientStateWithExamples: ").append(toIndentedString(clientStateWithExamples)).append("\n");
    sb.append("    clientStateIsOptional: ").append(toIndentedString(clientStateIsOptional)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
