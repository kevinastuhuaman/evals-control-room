import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kevinastuhuaman.github.io",
  base: process.env.TEST_BASE === "root" ? "/" : "/evals-control-room",
  outDir: process.env.TEST_PAGES === "1" ? "./.pages-preview/evals-control-room" : "./dist",
  output: "static",
});
