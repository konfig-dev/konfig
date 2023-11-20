import typing_extensions

from python_invalid_response.paths import PathValues
from python_invalid_response.apis.paths.invalid_scalar import InvalidScalar
from python_invalid_response.apis.paths.invalid_array import InvalidArray
from python_invalid_response.apis.paths.invalid_object import InvalidObject
from python_invalid_response.apis.paths.only_one_property_is_invalid import OnlyOnePropertyIsInvalid
from python_invalid_response.apis.paths.object_instead_of_scalar import ObjectInsteadOfScalar
from python_invalid_response.apis.paths.list_instead_of_scalar import ListInsteadOfScalar

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.INVALIDSCALAR: InvalidScalar,
        PathValues.INVALIDARRAY: InvalidArray,
        PathValues.INVALIDOBJECT: InvalidObject,
        PathValues.ONLYONEPROPERTYISINVALID: OnlyOnePropertyIsInvalid,
        PathValues.OBJECTINSTEADOFSCALAR: ObjectInsteadOfScalar,
        PathValues.LISTINSTEADOFSCALAR: ListInsteadOfScalar,
    }
)

path_to_api = PathToApi(
    {
        PathValues.INVALIDSCALAR: InvalidScalar,
        PathValues.INVALIDARRAY: InvalidArray,
        PathValues.INVALIDOBJECT: InvalidObject,
        PathValues.ONLYONEPROPERTYISINVALID: OnlyOnePropertyIsInvalid,
        PathValues.OBJECTINSTEADOFSCALAR: ObjectInsteadOfScalar,
        PathValues.LISTINSTEADOFSCALAR: ListInsteadOfScalar,
    }
)
