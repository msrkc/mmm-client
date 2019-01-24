import { HTTP } from '@/http'

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
    HTTP.patch('/', { ...payload })
      .then(({ data }) => {
        console.log(data)
      })
  },
  getClient ({ commit }) {
    HTTP.get('/')
      .then(({ data }) => {
        commit('setClient', data)
      })
      .catch(err => { console.log(err) })
  },
  getValues ({ commit }) {
    HTTP.get('/values/')
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
