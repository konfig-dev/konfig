package com.konfigthis.splitit.client.api;

import com.konfigthis.splitit.client.ApiClient;
import com.konfigthis.splitit.client.model.AddressData;
import com.konfigthis.splitit.client.model.AddressDataModel;
import com.konfigthis.splitit.client.model.CardData;
import com.konfigthis.splitit.client.model.CheckInstallmentsEligibilityRequest;
import com.konfigthis.splitit.client.model.EventsEndpointsModel;
import com.konfigthis.splitit.client.model.IdentifierContract;
import com.konfigthis.splitit.client.model.InitiatePlanResponse;
import com.konfigthis.splitit.client.model.InitiateRedirectionEndpointsModel;
import com.konfigthis.splitit.client.model.InstallmentPlanCancelResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanCreateRequest;
import com.konfigthis.splitit.client.model.InstallmentPlanCreateResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanGetResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanInitiateRequest;
import com.konfigthis.splitit.client.model.InstallmentPlanRefundRequest;
import com.konfigthis.splitit.client.model.InstallmentPlanRefundResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanSearchResponse;
import com.konfigthis.splitit.client.model.InstallmentPlanUpdateRequestByIdentifier;
import com.konfigthis.splitit.client.model.InstallmentPlanUpdateResponse;
import com.konfigthis.splitit.client.model.InstallmentsEligibilityResponse;
import com.konfigthis.splitit.client.model.PaymentMethodModel;
import com.konfigthis.splitit.client.model.PlanData;
import com.konfigthis.splitit.client.model.PlanDataModel;
import com.konfigthis.splitit.client.model.ProcessingData;
import com.konfigthis.splitit.client.model.RedirectionEndpointsModel;
import com.konfigthis.splitit.client.model.RefundStrategy;
import com.konfigthis.splitit.client.model.ShippingStatus;
import com.konfigthis.splitit.client.model.ShippingStatus2;
import com.konfigthis.splitit.client.model.ShopperData;
import com.konfigthis.splitit.client.model.UpdateOrderRequest;
import com.konfigthis.splitit.client.model.UxSettingsModel;
import com.konfigthis.splitit.client.model.VerifyAuthorizationResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InstallmentPlanApi extends InstallmentPlanApiGenerated {

    public InstallmentPlanApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class CancelRequestBuilder extends CancelRequestBuilderGenerated {
        public CancelRequestBuilder(String installmentPlanNumber, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class CheckEligibilityRequestBuilder extends CheckEligibilityRequestBuilderGenerated {
        public CheckEligibilityRequestBuilder(String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class GetRequestBuilder extends GetRequestBuilderGenerated {
        public GetRequestBuilder(String installmentPlanNumber, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class PostRequestBuilder extends PostRequestBuilderGenerated {
        public PostRequestBuilder(Boolean autoCapture, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(autoCapture, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class Post2RequestBuilder extends Post2RequestBuilderGenerated {
        public Post2RequestBuilder(Boolean autoCapture, Boolean termsAndConditionsAccepted, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(autoCapture, termsAndConditionsAccepted, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class RefundRequestBuilder extends RefundRequestBuilderGenerated {
        public RefundRequestBuilder(double amount, String installmentPlanNumber, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(amount, installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class SearchRequestBuilder extends SearchRequestBuilderGenerated {
        public SearchRequestBuilder(String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class UpdateOrderRequestBuilder extends UpdateOrderRequestBuilderGenerated {
        public UpdateOrderRequestBuilder(String installmentPlanNumber, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class UpdateOrder2RequestBuilder extends UpdateOrder2RequestBuilderGenerated {
        public UpdateOrder2RequestBuilder(String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
    public class VerifyAuthorizationRequestBuilder extends VerifyAuthorizationRequestBuilderGenerated {
        public VerifyAuthorizationRequestBuilder(String installmentPlanNumber, String xSplititIdempotencyKey, String xSplititTouchPoint) {
            super(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
        }
    }
}
