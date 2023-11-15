import { defineConfig, UserConfig } from 'vite'
import PRESET from './presets'
import path from 'path'

// src目录绝对路径
const srcPath = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/

export default defineConfig((): UserConfig => {
  return {
    plugins: [PRESET(__dirname)],
    resolve: {
      // 路径别名
      alias: {
        '@': srcPath, // src
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5525,
      open: true,
    },
  }
})
