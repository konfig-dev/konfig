import typing_extensions

from python_pydantic_raw_http_doc_with_top_level_configuration.paths import PathValues
from python_pydantic_raw_http_doc_with_top_level_configuration.apis.paths.simple_endpoint import SimpleEndpoint

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
