import axios from 'axios'

const state = {
  token: null,
  email: null
}

const getters = {

}

const mutations = {
  authUser (state, userData) {
    state.token = userData.token
    state.email = userData.email
  }
}

const actions = {
  login ({ commit }, authData) {
    axios.post('/login/', {
      email: authData.email,
      password: authData.password
    }
    // , {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // }
    )
      .then(res => {
        console.log(res)
        commit('authUser', {
          token: res.token,
          email: res.client.email
        })
      })
      .catch(error => console.log(error))
  },
  signup ({ commit }, authData) {
    axios.post('/register/', {
      email: authData.email,
      password: authData.password
    })
      .then(res => {
        console.log(res)
        commit('authUser', {
          token: res.token,
          email: res.client.email
        })
      })
      .catch(error => console.log(error))
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
