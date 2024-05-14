import { JSDOM } from "jsdom";
export async function collectEndpointsFromReadme({
  url,
}: {
  url: string;
}): Promise<string[]> {
  // make sure url does not end with the regex /\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+\/?/. Throw an error if detected
  if (
    !url.endsWith("/reference") &&
    url.match(/\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+\/?$/)
  ) {
    throw new Error(
      `URL (${url}) does not end with the regex '/[a-zA-Z0-9-._~:/?#[]@!$&'()*+,;=]+/?$'`
    );
  }

  const html = await fetch(url).then((res) => res.text());

  // parse for div with "hub-sidebar-content"
  const dom = new JSDOM(html);
  const div = dom.window.document.querySelector("div.hub-sidebar-content");
  if (!div) {
    throw new Error(
      'No div with class "hub-sidebar-content" found in the HTML'
    );
  }

  // find all <a> tags and return their hrefs appended to the input url's base domain
  const hrefs = Array.from(div.querySelectorAll("a")).map((a: any) => {
    const href = a.getAttribute("href");
    if (!href) {
      throw new Error("No href found on <a> tag");
    }
    return href;
  });

  const urls = hrefs.map((href) => new URL(href, url).toString());
  return urls;
}
