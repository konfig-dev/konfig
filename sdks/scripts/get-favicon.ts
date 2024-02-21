import { fetchFaviconAndSaveToFile } from "../src/fetch-favicon-and-save-to-file";
async function main() {
  // get first and second args to script
  const domain = process.argv[2];
  const destination = process.argv[3];
  if (!domain || !destination) {
    console.error("Please provide a domain and a destination");
    process.exit(1);
  }
  fetchFaviconAndSaveToFile({ domain, destination });
}

main();
