import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: 'inline',
    },
    envDir: './env',
    envPrefix: 'DAPP_',
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    define: {
        global: 'window',
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                })
            ]
        }
    }
})
