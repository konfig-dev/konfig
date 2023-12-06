import typing_extensions

from python_pydantic_response_as_param.apis.tags import TagValues
from python_pydantic_response_as_param.apis.tags.adventure_api import AdventureApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.ADVENTURE: AdventureApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.ADVENTURE: AdventureApi,
    }
)
