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


class ChunksAndEmbeddings(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "chunk_number",
            "chunk",
            "embedding",
        }
        
        class properties:
            
            
            class chunk_number(
                schemas.IntBase,
                schemas.NoneBase,
                schemas.Schema,
                schemas.NoneDecimalMixin
            ):
            
            
                def __new__(
                    cls,
                    *args: typing.Union[None, decimal.Decimal, int, ],
                    _configuration: typing.Optional[schemas.Configuration] = None,
                ) -> 'chunk_number':
                    return super().__new__(
                        cls,
                        *args,
                        _configuration=_configuration,
                    )
            chunk = schemas.StrSchema
        
            @staticmethod
            def embedding() -> typing.Type['ChunksAndEmbeddingsEmbedding']:
                return ChunksAndEmbeddingsEmbedding
            __annotations__ = {
                "chunk_number": chunk_number,
                "chunk": chunk,
                "embedding": embedding,
            }
    
    chunk_number: MetaOapg.properties.chunk_number
    chunk: MetaOapg.properties.chunk
    embedding: 'ChunksAndEmbeddingsEmbedding'
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["chunk_number"]) -> MetaOapg.properties.chunk_number: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["chunk"]) -> MetaOapg.properties.chunk: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["embedding"]) -> 'ChunksAndEmbeddingsEmbedding': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["chunk_number", "chunk", "embedding", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["chunk_number"]) -> MetaOapg.properties.chunk_number: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["chunk"]) -> MetaOapg.properties.chunk: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["embedding"]) -> 'ChunksAndEmbeddingsEmbedding': ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["chunk_number", "chunk", "embedding", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        chunk_number: typing.Union[MetaOapg.properties.chunk_number, None, decimal.Decimal, int, ],
        chunk: typing.Union[MetaOapg.properties.chunk, str, ],
        embedding: 'ChunksAndEmbeddingsEmbedding',
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ChunksAndEmbeddings':
        return super().__new__(
            cls,
            *args,
            chunk_number=chunk_number,
            chunk=chunk,
            embedding=embedding,
            _configuration=_configuration,
            **kwargs,
        )

from carbon.model.chunks_and_embeddings_embedding import ChunksAndEmbeddingsEmbedding
