/*
 * splitit-web-api-v3
 * Splitit's Web API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.splitit.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import com.konfigthis.splitit.client.model.RefundStatus;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.time.OffsetDateTime;

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

import com.konfigthis.splitit.client.JSON;

/**
 * RefundModel
 */@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class RefundModel {
  public static final String SERIALIZED_NAME_REFUND_ID = "RefundId";
  @SerializedName(SERIALIZED_NAME_REFUND_ID)
  private String refundId;

  public static final String SERIALIZED_NAME_SUBMIT_DATE = "SubmitDate";
  @SerializedName(SERIALIZED_NAME_SUBMIT_DATE)
  private OffsetDateTime submitDate;

  public static final String SERIALIZED_NAME_TOTAL_AMOUNT = "TotalAmount";
  @SerializedName(SERIALIZED_NAME_TOTAL_AMOUNT)
  private Double totalAmount;

  public static final String SERIALIZED_NAME_STATUS = "Status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private RefundStatus status;

  public static final String SERIALIZED_NAME_NON_CREDIT_REFUND_AMOUNT = "NonCreditRefundAmount";
  @SerializedName(SERIALIZED_NAME_NON_CREDIT_REFUND_AMOUNT)
  private Double nonCreditRefundAmount;

  public static final String SERIALIZED_NAME_CREDIT_REFUND_AMOUNT = "CreditRefundAmount";
  @SerializedName(SERIALIZED_NAME_CREDIT_REFUND_AMOUNT)
  private Double creditRefundAmount;

  public RefundModel() {
  }

  public RefundModel refundId(String refundId) {
    
    
    
    
    this.refundId = refundId;
    return this;
  }

   /**
   * Get refundId
   * @return refundId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getRefundId() {
    return refundId;
  }


  public void setRefundId(String refundId) {
    
    
    
    this.refundId = refundId;
  }


  public RefundModel submitDate(OffsetDateTime submitDate) {
    
    
    
    
    this.submitDate = submitDate;
    return this;
  }

   /**
   * Get submitDate
   * @return submitDate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public OffsetDateTime getSubmitDate() {
    return submitDate;
  }


  public void setSubmitDate(OffsetDateTime submitDate) {
    
    
    
    this.submitDate = submitDate;
  }


  public RefundModel totalAmount(Double totalAmount) {
    
    
    
    
    this.totalAmount = totalAmount;
    return this;
  }

  public RefundModel totalAmount(Integer totalAmount) {
    
    
    
    
    this.totalAmount = totalAmount.doubleValue();
    return this;
  }

   /**
   * Get totalAmount
   * @return totalAmount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getTotalAmount() {
    return totalAmount;
  }


  public void setTotalAmount(Double totalAmount) {
    
    
    
    this.totalAmount = totalAmount;
  }


  public RefundModel status(RefundStatus status) {
    
    
    
    
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public RefundStatus getStatus() {
    return status;
  }


  public void setStatus(RefundStatus status) {
    
    
    
    this.status = status;
  }


  public RefundModel nonCreditRefundAmount(Double nonCreditRefundAmount) {
    
    
    
    
    this.nonCreditRefundAmount = nonCreditRefundAmount;
    return this;
  }

  public RefundModel nonCreditRefundAmount(Integer nonCreditRefundAmount) {
    
    
    
    
    this.nonCreditRefundAmount = nonCreditRefundAmount.doubleValue();
    return this;
  }

   /**
   * Get nonCreditRefundAmount
   * @return nonCreditRefundAmount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getNonCreditRefundAmount() {
    return nonCreditRefundAmount;
  }


  public void setNonCreditRefundAmount(Double nonCreditRefundAmount) {
    
    
    
    this.nonCreditRefundAmount = nonCreditRefundAmount;
  }


  public RefundModel creditRefundAmount(Double creditRefundAmount) {
    
    
    
    
    this.creditRefundAmount = creditRefundAmount;
    return this;
  }

  public RefundModel creditRefundAmount(Integer creditRefundAmount) {
    
    
    
    
    this.creditRefundAmount = creditRefundAmount.doubleValue();
    return this;
  }

   /**
   * Get creditRefundAmount
   * @return creditRefundAmount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Double getCreditRefundAmount() {
    return creditRefundAmount;
  }


  public void setCreditRefundAmount(Double creditRefundAmount) {
    
    
    
    this.creditRefundAmount = creditRefundAmount;
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
   * @return the RefundModel instance itself
   */
  public RefundModel putAdditionalProperty(String key, Object value) {
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
    RefundModel refundModel = (RefundModel) o;
    return Objects.equals(this.refundId, refundModel.refundId) &&
        Objects.equals(this.submitDate, refundModel.submitDate) &&
        Objects.equals(this.totalAmount, refundModel.totalAmount) &&
        Objects.equals(this.status, refundModel.status) &&
        Objects.equals(this.nonCreditRefundAmount, refundModel.nonCreditRefundAmount) &&
        Objects.equals(this.creditRefundAmount, refundModel.creditRefundAmount)&&
        Objects.equals(this.additionalProperties, refundModel.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(refundId, submitDate, totalAmount, status, nonCreditRefundAmount, creditRefundAmount, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RefundModel {\n");
    sb.append("    refundId: ").append(toIndentedString(refundId)).append("\n");
    sb.append("    submitDate: ").append(toIndentedString(submitDate)).append("\n");
    sb.append("    totalAmount: ").append(toIndentedString(totalAmount)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    nonCreditRefundAmount: ").append(toIndentedString(nonCreditRefundAmount)).append("\n");
    sb.append("    creditRefundAmount: ").append(toIndentedString(creditRefundAmount)).append("\n");
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
    openapiFields.add("RefundId");
    openapiFields.add("SubmitDate");
    openapiFields.add("TotalAmount");
    openapiFields.add("Status");
    openapiFields.add("NonCreditRefundAmount");
    openapiFields.add("CreditRefundAmount");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("SubmitDate");
    openapiRequiredFields.add("TotalAmount");
    openapiRequiredFields.add("Status");
    openapiRequiredFields.add("NonCreditRefundAmount");
    openapiRequiredFields.add("CreditRefundAmount");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to RefundModel
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!RefundModel.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in RefundModel is not found in the empty JSON string", RefundModel.openapiRequiredFields.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : RefundModel.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if ((jsonObj.get("RefundId") != null && !jsonObj.get("RefundId").isJsonNull()) && !jsonObj.get("RefundId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `RefundId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("RefundId").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!RefundModel.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'RefundModel' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<RefundModel> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(RefundModel.class));

       return (TypeAdapter<T>) new TypeAdapter<RefundModel>() {
           @Override
           public void write(JsonWriter out, RefundModel value) throws IOException {
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
                 else {
                   obj.add(entry.getKey(), gson.toJsonTree(entry.getValue()).getAsJsonObject());
                 }
               }
             }
             elementAdapter.write(out, obj);
           }

           @Override
           public RefundModel read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             RefundModel instance = thisAdapter.fromJsonTree(jsonObj);
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
  * Create an instance of RefundModel given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of RefundModel
  * @throws IOException if the JSON string is invalid with respect to RefundModel
  */
  public static RefundModel fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, RefundModel.class);
  }

 /**
  * Convert an instance of RefundModel to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
