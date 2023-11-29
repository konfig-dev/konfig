import typing_extensions

from decentro_in_collections_client.apis.tags import TagValues
from decentro_in_collections_client.apis.tags.collections_api import CollectionsApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.COLLECTIONS: CollectionsApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.COLLECTIONS: CollectionsApi,
    }
)
