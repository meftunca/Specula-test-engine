import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/__generated__/**",
      "**/__test_generated__/**",
    ],
  },
});
