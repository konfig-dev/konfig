import frozendict
import typing
from leap_workflows.configuration import (
    Configuration,
)

class ValidationMetadata(frozendict.frozendict):
    """
    A class storing metadata that is needed to validate OpenApi Schema payloads
    """
    def __new__(
        cls,
        path_to_item: typing.Tuple[typing.Union[str, int], ...] = tuple(['args[0]']),
        from_server: bool = False,
        configuration: typing.Optional[Configuration] = None,
        seen_classes: typing.FrozenSet[typing.Type] = frozenset(),
        validated_path_to_schemas: typing.Dict[typing.Tuple[typing.Union[str, int], ...], typing.Set[typing.Type]] = frozendict.frozendict()
    ):
        """
        Args:
            path_to_item: the path to the current data being instantiated.
                For {'a': [1]} if the code is handling, 1, then the path is ('args[0]', 'a', 0)
                This changes from location to location
            from_server: whether or not this data came form the server
                True when receiving server data
                False when instantiating model with client side data not form the server
                This does not change from location to location
            configuration: the Configuration instance to use
                This is needed because in Configuration:
                - one can disable validation checking
                This does not change from location to location
            seen_classes: when deserializing data that matches multiple schemas, this is used to store
                the schemas that have been traversed. This is used to stop processing when a cycle is seen.
                This changes from location to location
            validated_path_to_schemas: stores the already validated schema classes for a given path location
                This does not change from location to location
        """
        return super().__new__(
            cls,
            path_to_item=path_to_item,
            from_server=from_server,
            configuration=configuration,
            seen_classes=seen_classes,
            validated_path_to_schemas=validated_path_to_schemas
        )

    def validation_ran_earlier(self, cls: type) -> bool:
        validated_schemas = self.validated_path_to_schemas.get(self.path_to_item, set())
        validation_ran_earlier = validated_schemas and cls in validated_schemas
        if validation_ran_earlier:
            return True
        if cls in self.seen_classes:
            return True
        return False

    @property
    def path_to_item(self) -> typing.Tuple[typing.Union[str, int], ...]:
        return self.get('path_to_item')

    @property
    def from_server(self) -> bool:
        return self.get('from_server')

    @property
    def configuration(self) -> typing.Optional[Configuration]:
        return self.get('configuration')

    @property
    def seen_classes(self) -> typing.FrozenSet[typing.Type]:
        return self.get('seen_classes')

    @property
    def validated_path_to_schemas(self) -> typing.Dict[typing.Tuple[typing.Union[str, int], ...], typing.Set[typing.Type]]:
        return self.get('validated_path_to_schemas')

