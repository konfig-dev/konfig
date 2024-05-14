import typing
import time
from urllib3._collections import HTTPHeaderDict

from snaptrade_client.configuration import Configuration

def request_before_hook(
        resource_path: str,
        method: str,
        configuration: Configuration,
        headers: typing.Optional[HTTPHeaderDict] = None,
        body: typing.Any = None,
        fields: typing.Optional[typing.Tuple[typing.Tuple[str, str], ...]] = None,
        auth_settings: typing.Optional[typing.List[str]] = None,
        **kwargs: typing.Any
) -> str:
    if auth_settings is None:
        return
    configuration.api_key['PartnerTimestamp'] = int(time.time())