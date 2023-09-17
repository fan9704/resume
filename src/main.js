import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
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
const myCustomLightTheme = {
    dark: true,
    colors: {
        primary: '#33627f',
        secondary: '#34997e',
        black: '#0f172a',
    },
};
const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        // defaultTheme: 'myCustomLightTheme',
        themes: {
            // myCustomLightTheme,
            dark:false,
        },
    },
});

app.use(vuetify)
app.use(router)
app.use(loadFonts);
app.use(AOS.init());
app.mount('#app');