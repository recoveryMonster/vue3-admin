import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

const resolve = (dir) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  env: loadEnv(mode, process.cwd()),
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      views: resolve('./src/views'),
    },
    extensions: ['.js', '.jsx', '.vue'],
  },
}))
