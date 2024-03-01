package main

import (
	"fmt"

	carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
	// 1) Get an access token
	configuration := carbon.NewConfiguration()
	configuration.SetApiKey("API_KEY")
	configuration.SetCustomerId("CUSTOMER_ID")
	client := carbon.NewAPIClient(configuration)
	accessTokenRequest := client.AuthApi.GetAccessToken()
	accessTokenResponse, _, _ := accessTokenRequest.Execute()
	accessToken := accessTokenResponse.GetAccessToken()

	// 2) Use the access token to make requests
	configuration = carbon.NewConfiguration()
	configuration.SetAccessToken(accessToken)
	client = carbon.NewAPIClient(configuration)

	whiteLabelingRequest := client.AuthApi.GetWhiteLabeling()
	whiteLabelingResponse, _, _ := whiteLabelingRequest.Execute()
	integrations := whiteLabelingResponse.GetIntegrations()
	fmt.Println(integrations)
}
