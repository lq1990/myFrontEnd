<template>
  <div id="app">
    <h1>vuex里面的num: {{$store.state.num}} --- {{num}}</h1>
    <p>当前的登录用户：{{$store.getters.getLoginUserName}} -- {{getLoginUserName}} </p>
    <p @click="ChangeUName('name:'+Date.now())"> {{UName}} </p>
    <input type="button" value="修改全局num++" @click="addVuexNum">&nbsp;
    <input type="button" value="修改全局num--" @click="minusVuexNum">
    <div id="nav">
      <!-- 以下是 路由链接 -->
      <router-link to="/">Home</router-link>|
      <router-link to="/about" tag="a">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link :to="UserUrl">User</router-link>|
      <router-link to="/product/11">Product</router-link>
    </div>
    <hr>
    <input type="button" value="Jump to user page 666" @click="$router.push('/user/666')">
    &nbsp;
    <input
      type="button"
      value="Jump to user page 8888"
      @click="$router.push({name: 'user', params: {id: 8888}})"
    >
    &nbsp;
    <input type="button" value="jump to home" @click="navToHome">
    &nbsp;
    <input type="button" value="back" @click="backPage">
    <hr>

    <!-- 用 transition 设置转场动画 -->
    <transition name="rv-fade">
      <!-- view显示匹配到路由规则的组件 -->
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      UserUrl: "/user/12321"
    };
  },
  computed: {
    // 放到computed的，和methods区别，是与date有关系
    getUserURL() {
      return this.UserUrl.toLowerCase;
    },
    ...mapState(["num", "LoginUser"]), // 返回的是一个obj
    // 来自于store.js，vuex 中的state状态映射到 组件的计算属性

    // ...mapState({ // 另一种写法
    // MyNum: "num",
    // User: state=> state.LoginUser
    // })
    ...mapGetters(["getLoginUserName"]),
    ...mapState("user", ["UName"]) // 第一个参：命名空间
  },
  methods: {
    addVuexNum() {
      this.$store.commit("AddNum", 1); // 注意：用commit，而不是直接操作state或mutations
    },
    minusVuexNum() {
      this.$store.commit("AddNum", -1);
    },
    navToHome() {
      this.$router.push("/");
    },
    backPage() {
      this.$router.go(-1); // 往后退 1 步，也可以设置 -2,-3
    },
    ...mapMutations("user", ["ChangeUName"])
  }
};
</script>


<style lang="scss">
.rv-fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.rv-fade-enter-active {
  transition: all 0.5s ease;
}
.rv-fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
// .rv-fade-leave {
//   opacity: 1;
//   transform: translateY(30px);
// }
// .rv-fade-leave-active {
//   transition: all 0.5s ease;
// }
// .rv-fade-leave-to {
//   opacity: 0;
//   transform: translateY(0px);
// }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
