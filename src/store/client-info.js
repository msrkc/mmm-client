import axios from 'axios'
import router from '@/router'

const state = {
  client: {}
}

const getters = {
  client (state) {
    return state.client
  }
}

const mutations = {
  getClient (state, clientInfo) {
    state.client = clientInfo
  }
}

const actions = {
  getClient ({ commit }) {
    axios.get('/')
      .then(({ data }) => {
        commit('getClient', data)
      })
      .catch(err => { console.log(err) })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
