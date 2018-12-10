export default {
  // get到 state中数据
  // 从vuex中获取用户名，必须经过此getter进行处理。
  getLoginUserName(state) {
    return state.LoginUser ? state.LoginUser.UserName : "not login yet";
  }
};
