package com.konfigthis.carbonai.client;

import com.konfigthis.carbonai.client.api.AuthApi;
import com.konfigthis.carbonai.client.api.DataSourcesApi;
import com.konfigthis.carbonai.client.api.EmbeddingsApi;
import com.konfigthis.carbonai.client.api.FilesApi;
import com.konfigthis.carbonai.client.api.HealthApi;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import com.konfigthis.carbonai.client.api.OrganizationsApi;
import com.konfigthis.carbonai.client.api.UsersApi;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
import com.konfigthis.carbonai.client.api.WebhooksApi;

public class Carbon {
    private ApiClient apiClient;
    public final AuthApi auth;
    public final DataSourcesApi dataSources;
    public final EmbeddingsApi embeddings;
    public final FilesApi files;
    public final HealthApi health;
    public final IntegrationsApi integrations;
    public final OrganizationsApi organizations;
    public final UsersApi users;
    public final UtilitiesApi utilities;
    public final WebhooksApi webhooks;

    public Carbon() {
        this(null);
    }

    public Carbon(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.auth = new AuthApi(this.apiClient);
        this.dataSources = new DataSourcesApi(this.apiClient);
        this.embeddings = new EmbeddingsApi(this.apiClient);
        this.files = new FilesApi(this.apiClient);
        this.health = new HealthApi(this.apiClient);
        this.integrations = new IntegrationsApi(this.apiClient);
        this.organizations = new OrganizationsApi(this.apiClient);
        this.users = new UsersApi(this.apiClient);
        this.utilities = new UtilitiesApi(this.apiClient);
        this.webhooks = new WebhooksApi(this.apiClient);
    }

}
