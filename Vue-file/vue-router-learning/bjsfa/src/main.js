//main.js 是整个项目的入口文件
import Vue from "vue";
import App from "./App.vue";

// 将我们设置的router 引进
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 4. 把vue项目的根vue实例 添加router选项的配置。
new Vue({
  router, // 这是一种简写，实际上是 router: router。
  // 配置完router之后，所有的子实例都会有 $router(当前配置的路由器对象), $route(当前匹配的路由对象)
  store, // 有了store后，所有的子vue实例都可以通过 $store 拿到当前的store实例。
  render: hh => hh(App)
}).$mount("#appp");
