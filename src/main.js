import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API
axios.defaults.headers.common['Content-Type'] = 'application/json'
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Token ' + token
}
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     const { status } = error.response
//     if (status === 401) {
//       store.dispatch('userAuth/logout')
//     }
//     return Promise.reject(error)
//   }
// )
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
