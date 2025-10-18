import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteDts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteDts({
      outDir: 'dist',
      include: ['src'],
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true,
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/shared/ui/index.ts', import.meta.url)),
      name: 'MurrUI',
      fileName: (format) => `murrui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
    },
    emptyOutDir: true,
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
