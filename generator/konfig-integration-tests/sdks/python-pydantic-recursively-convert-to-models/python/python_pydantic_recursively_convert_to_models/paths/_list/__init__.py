# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_pydantic_recursively_convert_to_models.paths._list import Api

from python_pydantic_recursively_convert_to_models.paths import PathValues

path = PathValues.LIST