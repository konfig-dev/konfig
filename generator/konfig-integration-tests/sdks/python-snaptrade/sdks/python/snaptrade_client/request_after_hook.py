from base64 import b64encode
import hashlib
import hmac
import json
import typing
from urllib3._collections import HTTPHeaderDict

from snaptrade_client import schemas
from snaptrade_client.configuration import Configuration

def compute_request_signature(path: str, consumer_key: str, body: typing.Any):
    subpath, query = path.split("?")
    sig_object = {
        "content": None if body is schemas.unset or body == {} else body,
        "path": "/api/v1%s" % subpath,
        "query": query
    }
    sig_content = json.dumps(sig_object, separators=(",", ":"), sort_keys=True)
    sig_digest = hmac.new(consumer_key.encode(), sig_content.encode(), hashlib.sha256).digest()
    signature = b64encode(sig_digest).decode()
    return signature

def request_after_hook(
        resource_path: str,
        method: str,
        configuration: Configuration,
        headers: typing.Optional[HTTPHeaderDict] = None,
        body: typing.Any = None,
        fields: typing.Optional[typing.Tuple[typing.Tuple[str, str], ...]] = None,
        auth_settings: typing.Optional[typing.List[str]] = None,
):
    if headers is None:
        return
    if auth_settings is None:
        return
    headers['Signature'] = compute_request_signature(
        path=resource_path,
        consumer_key=configuration.consumer_key,
        body=body
    )
