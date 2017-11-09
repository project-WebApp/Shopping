// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from './components/apple'
import Banana from './components/banana'
import redApple from './components/redApple'
Vue.use(VRouter)
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters: {
    getTotal (state){
      return state.totalPrice
    }
  },
  mutations: {
    increment (state, price) {
      state.totalPrice += price
    },
    decrement (state, price) {
      state.totalPrice -= price
    }
  },
  actions: {
    increase (context, price) {
      context.commit('increment', price)
    }
  }
})
let router = new VRouter({
  mode: 'history',
  routes: [
  {
    path: '/',
    redirect: '/apple'
  },
  {
    path: '/apple',
    component: Apple,
    children: [{
      path: 'red',
      component: redApple
    }]
  },
  {
    path: '/banana',
    component: Banana
  }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
