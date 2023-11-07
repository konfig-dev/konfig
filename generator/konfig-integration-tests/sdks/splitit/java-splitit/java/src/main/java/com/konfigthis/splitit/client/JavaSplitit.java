package com.konfigthis.splitit.client;

import com.konfigthis.splitit.client.api.InstallmentPlanApi;

public class JavaSplitit {
    private ApiClient apiClient;
    public final InstallmentPlanApi installmentPlan;

    public JavaSplitit() {
        this(null);
    }

    public JavaSplitit(Configuration configuration) {
        this.apiClient = new ApiClient(null, configuration);
        this.installmentPlan = new InstallmentPlanApi(this.apiClient);
    }

}
