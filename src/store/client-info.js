import { HTTP } from '@/http';
import router from '@/router';
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
};

const getters = {
  // client (state) {
  //   return state.client;
  // },
  client: state => state.client,
  values: state => state.values
};

const mutations = {
  SET_CLIENT (state, clientInfo) {
    state.client = clientInfo;
  },
  SET_VALUES (state, values) {
    state.values = values;
  }
};

const actions = {
  infoPatch ({ commit }, payload) {
    HTTP.patch('/', { ...payload })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  },
  async userPatch ({ commit }, payload) {
    try {
      const { data } = await HTTP.patch('/', { ...payload });
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  welcomePatch ({ commit }, payload) {
    HTTP.patch('/', { ...payload })
      .then(({ data }) => {
        router.push('/');
      })
      .catch(error => console.log(error));
  },

  async getClient ({ commit }) {
    try {
      const { data } = await HTTP.get('/');
      commit('SET_CLIENT', data);
    } catch (error) {
      console.log(error);
    }
  },

  async getValues ({ commit }) {
    try {
      const { data } = await HTTP.get('/values/');
      commit('SET_VALUES', data);
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
