import axios from 'axios'
import router from '@/router'

const state = {
  token: null,
  errors: '',
  process: 0
}

const getters = {
  errors (state) {
    return state.errors
  },
  process (state) {
    return state.process
  },
  isAuth (state) {
    if (state.token) {
      return true
    } else { return false }
  }
}

const mutations = {
  authUser (state, userData) {
    state.token = userData.token
  },
  clearAuthData (state) {
    state.token = null
    state.email = null
  },
  showError (state, error) {
    state.errors = error
  },
  process (state, process) {
    state.process = process
  }
}

const actions = {
  login ({ commit, state }, payload) {
    commit('process', 1)
    axios.post('/login/', { ...payload })
      .then(({ data }) => {
        commit('authUser', {
          token: data.token
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
    axios.post('/register/', { ...payload })
      .then(({ data }) => {
        commit('authUser', {
          token: data.token
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
      token: token
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
