# coding: utf-8

"""
    Carbon

    Connect external data to LLMs, no matter the source.

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from carbon import schemas  # noqa: F401


class SyncFilesRequest(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "ids",
            "data_source_id",
        }
        
        class properties:
            data_source_id = schemas.IntSchema
        
            @staticmethod
            def ids() -> typing.Type['SyncFilesRequestIds']:
                return SyncFilesRequestIds
            
            
            class tags(
                schemas.DictBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneFrozenDictMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[dict, frozendict.frozendict, None, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                    **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
                ) -> 'tags':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                        **kwargs,
                    )
            
            
            class chunk_size(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'chunk_size':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class chunk_overlap(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'chunk_overlap':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class skip_embedding_generation(
                schemas.BoolBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneBoolMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, bool, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'skip_embedding_generation':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
        
            @staticmethod
            def embedding_model() -> typing.Type['EmbeddingGeneratorsNullable']:
                return EmbeddingGeneratorsNullable
            
            
            class generate_sparse_vectors(
                schemas.BoolBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneBoolMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, bool, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'generate_sparse_vectors':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class prepend_filename_to_chunks(
                schemas.BoolBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneBoolMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, bool, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'prepend_filename_to_chunks':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            
            
            class max_items_per_chunk(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'max_items_per_chunk':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            __annotations__ = {
                "data_source_id": data_source_id,
                "ids": ids,
                "tags": tags,
                "chunk_size": chunk_size,
                "chunk_overlap": chunk_overlap,
                "skip_embedding_generation": skip_embedding_generation,
                "embedding_model": embedding_model,
                "generate_sparse_vectors": generate_sparse_vectors,
                "prepend_filename_to_chunks": prepend_filename_to_chunks,
                "max_items_per_chunk": max_items_per_chunk,
            }
    
    ids: 'SyncFilesRequestIds'
    data_source_id: MetaOapg.properties.data_source_id
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["data_source_id"]) -> MetaOapg.properties.data_source_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["ids"]) -> 'SyncFilesRequestIds': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["tags"]) -> MetaOapg.properties.tags: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["chunk_size"]) -> MetaOapg.properties.chunk_size: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["chunk_overlap"]) -> MetaOapg.properties.chunk_overlap: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["skip_embedding_generation"]) -> MetaOapg.properties.skip_embedding_generation: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["embedding_model"]) -> 'EmbeddingGeneratorsNullable': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["generate_sparse_vectors"]) -> MetaOapg.properties.generate_sparse_vectors: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["prepend_filename_to_chunks"]) -> MetaOapg.properties.prepend_filename_to_chunks: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["max_items_per_chunk"]) -> MetaOapg.properties.max_items_per_chunk: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["data_source_id", "ids", "tags", "chunk_size", "chunk_overlap", "skip_embedding_generation", "embedding_model", "generate_sparse_vectors", "prepend_filename_to_chunks", "max_items_per_chunk", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["data_source_id"]) -> MetaOapg.properties.data_source_id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["ids"]) -> 'SyncFilesRequestIds': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["tags"]) -> typing.Union[MetaOapg.properties.tags, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["chunk_size"]) -> typing.Union[MetaOapg.properties.chunk_size, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["chunk_overlap"]) -> typing.Union[MetaOapg.properties.chunk_overlap, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["skip_embedding_generation"]) -> typing.Union[MetaOapg.properties.skip_embedding_generation, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["embedding_model"]) -> typing.Union['EmbeddingGeneratorsNullable', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["generate_sparse_vectors"]) -> typing.Union[MetaOapg.properties.generate_sparse_vectors, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["prepend_filename_to_chunks"]) -> typing.Union[MetaOapg.properties.prepend_filename_to_chunks, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["max_items_per_chunk"]) -> typing.Union[MetaOapg.properties.max_items_per_chunk, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["data_source_id", "ids", "tags", "chunk_size", "chunk_overlap", "skip_embedding_generation", "embedding_model", "generate_sparse_vectors", "prepend_filename_to_chunks", "max_items_per_chunk", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        ids: 'SyncFilesRequestIds',
        data_source_id: typing.Union[MetaOapg.properties.data_source_id, decimal.Decimal, int, ],
        tags: typing.Union[MetaOapg.properties.tags, dict, frozendict.frozendict, None, schemas.Unset] = schemas.unset,
        chunk_size: typing.Union[MetaOapg.properties.chunk_size, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        chunk_overlap: typing.Union[MetaOapg.properties.chunk_overlap, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        skip_embedding_generation: typing.Union[MetaOapg.properties.skip_embedding_generation, None, bool, schemas.Unset] = schemas.unset,
        embedding_model: typing.Union['EmbeddingGeneratorsNullable', schemas.Unset] = schemas.unset,
        generate_sparse_vectors: typing.Union[MetaOapg.properties.generate_sparse_vectors, None, bool, schemas.Unset] = schemas.unset,
        prepend_filename_to_chunks: typing.Union[MetaOapg.properties.prepend_filename_to_chunks, None, bool, schemas.Unset] = schemas.unset,
        max_items_per_chunk: typing.Union[MetaOapg.properties.max_items_per_chunk, None, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'SyncFilesRequest':
        return super().__new__(
            cls,
            *args,
            ids=ids,
            data_source_id=data_source_id,
            tags=tags,
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
            skip_embedding_generation=skip_embedding_generation,
            embedding_model=embedding_model,
            generate_sparse_vectors=generate_sparse_vectors,
            prepend_filename_to_chunks=prepend_filename_to_chunks,
            max_items_per_chunk=max_items_per_chunk,
            _configuration=_configuration,
            **kwargs,
        )

from carbon.model.embedding_generators_nullable import EmbeddingGeneratorsNullable
from carbon.model.sync_files_request_ids import SyncFilesRequestIds