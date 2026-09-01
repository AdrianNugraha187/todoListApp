import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // atau '0.0.0.0' agar bisa diakses di luar container Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // memastikan hot-reload berjalan mulus di Docker Linux
    },
  },
});
