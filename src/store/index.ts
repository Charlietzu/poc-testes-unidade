import Vue from 'vue'
import Vuex from 'vuex'
import AlimentosModule from './AlimentosModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Alimentos: AlimentosModule
  }
})
