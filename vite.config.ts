import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/about",
        "/industries",
        "/capabilities",
        "/quality",
        "/materials",
        "/contact",
        "/equipment",
        "/case-studies",
        "/cost-advantage",
        "/faq",
        "/blog",
        "/quote",
        "/thank-you",
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
