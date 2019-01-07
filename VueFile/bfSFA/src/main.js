import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from 'vee-validate';
import helper from './lib/helper';

import "./lib/hotcss.js";

import "mint-ui/lib/style.css"

Vue.config.productionTip = false;

Vue.use(VeeValidate);

// global router Guard. before jump to other page, have to login, if not login, 
router.beforeEach((to, from, next) => {
  if (to.path != "/") {
    // next();
    
    // check if login 
    if (helper.getTypes(store.getters.getLoginUser) == 'Object') {
      next();
    } else {
      next('/');
    }
    
  }
  else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
