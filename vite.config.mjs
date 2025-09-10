// vite.config.mjs
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server:  { host: true, port: 5173 },
  preview: { host: true, port: 4173 },

  plugins: [
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,webmanifest}']
      },
      manifest: {
        id: '/',

        // ==== Branding ====
        name: 'Familienwegweiser – BilSE',
        short_name: 'Familienwegweiser',
        description: 'Standorte, Jobcenter, Termine & Ansprechpartner – BilSE Familienwegweiser.',
        lang: 'de',
        dir: 'ltr',

        // ==== Start/Display/Farben ====
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0e7ac4', // BilSE-Blau (anpassbar)

        // ==== Icons (Dateien in /public/icons) ====
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ],

        // (optional) Kategorien/Shortcuts
        categories: ['education', 'social', 'navigation'],
        shortcuts: [
          { name: 'Standorte', url: '/', description: 'Standorte und Karte' },
          { name: 'Kalender',  url: '/', description: 'Termine & Veranstaltungen' },
          { name: 'Jobcenter', url: '/', description: 'Zuständiges Jobcenter' }
        ]
      }
    })
  ]
})
