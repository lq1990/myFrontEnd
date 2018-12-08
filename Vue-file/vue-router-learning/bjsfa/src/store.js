import Vue from "vue";
import Vuex from "vuex";

// vue-router,vuex都得先use
Vue.use(Vuex); // $storev

export default new Vuex.Store({
  state: {
    num: 0,
    LoginUser: null
  }, // 全局的状态数据
  mutations: {
    // 突变就是定义方法
    AddNum(state, payload) {
      // 传两个参，1：状态数，2：载荷
      // state为oldstate
      state.num += payload;
    }
  },
  actions: {}
});
