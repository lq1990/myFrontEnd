<template>
  <div id="app">
    <h1>vuex num: {{$store.state.num}} -- {{MyNum}} </h1>
    <p>current user：{{$store.getters.getLoginUserName}} -- {{getLoginUserName}} </p>
    <p @click="ChangeUName(Date.now())"> UName: {{UName}} </p>
    <hr>
    <input type="button" value="vuex_num++" @click="addVuexNum">&nbsp;
    <input type="button" value="vuex_num--" @click="minusVuexNum">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    getUserURL: function() {
      // 自己的计算属性
      return this.UserURL.toLowerCase();
    },
    // ...mapState(["num", "LoginUser"]) //第一种写法推荐。 把vuex中state状态映射到组件中的计算属性中
    ...mapState({
      MyNum: "num",
      User: state => state.LoginUser
    }),
    ...mapGetters(["getLoginUserName"]),
    ...mapState("user", ["UName"]) // 命名空间为user的 state中的数据
  },
  methods: {
    addVuexNum() {
      this.$store.commit("AddNum", 1); // commit - mutations, dispatch - actions
    },
    minusVuexNum() {
      this.$store.commit("AddNum", -1);
    },
    ...mapMutations("user", ["ChangeUName"])
  }
};
</script>


<style lang="scss">
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
