import React from "react";
import clsx from "clsx";
import {
  useBlogPost,
  BlogPostContextValue,
} from "@docusaurus/theme-common/internal";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline from "@theme/TagsListInline";
import ReadMoreLink from "@theme/BlogPostItem/Footer/ReadMoreLink";
import styles from "./styles.module.css";
export default function BlogPostItemFooter() {
  const {
    metadata,
    isBlogPostPage,
    metadata: { authors },
  } = useBlogPost();
  console.log(isBlogPostPage, metadata, authors);
  const { tags, title, editUrl, hasTruncateMarker } = metadata;
  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;
  const tagsExists = tags.length > 0;
  const renderFooter = tagsExists || truncatedPost || editUrl;
  if (!renderFooter) {
    return isBlogPostPage && <AuthorSection authors={authors} />;
  }
  return (
    <footer
      className={clsx(
        "row docusaurus-mt-lg",
        isBlogPostPage && styles.blogPostFooterDetailsFull
      )}
    >
      {tagsExists && (
        <div className={clsx("col", { "col--9": truncatedPost })}>
          <TagsListInline tags={tags} />
        </div>
      )}

      {isBlogPostPage && editUrl && (
        <div className="col margin-top--sm">
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {truncatedPost && (
        <div
          className={clsx("col text--right", {
            "col--3": tagsExists,
          })}
        >
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}

      {isBlogPostPage && <AuthorSection authors={authors} />}
    </footer>
  );
}

function AuthorSection({ authors }) {
  return authors.map(({ key, name, github, linkedin, imageURL, bio }) => {
    return (
      <div key={key} className="p-4 mt-5 flex flex-row gap-5">
        <img className="rounded-full h-16" src={imageURL} alt={name} />
        <div>
          <div className="flex flex-row gap-2 items-center mb-2">
            <span className="font-semibold">{name}</span>
            {github && (
              <a className="text-xs" href={github} target="_blank">
                GitHub
              </a>
            )}
            {linkedin && (
              <a className="text-xs" href={linkedin} target="_blank">
                LinkedIn
              </a>
            )}
          </div>
          <p className="text-sm">{bio}</p>
        </div>
      </div>
    );
  });
}
