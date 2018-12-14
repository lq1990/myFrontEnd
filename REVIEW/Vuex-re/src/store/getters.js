export default {
  // getters中可对现有state中数据做 输出时的校验
  // 有些公司规定，所有从store中数据必须通过getters获得。
  getLoginUserName(state) {
    return state.LoginUser ? state.LoginUser.UserName : "not login";
  }
};
