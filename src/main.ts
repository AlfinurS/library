import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
const Vue = createApp(App);
Vue.use(router);

Vue.use(VueAxios as any, axios);
Vue.provide("axios", Vue.config.globalProperties.axios);
Vue.use(store as any);
Vue.use(vuetify).mount("#app");