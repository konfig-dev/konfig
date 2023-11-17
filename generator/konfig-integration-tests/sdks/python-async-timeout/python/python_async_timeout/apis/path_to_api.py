import typing_extensions

from python_async_timeout.paths import PathValues
from python_async_timeout.apis.paths.simple_endpoint import SimpleEndpoint

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)
