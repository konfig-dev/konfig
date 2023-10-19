import docs from "../../public/docs.png";
import Image from "./Image";
import { ProductSection } from "./ProductSection";
import { LightSectionAnchor } from "./LightSectionAnchor";
import { LightSectionTitleHighlight } from "./LightSectionTitleHighlight";
import { useIntersection, useWindowScroll } from "@mantine/hooks";
import { clsx } from "@mantine/core";
import { useRef } from "react";

export function UpdatingDocs() {
  return (
    <ProductSection
      parent="Documentation"
      Section={() => (
        <>
          Beautiful{" "}
          <LightSectionTitleHighlight>
            API Docs & References
          </LightSectionTitleHighlight>{" "}
          that auto-update
        </>
      )}
      Description={() => (
        <>
          Maintain seamless consistency between your docs and SDKs, anchored by
          a source of truth. Any time you publish a change to your spec, Konfig{" "}
          <LightSectionAnchor href="https://konfigthis.com/docs/tutorials/automate-sdk-updates">
            automatically updates your docs
          </LightSectionAnchor>
          .
        </>
      )}
      Visual={Visual}
    />
  );
}

function Visual() {
  const ref = useRef<HTMLImageElement>(null);
  const inView = useIsInView({ ref });
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={clsx(
        {
          ["opacity-100 translate-x-0 blur-0"]: inView,
        },
        "w-full lg:w-3/5 h-[325px] sm:h-auto  rounded-xl shadow-xl transition duration-700 ease-in-out opacity-0 blur-md translate-x-full"
      )}
      style={{ objectFit: "cover" }}
      alt="API Documentation"
      src="/docs.png"
    />
  );
}

function useIsInView({ ref }: { ref: React.RefObject<HTMLElement> }): boolean {
  useWindowScroll();
  if (typeof window === undefined) return false;
  if (!ref.current) return false;
  const windowBottom = (window.innerHeight * 2) / 3;
  const { top, bottom } = ref.current.getBoundingClientRect();
  console.log("windowBottom", windowBottom);
  console.log("top", top);
  return top < windowBottom && bottom > 0;
}
