import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './views/Home.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Login/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter (to, from, next) {
        const token = localStorage.getItem('token')
        return token ? next() : next('/login')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter (to, from, next) {
        const token = localStorage.getItem('token')
        return token ? next('/') : next()
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter (to, from, next) {
        const token = localStorage.getItem('token')
        return token ? next('/') : next()
      }
    }
  ]
})
