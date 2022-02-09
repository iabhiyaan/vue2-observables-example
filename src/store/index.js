import Vue from "vue";
import Vuex from "vuex";
import lead from "./lead";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lead
  }
});
