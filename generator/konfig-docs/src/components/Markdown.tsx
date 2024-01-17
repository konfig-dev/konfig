import React from "react";
import { marked } from "marked";

export const Markdown = ({ markdownText }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdownText, { gfm: true });
    return { __html: rawMarkup };
  };

  return <div dangerouslySetInnerHTML={getMarkdownText()} />;
};
