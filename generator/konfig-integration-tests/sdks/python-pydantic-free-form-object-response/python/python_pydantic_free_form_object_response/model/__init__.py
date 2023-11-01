# we can not import model classes here because that would create a circular
# reference which would not work in python2
# do not import all models into this module because that uses a lot of memory and stack frames
# if you need the ability to import all models from one package, import them with
# from python_pydantic_free_form_object_response.models import ModelA, ModelB
