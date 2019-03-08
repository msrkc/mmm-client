import { HTTP } from '@/http';
import router from '@/router';

const state = {
  token: localStorage.getItem('token') || null,
  errors: '',
  process: 0
};

const getters = {
  errors (state) {
    return state.errors;
  },
  process (state) {
    return state.process;
  },
  isAuth: state => !!state.token
};

const mutations = {
  authUser (state, userData) {
    state.token = userData.token;
  },
  clearAuthData (state) {
    state.token = null;
    state.email = null;
  },
  showError (state, error) {
    state.errors = error;
  },
  process (state, process) {
    state.process = process;
  }
};

const actions = {
  login ({ commit, state }, payload) {
    commit('process', 1);
    HTTP.post('/login/', { ...payload })
      .then(({ data }) => {
        commit('authUser', {
          token: data.token
        });
        commit('process', 0);
        localStorage.setItem('token', data.token);
        HTTP.defaults.headers.common['Authorization'] = 'Token ' + data.token;
        router.push('/');
      })
      .catch(error => {
        commit('process', 0);
        if (error.response.data) {
          commit('showError', error.response.data);
        }
      });
  },
  signup ({ commit }, payload) {
    commit('process', 1);
    HTTP.post('/register/', { ...payload })
      .then(({ data }) => {
        commit('authUser', {
          token: data.token
        });
        commit('process', 0);
        localStorage.setItem('token', data.token);
        HTTP.defaults.headers.common['Authorization'] = 'Token ' + data.token;
        router.push('/');
      })
      .catch(error => {
        commit('process', 0);
        if (error.response.data) {
          commit('showError', error.response.data);
        }
      });
  },
  logout ({ commit }) {
    commit('clearAuthData');
    localStorage.removeItem('token');
    delete HTTP.defaults.headers.common['Authorization'];
    router.push('/login');
  },
  cleanError ({ commit }) {
    commit('showError', '');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
