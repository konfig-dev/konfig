# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_pydantic_nested_union_with_list_and_str.paths.simple_endpoint import Api

from python_pydantic_nested_union_with_list_and_str.paths import PathValues

path = PathValues.SIMPLEENDPOINT