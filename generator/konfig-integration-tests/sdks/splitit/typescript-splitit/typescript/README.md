# splitit-web-typescript-sdk<a id="splitit-web-typescript-sdk"></a>

Splitit\'s Web API

[![npm](https://img.shields.io/badge/npm-v3.3.2-blue)](https://www.npmjs.com/package/splitit-web-typescript-sdk/v/3.3.2)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`typescriptsplitit.installmentPlan.cancel`](#typescriptsplititinstallmentplancancel)
  * [`typescriptsplitit.installmentPlan.checkEligibility`](#typescriptsplititinstallmentplancheckeligibility)
  * [`typescriptsplitit.installmentPlan.get`](#typescriptsplititinstallmentplanget)
  * [`typescriptsplitit.installmentPlan.post`](#typescriptsplititinstallmentplanpost)
  * [`typescriptsplitit.installmentPlan.post2`](#typescriptsplititinstallmentplanpost2)
  * [`typescriptsplitit.installmentPlan.refund`](#typescriptsplititinstallmentplanrefund)
  * [`typescriptsplitit.installmentPlan.search`](#typescriptsplititinstallmentplansearch)
  * [`typescriptsplitit.installmentPlan.updateOrder`](#typescriptsplititinstallmentplanupdateorder)
  * [`typescriptsplitit.installmentPlan.updateOrder2`](#typescriptsplititinstallmentplanupdateorder2)
  * [`typescriptsplitit.installmentPlan.verifyAuthorization`](#typescriptsplititinstallmentplanverifyauthorization)

<!-- tocstop -->

## Installation<a id="installation"></a>

<table>
<tr>
<th width="292px"><code>npm</code></th>
<th width="293px"><code>pnpm</code></th>
<th width="292px"><code>yarn</code></th>
</tr>
<tr>
<td>

```bash
npm i splitit-web-typescript-sdk
```

</td>
<td>

```bash
pnpm i splitit-web-typescript-sdk
```

</td>
<td>

```bash
yarn add splitit-web-typescript-sdk
```

</td>
</tr>
</table>

## Getting Started<a id="getting-started"></a>

```typescript
import { TypescriptSplitit } from "splitit-web-typescript-sdk";

const typescriptsplitit = new TypescriptSplitit({
  // Defining the base path is optional and defaults to https://web-api-v3.production.splitit.com
  // basePath: "https://web-api-v3.production.splitit.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const cancelResponse = await typescriptsplitit.installmentPlan.cancel({
  installmentPlanNumber: "installmentPlanNumber_example",
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
});

console.log(cancelResponse);
```

## Reference<a id="reference"></a>


### `typescriptsplitit.installmentPlan.cancel`<a id="typescriptsplititinstallmentplancancel"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelResponse = await typescriptsplitit.installmentPlan.cancel({
  installmentPlanNumber: "installmentPlanNumber_example",
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `string`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanCancelResponse](./models/installment-plan-cancel-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.checkEligibility`<a id="typescriptsplititinstallmentplancheckeligibility"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkEligibilityResponse =
  await typescriptsplitit.installmentPlan.checkEligibility({
    xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
    xSplititTouchPoint: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### PlanData: [`PlanData`](./models/plan-data.ts)<a id="plandata-plandatamodelsplan-datats"></a>

##### CardDetails: [`CardData`](./models/card-data.ts)<a id="carddetails-carddatamodelscard-datats"></a>

##### BillingAddress: [`AddressData`](./models/address-data.ts)<a id="billingaddress-addressdatamodelsaddress-datats"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentsEligibilityResponse](./models/installments-eligibility-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/check-eligibility` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.get`<a id="typescriptsplititinstallmentplanget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await typescriptsplitit.installmentPlan.get({
  installmentPlanNumber: "installmentPlanNumber_example",
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `string`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanGetResponse](./models/installment-plan-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.post`<a id="typescriptsplititinstallmentplanpost"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const postResponse = await typescriptsplitit.installmentPlan.post({
  xSplititTestMode: "None",
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
  AutoCapture: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### AutoCapture: `boolean`<a id="autocapture-boolean"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### Attempt3dSecure: `boolean`<a id="attempt3dsecure-boolean"></a>

##### Shopper: [`ShopperData`](./models/shopper-data.ts)<a id="shopper-shopperdatamodelsshopper-datats"></a>

##### PlanData: [`PlanDataModel`](./models/plan-data-model.ts)<a id="plandata-plandatamodelmodelsplan-data-modelts"></a>

##### BillingAddress: [`AddressDataModel`](./models/address-data-model.ts)<a id="billingaddress-addressdatamodelmodelsaddress-data-modelts"></a>

##### RedirectUrls: [`InitiateRedirectionEndpointsModel`](./models/initiate-redirection-endpoints-model.ts)<a id="redirecturls-initiateredirectionendpointsmodelmodelsinitiate-redirection-endpoints-modelts"></a>

##### UxSettings: [`UxSettingsModel`](./models/ux-settings-model.ts)<a id="uxsettings-uxsettingsmodelmodelsux-settings-modelts"></a>

##### EventsEndpoints: [`EventsEndpointsModel`](./models/events-endpoints-model.ts)<a id="eventsendpoints-eventsendpointsmodelmodelsevents-endpoints-modelts"></a>

##### ProcessingData: [`ProcessingData`](./models/processing-data.ts)<a id="processingdata-processingdatamodelsprocessing-datats"></a>

##### xSplititTestMode: `'None' | 'Regular' | 'Fast' | 'Automation'`<a id="xsplitittestmode-none--regular--fast--automation"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InitiatePlanResponse](./models/initiate-plan-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/initiate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.post2`<a id="typescriptsplititinstallmentplanpost2"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const post2Response = await typescriptsplitit.installmentPlan.post2({
  xSplititTestMode: "None",
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
  AutoCapture: true,
  TermsAndConditionsAccepted: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### AutoCapture: `boolean`<a id="autocapture-boolean"></a>

##### TermsAndConditionsAccepted: `boolean`<a id="termsandconditionsaccepted-boolean"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### Attempt3dSecure: `boolean`<a id="attempt3dsecure-boolean"></a>

##### Shopper: [`ShopperData`](./models/shopper-data.ts)<a id="shopper-shopperdatamodelsshopper-datats"></a>

##### PlanData: [`PlanDataModel`](./models/plan-data-model.ts)<a id="plandata-plandatamodelmodelsplan-data-modelts"></a>

##### BillingAddress: [`AddressDataModel`](./models/address-data-model.ts)<a id="billingaddress-addressdatamodelmodelsaddress-data-modelts"></a>

##### PaymentMethod: [`PaymentMethodModel`](./models/payment-method-model.ts)<a id="paymentmethod-paymentmethodmodelmodelspayment-method-modelts"></a>

##### RedirectUrls: [`RedirectionEndpointsModel`](./models/redirection-endpoints-model.ts)<a id="redirecturls-redirectionendpointsmodelmodelsredirection-endpoints-modelts"></a>

##### ProcessingData: [`ProcessingData`](./models/processing-data.ts)<a id="processingdata-processingdatamodelsprocessing-datats"></a>

##### EventsEndpoints: [`EventsEndpointsModel`](./models/events-endpoints-model.ts)<a id="eventsendpoints-eventsendpointsmodelmodelsevents-endpoints-modelts"></a>

##### xSplititTestMode: `'None' | 'Regular' | 'Fast' | 'Automation'`<a id="xsplitittestmode-none--regular--fast--automation"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanCreateResponse](./models/installment-plan-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.refund`<a id="typescriptsplititinstallmentplanrefund"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refundResponse = await typescriptsplitit.installmentPlan.refund({
  installmentPlanNumber: "installmentPlanNumber_example",
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
  Amount: 3.14,
  RefundStrategy: "FutureInstallmentsFirst",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Amount: `number`<a id="amount-number"></a>

##### installmentPlanNumber: `string`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### RefundStrategy:<a id="refundstrategy"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanRefundResponse](./models/installment-plan-refund-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/refund` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.search`<a id="typescriptsplititinstallmentplansearch"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchResponse = await typescriptsplitit.installmentPlan.search({
  xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
  xSplititTouchPoint: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### installmentPlanNumber: `string`<a id="installmentplannumber-string"></a>

##### refOrderNumber: `string`<a id="refordernumber-string"></a>

##### extendedParams: Record<string, `string`><a id="extendedparams-record"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanSearchResponse](./models/installment-plan-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.updateOrder`<a id="typescriptsplititinstallmentplanupdateorder"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrderResponse = await typescriptsplitit.installmentPlan.updateOrder(
  {
    installmentPlanNumber: "installmentPlanNumber_example",
    xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
    xSplititTouchPoint: "",
    ShippingStatus: "Pending",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `string`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### TrackingNumber: `string`<a id="trackingnumber-string"></a>

##### RefOrderNumber: `string`<a id="refordernumber-string"></a>

##### ShippingStatus:<a id="shippingstatus"></a>

##### Capture: `boolean`<a id="capture-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanUpdateResponse](./models/installment-plan-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/updateorder` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.updateOrder2`<a id="typescriptsplititinstallmentplanupdateorder2"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOrder2Response =
  await typescriptsplitit.installmentPlan.updateOrder2({
    xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
    xSplititTouchPoint: "",
    ShippingStatus: "Shipped",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### RefOrderNumber: `string`<a id="refordernumber-string"></a>

##### TrackingNumber: `string`<a id="trackingnumber-string"></a>

##### Capture: `boolean`<a id="capture-boolean"></a>

##### ShippingStatus:<a id="shippingstatus"></a>

##### Identifier: [`IdentifierContract`](./models/identifier-contract.ts)<a id="identifier-identifiercontractmodelsidentifier-contractts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanUpdateResponse](./models/installment-plan-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/updateorder` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `typescriptsplitit.installmentPlan.verifyAuthorization`<a id="typescriptsplititinstallmentplanverifyauthorization"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyAuthorizationResponse =
  await typescriptsplitit.installmentPlan.verifyAuthorization({
    installmentPlanNumber: "installmentPlanNumber_example",
    xSplititIdempotencyKey: "xSplititIdempotencyKey_example",
    xSplititTouchPoint: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `string`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `string`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `string`<a id="xsplitittouchpoint-string"></a>

TouchPoint

#### 🔄 Return<a id="🔄-return"></a>

[VerifyAuthorizationResponse](./models/verify-authorization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/verifyauthorization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
