# SnapTrade Connection Messaging: Handling Connection Messages on the Client-side

SnapTrade provides two main types of messages to facilitate the integration of its services. These messages include `SUCCESS` and `ERROR` messages, as well as a `CLOSED` message for users who decide not to continue with the connection process. The way in which these messages can be accessed depends on the implementation being used.

Implementation 1 - Using the [snaptrade-react](https://www.npmjs.com/package/snaptrade-react) SDK(iframe implementation):

Accessing messages is straight forward for partners who use the `snaptrade-react` SDK. The SDK provides access to the messages through callback functions. There are three different callbacks available to handle the different types of messages:

1. `onSuccess` - This function is executed when a user successfully connects their institution, and it returns the authorization ID associated with the new connection.

2. `onError` - This function is triggered when a user encounters an error while attempting to connect to their institution. The function returns an object containing both an error code, status code, and a detailed description of the error.

3. `onExit` - This function is triggered when a user closes the modal or exits the second tab (opened for making an oAuth connection) without successfully connecting to their institution.

Implementation 2 - Not using the snaptrade-react SDK:

Accessing messages through JavaScript is slightly more complex but still easy to implement. There are two ways to do this:

1. Using JavaScript in a regular webpage: In this case, partners can access the messages by listening for a message event and then parsing the data to determine which type of message it is. The code to do this might look something like this:

```js
window.addEventListener(
  "message",
  (event) => {
    if (
      e.data &&
      (e.origin === "https://app.snaptrade.com" ||
        e.origin === "https://connect.snaptrade.com")
    ) {
      const data = e.data;
      if (data.status === "SUCCESS") {
        const authorizationId = data.authorizationId;
        // Handle success message
      } else if (data.status === "ERROR") {
        const { errorCode, statusCode, detail } = data;
        // Handle error message
      } else if (e.data === "CLOSED") {
        // Handle closed message
      }
    }
  },
  false
);
```

2. Using React Native in WebView: In this scenario, partners can use the `WebView` component to display a webpage, and then use the `onMessage` prop to listen for message events.
