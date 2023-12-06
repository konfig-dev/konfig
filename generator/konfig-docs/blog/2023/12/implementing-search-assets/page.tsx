import { GetStaticPaths, GetStaticProps } from "next";
import Fuse, { IFuseOptions } from "fuse.js";

/**
 * This ensures every page is generated at runtime and its blocking so that
 * the every page is not served until it is generated.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

/**
 * Fuse.js needs an array of objects to index. Include any properties you might
 * need to display or use in the search results.
 */
type SearchRecord = {
  id: string;
  title: string;
  content: string;
};

/**
 * This function should be implemented by you.
 */
async function aggregateContent(): Promise<SearchRecord[]> {
  const content = [];
  // ...aggregate necessary content to index for search
  return content;
}

/**
 * Aggregate and return the content during ISR
 */
export const getStaticProps: GetStaticProps<{
  content: SearchRecord[];
}> = async () => {
  // Aggregate the content to index
  const content = await aggregateContent();
  return { props: { content } };
};

function createFuseInstance(content: SearchRecord[]) {
  // Create the fuse instance
  const options = {
    keys: ["content", "title"],
    useExtendedSearch: true,
    ignoreLocation: true,
    threshold: 0.3,
    fieldNormWeight: 2,
  };
  return new Fuse(content, options);
}

/**
 * Checkout Mantine's Spotlight component for inspiration on how to implement
 * search: https://mantine.dev/others/spotlight/
 */
function Search({ fuse }: { fuse: Fuse<SearchRecord> }) {
  return; // ...implement UI for search
}

export default function MyPage({ content }: { content: SearchRecord[] }) {
  const fuse = createFuseInstance(content);

  return <Search fuse={fuse} />;
}
