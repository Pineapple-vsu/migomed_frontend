import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://migomed-new.onrender.com",
        // target: "http://localhost:5174",
        changeOrigin: true,
      },
    },
  },
});
