# decentro-in-collections-python-sdk<a id="decentro-in-collections-python-sdk"></a>

Collections


[![PyPI](https://img.shields.io/badge/PyPI-v1.0.0-blue)](https://pypi.org/project/decentro-in-collections-python-sdk/1.0.0)
[![README.md](https://img.shields.io/badge/README-Click%20Here-green)](https://github.com/decentro-in/decentro-in-collections-sdk/tree/master/python#readme)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](https://decentro.tech)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Requirements](#requirements)
- [Installing](#installing)
- [Getting Started](#getting-started)
- [Async](#async)
- [Raw HTTP Response](#raw-http-response)
- [Reference](#reference)
  * [`decentro.collections.generate_payment_link`](#decentrocollectionsgenerate_payment_link)
  * [`decentro.collections.get_transaction_status`](#decentrocollectionsget_transaction_status)
  * [`decentro.collections.issue_collect_request`](#decentrocollectionsissue_collect_request)
  * [`decentro.collections.issue_upi_refund`](#decentrocollectionsissue_upi_refund)
  * [`decentro.collections.validate_upi_handle`](#decentrocollectionsvalidate_upi_handle)

<!-- tocstop -->

## Requirements<a id="requirements"></a>

Python >=3.7

## Installing<a id="installing"></a>

```sh
pip install decentro-in-collections-python-sdk==1.0.0
```

## Getting Started<a id="getting-started"></a>

```python
from pprint import pprint
from decentro_in_collections_client import Decentro, ApiException

decentro = Decentro(
    client_id="YOUR_API_KEY",
    client_secret="YOUR_API_KEY",
    module_secret="YOUR_API_KEY",
    provider_secret="YOUR_API_KEY",
)

try:
    # Generate payment link
    generate_payment_link_response = decentro.collections.generate_payment_link(
        reference_id="ABCDEF12345",
        payee_account="00000000000000000",
        amount=4,
        purpose_message="Welcome to Decentro",
        generate_qr=0,
        expiry_time=10,
        customized_qr_with_logo=0,
        generate_uri=0,
    )
    print(generate_payment_link_response)
except ApiException as e:
    print("Exception when calling CollectionsApi.generate_payment_link: %s\n" % e)
    pprint(e.body)
    if e.status == 400:
        pprint(e.body["decentroTxnId"])
        pprint(e.body["status"])
        pprint(e.body["responseCode"])
        pprint(e.body["message"])
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```

## Async<a id="async"></a>

`async` support is available by prepending `a` to any method.

```python
import asyncio
from pprint import pprint
from decentro_in_collections_client import Decentro, ApiException

decentro = Decentro(
    client_id="YOUR_API_KEY",
    client_secret="YOUR_API_KEY",
    module_secret="YOUR_API_KEY",
    provider_secret="YOUR_API_KEY",
)


async def main():
    try:
        # Generate payment link
        generate_payment_link_response = (
            await decentro.collections.agenerate_payment_link(
                reference_id="ABCDEF12345",
                payee_account="00000000000000000",
                amount=4,
                purpose_message="Welcome to Decentro",
                generate_qr=0,
                expiry_time=10,
                customized_qr_with_logo=0,
                generate_uri=0,
            )
        )
        print(generate_payment_link_response)
    except ApiException as e:
        print("Exception when calling CollectionsApi.generate_payment_link: %s\n" % e)
        pprint(e.body)
        if e.status == 400:
            pprint(e.body["decentroTxnId"])
            pprint(e.body["status"])
            pprint(e.body["responseCode"])
            pprint(e.body["message"])
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)


asyncio.run(main())
```

## Raw HTTP Response<a id="raw-http-response"></a>

To access raw HTTP response values, use the `.raw` namespace.

```python
from pprint import pprint
from decentro_in_collections_client import Decentro, ApiException

decentro = Decentro(
    client_id="YOUR_API_KEY",
    client_secret="YOUR_API_KEY",
    module_secret="YOUR_API_KEY",
    provider_secret="YOUR_API_KEY",
)

try:
    # Generate payment link
    generate_payment_link_response = decentro.collections.raw.generate_payment_link(
        reference_id="ABCDEF12345",
        payee_account="00000000000000000",
        amount=4,
        purpose_message="Welcome to Decentro",
        generate_qr=0,
        expiry_time=10,
        customized_qr_with_logo=0,
        generate_uri=0,
    )
    pprint(generate_payment_link_response.body)
    pprint(generate_payment_link_response.body["decentroTxnId"])
    pprint(generate_payment_link_response.body["status"])
    pprint(generate_payment_link_response.body["responseCode"])
    pprint(generate_payment_link_response.body["message"])
    pprint(generate_payment_link_response.body["data"])
    pprint(generate_payment_link_response.body["responseKey"])
    pprint(generate_payment_link_response.headers)
    pprint(generate_payment_link_response.status)
    pprint(generate_payment_link_response.round_trip_time)
except ApiException as e:
    print("Exception when calling CollectionsApi.generate_payment_link: %s\n" % e)
    pprint(e.body)
    if e.status == 400:
        pprint(e.body["decentroTxnId"])
        pprint(e.body["status"])
        pprint(e.body["responseCode"])
        pprint(e.body["message"])
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```


## Reference<a id="reference"></a>
### `decentro.collections.generate_payment_link`<a id="decentrocollectionsgenerate_payment_link"></a>

Generate payment link

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
generate_payment_link_response = decentro.collections.generate_payment_link(
    reference_id="ABCDEF12345",
    payee_account="00000000000000000",
    amount=4,
    purpose_message="Welcome to Decentro",
    generate_qr=0,
    expiry_time=10,
    customized_qr_with_logo=0,
    generate_uri=0,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reference_id: `str`<a id="reference_id-str"></a>

##### payee_account: `str`<a id="payee_account-str"></a>

##### amount: `Union[int, float]`<a id="amount-unionint-float"></a>

##### purpose_message: `str`<a id="purpose_message-str"></a>

##### generate_qr: `int`<a id="generate_qr-int"></a>

##### expiry_time: `int`<a id="expiry_time-int"></a>

##### customized_qr_with_logo: `int`<a id="customized_qr_with_logo-int"></a>

##### generate_uri: `int`<a id="generate_uri-int"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`GeneratePaymentLinkRequest`](./decentro_in_collections_client/type/generate_payment_link_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`GeneratePaymentLinkResponse`](./decentro_in_collections_client/pydantic/generate_payment_link_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/upi/link` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `decentro.collections.get_transaction_status`<a id="decentrocollectionsget_transaction_status"></a>

Get transaction status

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_transaction_status_response = decentro.collections.get_transaction_status(
    transaction_id="transaction_id_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### transaction_id: `str`<a id="transaction_id-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`GetTransactionStatusResponse`](./decentro_in_collections_client/pydantic/get_transaction_status_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/transaction/{transaction_id}/status` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `decentro.collections.issue_collect_request`<a id="decentrocollectionsissue_collect_request"></a>

Issue collect request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
issue_collect_request_response = decentro.collections.issue_collect_request(
    reference_id="ABCDEF12345",
    payer_upi="test001@abc",
    payee_account="00000000000000000",
    amount=1,
    purpose_message="Welcome to Decentro",
    expiry_time=30,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reference_id: `str`<a id="reference_id-str"></a>

##### payer_upi: `str`<a id="payer_upi-str"></a>

##### payee_account: `str`<a id="payee_account-str"></a>

##### amount: `Union[int, float]`<a id="amount-unionint-float"></a>

##### purpose_message: `str`<a id="purpose_message-str"></a>

##### expiry_time: `int`<a id="expiry_time-int"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`IssueCollectRequestRequest`](./decentro_in_collections_client/type/issue_collect_request_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`IssueCollectRequestResponse`](./decentro_in_collections_client/pydantic/issue_collect_request_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/collection` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `decentro.collections.issue_upi_refund`<a id="decentrocollectionsissue_upi_refund"></a>

Issue UPI Refund

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
issue_upi_refund_response = decentro.collections.issue_upi_refund(
    reference_id="ABCDEF12345",
    transaction_id="4CE9587AE3D143CDAC72E7D0CF14D028",
    bank_reference_number="111111111111",
    purpose_message="Welcome to Decentro",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reference_id: `str`<a id="reference_id-str"></a>

##### transaction_id: `str`<a id="transaction_id-str"></a>

##### bank_reference_number: `str`<a id="bank_reference_number-str"></a>

##### purpose_message: `str`<a id="purpose_message-str"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`IssueUpiRefundRequest`](./decentro_in_collections_client/type/issue_upi_refund_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`IssueUpiRefundResponse`](./decentro_in_collections_client/pydantic/issue_upi_refund_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/upi/refund` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `decentro.collections.validate_upi_handle`<a id="decentrocollectionsvalidate_upi_handle"></a>

Validate UPI handle

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
validate_upi_handle_response = decentro.collections.validate_upi_handle(
    reference_id="ABCDEF12345",
    upi_id="test001@abc",
    type="BASIC",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reference_id: `str`<a id="reference_id-str"></a>

##### upi_id: `str`<a id="upi_id-str"></a>

##### type: `str`<a id="type-str"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ValidateUpiHandleRequest`](./decentro_in_collections_client/type/validate_upi_handle_request.py)
#### 🔄 Return<a id="🔄-return"></a>

[`ValidateUpiHandleResponse`](./decentro_in_collections_client/pydantic/validate_upi_handle_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/vpa/validate` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


