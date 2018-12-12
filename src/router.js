import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Login/Register.vue'

Vue.use(Router)

const guardNoUser = {
  beforeEnter (to, from, next) {
    const token = localStorage.getItem('token')
    if (!token) {
      localStorage.removeItem('token')
      next('/login')
    } else {
      next()
    }
  }
}

const guardUser = {
  beforeEnter (to, from, next) {
    const token = localStorage.getItem('token')
    return token ? next('/') : next()
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      ...guardNoUser },
    {
      path: '/login',
      name: 'login',
      component: Login,
      ...guardUser
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      ...guardUser
    }
  ]
})
