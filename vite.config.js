import { defineConfig } from 'vitest/config'
import { transform } from '@swc/core'
import path from 'node:path'

function swcPlugin() {
  return {
    name: 'swc-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('node_modules')) return null
      const ext = path.extname(id)
      if (!['.js', '.ts', '.jsx', '.tsx'].includes(ext)) return null

      const result = await transform(code, {
        filename: id,
        jsc: {
          parser: {
            syntax: ext === '.ts' || ext === '.tsx' ? 'typescript' : 'ecmascript',
            tsx: ext === '.tsx',
            jsx: ext === '.jsx'
          },
          target: 'es2018'
        },
        sourceMaps: true
      })

      return {
        code: result.code,
        map: result.map
      }
    }
  }
}

export default defineConfig({
  plugins: [swcPlugin()],
  build: {
    outDir: 'build',
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
