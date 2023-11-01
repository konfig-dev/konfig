Pydantic doesn't recursively convert dicts to models.

See https://docs.pydantic.dev/latest/concepts/models/#creating-models-without-validation.

```
In particular, the model_construct method does not support recursively constructing models from dicts.
```