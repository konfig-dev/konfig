# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_pydantic_response_as_param.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    RETRIEVEEQUIPMENT = "/retrieve-equipment"
    ATTACKMONSTER = "/attack-monster"
