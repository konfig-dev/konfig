package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * AdditionalPropertiesClientStateWithExamplesInner
 */

@JsonTypeName("AdditionalProperties_clientStateWithExamples_inner")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class AdditionalPropertiesClientStateWithExamplesInner {

  @JsonProperty("name")
  private String name;

  @JsonProperty("example")
  private String example;

  public AdditionalPropertiesClientStateWithExamplesInner name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  */
  
  @Schema(name = "name", required = false)
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public AdditionalPropertiesClientStateWithExamplesInner example(String example) {
    this.example = example;
    return this;
  }

  /**
   * Get example
   * @return example
  */
  
  @Schema(name = "example", required = false)
  public String getExample() {
    return example;
  }

  public void setExample(String example) {
    this.example = example;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AdditionalPropertiesClientStateWithExamplesInner additionalPropertiesClientStateWithExamplesInner = (AdditionalPropertiesClientStateWithExamplesInner) o;
    return Objects.equals(this.name, additionalPropertiesClientStateWithExamplesInner.name) &&
        Objects.equals(this.example, additionalPropertiesClientStateWithExamplesInner.example);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, example);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AdditionalPropertiesClientStateWithExamplesInner {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    example: ").append(toIndentedString(example)).append("\n");
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

