import { parse, stringify } from "yaml";
import fs from "fs";

interface Parameter {
  name: string;
  in: string;
}

type Tag = string;
interface Options {
  filterQueryParams?: string[];
  filterTags?: string[];
  specPath: string;
  allObjectsHaveAdditionalProperties?: boolean;
}
export const transformSpec = async ({
  specPath,
  filterQueryParams,
  filterTags,
  allObjectsHaveAdditionalProperties,
}: Options) => {
  const yamlRaw = fs.readFileSync(specPath, "utf-8");
  const yaml = parse(yamlRaw);

  if (filterQueryParams !== undefined) {
    Object.keys(yaml.paths).forEach((path) => {
      const methods = Object.values(yaml.paths[path]);
      for (const endpoint of methods) {
        if (endpoint !== null && typeof endpoint === "object") {
          const endpointFields = Object.entries(endpoint);
          endpointFields.forEach(([key, parameters]) => {
            if (key !== "parameters") return;
            if (!Array.isArray(parameters)) return;
            filterQueryParams.forEach((param) => {
              const idx = parameters.findIndex(
                (p: Parameter) => p.in === "query" && p.name === param
              );
              if (idx === -1) return;
              parameters.splice(idx, 1);
            });
          });
        }
      }
    });
  }

  if (filterTags !== undefined) {
    Object.keys(yaml.paths).forEach((path) => {
      const methods = Object.values(yaml.paths[path]);
      for (const methodFields of methods) {
        if (methodFields !== null && typeof methodFields === "object") {
          const methodFieldEntries = Object.entries(methodFields);
          const found = methodFieldEntries.find(([key, tags]) => {
            if (key !== "tags") return false;
            if (!Array.isArray(tags)) return;
            const found: string | undefined = filterTags.find((filterTag) => {
              const idx = tags.findIndex((tag: Tag) => filterTag === tag);
              return idx === -1 ? false : true;
            });
            return found !== undefined;
          });
          if (found !== undefined) {
            // remove from paths
            delete yaml.paths[path];
            break;
          }
        }
      }
    });
  }

  if (allObjectsHaveAdditionalProperties) {
    recurseObject(yaml, (key, value) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        if (value !== null && "type" in value && value["type"] === "object") {
          value["additionalProperties"] = true;
        }
      }
    });
  }

  return stringify(yaml);
};

export const recurseObject = (
  obj: object,
  handler: (key: string, value: any) => void
) => {
  if (obj === null) return;
  Object.entries(obj).forEach(([key, value]) => {
    handler(key, value);
    if (typeof value === "object") {
      recurseObject(value, handler);
    } else {
      handler(key, value);
    }
  });
};
