import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import personalInfo from './components/form-page1.vue'
import otherInfo from './components/form-page2.vue'
import iceCreamInfo from './components/form-page3.vue'

import { store } from './store/store'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  VueRouter,
  store,
  render: h => h(App)
})
