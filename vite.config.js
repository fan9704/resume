import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    build:{
        chunkSizeWarningLimit:1500,
    },
    plugins: [
      vue(),
        Components({
            extensions: ['vue'],
            dirs: ['src/components'],
            include: [/\.vue$/, /\.vue\?vue/],
            deep: true,
            resolvers: [Vuetify3Resolver()],
            types: [
                {
                    from: 'vue-router',
                    names: ['RouterLink', 'RouterView'],
                },
            ],
        }),
    ],
    base: "/",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/variables.scss";`,
            },
        },
    },
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'vue$': 'vue/dist/vue.esm.js',
            'static': path.resolve(__dirname, '../static'),
        },
    },
})
