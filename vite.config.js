import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under a repository (not user/org root),
  // set base to the repo name. We'll use the repository path at deploy time.
  base: '/P2P-Academy-Sample/',
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
