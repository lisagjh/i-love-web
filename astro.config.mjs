import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  output: "static", // Static Site Generation
  experimental: {
    viewTransitions: true,
  },
});
