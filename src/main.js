import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import personalInfo from './components/form-page1.vue'
import otherInfo from './components/form-page2.vue'
import iceCreamInfo from './components/form-page3.vue'
import home from './components/home.vue'

import { routes } from './routes'

import { store } from './store/store'

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
