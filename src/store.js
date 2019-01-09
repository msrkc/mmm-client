import Vue from 'vue'
import Vuex from 'vuex'

import userAuth from '@/store/user-auth'
import clientInfo from '@/store/client-info'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userAuth,
    clientInfo
  }
})
