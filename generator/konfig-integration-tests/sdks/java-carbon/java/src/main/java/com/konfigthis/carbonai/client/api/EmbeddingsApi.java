package com.konfigthis.carbonai.client.api;

import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.model.ChunksAndEmbeddingsUploadInput;
import com.konfigthis.carbonai.client.model.DocumentResponseList;
import com.konfigthis.carbonai.client.model.EmbeddingGenerators;
import com.konfigthis.carbonai.client.model.EmbeddingGeneratorsNullable;
import com.konfigthis.carbonai.client.model.EmbeddingsAndChunksFilters;
import com.konfigthis.carbonai.client.model.EmbeddingsAndChunksOrderByColumns;
import com.konfigthis.carbonai.client.model.EmbeddingsAndChunksQueryInput;
import com.konfigthis.carbonai.client.model.EmbeddingsAndChunksResponse;
import com.konfigthis.carbonai.client.model.FileContentTypesNullable;
import com.konfigthis.carbonai.client.model.GenericSuccessResponse;
import com.konfigthis.carbonai.client.model.GetEmbeddingDocumentsBody;
import com.konfigthis.carbonai.client.model.HybridSearchTuningParamsNullable;
import com.konfigthis.carbonai.client.model.OrderDir;
import com.konfigthis.carbonai.client.model.Pagination;
import com.konfigthis.carbonai.client.model.SingleChunksAndEmbeddingsUploadInput;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmbeddingsApi extends EmbeddingsApiGenerated {

    public EmbeddingsApi(ApiClient apiClient) throws IllegalArgumentException {
        super(apiClient);
    }
    public class GetDocumentsRequestBuilder extends GetDocumentsRequestBuilderGenerated {
        public GetDocumentsRequestBuilder(String query, Integer k) {
            super(query, k);
        }
    }
    public class GetEmbeddingsAndChunksRequestBuilder extends GetEmbeddingsAndChunksRequestBuilderGenerated {
        public GetEmbeddingsAndChunksRequestBuilder(EmbeddingsAndChunksFilters filters) {
            super(filters);
        }
    }
    public class UploadChunksAndEmbeddingsRequestBuilder extends UploadChunksAndEmbeddingsRequestBuilderGenerated {
        public UploadChunksAndEmbeddingsRequestBuilder(EmbeddingGenerators embeddingModel, List<SingleChunksAndEmbeddingsUploadInput> chunksAndEmbeddings) {
            super(embeddingModel, chunksAndEmbeddings);
        }
    }
}
