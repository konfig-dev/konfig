# coding: utf-8
"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from python_pydantic_response_as_param.paths.attack_monster.post import AttackMonster
from python_pydantic_response_as_param.paths.retrieve_equipment.get import RetrieveEquipment
from python_pydantic_response_as_param.apis.tags.adventure_api_raw import AdventureApiRaw


class AdventureApiGenerated(
    AttackMonster,
    RetrieveEquipment,
):
    """NOTE:
    This class is auto generated by Konfig (https://konfigthis.com)
    """
    raw: AdventureApiRaw

    def __init__(self, api_client=None):
        super().__init__(api_client)
        self.raw = AdventureApiRaw(api_client)