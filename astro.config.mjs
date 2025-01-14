import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: "static",
  outDir: "./dist", 
  output: "static", // Static Site Generation
});
