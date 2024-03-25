import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-frontend", // Set the base URL if needed
  build: {
    // Set the entry point to your main JavaScript file
    rollupOptions: {
      input: {
        main: "./main.jsx", // Adjust the path as needed
      },
    },
  },
});
