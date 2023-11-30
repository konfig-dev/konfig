# Ratelimiting

The SnapTrade API uses a number of safety mechanisms to protect against bursts of incoming traffic and help maximize its stability.

Sending many requests in quick succession might trigger error responses that show up as HTTP status code 429.

Every SnapTrade client is ratelimited to 100 requests per minute by default. If you have a large number of users and would like to request a higher ratelimit, please contact your Customer Success Manager.

## Common Causes and Mitigations

There are a number of situations that may cause your ratelimiting to kick in. Here are a few scenarios and suggested mitigations:

- **Aggressive syncs**: syncing user portfolios all-at-once will increase the chance that you hit your ratelimit threshold. To avoid 429s, these data syncs should be spaced out over a period of time.
- **Increased user signup volumes**: for example if you make an announcement to your users that a new integration is available with SnapTrade. To prevent hitting ratelimits, it is prudent to space out these requests so users onboard over a period of time.

## Best Practices for Handling 429s

You should add logic to your integration to watch for `429` responses from our API, and handle them with a retry mechanism.

The retry mechanism should use exponential backoff, and ideally have some randomness to prevent [thundering herd problems](https://en.wikipedia.org/wiki/Thundering_herd_problem).
