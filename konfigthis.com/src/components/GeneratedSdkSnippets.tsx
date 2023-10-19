import { ProductSection } from "./ProductSection";
import { LightSectionTitleHighlight } from "./LightSectionTitleHighlight";

export function GeneratedSdkSnippets() {
  return (
    <ProductSection
      graphicBottom
      parent="Documentation"
      Section={() => (
        <>
          User Generated{" "}
          <LightSectionTitleHighlight>
            SDK Code Snippets
          </LightSectionTitleHighlight>
        </>
      )}
      Description={() => (
        <>
          Efficiently onboard customers in any language. Enable developers to
          easily copy and paste the required code directly from your
          documentation. No manual updates needed on your end.
        </>
      )}
      Visual={() => (
        <video
          className="rounded-xl bg-video-bg shadow-lg w-full lg:w-1/2 p-2"
          autoPlay
          muted
          loop
          src="/video/snippet-quick.mov"
        />
      )}
    />
  );
}
