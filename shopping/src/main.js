// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import VResource from 'vue-resource'



Vue.use(VRouter)
Vue.use(Vuex)
Vue.use(VResource)
let store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
let router = new VRouter({
  mode: 'history',
  routes: []
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
