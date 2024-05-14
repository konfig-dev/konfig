from typing import TypedDict


class Operation(TypedDict):
    id: str
    base_path: str
    http_method: str
    path: str
    description: str
    summary: str


def get_operations(ids: list[str] | None = None) -> list[Operation]:
    operations: list[Operation] = [
        {
            "id": "/journeys/{journey_token}/applications:POST",
            "base_path": "https://demo-qasandbox.alloy.co/v1",
            "http_method": "POST",
            "path": "/journeys/{journey_token}/applications",
            "description": "Create a journey application for one or more entities.",
            "summary": "Create Journey Application",
        },
        {
            "id": "/journeys/{journey_token}/applications/{journey_application_token}:GET",
            "base_path": "https://demo-qasandbox.alloy.co/v1",
            "http_method": "GET",
            "path": "/journeys/{journey_token}/applications/{journey_application_token}",
            "description": "Returns relevant data associated with a journey application.",
            "summary": "Get Journey Application",
        },
        {
            "id": "/journeys/{journey_token}/parameters:GET",
            "base_path": "https://demo-qasandbox.alloy.co/v1",
            "http_method": "GET",
            "path": "/journeys/{journey_token}/parameters",
            "description": "This endpoint retrieves the required and optional parameters for all workflow nodes in the given Journey.",
            "summary": "Get Journey Parameters",
        },
        {
            "id": "/journeys/{journey_token}/applications/{journey_application_token}/review:POST",
            "base_path": "https://demo-qasandbox.alloy.co/v1",
            "http_method": "POST",
            "path": "/journeys/{journey_token}/applications/{journey_application_token}/review",
            "description": "Inform the system of the outcome of the manual review and submit review notes for a journey application.",
            "summary": "Manual Review Journey Application",
        },
        {
            "id": "/journeys/{journey_token}/applications/{journey_application_token}/note:POST",
            "base_path": "https://demo-qasandbox.alloy.co/v1",
            "http_method": "POST",
            "path": "/journeys/{journey_token}/applications/{journey_application_token}/note",
            "description": "Create a note associated with the specified Journey Application.",
            "summary": "Create Journey Application Note",
        },
        {
            "id": "/journeys/{journey_token}/applications/{journey_application_token}/rerun:POST",
            "base_path": "https://demo-qasandbox.alloy.co/v1",
            "http_method": "POST",
            "path": "/journeys/{journey_token}/applications/{journey_application_token}/rerun",
            "description": "Rerun a journey application with the option to alter the original payload or add/delete entities.",
            "summary": "Rerun Journey Application",
        },
    ]
    if ids:
        operations = [operation for operation in operations if operation["id"] in ids]
    return operations
