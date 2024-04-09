# Webhooks

Leap workflows currently supports two versions of webhooks, with v2 being the latest.

### Version 2 (latest)

Our v2 webhooks support defining your own output schema.

This means that when catching a webhook response, the `output` object shape will match the outputs that you configure inside of your workflow.



#### **Successful Run Example**

```json
{
  "id": "rnp_OegyoGJxj9lyk4xbtQ",
  "version_id": "vsp_shsgJaeiT1d8H9",
  "status": "completed",
  "created_at": "2023-12-30T19:35:10.428941+00:00",
  "started_at": "2023-12-30T19:35:12.028968+00:00",
  "ended_at": "2023-12-30T19:35:20.872681+00:00",
  "workflow_id": "wkf_RL2LDs8LNO4LI6",
  "error": null,
  "input": {
    "prompt": "8k portrait of a beatiful tuxedo cat sleeping on a bed, realistic, unlreal engine 5"
  },
  "output": {
    "imageUrl": ".../-PXO4eirXsolvofZLy-uo.jpeg"
  }
}
```

#### **Failed Run Example:**

```json
{
  "id": "rnp_dqsrbuAvpOIw1h48G2",
  "version_id": "vsp_vZhmfFZnF0Avb1",
  "status": "failed",
  "created_at": "2023-12-30T21:49:26.994177+00:00",
  "started_at": "2023-12-30T21:49:28.366564+00:00",
  "ended_at": null,
  "workflow_id": "wkf_RL2LDs8LNO4LI6",
  "error": "Variable 'proompt' not found. Available variables to use:\nproompt",
  "input": {
    "prompt": "8k portrait of a beatiful tuxedo cat sleeping on a bed, realistic, unlreal engine 5"
  },
  "output": null
}
```



### Version 1

If you created your workflow before Dec 30 2023, your workflow is likely set to still use the v1 schema for webhooks.&#x20;

In this version, the `output` object will contain the entire workflow context. This is often very verbose and can be hard to work with as it contains the full output of every step.

It is recommended that you upgrade to webhooks version 2.

#### Checking or Setting Webhook Version

Webhook versions are set per Workflow. This means you can have different Workflows using different versions and is something we do for backwards compatibility as we roll out changes to the webhook schema.

You can view your Workflow's active webhook version or upgrade it to a newer version by visiting the Webhook Settings page.


<figure><img src=".gitbook/assets/Screenshot 2023-12-30 at 1.22.13 PM.png" alt=""><figcaption></figcaption></figure>



