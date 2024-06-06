package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.model.ConnectDataSourceInput;
import com.konfigthis.carbonai.client.model.ConnectDataSourceResponse;
import com.konfigthis.carbonai.client.model.DataSourceType;
import com.konfigthis.carbonai.client.model.EmbeddingGenerators;
import com.konfigthis.carbonai.client.model.EmbeddingGeneratorsNullable;
import com.konfigthis.carbonai.client.model.ExternalSourceItemsOrderBy;
import com.konfigthis.carbonai.client.model.FileSyncConfigNullable;
import com.konfigthis.carbonai.client.model.FreshDeskConnectRequest;
import com.konfigthis.carbonai.client.model.GenericSuccessResponse;
import com.konfigthis.carbonai.client.model.GitbookConnectRequest;
import com.konfigthis.carbonai.client.model.GitbookSyncRequest;
import com.konfigthis.carbonai.client.model.GithubConnectRequest;
import com.konfigthis.carbonai.client.model.GithubFetchReposRequest;
import com.konfigthis.carbonai.client.model.GmailSyncInput;
import com.konfigthis.carbonai.client.model.ListDataSourceItemsRequest;
import com.konfigthis.carbonai.client.model.ListDataSourceItemsResponse;
import com.konfigthis.carbonai.client.model.ListItemsFiltersNullable;
import com.konfigthis.carbonai.client.model.ListRequest;
import com.konfigthis.carbonai.client.model.ListResponse;
import com.konfigthis.carbonai.client.model.OANSCZGF;
import com.konfigthis.carbonai.client.model.OAuthURLRequest;
import com.konfigthis.carbonai.client.model.OrderDirV2;
import com.konfigthis.carbonai.client.model.OrganizationUserDataSourceAPI;
import com.konfigthis.carbonai.client.model.OuthURLResponse;
import com.konfigthis.carbonai.client.model.OutlookSyncInput;
import com.konfigthis.carbonai.client.model.Pagination;
import com.konfigthis.carbonai.client.model.RSSFeedInput;
import com.konfigthis.carbonai.client.model.S3AuthRequest;
import com.konfigthis.carbonai.client.model.S3FileSyncInput;
import com.konfigthis.carbonai.client.model.S3GetFileInput;
import com.konfigthis.carbonai.client.model.SyncDirectoryRequest;
import com.konfigthis.carbonai.client.model.SyncFilesRequest;
import com.konfigthis.carbonai.client.model.SyncOptions;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class IntegrationsApi extends IntegrationsApiGenerated {

    public IntegrationsApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class ConnectDataSourceRequestBuilder extends ConnectDataSourceRequestBuilderGenerated {
        public ConnectDataSourceRequestBuilder(OANSCZGF authentication) {
            super(authentication);
        }
    }
    public class ConnectFreshdeskRequestBuilder extends ConnectFreshdeskRequestBuilderGenerated {
        public ConnectFreshdeskRequestBuilder(String domain, String apiKey) {
            super(domain, apiKey);
        }
    }
    public class ConnectGitbookRequestBuilder extends ConnectGitbookRequestBuilderGenerated {
        public ConnectGitbookRequestBuilder(String organization, String accessToken) {
            super(organization, accessToken);
        }
    }
    public class CreateAwsIamUserRequestBuilder extends CreateAwsIamUserRequestBuilderGenerated {
        public CreateAwsIamUserRequestBuilder(String accessKey, String accessKeySecret) {
            super(accessKey, accessKeySecret);
        }
    }
    public class GetOauthUrlRequestBuilder extends GetOauthUrlRequestBuilderGenerated {
        public GetOauthUrlRequestBuilder(DataSourceType service) {
            super(service);
        }
    }
    public class ListConfluencePagesRequestBuilder extends ListConfluencePagesRequestBuilderGenerated {
        public ListConfluencePagesRequestBuilder(Integer dataSourceId) {
            super(dataSourceId);
        }
    }
    public class ListDataSourceItemsRequestBuilder extends ListDataSourceItemsRequestBuilderGenerated {
        public ListDataSourceItemsRequestBuilder(Integer dataSourceId) {
            super(dataSourceId);
        }
    }
    public class ListFoldersRequestBuilder extends ListFoldersRequestBuilderGenerated {
        public ListFoldersRequestBuilder() {
            super();
        }
    }
    public class ListGitbookSpacesRequestBuilder extends ListGitbookSpacesRequestBuilderGenerated {
        public ListGitbookSpacesRequestBuilder(Integer dataSourceId) {
            super(dataSourceId);
        }
    }
    public class ListLabelsRequestBuilder extends ListLabelsRequestBuilderGenerated {
        public ListLabelsRequestBuilder() {
            super();
        }
    }
    public class ListOutlookCategoriesRequestBuilder extends ListOutlookCategoriesRequestBuilderGenerated {
        public ListOutlookCategoriesRequestBuilder() {
            super();
        }
    }
    public class ListReposRequestBuilder extends ListReposRequestBuilderGenerated {
        public ListReposRequestBuilder() {
            super();
        }
    }
    public class SyncConfluenceRequestBuilder extends SyncConfluenceRequestBuilderGenerated {
        public SyncConfluenceRequestBuilder(Integer dataSourceId, List<Object> ids) {
            super(dataSourceId, ids);
        }
    }
    public class SyncDataSourceItemsRequestBuilder extends SyncDataSourceItemsRequestBuilderGenerated {
        public SyncDataSourceItemsRequestBuilder(Integer dataSourceId) {
            super(dataSourceId);
        }
    }
    public class SyncFilesRequestBuilder extends SyncFilesRequestBuilderGenerated {
        public SyncFilesRequestBuilder(Integer dataSourceId, List<Object> ids) {
            super(dataSourceId, ids);
        }
    }
    public class SyncGitHubRequestBuilder extends SyncGitHubRequestBuilderGenerated {
        public SyncGitHubRequestBuilder(String username, String accessToken) {
            super(username, accessToken);
        }
    }
    public class SyncGitbookRequestBuilder extends SyncGitbookRequestBuilderGenerated {
        public SyncGitbookRequestBuilder(List<String> spaceIds, Integer dataSourceId) {
            super(spaceIds, dataSourceId);
        }
    }
    public class SyncGmailRequestBuilder extends SyncGmailRequestBuilderGenerated {
        public SyncGmailRequestBuilder(Object filters) {
            super(filters);
        }
    }
    public class SyncOutlookRequestBuilder extends SyncOutlookRequestBuilderGenerated {
        public SyncOutlookRequestBuilder(Object filters) {
            super(filters);
        }
    }
    public class SyncReposRequestBuilder extends SyncReposRequestBuilderGenerated {
        public SyncReposRequestBuilder(List<String> repos) {
            super(repos);
        }
    }
    public class SyncRssFeedRequestBuilder extends SyncRssFeedRequestBuilderGenerated {
        public SyncRssFeedRequestBuilder(String url) {
            super(url);
        }
    }
    public class SyncS3FilesRequestBuilder extends SyncS3FilesRequestBuilderGenerated {
        public SyncS3FilesRequestBuilder(List<S3GetFileInput> ids) {
            super(ids);
        }
    }
}
