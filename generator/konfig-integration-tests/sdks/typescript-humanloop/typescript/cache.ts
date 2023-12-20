import { ConfigResponse, Humanloop } from "./";

type Timeout = NodeJS.Timeout | number;
type ProjectId = string;
type EnvironmentName = string;
type CacheType = Map<
  ProjectId,
  // Each project can have multiple deployed configs, each for a different environment.
  // Note that the key for the inner map can be undefined, which means the default environment
  Map<EnvironmentName | undefined, ConfigResponse | undefined>
>;

export class ConfigCache {
  // Cache of configs. The key is the `project_id`.
  private cache: CacheType = new Map();

  // Cache of refresh intervals. The key is the `project_id`.
  private refreshIntervals: Map<string, Timeout> = new Map();

  async getConfig(
    projectId: ProjectId,
    environment: EnvironmentName | undefined,
    humanloopConnectionParams?: { apiKey: string; basePath?: string },
    refreshInterval: number = 1000 * 60 // 1 minute
  ): Promise<ConfigResponse> {
    // If the value is cached, return it
    const cachedConfigsForProject = this.cache.get(projectId);
    if (cachedConfigsForProject) {
      if (!environment) {
        // We need to get the config for the default environment
      }
      const cachedValue = cachedConfigsForProject.get(environment);
      if (cachedValue) {
        return Promise.resolve(cachedValue);
      }
    }

    // Otherwise, fetch it and store it
    // Note: `fetchConfig` can throw. We allow that to propagate, as it means the caller requested
    // an invalid project_id / environment combination, or there was a network error.
    const config = await this.fetchConfig(
      projectId,
      environment,
      humanloopConnectionParams
    );

    if (!cachedConfigsForProject) {
      const environmentToConfigMap = new Map();
      environmentToConfigMap.set(environment, config);
      this.cache.set(projectId, environmentToConfigMap);
    } else {
      cachedConfigsForProject.set(environment, config);
    }

    // Set up a periodic refresh, but if one already exists, clear it first
    // This is necessary since the interval may have changed
    const existingRefreshInterval = this.refreshIntervals.get(
      `${projectId}-${environment}`
    );
    if (existingRefreshInterval) {
      clearInterval(existingRefreshInterval);
    }
    this.refreshIntervals.set(
      `${projectId}-${environment}`,
      setInterval(() => {
        this.fetchConfig(projectId, environment, humanloopConnectionParams)
          .then((value) => {
            const configsForProject: Map<
              EnvironmentName | undefined,
              ConfigResponse | undefined
            > = this.cache.get(projectId) ?? new Map();
            configsForProject.set(environment, value);
            this.cache.set(projectId, configsForProject);
          })
          .catch((error) => {
            console.error(
              `Failed to refresh value for project id ${projectId} and environment ${environment}:`,
              error
            );
          });
      }, refreshInterval)
    );

    return config;
  }

  private async fetchConfig(
    projectId: ProjectId,
    environment: EnvironmentName | undefined,
    humanloopConnectionParams?: { apiKey: string; basePath?: string }
  ): Promise<ConfigResponse> {
    const humanloop = new Humanloop(humanloopConnectionParams);

    const deployedConfigResponse = await humanloop.projects.getActiveConfig({
      id: projectId,
      environment,
    });
    if (deployedConfigResponse.status !== 200) {
      throw new Error(
        `Failed to retrieve deployed config for project ${projectId}: ${deployedConfigResponse.statusText}`
      );
    }
    const deployedConfig = deployedConfigResponse.data.config;
    return deployedConfig;
  }

  // Call this method when you're done with the cache to avoid memory leaks
  dispose() {
    for (const interval of this.refreshIntervals.values()) {
      clearInterval(interval);
    }
  }
}
