package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.model.BodyCreateUploadFileUploadfilePost;
import com.konfigthis.carbonai.client.model.DeleteFilesQueryInput;
import com.konfigthis.carbonai.client.model.DeleteFilesV2QueryInput;
import com.konfigthis.carbonai.client.model.EmbeddingGenerators;
import com.konfigthis.carbonai.client.model.EmbeddingGeneratorsNullable;
import com.konfigthis.carbonai.client.model.ExternalFileSyncStatuses;
import java.io.File;
import com.konfigthis.carbonai.client.model.FileContentTypesNullable;
import com.konfigthis.carbonai.client.model.GenericSuccessResponse;
import com.konfigthis.carbonai.client.model.OrderDir;
import com.konfigthis.carbonai.client.model.OrganizationUserFileTagCreate;
import com.konfigthis.carbonai.client.model.OrganizationUserFileTagsRemove;
import com.konfigthis.carbonai.client.model.OrganizationUserFilesToSyncFilters;
import com.konfigthis.carbonai.client.model.OrganizationUserFilesToSyncOrderByTypes;
import com.konfigthis.carbonai.client.model.OrganizationUserFilesToSyncQueryInput;
import com.konfigthis.carbonai.client.model.Pagination;
import com.konfigthis.carbonai.client.model.PresignedURLResponse;
import com.konfigthis.carbonai.client.model.RawTextInput;
import com.konfigthis.carbonai.client.model.ResyncFileQueryInput;
import com.konfigthis.carbonai.client.model.TMEmbeddingGenerators;
import com.konfigthis.carbonai.client.model.UploadFileFromUrlInput;
import com.konfigthis.carbonai.client.model.UserFile;
import com.konfigthis.carbonai.client.model.UserFilesV2;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FilesApi extends FilesApiGenerated {

    public FilesApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class CreateUserFileTagsRequestBuilder extends CreateUserFileTagsRequestBuilderGenerated {
        public CreateUserFileTagsRequestBuilder(Map<String, Object> tags, Integer organizationUserFileId) {
            super(tags, organizationUserFileId);
        }
    }
    public class DeleteRequestBuilder extends DeleteRequestBuilderGenerated {
        public DeleteRequestBuilder(Integer fileId) {
            super(fileId);
        }
    }
    public class DeleteFileTagsRequestBuilder extends DeleteFileTagsRequestBuilderGenerated {
        public DeleteFileTagsRequestBuilder(List<String> tags, Integer organizationUserFileId) {
            super(tags, organizationUserFileId);
        }
    }
    public class DeleteManyRequestBuilder extends DeleteManyRequestBuilderGenerated {
        public DeleteManyRequestBuilder() {
            super();
        }
    }
    public class DeleteV2RequestBuilder extends DeleteV2RequestBuilderGenerated {
        public DeleteV2RequestBuilder() {
            super();
        }
    }
    public class GetParsedFileRequestBuilder extends GetParsedFileRequestBuilderGenerated {
        public GetParsedFileRequestBuilder(Integer fileId) {
            super(fileId);
        }
    }
    public class GetRawFileRequestBuilder extends GetRawFileRequestBuilderGenerated {
        public GetRawFileRequestBuilder(Integer fileId) {
            super(fileId);
        }
    }
    public class QueryUserFilesRequestBuilder extends QueryUserFilesRequestBuilderGenerated {
        public QueryUserFilesRequestBuilder() {
            super();
        }
    }
    public class QueryUserFilesDeprecatedRequestBuilder extends QueryUserFilesDeprecatedRequestBuilderGenerated {
        public QueryUserFilesDeprecatedRequestBuilder() {
            super();
        }
    }
    public class ResyncRequestBuilder extends ResyncRequestBuilderGenerated {
        public ResyncRequestBuilder(Integer fileId) {
            super(fileId);
        }
    }
    public class UploadRequestBuilder extends UploadRequestBuilderGenerated {
        public UploadRequestBuilder(File _file) {
            super(_file);
        }
    }
    public class UploadFromUrlRequestBuilder extends UploadFromUrlRequestBuilderGenerated {
        public UploadFromUrlRequestBuilder(String url) {
            super(url);
        }
    }
    public class UploadTextRequestBuilder extends UploadTextRequestBuilderGenerated {
        public UploadTextRequestBuilder(String contents) {
            super(contents);
        }
    }
}
