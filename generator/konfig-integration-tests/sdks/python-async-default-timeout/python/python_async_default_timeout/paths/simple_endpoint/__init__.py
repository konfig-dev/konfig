# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from python_async_default_timeout.paths.simple_endpoint import Api

from python_async_default_timeout.paths import PathValues

path = PathValues.SIMPLEENDPOINT