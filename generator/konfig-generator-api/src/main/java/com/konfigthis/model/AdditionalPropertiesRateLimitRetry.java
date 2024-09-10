package com.konfigthis.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import java.math.BigDecimal;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * AdditionalPropertiesRateLimitRetry
 */

@JsonTypeName("AdditionalProperties_rateLimitRetry")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
public class AdditionalPropertiesRateLimitRetry {

  @JsonProperty("maxAttempts")
  private BigDecimal maxAttempts;

  @JsonProperty("initialDelay")
  private BigDecimal initialDelay;

  public AdditionalPropertiesRateLimitRetry maxAttempts(BigDecimal maxAttempts) {
    this.maxAttempts = maxAttempts;
    return this;
  }

  /**
   * Get maxAttempts
   * @return maxAttempts
  */
  @Valid 
  @Schema(name = "maxAttempts", required = false)
  public BigDecimal getMaxAttempts() {
    return maxAttempts;
  }

  public void setMaxAttempts(BigDecimal maxAttempts) {
    this.maxAttempts = maxAttempts;
  }

  public AdditionalPropertiesRateLimitRetry initialDelay(BigDecimal initialDelay) {
    this.initialDelay = initialDelay;
    return this;
  }

  /**
   * Get initialDelay
   * @return initialDelay
  */
  @Valid 
  @Schema(name = "initialDelay", required = false)
  public BigDecimal getInitialDelay() {
    return initialDelay;
  }

  public void setInitialDelay(BigDecimal initialDelay) {
    this.initialDelay = initialDelay;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AdditionalPropertiesRateLimitRetry additionalPropertiesRateLimitRetry = (AdditionalPropertiesRateLimitRetry) o;
    return Objects.equals(this.maxAttempts, additionalPropertiesRateLimitRetry.maxAttempts) &&
        Objects.equals(this.initialDelay, additionalPropertiesRateLimitRetry.initialDelay);
  }

  @Override
  public int hashCode() {
    return Objects.hash(maxAttempts, initialDelay);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AdditionalPropertiesRateLimitRetry {\n");
    sb.append("    maxAttempts: ").append(toIndentedString(maxAttempts)).append("\n");
    sb.append("    initialDelay: ").append(toIndentedString(initialDelay)).append("\n");
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

