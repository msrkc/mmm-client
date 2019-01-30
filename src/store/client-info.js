import { HTTP } from '@/http'
import router from '@/router'

const state = {
  client: {},
  identifier: null,
  values: {
    'country': [],
    'legal_form': [],
    'benefits': [],
    'forms_of_cooperation': [],
    'company_values': [],
    'technology_stack': [],
    'methodologies': [],
    'version_control_systems': [],
    'specialization': []
  }
}

const getters = {
  client (state) {
    return state.client
  },
  values (state) {
    return state.values
  },
  identifier: state => state.client.identifier
}

const mutations = {
  setClient (state, clientInfo) {
    state.client = clientInfo
  },
  setValues (state, values) {
    state.values = values
  },
  setIdentifier (state, identifier) {
    if (identifier.length > 1) {
      state.identifier = identifier
    }
  }
}

const actions = {
  welcomePatch ({ commit }, payload) {
    HTTP.patch('/', { ...payload })
      .then(({ data }) => {
        commit('setIdentifier', payload.identifier)
        router.go('/')
      })
      .catch(error => console.log(error))
  },
  getClient ({ commit }) {
    HTTP.get('/')
      .then(({ data }) => {
        // console.log('clientget')
        commit('setClient', data)
        commit('setIdentifier', data.identifier)
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
