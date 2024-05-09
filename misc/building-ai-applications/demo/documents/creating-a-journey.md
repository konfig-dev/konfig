## Creating a Journey

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
