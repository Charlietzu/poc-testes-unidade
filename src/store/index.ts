import Vue from "vue";
import Vuex from "vuex";
import AlimentosModule from "./AlimentosModule";
import { getModule } from "vuex-module-decorators";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Alimentos: AlimentosModule,
  },
});

export default store;

const moduloAlimentos = getModule(AlimentosModule, store);

export { moduloAlimentos };
