import json
from typing import TypedDict


class Customer(TypedDict):
    id: str
    name: str
    configuration: dict
    configuration_formatted: str


def get_customers(
    filter: str | None = None,
    customer_id: str | None = None,
    all_customers: bool = False,
) -> list[Customer]:
    customer_a_configuration = {
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
                                    "name_first": True,
                                    "name_last": True,
                                    "birth_date": True,
                                    "email_address": True,
                                }
                            ],
                            "optional": [{"name_middle": True}],
                            "or": [],
                        },
                    }
                ],
            }
        ],
    }
    customer_b_configuration = {
        "journey_token": "J-FRNanEWqvEfacVDAFeSE",
        "journey_version": "1",
        "timestamp": 1632500000,
        "data": [
            {
                "branch_name": "branch1",
                "workflows": [
                    {
                        "workflow_name": "workflow1",
                        "parameters": {
                            "required": [
                                {
                                    "business_name": True,
                                    "business_federal_eid": True,
                                    "business_registry_id": True,
                                }
                            ],
                            "optional": [{"business_website": True}],
                            "or": [],
                        },
                    }
                ],
            }
        ],
    }
    customers: list[Customer] = [
        {
            "id": "customer_a",
            "name": "Individual",
            "configuration": customer_a_configuration,
            "configuration_formatted": json.dumps(customer_a_configuration, indent=2),
        },
        {
            "id": "customer_b",
            "name": "Business",
            "configuration": customer_b_configuration,
            "configuration_formatted": json.dumps(customer_b_configuration, indent=2),
        },
    ]

    filtered: list[Customer] = []

    for customer in customers:
        if all_customers:
            filtered.append(customer)
            continue
        # if customer_id is provided, return the customer if it matches the customer_id
        if customer_id is not None:
            if customer_id != customer["id"]:
                continue
            filtered.append(customer)
            # break the loop if customer_id is provided
            break

        # if filter is provided, return the customer if it matches the filter
        if filter is None:
            continue
        if filter.lower() in customer["id"].lower():
            filtered.append(customer)
        elif filter.lower() in customer["name"].lower():
            filtered.append(customer)

    return filtered
