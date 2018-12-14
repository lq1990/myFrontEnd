export default {
  AddNum(state, payload) {
    // 突变就是定义方法，第一个参 state，
    state.num += payload;
  },
  Login(state, user) {
    if (user) {
      state.LoginUser = user;
    }
  }
};
