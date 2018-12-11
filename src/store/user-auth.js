import axios from 'axios'
import router from '@/router'

const state = {
  token: null,
  email: null
}

const getters = {
  email (state) {
    return state.email
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
  }
}

const actions = {
  login ({ commit }, payload) {
    console.log(payload)
    axios.post('/login/', {
      email: payload.email,
      password: payload.password
    }
    // , {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // }
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
      .catch(error => console.log(error))
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
      .catch(error => console.log(error))
  },
  logout ({ commit }) {
    commit('clearAuthData')
    localStorage.removeItem('token')
    router.replace('/login')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
