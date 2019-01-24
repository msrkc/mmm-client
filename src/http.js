import axios from 'axios'
import store from './store'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

const token = localStorage.getItem('token')
if (token) {
  HTTP.defaults.headers.common['Authorization'] = 'Token ' + token
}

HTTP.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response
    if (status === 401) {
      store.dispatch('userAuth/logout')
    }
    return Promise.reject(error)
  }
)

export default { HTTP }
