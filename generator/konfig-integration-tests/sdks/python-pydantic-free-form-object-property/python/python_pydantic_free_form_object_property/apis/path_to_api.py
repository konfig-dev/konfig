import typing_extensions

from python_pydantic_free_form_object_property.paths import PathValues
from python_pydantic_free_form_object_property.apis.paths.simple_endpoint import SimpleEndpoint

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
