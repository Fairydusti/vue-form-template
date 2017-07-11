import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import personalInfo from './components/form-page1.vue'

import { store } from './storage/store'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  VueRouter,
  store,
  render: h => h(App)
})
// Vue.component('pesonal-info', personalInfo)