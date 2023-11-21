# coding: utf-8

# flake8: noqa

# import all models into this package
# if you have many models here with many references from one model to another this may
# raise a RecursionError
# to avoid this, import only the models that you directly need like:
# from from python_invalid_response.model.pet import Pet
# or import this package, but before doing it, use:
# import sys
# sys.setrecursionlimit(n)

from python_invalid_response.model.dict_instead_of_list_or_scalar import DictInsteadOfListOrScalar
from python_invalid_response.model.invalid_array import InvalidArray
from python_invalid_response.model.invalid_array_array import InvalidArrayArray
from python_invalid_response.model.invalid_object import InvalidObject
from python_invalid_response.model.invalid_object_object import InvalidObjectObject
from python_invalid_response.model.invalid_scalar import InvalidScalar
from python_invalid_response.model.list_instead_of_scalar import ListInsteadOfScalar
from python_invalid_response.model.object_instead_of_scalar import ObjectInsteadOfScalar
from python_invalid_response.model.only_one_property_is_invalid import OnlyOnePropertyIsInvalid
