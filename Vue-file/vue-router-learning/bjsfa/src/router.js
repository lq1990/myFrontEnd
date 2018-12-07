import Vue from "vue";

// 1. 引入 router
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import UserInfo from "./views/UserInfo.vue";
import Product from "./views/Product.vue";
import AddUser from "./views/User/AddUser.vue";
import EditUser from "./views/User/EditUser.vue";
import Left from "./views/Home/Left.vue";
import Right from "./views/Home/Right.vue";
import Footer from "./views/Home/Footer.vue";

// 2. 使用use，注册Router插件
Vue.use(Router);

// 3. 创建路由对象
const router = new Router({
  routes: [
    // 两条规则
    {
      path: "/", // path指的是 http://localhost:8080/#/， #后面的部分
      name: "home", // 路由的名字
      component: Home,
      redirect: "/kk",
      children: [
        {
          path: "kk",
          components: {
            default: Left,
            right: Right,
            footer: Footer
          }
        }
      ]
    },
    {
      path: "/user/:id", // 此处 传递参数。但缺点是：当参数id名改变后，需人为改变 $route.param.id 的名称
      name: "user",
      component: UserInfo,
      redirect: to => {
        // redirect, 直接将 /user/id/页面跳转
        return `/user/${to.params.id}/add`; // 用 模板字符串`` 来写，可写多行
      },
      beforeEnter(to, from, next) {
        console.log("%cuser 路由独享的守卫", "color: red");
        next();
      },
      children: [
        // 设置user路由的 子路由
        {
          path: "add", //   /user/111/add
          component: AddUser
        },
        {
          path: "edit",
          component: EditUser
        }
      ]
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

// 全局守卫 router.beforeEach, .beforeResolve, afterEach
router.beforeEach((to, from, next) => {
  // 跳转前的首位
  console.log("全局路由守卫, beforeEach");
  // console.log("to:", to);
  // console.log("from:", from);

  // 用处：前端的权限校验。前端日志记录，也可以向后台发送操作日志。

  // 一定要调用next方法，可使当前钩子依次向后执行。
  next();
});
router.beforeResolve((to, from, next) => {
  // 解析之后，确认之前执行
  console.log("全局路由守卫, beforeResolve");
  // 一定要调用next方法，可使当前钩子依次向后执行。
  next();
});
router.afterEach((to, from) => {
  console.log("全局路由守卫, afterEach");
  // 一定要调用next方法，可使当前钩子依次向后执行。
});

export default router;
