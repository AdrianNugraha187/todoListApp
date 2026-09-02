import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // atau '0.0.0.0' agar bisa diakses di luar container Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // memastikan hot-reload berjalan mulus di Docker Linux
    },
  },
});
