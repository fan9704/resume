import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
// Vuetify
// import { createVuetify } from 'vuetify'
// import 'vuetify/dist/vuetify.css'
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App);
// const vuetify = createVuetify()
// app.use(vuetify)
app.use(router)
app.use(loadFonts);
app.use(AOS.init());
app.mount('#app');