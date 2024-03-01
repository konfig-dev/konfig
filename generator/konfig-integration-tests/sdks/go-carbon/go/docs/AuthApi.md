# APIClient.AuthApi

All URIs are relative to *https://api.carbon.ai*

Method | Path | Description
------------- | ------------- | -------------
[**GetAccessToken**](AuthApi.md#GetAccessToken) | **Get** /auth/v1/access_token | Get Access Token
[**GetWhiteLabeling**](AuthApi.md#GetWhiteLabeling) | **Get** /auth/v1/white_labeling | Get White Labeling



## GetAccessToken

Get Access Token

### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    request := client.AuthApi.GetAccessToken(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.GetAccessToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GetAccessToken`: TokenResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.GetAccessToken`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `TokenResponse.GetAccessToken.AccessToken`: %v\n", resp.AccessToken)
    fmt.Fprintf(os.Stdout, "Response from `TokenResponse.GetAccessToken.RefreshToken`: %v\n", resp.RefreshToken)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWhiteLabeling

Get White Labeling



### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    client := carbon.NewAPIClient(configuration)

    request := client.AuthApi.GetWhiteLabeling(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthApi.GetWhiteLabeling``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GetWhiteLabeling`: WhiteLabelingResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthApi.GetWhiteLabeling`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `WhiteLabelingResponse.GetWhiteLabeling.RemoveBranding`: %v\n", resp.RemoveBranding)
    fmt.Fprintf(os.Stdout, "Response from `WhiteLabelingResponse.GetWhiteLabeling.Integrations`: %v\n", resp.Integrations)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

