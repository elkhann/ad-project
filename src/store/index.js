import Vue from 'vue'
import Vuex from 'vuex'
import Ads from './ads'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Ads
  }
})
