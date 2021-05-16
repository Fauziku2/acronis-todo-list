import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'
import './plugins/element.js'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
