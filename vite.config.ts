import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "estudiante-universidad-del-nor",
    project: "project_x"
  })],

  build: {
    sourcemap: true
  },

  define: {
    'process.env': process.env,
  },
})