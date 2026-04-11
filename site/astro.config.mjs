import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://damienpugin.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
