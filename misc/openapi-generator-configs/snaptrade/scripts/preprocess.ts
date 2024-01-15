import { transformSpec } from "../src/transformSpec-old";
import fs from "fs";

transformSpec({
  specPath: `${process.cwd()}/api-preprocess.yaml`,
  filterQueryParams: ["clientId", "timestamp"],
  filterTags: [],
  allObjectsHaveAdditionalProperties: false,
}).then((processed) => {
  console.log(processed);
  fs.writeFileSync(`${process.cwd()}/api.yaml`, processed);
});
