import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import i18n from "./plugins/i18n.js";
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {useDark} from "@vueuse/core";

const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        // defaultTheme: 'myCustomLightTheme',
        themes: {
            dark:false,
        },
    },
});
const isDark = useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
    onChanged(dark) {
        // update the dom, call the API or something
    },
})
app.provide('dark', isDark);
app.use(i18n);
app.use(vuetify)
app.use(router)
app.use(loadFonts);
app.use(AOS.init());
app.mount('#app');