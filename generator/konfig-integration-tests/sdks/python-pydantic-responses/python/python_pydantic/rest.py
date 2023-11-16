# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""


import logging
import ssl
from urllib.parse import urlencode
import typing
import aiohttp
import json
import os
from typing import Any, Dict, List
from urllib.parse import urlparse, parse_qsl

import certifi
import urllib3
import time
from urllib3._collections import HTTPHeaderDict

from python_pydantic.exceptions import ApiException, ApiValueError


logger = logging.getLogger(__name__)

class ResponseWrapper:
    def __init__(self, http_response: urllib3.HTTPResponse, round_trip_time: float):
        self.http_response = http_response
        self.round_trip_time = round_trip_time

class AsyncResponseWrapper:
    def __init__(self, http_response: aiohttp.ClientResponse, round_trip_time: float, session: aiohttp.ClientSession):
        self.http_response = http_response
        self.round_trip_time = round_trip_time
        self.session = session

class RESTClientObject(object):

    def __init__(self, configuration, pools_size=4, maxsize=None):
        self.configuration = configuration

        # urllib3.PoolManager will pass all kw parameters to connectionpool
        # https://github.com/shazow/urllib3/blob/f9409436f83aeb79fbaf090181cd81b784f1b8ce/urllib3/poolmanager.py#L75
        # https://github.com/shazow/urllib3/blob/f9409436f83aeb79fbaf090181cd81b784f1b8ce/urllib3/connectionpool.py#L680
        # maxsize is the number of requests to host that are allowed in parallel
        # Custom SSL certificates and client certificates: http://urllib3.readthedocs.io/en/latest/advanced-usage.html

        # cert_reqs
        if configuration.verify_ssl:
            cert_reqs = ssl.CERT_REQUIRED
        else:
            cert_reqs = ssl.CERT_NONE

        # ca_certs
        if configuration.ssl_ca_cert:
            ca_certs = configuration.ssl_ca_cert
        else:
            # if not set certificate file, use Mozilla's root certificates.
            ca_certs = certifi.where()

        addition_pool_args = {}
        if configuration.assert_hostname is not None:
            addition_pool_args['assert_hostname'] = configuration.assert_hostname

        if configuration.retries is not None:
            addition_pool_args['retries'] = configuration.retries

        if configuration.socket_options is not None:
            addition_pool_args['socket_options'] = configuration.socket_options

        if maxsize is None:
            if configuration.connection_pool_maxsize is not None:
                maxsize = configuration.connection_pool_maxsize
            else:
                maxsize = 4

        # https pool manager
        if configuration.proxy:
            self.pool_manager = urllib3.ProxyManager(
                num_pools=pools_size,
                maxsize=maxsize,
                cert_reqs=cert_reqs,
                ca_certs=ca_certs,
                cert_file=configuration.cert_file,
                key_file=configuration.key_file,
                proxy_url=configuration.proxy,
                proxy_headers=configuration.proxy_headers,
                **addition_pool_args
            )
        else:
            self.pool_manager = urllib3.PoolManager(
                num_pools=pools_size,
                maxsize=maxsize,
                cert_reqs=cert_reqs,
                ca_certs=ca_certs,
                cert_file=configuration.cert_file,
                key_file=configuration.key_file,
                **addition_pool_args
            )

    def request(
        self,
        method: str,
        url: str,
        headers: typing.Optional[HTTPHeaderDict] = None,
        fields: typing.Optional[typing.Tuple[typing.Tuple[str, typing.Any], ...]] = None,
        body: typing.Optional[typing.Union[str, bytes]] = None,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
    ) -> ResponseWrapper:
        """Perform requests.

        :param method: http request method
        :param url: http request url
        :param headers: http request headers
        :param body: request body, for other types
        :param fields: request parameters for
                                `application/x-www-form-urlencoded`
                                or `multipart/form-data`
        :param stream: if True, the urllib3.HTTPResponse object will
                                be returned without reading/decoding response
                                data. Default is False.
        :param timeout: timeout setting for this request. If one
                                number provided, it will be total request
                                timeout. It can also be a pair (tuple) of
                                (connection, read) timeouts.
        """
        method = method.upper()
        if method not in ['GET', 'HEAD', 'DELETE', 'POST', 'PUT', 'PATCH', 'OPTIONS']:
            raise Exception(f'method of "{method}" is invalid')

        if fields and body:
            raise ApiValueError(
                "body parameter cannot be used with fields parameter."
            )

        fields = fields or {}
        headers = headers or {}

        if timeout:
            if isinstance(timeout, (int, float)):
                timeout = urllib3.Timeout(total=timeout)
            elif (isinstance(timeout, tuple) and
                  len(timeout) == 2):
                timeout = urllib3.Timeout(connect=timeout[0], read=timeout[1])
        
        t1 = time.time()

        try:
            # For `POST`, `PUT`, `PATCH`, `OPTIONS`, `DELETE`
            if method in ['POST', 'PUT', 'PATCH', 'OPTIONS', 'DELETE']:
                if 'Content-Type' not in headers and body is None:
                    r = self.pool_manager.request(
                        method,
                        url,
                        preload_content=not stream,
                        timeout=timeout,
                        headers=headers
                    )
                elif headers['Content-Type'] == 'application/x-www-form-urlencoded':
                    r = self.pool_manager.request(
                        method, url,
                        body=body,
                        fields=fields,
                        encode_multipart=False,
                        preload_content=not stream,
                        timeout=timeout,
                        headers=headers)
                elif headers['Content-Type'] == 'multipart/form-data':
                    # must del headers['Content-Type'], or the correct
                    # Content-Type which generated by urllib3 will be
                    # overwritten.
                    del headers['Content-Type']
                    r = self.pool_manager.request(
                        method, url,
                        fields=fields,
                        encode_multipart=True,
                        preload_content=not stream,
                        timeout=timeout,
                        headers=headers)
                # Pass a `string` parameter directly in the body to support
                # other content types than Json when `body` argument is
                # provided in serialized form
                elif isinstance(body, str) or isinstance(body, bytes):
                    request_body = body
                    r = self.pool_manager.request(
                        method, url,
                        body=request_body,
                        preload_content=not stream,
                        timeout=timeout,
                        headers=headers)
                else:
                    # Cannot generate the request from given parameters
                    msg = """Cannot prepare a request message for provided
                             arguments. Please check that your arguments match
                             declared content type."""
                    raise ApiException(status=0, reason=msg)
            # For `GET`, `HEAD`
            else:
                r = self.pool_manager.request(method, url,
                                              preload_content=not stream,
                                              timeout=timeout,
                                              headers=headers)
        except urllib3.exceptions.SSLError as e:
            msg = "{0}\n{1}".format(type(e).__name__, str(e))
            raise ApiException(status=0, reason=msg)

        if not stream:
            # log response body
            logger.debug("response body: %s", r.data)
        
        t2 = time.time()

        # compute queryString property from url for HAR entry
        query_string = compute_query_string(url)

        # compute postData property for HAR entry
        post_data = {}
        if method == 'POST':
            if headers['Content-Type'] == 'application/x-www-form-urlencoded':
                post_data = [
                    {
                        'name': k,
                        'value': v
                    }
                    for k, v in fields
                ]
            elif headers['Content-Type'] == 'multipart/form-data':
                post_data = [
                    {
                        'name': k,
                        'value': v
                    }
                    for k, v in fields
                ]
            else:
                post_data = body

        base_url = url.split('?')[0]

        har_entry = create_har_entry(
            url=base_url,
            method=method,
            request_headers=headers,
            response_headers=r.headers,
            request_cookies=[],
            response_cookies=[],
            query_string=query_string,
            post_data=post_data,
            response_body=r.data.decode('utf-8'),
            status=r.status,
            status_text=r.reason,
            started_date_time=time.strftime("%Y-%m-%dT%H:%M:%S.000Z", time.gmtime(t1)),
            time_send=0,
            time_wait=(t2 - t1) * 1000,
            time_receive=0
        )
        print(har_entry)

        # Append HAR entry to existing temporary file
        har_file_path = self.configuration.har_log_file_path

        # Check if the file exists and read the existing content
        existing_har_entries = {}
        if os.path.exists(har_file_path):
            with open(har_file_path, 'r') as file:
                try:
                    existing_har_entries = json.load(file)
                except json.JSONDecodeError:
                    # Handle the case where the file is empty or contains invalid JSON
                    existing_har_entries = {}

        # Merge existing entries with the new entry
        merged_har = merge_har_entries([existing_har_entries, har_entry])

        # Create the file and directory if it doesn't exist
        os.makedirs(os.path.dirname(har_file_path), exist_ok=True)
        if not os.path.exists(har_file_path):
            open(har_file_path, 'w').close()

        # Write merged entries to the file
        with open(har_file_path, 'w') as file:
            json.dump(merged_har, file, indent=4)

        return ResponseWrapper(r, t2 - t1)

    def GET(self, url, headers=None, stream=False,
            timeout=None, fields=None) -> ResponseWrapper:
        return self.request("GET", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            fields=fields)

    def HEAD(self, url, headers=None, stream=False,
             timeout=None, fields=None) -> ResponseWrapper:
        return self.request("HEAD", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            fields=fields)

    def OPTIONS(self, url, headers=None,
                body=None, stream=False, timeout=None, fields=None) -> ResponseWrapper:
        return self.request("OPTIONS", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            body=body, fields=fields)

    def DELETE(self, url, headers=None, body=None,
               stream=False, timeout=None, fields=None) -> ResponseWrapper:
        return self.request("DELETE", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            body=body, fields=fields)

    def POST(self, url, headers=None,
             body=None, stream=False, timeout=None, fields=None) -> ResponseWrapper:
        return self.request("POST", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            body=body, fields=fields)

    def PUT(self, url, headers=None,
            body=None, stream=False, timeout=None, fields=None) -> ResponseWrapper:
        return self.request("PUT", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            body=body, fields=fields)

    def PATCH(self, url, headers=None,
              body=None, stream=False, timeout=None, fields=None) -> ResponseWrapper:
        return self.request("PATCH", url,
                            headers=headers,
                            stream=stream,
                            timeout=timeout,
                            body=body, fields=fields)


# compute queryString property from url for HAR entry
def compute_query_string(url: str) -> List[Dict[str, str]]:
    query_string = []
    parsed_url = urlparse(url)
    query_params = parse_qsl(parsed_url.query)

    for k, v in query_params:
        query_string.append({
            'name': k,
            'value': v
        })

    return query_string


def compute_size(items: Dict[str, str]) -> int:
    """
    Computes the size of headers or POST data based on their content.
    :param items: A dictionary of headers or POST data.
    :return: The computed size in bytes.
    """
    return sum(len(key) + len(value) + 4 for key, value in items.items())  # 4 bytes for ': ' and '\r\n'


def create_har_entry(url: str,
                     method: str,
                     request_headers: Dict[str, str],
                     response_headers: Dict[str, str],
                     request_cookies: List[Dict[str, str]],
                     response_cookies: List[Dict[str, str]],
                     query_string: List[Dict[str, str]],
                     post_data: Dict[str, Any],
                     response_body: str,
                     status: int,
                     status_text: str,
                     started_date_time: str,
                     time_send: float,
                     time_wait: float,
                     time_receive: float) -> Dict[str, Any]:
    """
    Creates a HAR entry with detailed information.

    Parameters:
    url (str): URL of the request.
    method (str): HTTP method (e.g., 'GET', 'POST').
    request_headers (Dict[str, str]): Dictionary of request headers.
    response_headers (Dict[str, str]): Dictionary of response headers.
    request_cookies (List[Dict[str, str]]): List of request cookies.
    response_cookies (List[Dict[str, str]]): List of response cookies.
    query_string (List[Dict[str, str]]): Query string parameters.
    post_data (Dict[str, Any]): POST data in case of POST requests.
    response_body (str): Response body as a string.
    status (int): HTTP response status code.
    status_text (str): HTTP response status text.
    started_date_time (str): The date and time stamp for the beginning of the request.
    time_send (float): Time spent sending the request in milliseconds.
    time_wait (float): Time spent waiting for a response in milliseconds.
    time_receive (float): Time spent receiving the response in milliseconds.

    Returns:
    Dict[str, Any]: HAR entry as a dictionary.

    Example Usage:
    har_json = create_har_entry(
        url="https://www.example.com",
        method="GET",
        request_headers={"User-Agent": "MyBrowser"},
        response_headers={"Content-Type": "text/html"},
        request_cookies=[{"name": "session", "value": "12345"}],
        response_cookies=[{"name": "session", "value": "12345"}],
        query_string=[{"name": "param", "value": "value"}],
        post_data={},  # Add POST data if method is POST
        response_body="<html></html>",
        status=200,
        status_text="OK",
        started_date_time=datetime.utcnow().isoformat() + "Z",
        time_send=20.0,
        time_wait=30.0,
        time_receive=10.0
    )

    # Writing to a file
    with open('har_file.json', 'w') as file:
        json.dump(har_json, file, indent=4)
    """

    request_headers_size = compute_size(request_headers)
    response_headers_size = compute_size(response_headers)
    post_data_size = compute_size(post_data) if method == "POST" else 0

    har_entry = {
        "log": {
            "version": "1.2",
            "creator": {
                "name": "Konfig",
                "version": "1.0"
            },
            "entries": [{
                "startedDateTime": started_date_time,
                "time": time_send + time_wait + time_receive,
                "request": {
                    "method": method,
                    "url": url,
                    "headers": [{"name": k, "value": v} for k, v in request_headers.items()],
                    "queryString": query_string,
                    "cookies": request_cookies,
                    "headersSize": request_headers_size,
                    "bodySize": post_data_size,
                    "postData": post_data if method == "POST" else None
                },
                "response": {
                    "status": status,
                    "statusText": status_text,
                    "headers": [{"name": k, "value": v} for k, v in response_headers.items()],
                    "cookies": response_cookies,
                    "content": {
                        "size": len(response_body),
                        "mimeType": response_headers.get("Content-Type", "text/plain"),
                        "text": response_body
                    },
                    "redirectURL": "",
                    "headersSize": response_headers_size,
                    "bodySize": len(response_body)
                },
                "cache": {},
                "timings": {
                    "send": time_send,
                    "wait": time_wait,
                    "receive": time_receive
                },
            }]
        }
    }

    return har_entry


def merge_har_entries(har_entries: List[Dict[str, Any]]) -> Dict[str, Any]:
    """
    Merges multiple HAR entries into a single HAR log.

    :param har_entries: A list of HAR entries.
    :return: A HAR log containing all the provided entries.

    Example Usage:
    har_entry1 = create_har_entry(...)
    har_entry2 = create_har_entry(...)
    merged_har = merge_har_entries([har_entry1, har_entry2])

    # Writing the merged HAR to a file
    with open('merged_har_file.json', 'w') as file:
        json.dump(merged_har, file, indent=4)
    """
    if not har_entries:
        return {"log": {"version": "1.2", "creator": {"name": "Konfig", "version": "1.0"}, "entries": []}}

    # Find the first valid entry to use as a template for the merged HAR
    template_entry = next((entry for entry in har_entries if "log" in entry and "entries" in entry["log"]), None)
    if not template_entry:
        # If no valid entry is found, return an empty HAR structure
        return {"log": {"version": "1.2", "creator": {"name": "Konfig", "version": "1.0"}, "entries": []}}

    merged_har = {
        "log": {
            "version": template_entry["log"]["version"],
            "creator": template_entry["log"]["creator"],
            "entries": []
        }
    }

    for entry in har_entries:
        if "log" in entry and "entries" in entry["log"]:
            merged_har["log"]["entries"].extend(entry["log"]["entries"])

    return merged_har
