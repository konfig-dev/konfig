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
import com.konfigthis.splitit.client.model.AddressDataModel;
import com.konfigthis.splitit.client.model.EventsEndpointsModel;
import com.konfigthis.splitit.client.model.InitiateRedirectionEndpointsModel;
import com.konfigthis.splitit.client.model.PlanDataModel;
import com.konfigthis.splitit.client.model.ProcessingData;
import com.konfigthis.splitit.client.model.PurchaseMethod;
import com.konfigthis.splitit.client.model.ShopperData;
import com.konfigthis.splitit.client.model.ThreeDSData;
import com.konfigthis.splitit.client.model.UxSettingsModel;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

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
 * InstallmentPlanInitiateRequest
 */@javax.annotation.Generated(value = "Generated by https://konfigthis.com")
public class InstallmentPlanInitiateRequest {
  public static final String SERIALIZED_NAME_AUTO_CAPTURE = "AutoCapture";
  @SerializedName(SERIALIZED_NAME_AUTO_CAPTURE)
  private Boolean autoCapture;

  public static final String SERIALIZED_NAME_ATTEMPT3D_SECURE = "Attempt3dSecure";
  @SerializedName(SERIALIZED_NAME_ATTEMPT3D_SECURE)
  private Boolean attempt3dSecure;

  public static final String SERIALIZED_NAME_SHOPPER = "Shopper";
  @SerializedName(SERIALIZED_NAME_SHOPPER)
  private ShopperData shopper;

  public static final String SERIALIZED_NAME_PLAN_DATA = "PlanData";
  @SerializedName(SERIALIZED_NAME_PLAN_DATA)
  private PlanDataModel planData;

  public static final String SERIALIZED_NAME_BILLING_ADDRESS = "BillingAddress";
  @SerializedName(SERIALIZED_NAME_BILLING_ADDRESS)
  private AddressDataModel billingAddress;

  public static final String SERIALIZED_NAME_REDIRECT_URLS = "RedirectUrls";
  @SerializedName(SERIALIZED_NAME_REDIRECT_URLS)
  private InitiateRedirectionEndpointsModel redirectUrls;

  public static final String SERIALIZED_NAME_UX_SETTINGS = "UxSettings";
  @SerializedName(SERIALIZED_NAME_UX_SETTINGS)
  private UxSettingsModel uxSettings;

  public static final String SERIALIZED_NAME_EVENTS_ENDPOINTS = "EventsEndpoints";
  @SerializedName(SERIALIZED_NAME_EVENTS_ENDPOINTS)
  private EventsEndpointsModel eventsEndpoints;

  public static final String SERIALIZED_NAME_PROCESSING_DATA = "ProcessingData";
  @SerializedName(SERIALIZED_NAME_PROCESSING_DATA)
  private ProcessingData processingData;

  public InstallmentPlanInitiateRequest() {
  }

  public InstallmentPlanInitiateRequest autoCapture(Boolean autoCapture) {
    
    
    
    
    this.autoCapture = autoCapture;
    return this;
  }

   /**
   * Get autoCapture
   * @return autoCapture
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public Boolean getAutoCapture() {
    return autoCapture;
  }


  public void setAutoCapture(Boolean autoCapture) {
    
    
    
    this.autoCapture = autoCapture;
  }


  public InstallmentPlanInitiateRequest attempt3dSecure(Boolean attempt3dSecure) {
    
    
    
    
    this.attempt3dSecure = attempt3dSecure;
    return this;
  }

   /**
   * Get attempt3dSecure
   * @return attempt3dSecure
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getAttempt3dSecure() {
    return attempt3dSecure;
  }


  public void setAttempt3dSecure(Boolean attempt3dSecure) {
    
    
    
    this.attempt3dSecure = attempt3dSecure;
  }


  public InstallmentPlanInitiateRequest shopper(ShopperData shopper) {
    
    
    
    
    this.shopper = shopper;
    return this;
  }

   /**
   * Get shopper
   * @return shopper
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public ShopperData getShopper() {
    return shopper;
  }


  public void setShopper(ShopperData shopper) {
    
    
    
    this.shopper = shopper;
  }


  public InstallmentPlanInitiateRequest planData(PlanDataModel planData) {
    
    
    
    
    this.planData = planData;
    return this;
  }

   /**
   * Get planData
   * @return planData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public PlanDataModel getPlanData() {
    return planData;
  }


  public void setPlanData(PlanDataModel planData) {
    
    
    
    this.planData = planData;
  }


  public InstallmentPlanInitiateRequest billingAddress(AddressDataModel billingAddress) {
    
    
    
    
    this.billingAddress = billingAddress;
    return this;
  }

   /**
   * Get billingAddress
   * @return billingAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public AddressDataModel getBillingAddress() {
    return billingAddress;
  }


  public void setBillingAddress(AddressDataModel billingAddress) {
    
    
    
    this.billingAddress = billingAddress;
  }


  public InstallmentPlanInitiateRequest redirectUrls(InitiateRedirectionEndpointsModel redirectUrls) {
    
    
    
    
    this.redirectUrls = redirectUrls;
    return this;
  }

   /**
   * Get redirectUrls
   * @return redirectUrls
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public InitiateRedirectionEndpointsModel getRedirectUrls() {
    return redirectUrls;
  }


  public void setRedirectUrls(InitiateRedirectionEndpointsModel redirectUrls) {
    
    
    
    this.redirectUrls = redirectUrls;
  }


  public InstallmentPlanInitiateRequest uxSettings(UxSettingsModel uxSettings) {
    
    
    
    
    this.uxSettings = uxSettings;
    return this;
  }

   /**
   * Get uxSettings
   * @return uxSettings
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public UxSettingsModel getUxSettings() {
    return uxSettings;
  }


  public void setUxSettings(UxSettingsModel uxSettings) {
    
    
    
    this.uxSettings = uxSettings;
  }


  public InstallmentPlanInitiateRequest eventsEndpoints(EventsEndpointsModel eventsEndpoints) {
    
    
    
    
    this.eventsEndpoints = eventsEndpoints;
    return this;
  }

   /**
   * Get eventsEndpoints
   * @return eventsEndpoints
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public EventsEndpointsModel getEventsEndpoints() {
    return eventsEndpoints;
  }


  public void setEventsEndpoints(EventsEndpointsModel eventsEndpoints) {
    
    
    
    this.eventsEndpoints = eventsEndpoints;
  }


  public InstallmentPlanInitiateRequest processingData(ProcessingData processingData) {
    
    
    
    
    this.processingData = processingData;
    return this;
  }

   /**
   * Get processingData
   * @return processingData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public ProcessingData getProcessingData() {
    return processingData;
  }


  public void setProcessingData(ProcessingData processingData) {
    
    
    
    this.processingData = processingData;
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
   * @return the InstallmentPlanInitiateRequest instance itself
   */
  public InstallmentPlanInitiateRequest putAdditionalProperty(String key, Object value) {
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
    InstallmentPlanInitiateRequest installmentPlanInitiateRequest = (InstallmentPlanInitiateRequest) o;
    return Objects.equals(this.autoCapture, installmentPlanInitiateRequest.autoCapture) &&
        Objects.equals(this.attempt3dSecure, installmentPlanInitiateRequest.attempt3dSecure) &&
        Objects.equals(this.shopper, installmentPlanInitiateRequest.shopper) &&
        Objects.equals(this.planData, installmentPlanInitiateRequest.planData) &&
        Objects.equals(this.billingAddress, installmentPlanInitiateRequest.billingAddress) &&
        Objects.equals(this.redirectUrls, installmentPlanInitiateRequest.redirectUrls) &&
        Objects.equals(this.uxSettings, installmentPlanInitiateRequest.uxSettings) &&
        Objects.equals(this.eventsEndpoints, installmentPlanInitiateRequest.eventsEndpoints) &&
        Objects.equals(this.processingData, installmentPlanInitiateRequest.processingData)&&
        Objects.equals(this.additionalProperties, installmentPlanInitiateRequest.additionalProperties);
  }

  @Override
  public int hashCode() {
    return Objects.hash(autoCapture, attempt3dSecure, shopper, planData, billingAddress, redirectUrls, uxSettings, eventsEndpoints, processingData, additionalProperties);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InstallmentPlanInitiateRequest {\n");
    sb.append("    autoCapture: ").append(toIndentedString(autoCapture)).append("\n");
    sb.append("    attempt3dSecure: ").append(toIndentedString(attempt3dSecure)).append("\n");
    sb.append("    shopper: ").append(toIndentedString(shopper)).append("\n");
    sb.append("    planData: ").append(toIndentedString(planData)).append("\n");
    sb.append("    billingAddress: ").append(toIndentedString(billingAddress)).append("\n");
    sb.append("    redirectUrls: ").append(toIndentedString(redirectUrls)).append("\n");
    sb.append("    uxSettings: ").append(toIndentedString(uxSettings)).append("\n");
    sb.append("    eventsEndpoints: ").append(toIndentedString(eventsEndpoints)).append("\n");
    sb.append("    processingData: ").append(toIndentedString(processingData)).append("\n");
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
    openapiFields.add("AutoCapture");
    openapiFields.add("Attempt3dSecure");
    openapiFields.add("Shopper");
    openapiFields.add("PlanData");
    openapiFields.add("BillingAddress");
    openapiFields.add("RedirectUrls");
    openapiFields.add("UxSettings");
    openapiFields.add("EventsEndpoints");
    openapiFields.add("ProcessingData");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("AutoCapture");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to InstallmentPlanInitiateRequest
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (!InstallmentPlanInitiateRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON object is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in InstallmentPlanInitiateRequest is not found in the empty JSON string", InstallmentPlanInitiateRequest.openapiRequiredFields.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : InstallmentPlanInitiateRequest.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      // validate the optional field `Shopper`
      if (jsonObj.get("Shopper") != null && !jsonObj.get("Shopper").isJsonNull()) {
        ShopperData.validateJsonObject(jsonObj.getAsJsonObject("Shopper"));
      }
      // validate the optional field `PlanData`
      if (jsonObj.get("PlanData") != null && !jsonObj.get("PlanData").isJsonNull()) {
        PlanDataModel.validateJsonObject(jsonObj.getAsJsonObject("PlanData"));
      }
      // validate the optional field `BillingAddress`
      if (jsonObj.get("BillingAddress") != null && !jsonObj.get("BillingAddress").isJsonNull()) {
        AddressDataModel.validateJsonObject(jsonObj.getAsJsonObject("BillingAddress"));
      }
      // validate the optional field `RedirectUrls`
      if (jsonObj.get("RedirectUrls") != null && !jsonObj.get("RedirectUrls").isJsonNull()) {
        InitiateRedirectionEndpointsModel.validateJsonObject(jsonObj.getAsJsonObject("RedirectUrls"));
      }
      // validate the optional field `UxSettings`
      if (jsonObj.get("UxSettings") != null && !jsonObj.get("UxSettings").isJsonNull()) {
        UxSettingsModel.validateJsonObject(jsonObj.getAsJsonObject("UxSettings"));
      }
      // validate the optional field `EventsEndpoints`
      if (jsonObj.get("EventsEndpoints") != null && !jsonObj.get("EventsEndpoints").isJsonNull()) {
        EventsEndpointsModel.validateJsonObject(jsonObj.getAsJsonObject("EventsEndpoints"));
      }
      // validate the optional field `ProcessingData`
      if (jsonObj.get("ProcessingData") != null && !jsonObj.get("ProcessingData").isJsonNull()) {
        ProcessingData.validateJsonObject(jsonObj.getAsJsonObject("ProcessingData"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!InstallmentPlanInitiateRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'InstallmentPlanInitiateRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<InstallmentPlanInitiateRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(InstallmentPlanInitiateRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<InstallmentPlanInitiateRequest>() {
           @Override
           public void write(JsonWriter out, InstallmentPlanInitiateRequest value) throws IOException {
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
           public InstallmentPlanInitiateRequest read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             // store additional fields in the deserialized instance
             InstallmentPlanInitiateRequest instance = thisAdapter.fromJsonTree(jsonObj);
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
  * Create an instance of InstallmentPlanInitiateRequest given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of InstallmentPlanInitiateRequest
  * @throws IOException if the JSON string is invalid with respect to InstallmentPlanInitiateRequest
  */
  public static InstallmentPlanInitiateRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, InstallmentPlanInitiateRequest.class);
  }

 /**
  * Convert an instance of InstallmentPlanInitiateRequest to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
