import com.konfigthis.carbonai.*;

public class GettingStarted {
    public static void main(String[] args) {
        // 1) Get an access token for a customer
        Configuration configuration = new Configuration();
        configuration.apiKey = "YOUR API KEY";
        configuration.customerId = "YOUR CUSTOMER ID";
        Carbon carbon = new Carbon(configuration);

        TokenResponse token = null;
        try {
            token = carbon.auth.getAccessToken().execute();
        } catch (ApiException e) {
            e.printStackTrace();
        }

        // 2) Use the access token to authenticate moving forward
        Configuration configuration2 = new Configuration();
        configuration2.accessToken = token.getAccessToken();
        Carbon carbon2 = new Carbon(configuration2);

        // use SDK as usual
        WhiteLabelingResponse whiteLabeling = null;
        try {
            whiteLabeling = carbon2.auth.getWhiteLabeling().execute();
        } catch (ApiException e) {
            e.printStackTrace();
        }
        // etc.
    }
}