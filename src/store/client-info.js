import axios from 'axios'

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
  welcomePatch ({ commit }, payload) {
    axios.patch('/', { ...payload })
      .then(({ data }) => {
        console.log(data)
      })
  },
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
