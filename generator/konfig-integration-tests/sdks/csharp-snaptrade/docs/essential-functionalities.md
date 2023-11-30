# Essential Functionalities

This section describes required functionalities for your implementation of SnapTrade to avoid product issues and ensure that your users have the best possible experience. 

## Ability to reconnect

There are a number of situations that may break a user's brokerage connection, such as brokerage API maintenance windows, unscheduled brokerage downtime, users’ credentials changes, etc.

Because of this, it is critical to ensure that you include a flow to reconnect a user's brokerage connection.

We make this easy by notifying you of broken connections via webhooks. See our related section on [How to Fix Broken Connections](/docs/fix-broken-connections) for more information.

## Ability to edit trade permissions

SnapTrade allows read-only access or trading access for brokerage connections. Making the user explicitly decide as part of the authentication flow helps them understand the nature of the connection they're creating, and ensures a good user experience.

## View and Delete Existing Connections

The ability to view and delete existing connections is critical to allow users to manage their authorizations, and to stay compliant with GDPR and privacy guidelines.

The following endpoints have the information you need for this:

- :api[Connections_listBrokerageAuthorizations]
- :api[Connections_removeBrokerageAuthorization]
