import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/dictionary/",

  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
  
      pwaAssets: {
        disabled: false,
        config: true,
      },
  
      manifest: {
        name: 'front-end dictionary',
        short_name: 'front-end dictionary',
        description: 'dictionary',
        theme_color: '#ffffff',
      },
  
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
  
      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })
  ],
})

