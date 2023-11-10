<?php

namespace Splitit;

class Client
{
    /** @var \Splitit\Api\InstallmentPlanApi */
    public $installmentPlan;

    /**
     * Constructor
     */
    public function __construct(
        string $clientId = null,
        string $clientSecret = null,
        string $tokenUrl = 'https://id.production.splitit.com/connect/token',
        bool $verifySsl = null,
        string $host = 'https://web-api-v3.production.splitit.com',
        \Splitit\Configuration $config = null
    )
    {
        if ($config == null) {
            $config = new \Splitit\Configuration(
            );
            if ($host !== null) $config->setHost($host);
            if ($verifySsl !== null) $config->setVerifySsl($verifySsl);
            if ($tokenUrl !== null) $config->setTokenUrl($tokenUrl);
            if ($clientId !== null) $config->setClientId($clientId);
            if ($clientSecret !== null) $config->setClientSecret($clientSecret);
        }
        $this->installmentPlan = new \Splitit\Api\InstallmentPlanApi($config);
    }
}
