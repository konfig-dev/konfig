import { cyberpunk } from "@codesandbox/sandpack-themes";
import {
  SandpackLayout,
  SandpackCodeEditor,
  SandpackProvider,
  Sandpack,
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

const demo = `import { PetStore } from "petstore-typescript-sdk";

const acme = new Acme({});
console.log(acme);
`;

export function LiveSandbox() {
  return (
    <Sandpack
      options={{ showConsole: true }}
      customSetup={{ dependencies: { "acme-typescript-sdk": "1.0.0" } }}
      template="node"
    />
  );
}
