import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Securely pass the environment variable to the client
      VITE_NUTRITION_API_CALORIE_NINJA: JSON.stringify(env.VITE_NUTRITION_API_CALORIE_NINJA),
    },
    optimizeDeps: {
      include: ["chartjs-adapter-date-fns"],
    },
  };
});
