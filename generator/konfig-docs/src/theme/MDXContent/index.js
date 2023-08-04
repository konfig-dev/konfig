import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import { Mermaid } from "@site/src/components/Mermaid/Mermaid";
import { Tooltip } from "@site/src/components/Tooltip";
import { Stats } from "@site/src/components/Stats/Stats";
import Admonition from "@theme/Admonition";
import { VideoPlayer } from "@site/src/components/VideoPlayer";
import { Slammer } from "@site/src/components/Slammer/Slammer";
import { Glowing } from "@site/src/components/Glowing/Glowing";
import { Figure } from "@site/src/components/Figure";
import { Flame } from "@site/src/components/Flame/Flame";
import { Gradient } from "@site/src/components/Gradient/Gradient";
import { VideoSection } from "@site/src/components/VideoSection";
import "@fortawesome/fontawesome-free/css/all.css";

export default function MDXContent({ children }) {
  return (
    <MDXProvider
      components={{
        ...MDXComponents,
        Mermaid,
        Stats,
        Tooltip,
        Figure,
        Admonition,
        VideoPlayer,
        Slammer,
        Glowing,
        Flame,
        VideoSection,
        Gradient,
      }}
    >
      {children}
    </MDXProvider>
  );
}
