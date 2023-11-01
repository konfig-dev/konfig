# coding: utf-8

"""
    Python Dataclass Responses API

    A simple API based on python dataclass responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
from pydantic import BaseModel, Field


class TestFetch400Response(BaseModel):
    error: str = Field(None)
