# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict

from carbon.pydantic.data_source_type import DataSourceType
from carbon.pydantic.embedding_generators import EmbeddingGenerators
from carbon.pydantic.external_file_sync_statuses import ExternalFileSyncStatuses
from carbon.pydantic.organization_user_files_to_sync_filters_external_file_ids import OrganizationUserFilesToSyncFiltersExternalFileIds
from carbon.pydantic.organization_user_files_to_sync_filters_ids import OrganizationUserFilesToSyncFiltersIds
from carbon.pydantic.organization_user_files_to_sync_filters_organization_user_data_source_id import OrganizationUserFilesToSyncFiltersOrganizationUserDataSourceId
from carbon.pydantic.organization_user_files_to_sync_filters_parent_file_ids import OrganizationUserFilesToSyncFiltersParentFileIds
from carbon.pydantic.organization_user_files_to_sync_filters_tags import OrganizationUserFilesToSyncFiltersTags

class OrganizationUserFilesToSyncFilters(BaseModel):
    tags: typing.Optional[OrganizationUserFilesToSyncFiltersTags] = Field(None, alias='tags')

    source: typing.Optional[typing.Union[DataSourceType, typing.List[DataSourceType]]] = Field(None, alias='source')

    name: typing.Optional[typing.Optional[str]] = Field(None, alias='name')

    tags_v2: typing.Optional[typing.Optional[typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]]] = Field(None, alias='tags_v2')

    ids: typing.Optional[OrganizationUserFilesToSyncFiltersIds] = Field(None, alias='ids')

    external_file_ids: typing.Optional[OrganizationUserFilesToSyncFiltersExternalFileIds] = Field(None, alias='external_file_ids')

    sync_statuses: typing.Optional[typing.Optional[typing.List[ExternalFileSyncStatuses]]] = Field(None, alias='sync_statuses')

    parent_file_ids: typing.Optional[OrganizationUserFilesToSyncFiltersParentFileIds] = Field(None, alias='parent_file_ids')

    organization_user_data_source_id: typing.Optional[OrganizationUserFilesToSyncFiltersOrganizationUserDataSourceId] = Field(None, alias='organization_user_data_source_id')

    embedding_generators: typing.Optional[typing.Optional[typing.List[EmbeddingGenerators]]] = Field(None, alias='embedding_generators')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )