import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// src目录绝对路径
const srcPath = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/

export default defineConfig((): UserConfig => {
  return {
    plugins: [vue()],
    resolve: {
      // 路径别名
      alias: {
        '@': srcPath, // src
      },
    },
  }
})
