import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "pages.spec.ts",
  reporter: "line",
  use: { baseURL: "http://127.0.0.1:4336/evals-control-room/", ...devices["Desktop Chrome"] },
  webServer: {
    command: "cross-env TEST_PAGES=1 npx astro build && http-server .pages-preview -a 127.0.0.1 -p 4336 -c-1",
    url: "http://127.0.0.1:4336/evals-control-room/",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
