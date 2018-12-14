import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import User from "./User";

Vue.use(Vuex);

export default new Vuex.Store({
  state, // 全局状态树
  mutations,
  actions,
  getters,
  modules: {
    user: User
  }
});
