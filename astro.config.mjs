// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  output: 'static',
  server: {
    port: 3001, // Set the port for the development server
  },
});
