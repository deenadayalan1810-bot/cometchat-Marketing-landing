import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  server: {
    hmr: {
      overlay: false,
    },
    watch: {
      usePolling: true,
      interval: 150,
      awaitWriteFinish: {
        stabilityThreshold: 250,
        pollInterval: 100,
      },
    },
  },
})
