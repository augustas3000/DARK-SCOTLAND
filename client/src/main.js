import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
// import VueRouter from 'vue-router';
// import { routes } from './routes.js';

Vue.config.productionTip = false
// Vue.use(VueRouter)


export const eventBus = new Vue();
// const router = new VueRouter({
//
// });


new Vue({
  render: h => h(App),
}).$mount('#app')
