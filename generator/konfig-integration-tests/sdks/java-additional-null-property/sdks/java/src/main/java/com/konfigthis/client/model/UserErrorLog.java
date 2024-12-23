/*
 * SnapTrade
 * Connect brokerage accounts to your app for live positions and trading
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@snaptrade.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.konfigthis.client.JSON;

/**
 * An API error log for a specific SnapTrade user.
 */
@ApiModel(description = "An API error log for a specific SnapTrade user.")@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class UserErrorLog {
  public static final String SERIALIZED_NAME_REQUESTED_AT = "requestedAt";
  @SerializedName(SERIALIZED_NAME_REQUESTED_AT)
  private String requestedAt;

  public static final String SERIALIZED_NAME_RESPONSE = "response";
  @SerializedName(SERIALIZED_NAME_RESPONSE)
  private String response;

  public static final String SERIALIZED_NAME_STATUS_CODE = "statusCode";
  @SerializedName(SERIALIZED_NAME_STATUS_CODE)
  private Double statusCode;

  public static final String SERIALIZED_NAME_QUERY_PARAMS = "queryParams";
  @SerializedName(SERIALIZED_NAME_QUERY_PARAMS)
  private String queryParams;

  public static final String SERIALIZED_NAME_HTTP_METHOD = "httpMethod";
  @SerializedName(SERIALIZED_NAME_HTTP_METHOD)
  private String httpMethod;

  public static final String SERIALIZED_NAME_ENDPOINT = "endpoint";
  @SerializedName(SERIALIZED_NAME_ENDPOINT)
  private String endpoint;

  public UserErrorLog() {
  }

  public UserErrorLog requestedAt(String requestedAt) {
    
    
    
    
    this.requestedAt = requestedAt;
    return this;
  }

   /**
   * Get requestedAt
   * @return requestedAt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2022-01-21T20:11:19.217Z", value = "")

  public String getRequestedAt() {
    return requestedAt;
  }


  public void setRequestedAt(String requestedAt) {
    
    
    
    this.requestedAt = requestedAt;
  }


  public UserErrorLog response(String response) {
    
    
    
    
    this.response = response;
    return this;
  }

   /**
   * Get response
   * @return response
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getResponse() {
    return response;
  }


  public void setResponse(String response) {
    
    
    
    this.response = response;
  }


  public UserErrorLog statusCode(Double statusCode) {
    
    
    
    
    this.statusCode = statusCode;
    return this;
  }

  public UserErrorLog statusCode(Integer statusCode) {
    
    
    
    
    this.statusCode = statusCode.doubleValue();
    return this;
  }

   /**
   * Get statusCode
   * @return statusCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "200", value = "")

  public Double getStatusCode() {
    return statusCode;
  }


  public void setStatusCode(Double statusCode) {
    
    
    
    this.statusCode = statusCode;
  }


  public UserErrorLog queryParams(String queryParams) {
    
    
    
    
    this.queryParams = queryParams;
    return this;
  }

   /**
   * Get queryParams
   * @return queryParams
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getQueryParams() {
    return queryParams;
  }


  public void setQueryParams(String queryParams) {
    
    
    
    this.queryParams = queryParams;
  }


  public UserErrorLog httpMethod(String httpMethod) {
    
    
    
    
    this.httpMethod = httpMethod;
    return this;
  }

   /**
   * Get httpMethod
   * @return httpMethod
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "POST", value = "")

  public String getHttpMethod() {
    return httpMethod;
  }


  public void setHttpMethod(String httpMethod) {
    
    
    
    this.httpMethod = httpMethod;
  }


  public UserErrorLog endpoint(String endpoint) {
    
    
    
    
    this.endpoint = endpoint;
    return this;
  }

   /**
   * Get endpoint
   * @return endpoint
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "api/v1/snapTrade", value = "")

  public String getEndpoint() {
    return endpoint;
  }


  public void setEndpoint(String endpoint) {
    
    
    
    this.endpoint = endpoint;
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, Object> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   *
   * @param key name of the property
   * @param value value of the property
   * @return the UserErrorLog instance itself
   */
  public UserErrorLog putAdditionalProperty(String key, Object value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, Object>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   *
   * @return a map of objects
   */
  public Map<String, Object> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   *
   * @param key name of the property
   * @return an object
   */
  public Object getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserErrorLog userErrorLog = (UserErrorLog) o;
    return Objects.equals(this.requestedAt, userErrorLog.requestedAt) &&
        Objects.equals(this.response, userErrorLog.response) &&
        Objects.equals(this.statusCode, userErrorLog.statusCode) &&
        Objects.equals(this.queryParams, userErrorLog.queryParams) &&
        Objects.equals(this.httpMethod, userErrorLog.httpMethod) &&
        Objects.equals(this.endpoint, userErrorLog.endpoint)&&
        Objects.equals(this.additionalProperties, userErrorLog.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestedAt, response, statusCode, queryParams, httpMethod, endpoint, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserErrorLog {\n");
    sb.append("    requestedAt: ").append(toIndentedString(requestedAt)).append("\n");
    sb.append("    response: ").append(toIndentedString(response)).append("\n");
    sb.append("    statusCode: ").append(toIndentedString(statusCode)).append("\n");
    sb.append("    queryParams: ").append(toIndentedString(queryParams)).append("\n");
    sb.append("    httpMethod: ").append(toIndentedString(httpMethod)).append("\n");
    sb.append("    endpoint: ").append(toIndentedString(endpoint)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
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


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("requestedAt");
    openapiFields.add("response");
    openapiFields.add("statusCode");
    openapiFields.add("queryParams");
    openapiFields.add("httpMethod");
    openapiFields.add("endpoint");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to UserErrorLog
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!UserErrorLog.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in UserErrorLog is not found in the empty JSON string", UserErrorLog.openapiRequiredFields.toString()));
        }
      }
      if ((jsonObj.get("requestedAt") != null && !jsonObj.get("requestedAt").isJsonNull()) && !jsonObj.get("requestedAt").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `requestedAt` to be a primitive type in the JSON string but got `%s`", jsonObj.get("requestedAt").toString()));
      }
      if ((jsonObj.get("response") != null && !jsonObj.get("response").isJsonNull()) && !jsonObj.get("response").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `response` to be a primitive type in the JSON string but got `%s`", jsonObj.get("response").toString()));
      }
      if ((jsonObj.get("queryParams") != null && !jsonObj.get("queryParams").isJsonNull()) && !jsonObj.get("queryParams").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `queryParams` to be a primitive type in the JSON string but got `%s`", jsonObj.get("queryParams").toString()));
      }
      if ((jsonObj.get("httpMethod") != null && !jsonObj.get("httpMethod").isJsonNull()) && !jsonObj.get("httpMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `httpMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("httpMethod").toString()));
      }
      if ((jsonObj.get("endpoint") != null && !jsonObj.get("endpoint").isJsonNull()) && !jsonObj.get("endpoint").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `endpoint` to be a primitive type in the JSON string but got `%s`", jsonObj.get("endpoint").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!UserErrorLog.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'UserErrorLog' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<UserErrorLog> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(UserErrorLog.class));

       return (TypeAdapter<T>) new TypeAdapter<UserErrorLog>() {
           @Override
           public void write(JsonWriter out, UserErrorLog value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             obj.remove("additionalProperties");
             // serialize additonal properties
             if (value.getAdditionalProperties() != null) {
               for (Map.Entry<String, Object> entry : value.getAdditionalProperties().entrySet()) {
                 if (entry.getValue() instanceof String)
                   obj.addProperty(entry.getKey(), (String) entry.getValue());
                 else if (entry.getValue() instanceof Number)
                   obj.addProperty(entry.getKey(), (Number) entry.getValue());
                 else if (entry.getValue() instanceof Boolean)
                   obj.addProperty(entry.getKey(), (Boolean) entry.getValue());
                 else if (entry.getValue() instanceof Character)
                   obj.addProperty(entry.getKey(), (Character) entry.getValue());
                 else if (entry.getValue() == null) {
                   obj.addProperty(entry.getKey(), (String) null);
                 } else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public UserErrorLog read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             UserErrorLog instance = thisAdapter.fromJsonTree(jsonObj);
             for (Map.Entry<String, JsonElement> entry : jsonObj.entrySet()) {
               if (!openapiFields.contains(entry.getKey())) {
                 if (entry.getValue().isJsonPrimitive()) { // primitive type
                   if (entry.getValue().getAsJsonPrimitive().isString())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsString());
                   else if (entry.getValue().getAsJsonPrimitive().isNumber())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsNumber());
                   else if (entry.getValue().getAsJsonPrimitive().isBoolean())
                     instance.putAdditionalProperty(entry.getKey(), entry.getValue().getAsBoolean());
                   else
                     throw new IllegalArgumentException(String.format("The field `%s` has unknown primitive type. Value: %s", entry.getKey(), entry.getValue().toString()));
                 } else if (entry.getValue().isJsonArray()) {
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), List.class));
                 } else { // JSON object
                     instance.putAdditionalProperty(entry.getKey(), gson.fromJson(entry.getValue(), HashMap.class));
                 }
               }
             }
             return instance;
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of UserErrorLog given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of UserErrorLog
  * @throws IOException if the JSON string is invalid with respect to UserErrorLog
  */
  public static UserErrorLog fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, UserErrorLog.class);
  }

 /**
  * Convert an instance of UserErrorLog to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

