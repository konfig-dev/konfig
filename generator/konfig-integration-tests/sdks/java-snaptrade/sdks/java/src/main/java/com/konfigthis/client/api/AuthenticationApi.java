package com.konfigthis.client.api;

import com.konfigthis.client.ApiClient;
import com.konfigthis.client.model.DeleteUserResponse;
import com.konfigthis.client.model.EncryptedResponse;
import com.konfigthis.client.model.SnapTradeLoginUserRequestBody;
import com.konfigthis.client.model.SnapTradeRegisterUserRequestBody;
import com.konfigthis.client.model.UserIDandSecret;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuthenticationApi extends AuthenticationApiGenerated {

    public AuthenticationApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class DeleteSnapTradeUserRequestBuilder extends DeleteSnapTradeUserRequestBuilderGenerated {
        public DeleteSnapTradeUserRequestBuilder(String userId) {
            super(userId);
        }
    }
    public class GetUserJWTRequestBuilder extends GetUserJWTRequestBuilderGenerated {
        public GetUserJWTRequestBuilder(String userId, String userSecret) {
            super(userId, userSecret);
        }
    }
    public class ListSnapTradeUsersRequestBuilder extends ListSnapTradeUsersRequestBuilderGenerated {
        public ListSnapTradeUsersRequestBuilder() {
            super();
        }
    }
    public class LoginSnapTradeUserRequestBuilder extends LoginSnapTradeUserRequestBuilderGenerated {
        public LoginSnapTradeUserRequestBuilder(String userId, String userSecret) {
            super(userId, userSecret);
        }
    }
    public class RegisterSnapTradeUserRequestBuilder extends RegisterSnapTradeUserRequestBuilderGenerated {
        public RegisterSnapTradeUserRequestBuilder() {
            super();
        }
    }
    public class ResetSnapTradeUserSecretRequestBuilder extends ResetSnapTradeUserSecretRequestBuilderGenerated {
        public ResetSnapTradeUserSecretRequestBuilder() {
            super();
        }
    }
}
