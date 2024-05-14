<?php

namespace Carbon;

class Client
{
    
    public readonly \Carbon\Api\AuthApi $auth;
    
    public readonly \Carbon\Api\DataSourcesApi $dataSources;
    
    public readonly \Carbon\Api\EmbeddingsApi $embeddings;
    
    public readonly \Carbon\Api\FilesApi $files;
    
    public readonly \Carbon\Api\HealthApi $health;
    
    public readonly \Carbon\Api\IntegrationsApi $integrations;
    
    public readonly \Carbon\Api\OrganizationsApi $organizations;
    
    public readonly \Carbon\Api\UsersApi $users;
    
    public readonly \Carbon\Api\UtilitiesApi $utilities;
    
    public readonly \Carbon\Api\WebhooksApi $webhooks;

    /**
     * Constructor
     */
    public function __construct(
        string $accessToken = null,
        string $apiKey = null,
        string $customerId = null,
        bool $verifySsl = null,
        string $host = 'https://api.carbon.ai',
        \Carbon\Configuration $config = null
    )
    {
        if ($config == null) {
            $config = new \Carbon\Configuration(
                accessToken: $accessToken,
                apiKey: $apiKey,
                customerId: $customerId,
            );
            if ($host !== null) $config->setHost($host);
            if ($verifySsl !== null) $config->setVerifySsl($verifySsl);
        }
        $this->auth = new \Carbon\Api\AuthApi($config);
        $this->dataSources = new \Carbon\Api\DataSourcesApi($config);
        $this->embeddings = new \Carbon\Api\EmbeddingsApi($config);
        $this->files = new \Carbon\Api\FilesApi($config);
        $this->health = new \Carbon\Api\HealthApi($config);
        $this->integrations = new \Carbon\Api\IntegrationsApi($config);
        $this->organizations = new \Carbon\Api\OrganizationsApi($config);
        $this->users = new \Carbon\Api\UsersApi($config);
        $this->utilities = new \Carbon\Api\UtilitiesApi($config);
        $this->webhooks = new \Carbon\Api\WebhooksApi($config);
    }
}
