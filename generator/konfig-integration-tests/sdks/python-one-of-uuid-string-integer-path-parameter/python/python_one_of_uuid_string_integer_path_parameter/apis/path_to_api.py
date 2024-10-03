import typing_extensions

from python_one_of_uuid_string_integer_path_parameter.paths import PathValues
from python_one_of_uuid_string_integer_path_parameter.apis.paths.simple_endpoint_id import SimpleEndpointId

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SIMPLEENDPOINT_ID: SimpleEndpointId,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SIMPLEENDPOINT_ID: SimpleEndpointId,
    }
)
