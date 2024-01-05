> [!WARNING]
> This SDK has breaking changes in `>= 0.6.0` versions.
> All methods now return Pydantic models.
>
> ### Before (`< 0.6.0`)
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
> ### After (`>= 0.6.0`)
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
> To reuse existing implementations from `< 0.6.0`, use the `.raw` namespace as specified in the [Raw HTTP Response](#raw-http-response) section.