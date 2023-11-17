# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_async_timeout_with_top_level_operation.paths.simple_endpoint import Api

from python_async_timeout_with_top_level_operation.paths import PathValues

path = PathValues.SIMPLEENDPOINT