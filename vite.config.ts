import unocss from 'unocss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte(), unocss()],
  resolve: {
    alias: {
      $lib: resolve(__dirname, 'src/lib'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // others page
      },
      output: {
        manualChunks: {
          openplayerjs: ['openplayerjs'],
          plyr: ['plyr'],
        },
      },
    },
  },
})
