import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vuetify from '@vuetify/vite-plugin'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/resume/',
    build:{
        chunkSizeWarningLimit:1500,
    },
    plugins: [
      vue(),
      // vuetify({
      //   autoImport: true,
      // }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'vue$': 'vue/dist/vue.esm.js',
            'static': path.resolve(__dirname, '../static'),
            '/images':'src/assets/images',
        },
    },
})
