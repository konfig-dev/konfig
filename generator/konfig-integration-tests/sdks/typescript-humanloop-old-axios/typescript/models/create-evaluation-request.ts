/*
Humanloop API

The Humanloop API allows you to interact with Humanloop from your product or service.

You can do this through HTTP requests from any language or via our official Python or TypeScript SDK.

To install the official [Python SDK](https://pypi.org/project/humanloop/), run the following command:

```bash
pip install humanloop
```

To install the official [TypeScript SDK](https://www.npmjs.com/package/humanloop), run the following command:

```bash
npm i humanloop
```

---

Guides and further details about key concepts can be found in [our docs](https://docs.humanloop.com/).

The version of the OpenAPI document: 4.0.1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProviderApiKeys } from './provider-api-keys';

/**
 * 
 * @export
 * @interface CreateEvaluationRequest
 */
export interface CreateEvaluationRequest {
    /**
     * ID of the config to evaluate. Starts with `config_`.
     * @type {string}
     * @memberof CreateEvaluationRequest
     */
    'config_id': string;
    /**
     * IDs of evaluators to run on the dataset. IDs start with `evfn_`
     * @type {Array<string>}
     * @memberof CreateEvaluationRequest
     */
    'evaluator_ids': Array<string>;
    /**
     * ID of the dataset to use in this evaluation. Starts with `evts_`.
     * @type {string}
     * @memberof CreateEvaluationRequest
     */
    'dataset_id': string;
    /**
     * API keys required by each provider to make API calls. The API keys provided here are not stored by Humanloop. If not specified here, Humanloop will fall back to the key saved to your organization. Ensure you provide an API key for the provider for the model config you are evaluating, or have one saved to your organization.
     * @type {ProviderApiKeys}
     * @memberof CreateEvaluationRequest
     */
    'provider_api_keys'?: ProviderApiKeys;
}

