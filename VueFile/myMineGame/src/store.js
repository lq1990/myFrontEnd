import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 存储关于时钟的信息：开始，结束，重置
    isStart: "false",
    isEnd: "false",
    isReset: "false"
  },
  mutations: {
    updateStart(state, payload) {
      state.isStart = payload;
    },
    updateEnd(state, payload) {
      state.isEnd = payload;
    },
    updateReset(state, payload) {
      state.isReset = payload;
    }
  },
  actions: {}
});
