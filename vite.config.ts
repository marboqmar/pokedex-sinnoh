import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    environment: "jsdom", // Adds jsdom to vite
    globals: true, // Allows using describe, it, and expect without importing them
    setupFiles: "./src/tests/utils/vitest.setup.ts", // Performs clean up before each test
  },
});
