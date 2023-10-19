import { ProductSection } from "./ProductSection";
import { LightSectionAnchor } from "./LightSectionAnchor";
import { LightSectionTitleHighlight } from "./LightSectionTitleHighlight";
import { useWindowScroll } from "@mantine/hooks";
import { Mark, clsx } from "@mantine/core";
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
        <ul className="list-disc list-inside sm:list-outside space-y-4">
          <li>
            Maintain <Mark>seamless consistency</Mark> between your docs and
            SDKs, anchored by a source of truth.
          </li>
          <li>
            Any time you publish a change to your spec, Konfig{" "}
            <LightSectionAnchor href="https://konfigthis.com/docs/portal/tutorials/configuring-your-github-repository">
              automatically updates your docs
            </LightSectionAnchor>
            .
          </li>
        </ul>
      )}
      Visual={Visual}
    />
  );
}

function Visual() {
  const ref = useRef<HTMLImageElement>(null);
  const inView = useIsInView({ ref });
  return (
    <div
      className={clsx(
        {
          ["!opacity-100 !translate-x-0 !blur-0"]: inView,
        },
        "opacity-0 blur-md translate-x-[200%] transition duration-700 ease-in-out sm:max-w-[60%]"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        className={clsx("object-cover rounded-xl shadow-xl")}
        alt="API Documentation"
        src="/docs-light.webp"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        className={clsx(
          "object-cover absolute top-[20%] left-[2%] sm:top-[20%] sm:left-[15%] rounded-xl shadow-xl"
        )}
        alt="API Documentation"
        src="/docs-dark.webp"
      />
    </div>
  );
}

function useIsInView({ ref }: { ref: React.RefObject<HTMLElement> }): boolean {
  useWindowScroll();
  if (typeof window === undefined) return false;
  if (!ref.current) return false;
  const windowBottom = (window.innerHeight * 2) / 3;
  const { top, bottom } = ref.current.getBoundingClientRect();
  return top < windowBottom && bottom > 0;
}
