import axios from 'axios'
import router from '@/router'

const state = {
  token: null,
  email: null,
  errors: ''
}

const getters = {
  email (state) {
    return state.email
  },
  errors (state) {
    return state.errors
  }
}

const mutations = {
  authUser (state, userData) {
    state.token = userData.token
    state.email = userData.email
  },
  clearAuthData (state) {
    state.token = null
    state.email = null
  },
  showError (state, payload) {
    state.errors = payload
  }
}

const actions = {
  login ({ commit }, payload) {
    console.log(payload)
    axios.post('/login/', {
      email: payload.email,
      password: payload.password
    }
    )
      .then(({ data }) => {
        // console.log(data)
        commit('authUser', {
          token: data.token,
          email: data.client.email
        })
        localStorage.setItem('token', data.token)
        router.push('/')
      })
      .catch(error => {
        if (error.response.data) {
          console.log(error.response.data)
          commit('showError', error.response.data)
        }
      })
  },
  signup ({ commit }, payload) {
    console.log(payload)
    axios.post('/register/', {
      email: payload.email,
      password: payload.password
    })
      .then(({ data }) => {
        // console.log(data)
        commit('authUser', {
          token: data.token,
          email: data.client.email
        })
        localStorage.setItem('token', data.token)
        router.push('/')
      })
      .catch(error => {
        if (error.response.data) {
          console.log(error.response.data)
          commit('showError', error.response.data)
        }
      })
  },
  logout ({ commit }) {
    commit('clearAuthData')
    localStorage.removeItem('token')
    router.replace('/login')
  },
  cleanError ({ commit }) {
    commit('showError', '')
  },
  tryAutoLogin ({ commit }) {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    commit('authUser', {
      token: token,
      email: ''
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
