import axios from 'axios'

const state = {
  client: {},
  values: {
    'country': [],
    'legal_form': []
  }
}

const getters = {
  client (state) {
    return state.client
  },
  values (state) {
    return state.values
  }
}

const mutations = {
  setClient (state, clientInfo) {
    state.client = clientInfo
  },
  setValues (state, values) {
    state.values = values
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
        commit('setClient', data)
      })
      .catch(err => { console.log(err) })
  },
  getValues ({ commit }) {
    axios.get('/values/')
      .then(({ data }) => {
        commit('setValues', data)
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
