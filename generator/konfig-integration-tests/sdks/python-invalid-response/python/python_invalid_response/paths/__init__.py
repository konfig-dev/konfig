# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_invalid_response.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    INVALIDSCALAR = "/invalid-scalar"
    INVALIDARRAY = "/invalid-array"
    INVALIDOBJECT = "/invalid-object"
    LISTINSTEADOFOBJECT = "/list-instead-of-object"
    OBJECTINSTEADOFLIST = "/object-instead-of-list"
    OBJECTINSTEADOFSCALAR = "/object-instead-of-scalar"
    LISTINSTEADOFSCALAR = "/list-instead-of-scalar"
