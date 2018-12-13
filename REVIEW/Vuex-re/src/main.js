import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store, // 设置这个后。所有子实例有了$store
  render: h => h(App)
}).$mount("#app");
