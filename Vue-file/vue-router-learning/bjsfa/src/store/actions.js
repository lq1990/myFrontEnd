export default {
  // 异步，与server交互。通过mutations修改数据
  // 处理异步操作，比如ajax请求后台
  updateNumAsync(context, payload) {
    setTimeout(() => {
      context.commit("AddNum", payload);
    }, 1000);
  }
};
