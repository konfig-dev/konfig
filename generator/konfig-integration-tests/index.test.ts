import { execa } from "execa";

async function e2e({ path }: { path?: string }) {
  if (!path) {
    throw new Error("Path is required");
  }

  // run "konfig generate -d" inside the path
  await execa("konfig", ["generate", "-d"], {
    cwd: path,
    stdio: "inherit",
  });
}

test("python-dataclass-responses", async () => {
  e2e({ path: expect.getState().currentTestName });
});
