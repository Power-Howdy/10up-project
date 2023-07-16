import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    viewportWidth: 1024,
    viewportHeight: 800,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
