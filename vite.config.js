// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 💡 반드시 '/' 로 지정하거나 이 줄을 삭제해야 합니다.
})
