package splitit

import (
	"fmt"
	"testing"

	splitit "github.com/konfig-dev/splitit-go-sdk/go"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func Test_splitit_Simple(t *testing.T) {

	cfg := splitit.NewConfiguration()
	cfg.SetHost("http://127.0.0.1:4024")
	cfg.SetTokenUrl("http://127.0.0.1:4024/token")
	cfg.SetOAuthClientCredentials("dummy", "dummy")

	client := splitit.NewAPIClient(cfg)

	t.Run("Test Post", func(t *testing.T) {

		Currency := "USD"
		Email := "fake@email.com"
		AddressLine1 := "144 Union St"
		City := "Brooklyn"
		State := "North Dakota"
		Zip := "11231"
		Country := "United States"
		var NumberOfInstallments int32 = 10
		Attemp3dSecure := true

		installmentPlanCreateRequest := &splitit.InstallmentPlanInitiateRequest{
			Attempt3dSecure: &Attemp3dSecure,
			AutoCapture:     true,
			PlanData: &splitit.PlanDataModel{
				TotalAmount:          10.0,
				NumberOfInstallments: &NumberOfInstallments,
				Currency:             &Currency,
				PurchaseMethod:       splitit.PURCHASEMETHOD_IN_STORE,
			},
			Shopper: &splitit.ShopperData{
				Email: &Email,
			},
			BillingAddress: &splitit.AddressDataModel{
				AddressLine1: &AddressLine1,
				City:         &City,
				State:        &State,
				Zip:          &Zip,
				Country:      &Country,
			},
		}

		xSplititIdempotencyKey := "1234"
		xSplititTouchPoint := "1234"
		r := client.InstallmentPlanApi.Post(xSplititIdempotencyKey, xSplititTouchPoint, *installmentPlanCreateRequest)
		fmt.Printf("%+v\n", r)

		resp, httpRes, err := r.Execute()

		fmt.Printf("---\nResponse\n---\n%+v\n", resp)
		require.Nil(t, err)
		require.NotNil(t, resp)
		assert.Equal(t, 200, httpRes.StatusCode)
	})

}
