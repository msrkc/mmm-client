import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login/Login.vue';
import Register from '@/components/Login/Register.vue';
import NotFound from '@/components/UI/NotFound.vue';
import Welcome from '@/components/Dashboard/Welcome.vue';

import Dashboard from '@/components/Dashboard.vue';
import DashboardHome from '@/components/Dashboard/DashboardHome.vue';
import CompanyInformation from '@/components/Dashboard/Company/CompanyInformation.vue';

Vue.use(Router);

const guardNoUser = {
  beforeEnter (to, from, next) {
    const token = localStorage.getItem('token');
    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
};

const guardUser = {
  beforeEnter (to, from, next) {
    const token = localStorage.getItem('token');
    return token ? next('/') : next();
  }
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        { path: '/', component: DashboardHome, name: 'DashboardHome' },
        {
          path: 'info',
          component: CompanyInformation,
          name: 'CompanyInformation'
        }
      ],
      ...guardNoUser
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      ...guardNoUser
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
});
