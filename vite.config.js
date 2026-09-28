import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Hosted under the group's /recruitment subfolder (dev.sharper-labs.com/recruitment/),
  // so every built asset URL (JS/CSS/favicon) is prefixed with /recruitment automatically.
  base: '/recruitment/',
  plugins: [react(),  tailwindcss(),],
})
