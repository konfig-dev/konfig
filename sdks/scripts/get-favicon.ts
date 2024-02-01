import * as fs from "fs";
import * as path from "path";
async function main() {
  // get first and second args to script
  const domain = process.argv[2];
  const destination = process.argv[3];
  if (!domain || !destination) {
    console.error("Please provide a domain and a destination");
    process.exit(1);
  }
  // Fetch favicon using http://www.google.com/s2/favicons?domain={domain}&sz=128
  const faviconLink = `http://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  // Make a fetch call and follow redirects
  const response = await fetch(faviconLink, {
    method: "GET",
    redirect: "follow",
  });
  const blob = await response.blob();

  // determine filetype
  const contentType = response.headers.get("content-type");
  if (!contentType) {
    console.error("No content type found");
    process.exit(1);
  }
  const ext = fileExtension(contentType);

  // write blob to file at destination
  const destinationPath = path.join(destination, `favicon${ext}`);
  const buffer = await blob.arrayBuffer();
  const array = new Uint8Array(buffer);
  fs.writeFileSync(destinationPath, Buffer.from(array));
}

function fileExtension(contentType: string) {
  switch (contentType) {
    case "image/png":
      return ".png";
    case "image/jpeg":
      return ".jpg";
    case "image/gif":
      return ".gif";
    case "image/svg+xml":
      return ".svg";
    default:
      return ".ico";
  }
}

main();
