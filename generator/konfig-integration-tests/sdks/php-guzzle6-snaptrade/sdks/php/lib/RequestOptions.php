<?php

namespace SnapTrade;

class RequestOptions
{
    
    private bool $retryOAuth;

    public function __construct(bool $retryOAuth = true)
    {
        $this->retryOAuth = $retryOAuth;
    }

    public function shouldRetryOAuth(): bool
    {
        return $this->retryOAuth;
    }

    public function setRetryOAuth(bool $retryOAuth): RequestOptions
    {
        $this->retryOAuth = $retryOAuth;
        return $this;
    }
}
