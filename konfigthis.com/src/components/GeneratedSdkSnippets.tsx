import docs from "../../public/docs.png";
import Image from "./Image";
import { ProductSection } from "./ProductSection";
import { LightSectionAnchor } from "./LightSectionAnchor";
import { LightSectionTitleHighlight } from "./LightSectionTitleHighlight";

export function GeneratedSdkSnippets() {
  return (
    <ProductSection
      noTopPadding
      parent="Documentation"
      Section={() => (
        <>
          Dynamically Generated{" "}
          <LightSectionTitleHighlight>
            SDK Code Snippets
          </LightSectionTitleHighlight>
        </>
      )}
      Description={() => (
        <>
          Quickly onboard in any language. Show customers the latest code they
          need, directly in your documentation without having to manually update
          code snippets.
        </>
      )}
      Visual={() => (
        <Image
          className="w-full lg:w-3/5 shadow-lg rounded-xl"
          alt="API Documentation"
          src={docs}
        />
      )}
    />
  );
}
