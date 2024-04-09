# Workflows API

This document outlines how to call the new Leap workflows API.

## Authenticating Your Account

To access workflows, you first need to set up an account at `https://app.tryleap.ai` and generate an API key. This API key must be included in your request header under the `X-Api-Key` key to authenticate your account.

## Initiating a Workflow

Workflows can be initiated by calling the run method in the SDK, or sending a `POST` request to the following endpoint:

```text copy
https://api.workflows.tryleap.ai/v1/runs
```

Your request body must include the following;

```json copy
{
  "workflow_id": "123", // Unique ID of the workflow you want to run
  "webhook_url": "", // Optional: The URL to receive notifications of workflow completion or failure
  "inputs": {
    "foo": "bar" // Inputs you want to pass to the workflow
  }
}
```

## Understanding the Workflow Run Object

Once a workflow is initiated, the API will immediately respond with a Workflow Run object.

If you've specified a `webhook_url` when submitting your run, this object will also be sent in the body of a `POST` request once the workflow has completed or failed.

```typescript copy
{
  "id": string; // Unique ID of the workflow run
  "version_id": string; // Version of the workflow being run
  "status": "completed" | "running" | "failed"; // Current status of the workflow
  "created_at": string; // Date and time when the workflow was initiated
  "started_at": string | null; // Date and time when the workflow actually started, if applicable
  "ended_at": string | null; // Date and time when the workflow ended, if applicable
  "workflow_id": string; // ID of the workflow
  "error": string | null; // Any error that occurred during the workflow, or null if the workflow completed successfully
  "input": { // Inputs used in the workflow
   [key: string]: any;
 },
  "output": unknown | null; // Output of the workflow, or null if the workflow failed
}
```

This document should help you navigate and access Leap's new workflows. Feel free to contact us if you encounter issues or have additional questions.