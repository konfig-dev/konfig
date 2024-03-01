package carbon

import (
	"fmt"
	"testing"

	carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func Test_carbon_(t *testing.T) {

	t.Run("Test GetAccessToken with apiKey and customerId", func(t *testing.T) {
		configuration := carbon.NewConfiguration()
		configuration.SetHost("http://127.0.0.1:4097")
		configuration.SetApiKey("API_KEY")
		configuration.SetCustomerId("CUSTOMER_ID")
		client := carbon.NewAPIClient(configuration)
		request := client.AuthApi.GetAccessToken()

		resp, httpRes, err := request.Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
	})

	t.Run("Test GetAccessToken with apiKey and customerId", func(t *testing.T) {
		configuration := carbon.NewConfiguration()
		configuration.SetHost("http://127.0.0.1:4097")
		configuration.SetAccessToken("ACCESS_TOKEN")
		client := carbon.NewAPIClient(configuration)
		request := client.AuthApi.GetAccessToken()

		resp, httpRes, err := request.Execute()

		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
	})

	t.Run("Test Getting Started Flow", func(t *testing.T) {
		// 1) Get an access token
		configuration := carbon.NewConfiguration()
		configuration.SetHost("http://127.0.0.1:4097")
		configuration.SetApiKey("API_KEY")
		configuration.SetCustomerId("CUSTOMER_ID")
		client := carbon.NewAPIClient(configuration)
		accessTokenRequest := client.AuthApi.GetAccessToken()
		accessTokenResponse, _, _ := accessTokenRequest.Execute()
		accessToken := accessTokenResponse.GetAccessToken()

		// 2) Use the access token to make requests
		configuration = carbon.NewConfiguration()
		configuration.SetHost("http://127.0.0.1:4097")
		configuration.SetAccessToken(accessToken)
		client = carbon.NewAPIClient(configuration)

		whiteLabelingRequest := client.AuthApi.GetWhiteLabeling()
		whiteLabelingResponse, _, _ := whiteLabelingRequest.Execute()
		integrations := whiteLabelingResponse.GetIntegrations()
		fmt.Println(integrations)
	})

}
