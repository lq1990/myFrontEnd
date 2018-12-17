import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 存储关于时钟的信息：开始，结束，重置
    isOnOnce: "false", // isOnOnce只在最开始点击的瞬间为true，一旦计时开始就置为false
    isSetTimer: "false",
    isReset: "true"
  },
  mutations: {
    updateOnOnce(state, payload) {
      state.isOnOnce = payload;
    },
    updateSetTimer(state, payload) {
      state.isSetTimer = payload;
    },
    updateReset(state, payload) {
      state.isReset = payload;
    }
  },
  actions: {}
});
