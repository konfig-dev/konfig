<?php

namespace Splitit;

class RequestOptions
{
    /** @var boolean */ 
    private $retryOAuth;

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
