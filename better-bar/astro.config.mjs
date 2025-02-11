// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  devOptions: {
    port: 3001, // Set the port for the development server
  },
});
