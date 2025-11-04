import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/sim-components.ts',
      fileName: () => `sim-components.esm.js`,
      formats: ['es']
    },
    target: 'es2020',
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        entryFileNames: '[name].esm.js',
        preserveModules: false
      }
    }
  },
  test: {
    environment: 'node',
    includeSource: ['./src/**/*.{ts,js}']
  }
})