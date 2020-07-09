import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(firestorePlugin)

const router = new VueRouter({
  routes
});

export const eventBus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
