import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import User from "./User/index";

// vue-router,vuex都得先use
Vue.use(Vuex); // $storev

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user: User
  }
  // state: {
  //   // 数据
  //   num: 0,
  //   LoginUser: null
  // }, // 全局的状态数据
  // mutations: {
  //   // 同步修改state中数据
  //   // 突变就是定义方法
  //   AddNum(state, payload) {
  //     // 传两个参，1：状态数，2：载荷
  //     // state为oldstate
  //     state.num += payload;
  //   },
  //   Login(state, user) {
  //     if (user) {
  //       state.LoginUser = user; // user-obj格式
  //     }
  //   }
  // },
  // actions: {
  //   // 异步，与server交互。通过mutations修改数据
  //   // 处理异步操作，比如ajax请求后台
  //   updateNumAsync(context, payload) {
  //     setTimeout(() => {
  //       context.commit("AddNum", payload);
  //     }, 1000);
  //   }
  // },
  // getters: {
  //   // get到 state中数据
  //   // 从vuex中获取用户名，必须经过此getter进行处理。
  //   getLoginUserName(state) {
  //     return state.LoginUser ? state.LoginUser.UserName : "not login yet";
  //   }
  // }
});
