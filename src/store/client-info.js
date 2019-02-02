import { HTTP } from '@/http'
import router from '@/router'
const state = {
  client: {},
  values: {
    country: [],
    legal_form: [],
    benefits: [],
    forms_of_cooperation: [],
    company_values: [],
    technology_stack: [],
    methodologies: [],
    version_control_systems: [],
    specialization: []
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
  infoPatch ({ commit }, payload) {
    HTTP.patch('/', { ...payload })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  },
  welcomePatch ({ commit }, payload) {
    HTTP.patch('/', { ...payload })
      .then(({ data }) => {
        router.push('/')
      })
      .catch(error => console.log(error))
  },
  getClient ({ commit }) {
    HTTP.get('/')
      .then(({ data }) => {
        commit('setClient', data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  getValues ({ commit }) {
    HTTP.get('/values/')
      .then(({ data }) => {
        commit('setValues', data)
      })
      .catch(err => {
        console.log(err)
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
