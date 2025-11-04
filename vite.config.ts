import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
  resolve: {
    alias: [
      { find: 'preact/hooks', replacement: 'node_modules/preact/hooks/dist/hooks.es.js' },
      { find: 'preact/compat', replacement: 'node_modules/preact/compat/dist/compat.es.js' }
    ]
  },
  build: {
    lib: {
      entry: './src/sim-components.ts',
      fileName: () => `sim-components.esm.js`,
      formats: ['es']
    },
    minify: false,
    target: 'es2020',
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
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