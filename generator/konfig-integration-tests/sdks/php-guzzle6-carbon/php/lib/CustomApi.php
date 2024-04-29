<?php

namespace Carbon;

class CustomApi
{

    public function beforeSendHook(
        \GuzzleHttp\Psr7\Request &$request,
        \Carbon\RequestOptions $requestOptions,
        \Carbon\Configuration $configuration,
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
