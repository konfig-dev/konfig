import { ProductSection } from "./ProductSection";
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
        <video
          className="rounded-xl bg-video-bg shadow-lg w-full lg:w-1/2 p-2"
          autoPlay
          loop
          src="/video/snippet.mov"
        />
      )}
    />
  );
}
