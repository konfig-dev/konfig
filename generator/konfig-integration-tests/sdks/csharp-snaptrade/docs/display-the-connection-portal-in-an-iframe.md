# Display the SnapTrade Connection Portal in an iframe

:::note
If your app uses React in its frontend, you can use our `React SDK` package to make it even easier to iframe the Connection Portal.

Here is a link to the SnapTrade React SDK: <https://www.npmjs.com/package/snaptrade-react>
:::

In order to make it easier and faster to use the SnapTrade Connection Portal, we added support for loading the Connection Portal in an `iframe`. This allows to make the connection experience more coherent so that users don't need to leave the flow until the OAuth linking step.

After generating a redirect link :api[Authentication_loginSnapTradeUser], use the following template to load the portal in an `iframe` in your own interface:

```html html
<Modal>
  <button className="close-button" onClick="{close}">
    <span aria-hidden>×</span>
  </button>
  <iframe
    id="snaptrade-connection-portal"
    src="{loginLink}"
    title="SnapTrade Connection Portal"
    allowfullscreen
  ></iframe>
</Modal>
```

The application is also designed to initiate the firing of three distinct events in response to certain specific occurrences. These occurrences and their respective event triggers are as follows:

- **Successful connection establishment:** 
- **Connection failure:** 
- **User tab closure:** 

See [our documentation on SnapTrade Connection Messaging](/docs/connection-messaging) for more information.

Example of how these events can be captured in a React app:

```typescript
useEffect(() => {
  const handleMessageEvent = (e: MessageEvent<unknown>) => {
    if (e.data) {
      const data = e.data;
      if (data.status === "SUCCESS") {
        const authorizationId = data.authorizationId;
        // do something here
      }

      if (data.status === "ERROR") {
        const { errorCode, statusCode, detail } = data;
        // do something here
      }

      if (e.data === "CLOSED") {
        // do something here
      }
    }
  };
  return () => {
    window.removeEventListener("message", handleMessageEvent, false);
  };
}, []);
```

