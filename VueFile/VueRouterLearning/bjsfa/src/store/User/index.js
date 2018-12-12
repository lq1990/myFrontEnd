export default {
  state: {
    UName: "store/User/index.js-state-UName"
  },
  mutations: {
    ChangeUName(state, payload) {
      state.UName = payload;
    }
  },
  getters: {
    getUNameUpperCase(state) {
      return state.UName.toUpperCase();
    }
  },
  namespaced: true //默认为全局。 若不设置为true
};
