import { Carbon } from "carbon-typescript-sdk";

// Generally this is done in the backend to avoid exposing API key to the client

const carbonWithApiKey = new Carbon({
  apiKey: "API_KEY",
  customerId: "CUSTOMER_ID",
});

const accessToken = await carbonWithApiKey.auth.getAccessToken();

// Once an access token is obtained, it can be passed to the frontend
// and used to instantiate the SDK client without an API key

const carbon = new Carbon({
  accessToken: accessToken.data.access_token,
});

// use SDK as usual
const whiteLabeling = await carbon.auth.getWhiteLabeling();
// etc.
