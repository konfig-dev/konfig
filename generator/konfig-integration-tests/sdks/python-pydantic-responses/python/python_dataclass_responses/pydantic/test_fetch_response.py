from pydantic import BaseModel
from typing import Optional


class TestFetchResponse(BaseModel):
    # Description of property A.
    propertyA: Optional[str]

    # Description of property B.
    propertyB: Optional[int]

    # Description of property C.
    propertyC: Optional[bool]