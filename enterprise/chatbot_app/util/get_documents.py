from typing import TypedDict


class Document(TypedDict):
    id: str
    name: str
    content: str


def get_documents(ids: list[str] | None = None) -> list[Document]:
    documents = []
    documents.append(
        {
            "id": "creating_a_journey",
            "name": "creating-a-journey.md",
            "content": """## Creating a Journey

Depending on the workflow that you configured in your application, the `Create
Journey Application` endpoint will expect a set of parameters. To know which parameters you need
to pass in, you can use the `Get Journey Parameters` endpoint.

The `Get Journey Parameters` response body will contain a JSON based on the following schema:

```yaml
type: object
properties:
  journey_token:
    type: string
  journey_version:
    type: string
  timestamp:
    type: integer
  data:
    type: array
    items:
      type: object
      properties:
        branch_name:
          type: string
        workflows:
          type: array
          items:
            type: object
            properties:
              workflow_name:
                type: string
              parameters:
                type: object
                properties:
                  required:
                    type: array
                    items:
                      type: object
                  optional:
                    type: array
                    items:
                      type: object
                  or:
                    type: array
                    items:
                      type: object
```

For example if the response from the `Get Journey Parameters` endpoint is:

```json
{
  "journey_token": "J-VCQoADBJxeHtmdAvFqoS",
  "journey_version": "1",
  "timestamp": 1632400000,
  "data": [
    {
      "branch_name": "branch1",
      "workflows": [
        {
          "workflow_name": "workflow1",
          "parameters": {
            "required": [
              {
                "gender": true,
                "addresses": {
                  "state": true
                }
              }
            ],
            "optional": [
              {
                "document_license": true
              }
            ],
            "or": []
          }
        }
      ]
    }
  ]
}
```

Then you will need to always pass the `required` parameters in the `Create
Journey Application` endpoint under the `entities.data` object. In the above
example, the `required` parameters are `gender` and `addresses.state`.
""",
        }
    )
    documents.append(
        {
            "id": "integrating_with_journeys",
            "name": "Integrating with Journeys",
            "content": """# Integration

Journeys are designed to provide a synchronous response to allow you to provide feedback, next steps, or a final decision to your users.

They are accompanied by Webhooks for processing asynchronous actions that require the user to leave and later return to the process, such as Manual Reviews, and for reliable and resilient processing of events into your system of record. For examples and definitions of each journey event, please see Journeys Events.

Create an Application via API
It's now time to create your Application by making a POST request to this endpoint:

developer.alloy.com
developer.alloy.com
Create Journey Application
The Sandbox URL starts with: https://sandbox.alloy.co
The Production URL starts with: https://api.alloy.co
""",
        }
    )
    documents.append(
        {
            "id": "rerunning_journey_applications",
            "name": "Rerunning Journey Applications",
            "content": """# Rerunning Journey Applications

In certain cases, you may want to rerun a particular Journey Application in order to retrieve an updated or corrected outcome; for example, if the application terminated in an error status due to a Journey misconfiguration, or if one of the data vendors in an underlying workflow fails to execute.

## Initiating a Rerun

You can initiate a rerun for a Journey Application either through the Application Queue dashboard or via the Rerun Journey Application endpoint. When a rerun is initiated, Alloy will generate a started_rerun_application event for the original Journey Application, which is sent via webhook and appended to the _embedded.events[] array in the API response:

```json
{
    "_embedded": {
        ...
        "events": [
            ...
            {
                "journey_application_event_token": "22752065",
                "journey_application_token": "JA-8amRtBU3M98EWa4Hq8j7",
                "type": "started_rerun_application",
                "timestamp": 1691764389137,
                "entity_token": null,
                "entity_application_token": null,
                "rerun_journey_application_token": "JA-XnOSwyRTCqgrj6dNvCBw",
                "_embedded": {
                    "node": {
                        "id": null,
                        "name": null,
                        "type": null
                    }
                },
                "_links": {}
            }
        ],
    }
}
```
Linking Reruns back to Root and Previous Journey Applications
If a Journey Application is created via rerun, the API response will contain data about where the Journey Application originated from in the _embedded.rerun section:

```json
{
    ...
    "_embedded": {
        "rerun": {
            "initiated_by": "api",
            "previous_journey_application_token": "JA-8amRtBU3M98EWa4Hq8j7",
            "root_external_group_id": "8331a098-4238-4e26-bbdf-9a5a103ce509",
            "root_journey_application_token": "JA-8amRtBU3M98EWa4Hq8j7"
        },
        ...
    }
}
```
If multiple reruns are initiated from the same Journey Application in a chain, the previous_ Journey Application fields will reference the source Journey Application from which the rerun directly originated from. The root_ Journey Application fields will always reference the first Journey Application in the chain, before any reruns were initiated. Similarly, the started_rerun_application webhook/event will be appended to both the previous and root Journey Applications.

If there's only one rerun in the chain, the previous and root Journey Application will be the same.
""",
        }
    )
    documents.append(
        {
            "id": "additional_functionality_in_journeys",
            "name": "Additional Functionality in Journeys",
            "content": """# Additional Functionality

Adding In Additional Entities: If you don't have all the entities you want to
include in your application up front, you can add the field
do-await-additional-entities : true to your payload to the initial POST request.
This will put the Journey into a state where the application will not enter
reconciliation conditions until you have told us you are done sending entities.

Call a Non-Active Version of Your Journey: If you want to make an API call to a
version of your Journey which is not currently set as the active version, you
can use the header alloy-journey-version, with the number of the version as the
value.
""",
        }
    )
    documents.append(
        {
            "id": "welcome_to_alloy",
            "name": "Welcome to Alloy",
            "content": """# Welcome to Alloy

Alloy is the Identity Decisioning Platform that helps banks and fintech companies automate their decisions for onboarding, transaction monitoring and credit underwriting.

Build together using the Alloy API

Our single-API platform connects you and other clients like Gemini, Marqeta and Ally Bank to multiple data sources that result in the ability to make better fraud, risk and compliance decisions.

Here, you'll find comprehensive guides and documentation to help you integrate with Alloy quickly and seamlessly.
""",
        }
    )
    documents = (
        [document for document in documents if document["id"] in ids]
        if ids
        else documents
    )
    return documents
