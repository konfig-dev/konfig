import React, { PropsWithChildren } from "react";
import highlightjs from "highlight.js";
import "highlight.js/styles/base16/solarized-dark.css";

export const MarkdownRenderer: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  if (typeof children !== "string")
    throw new Error("MarkdownRenderer only accepts string children");

  // Split the markdown content at code block boundaries
  const parts = children.split(/(```[a-z]*\n[\s\S]*?\n```)/);

  // Highlight each part
  const highlightedParts = parts.map((part) => {
    // Check if the part is a code block
    if (part.startsWith("```")) {
      const match = part.match(/```([a-z]+)\n([\s\S]*?)\n```/);
      if (match) {
        const [, lang, code] = match;
        return (
          "```" +
          lang +
          "\n" +
          highlightjs.highlight(code, { language: lang }).value +
          "\n```"
        );
      }
    }
    // Highlight the part as markdown if it's not a code block
    return highlightjs.highlight("markdown", part).value;
  });

  // Combine the highlighted parts
  const highlightedMarkdown = highlightedParts.join("");

  return (
    <pre>
      <code
        className="hljs markdown"
        dangerouslySetInnerHTML={{ __html: highlightedMarkdown }}
      ></code>
    </pre>
  );
};
