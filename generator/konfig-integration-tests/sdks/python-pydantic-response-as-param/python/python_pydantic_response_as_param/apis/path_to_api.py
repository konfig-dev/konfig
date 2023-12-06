import typing_extensions

from python_pydantic_response_as_param.paths import PathValues
from python_pydantic_response_as_param.apis.paths.retrieve_equipment import RetrieveEquipment
from python_pydantic_response_as_param.apis.paths.attack_monster import AttackMonster

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.RETRIEVEEQUIPMENT: RetrieveEquipment,
        PathValues.ATTACKMONSTER: AttackMonster,
    }
)

path_to_api = PathToApi(
    {
        PathValues.RETRIEVEEQUIPMENT: RetrieveEquipment,
        PathValues.ATTACKMONSTER: AttackMonster,
    }
)
