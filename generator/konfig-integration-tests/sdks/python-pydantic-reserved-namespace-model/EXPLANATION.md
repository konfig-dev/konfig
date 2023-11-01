Pydantic has reserved attributes under model_*. If you violate this (which isn't
obvious in Pydantic 2.4.2), you will run into an ambiguous error:

```
/Users/dylanhuang/Library/Caches/pypoetry/virtualenvs/python-pydantic-reserved-namespace-model-9ozReYg5-py3.7/lib/python3.7/site-packages/_pytest/assertion/rewrite.py:186: in exec_module
    exec(co, module.__dict__)
../python_pydantic_reserved_namespace_model/pydantic/test_fetch_response.py:21: in <module>
    class TestFetchResponse(BaseModel):
/Users/dylanhuang/Library/Caches/pypoetry/virtualenvs/python-pydantic-reserved-namespace-model-9ozReYg5-py3.7/lib/python3.7/site-packages/pydantic/_internal/_model_construction.py:102: in __new__
    config_wrapper = ConfigWrapper.for_model(bases, namespace, kwargs)
/Users/dylanhuang/Library/Caches/pypoetry/virtualenvs/python-pydantic-reserved-namespace-model-9ozReYg5-py3.7/lib/python3.7/site-packages/pydantic/_internal/_config.py:122: in for_model
    config_new.update(config_from_namespace)
E   TypeError: 'FieldInfo' object is not iterable
```

## Solution:

Suffix problematic names with `_`