import process from "node:process"
import react from "@vitejs/plugin-react"

import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      "__DEV__": mode !== "production",
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || mode),
    },
    server: {
      port: 6005,
      host: "0.0.0.0",
    },
  }
})
