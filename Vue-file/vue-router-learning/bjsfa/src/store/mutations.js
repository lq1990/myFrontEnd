export default {
  // 同步修改state中数据
  // 突变就是定义方法
  AddNum(state, payload) {
    // 传两个参，1：状态数，2：载荷
    // state为oldstate
    state.num += payload;
  },
  Login(state, user) {
    if (user) {
      state.LoginUser = user; // user-obj格式
    }
  }
};
