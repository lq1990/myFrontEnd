import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
    LoginUser: null
  }, // 全局状态树
  mutations: {
    AddNum(state, payload) {
      // 突变就是定义方法，第一个参 state，
      state.num += payload;
    },
    Login(state, user) {
      if (user) {
        state.LoginUser = user;
      }
    }
  },
  actions: {
    updateNumAsync(context, payload) {
      setTimeout(() => {
        context.commit("AddNum", payload);
      }, 1000);
    }
  },
  getters: {
    // getters中可对现有state中数据做 输出时的校验
    // 有些公司规定，所有从store中数据必须通过getters获得。
    getLoginUserName(state) {
      return state.LoginUser ? state.LoginUser.UserName : "not login";
    }
  }
});
