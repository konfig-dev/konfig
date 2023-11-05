Ensure that the "Raw HTTP Response" section of the generated docs works when top
level configuration is configured.

```python
# Wrong
client.top_level_operation

# Correct
client.raw.operation
```