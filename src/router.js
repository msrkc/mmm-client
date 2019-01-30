/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Login from '@/components/Login/Login.vue'
import Register from '@/components/Login/Register.vue'
import NotFound from '@/components/UI/NotFound.vue'
import Welcome from '@/components/Dashboard/Welcome.vue'

import Dashboard from '@/components/Dashboard.vue'
import DashboardHome from '@/components/Dashboard/DashboardHome.vue'
import CompanyInformation from '@/components/Dashboard/Company/CompanyInformation.vue'

Vue.use(Router)

const guardUser = {
  beforeEnter (to, from, next) {
    const checkWelcome = () => {
      store.dispatch('clientInfo/getClient').then(() => {
        if (!store.state.clientInfo.identifier) {
          store.watch((state, getters) => getters['clientInfo/identifier'], () => {
            if (store.state.clientInfo.identifier) {
              next('/')
            } else {
              next()
            }
          })
        }
      })
    }
    const checkIdentifier = () => {
      if (!store.state.clientInfo.client) {
        store.dispatch('clientInfo/getClient').then(() => {
          if (!store.state.clientInfo.identifier) {
            store.watch((state, getters) => getters['clientInfo/identifier'], () => {
              if (!store.state.clientInfo.identifier) {
                next('/welcome')
              } else {
                next()
              }
            })
          }
        })
      } else {
        if (!store.state.clientInfo.identifier) {
          next('/welcome')
        } else {
          next()
        }
      }
    }

    const token = localStorage.getItem('token')
    if (token) {
      if (to.path === '/login' || to.path === '/register') {
        next('/')
      } else {
        if (to.path === '/welcome') {
          checkWelcome()
        } else {
          checkIdentifier()
        }
      }
    } else {
      if (to.path === '/login' || to.path === '/register') {
        next()
      } else {
        next('/login')
      }
    }
  }
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      component: Dashboard,
      children: [
        { path: '/', component: DashboardHome, name: 'DashboardHome' },
        { path: 'info', component: CompanyInformation, name: 'CompanyInformation' }
      ],
      ...guardUser },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      ...guardUser
    },
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
    },

    { path: '*', component: NotFound }
  ]
})
