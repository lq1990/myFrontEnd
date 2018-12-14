export default {
  updateNumAsync(context, payload) {
    setTimeout(() => {
      context.commit("AddNum", payload);
    }, 1000);
  }
};
