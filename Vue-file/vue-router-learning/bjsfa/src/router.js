import Vue from "vue";

// 1. 引入 router
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import UserInfo from "./views/UserInfo.vue";
import Product from "./views/Product.vue";

// 2. 使用use，注册Router插件
Vue.use(Router);

// 3. 创建路由对象
export default new Router({
  routes: [
    // 两条规则
    {
      path: "/", // path指的是 http://localhost:8080/#/， #后面的部分
      name: "home",
      component: Home
    },
    {
      path: "/user/:id", // 此处 传递参数。但缺点是：当参数id名改变后，需人为改变 $route.param.id 的名称
      name: "user",
      component: UserInfo
    },
    {
      path: "/product/:id",
      name: "product",
      props: true,
      component: Product
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
      // lazy-loaded 特点：延迟加载，webpack会把其打包到js文件，可使总项目文件大小变小，但多了一次请求。
    }
  ]
});
