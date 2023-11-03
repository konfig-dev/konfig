Ensure the following can be handled as a response

```
class Obj(BaseModel):
    value: str

Response = Union[List[Obj], Obj],
```

If response is list then return value should be List[Obj]
If response is dict then return value should be Obj