<?php

namespace Splitit;

class CustomApi
{

    public function beforeSendHook(
        \GuzzleHttp\Psr7\Request &$request,
        \Splitit\RequestOptions $requestOptions,
        \Splitit\Configuration $configuration,
        $body = null
    ) {
    }

    public function beforeCreateRequestHook(
        string &$method,
        string &$resourcePath,
        array &$queryParams,
        array &$headers,
        &$httpBody
    ) {
    }
}
