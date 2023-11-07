> [!WARNING]
> This SDK has breaking changes from `< 1.0.0` versions.
> All methods now return Pydantic models.
>
> ### Before (`< 1.0.0`)
>
> Previously, you had to use the `[]` syntax to access response values. This
> required a little more code for every property access.
>
> ```python
> chat_response = humanloop.chat(
>         # parameters
>     )
> print(chat_response.body["project_id"])
> ```
>
> ### After (`>= 1.0.0`)
>
> With Pydantic-based response values, you can use the `.` syntax to access. This
> is slightly less verbose and looks more Pythonic.
>
> ```python
> chat_response = humanloop.chat(
>         # parameters
>     )
> print(chat_response.project_id)
> ```
>
> See the [Raw HTTP Response](#raw-http-response) for accessing raw HTTP response values like headers and status codes.