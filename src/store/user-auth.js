import axios from 'axios'
import router from '@/router'

const state = {
  token: null,
  email: null,
  errors: '',
  process: '0'
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
  },
  process (state, payload) {
    state.process = payload
  }
}

const actions = {
  login ({ commit, state }, payload) {
    commit('process', 1)
    axios.post('/login/', {
      email: payload.email,
      password: payload.password
    }
    )
      .then(({ data }) => {
        commit('authUser', {
          token: data.token,
          email: data.client.email
        })
        commit('process', 0)
        localStorage.setItem('token', data.token)
        router.push('/')
      })
      .catch(error => {
        commit('process', 0)
        if (error.response.data) {
          commit('showError', error.response.data)
        }
      })
  },
  signup ({ commit }, payload) {
    commit('process', 1)
    axios.post('/register/', {
      email: payload.email,
      password: payload.password
    })
      .then(({ data }) => {
        commit('authUser', {
          token: data.token,
          email: data.client.email
        })
        commit('process', 0)
        localStorage.setItem('token', data.token)
        router.push('/')
      })
      .catch(error => {
        commit('process', 0)
        if (error.response.data) {
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
