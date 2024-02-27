<?php

namespace SnapTrade;

class CustomApi
{

    private function sort_keys_recursive(&$array)
    {
        ksort($array);
        foreach ($array as &$value) {
            if (is_array($value)) {
                $this->sort_keys_recursive($value);
            }
        }
    }

    public function beforeSendHook(
        \GuzzleHttp\Psr7\Request &$request,
        \SnapTrade\RequestOptions $requestOptions,
        \SnapTrade\Configuration $configuration,
        $body = null
    ) {
        $content = empty($body) || $body == "{}" ? null : json_decode($body);
        $contentArr = json_decode(json_encode($content), true);
        $sig_object = [
            "content" => $contentArr,
            "path" => $request->getUri()->getPath(),
            "query" => $request->getUri()->GetQuery()
        ];
        $this->sort_keys_recursive($sig_object);
        $data = json_encode($sig_object, JSON_UNESCAPED_SLASHES);
        $hash = hash_hmac('sha256', $data, $configuration->getConsumerKey(), true);
        $hash = base64_encode($hash);
        $request = $request->withHeader("Signature", $hash);
    }

    public function beforeCreateRequestHook(
        string &$method,
        string &$resourcePath,
        array &$queryParams,
        array &$headers,
        &$httpBody,
    ) {
        // add epoch time in seconds to query parameters
        $queryParams['timestamp'] = time();
    }
}
