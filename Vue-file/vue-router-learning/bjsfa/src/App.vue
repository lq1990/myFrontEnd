<template>
  <div id="app">
    <div id="nav">
      <!-- 以下是 路由链接 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link :to="UserUrl">User</router-link> |
      <router-link to="/product/11">Product</router-link>
    </div>
    <hr>
    <input type="button" value="Jump to user page" @click="$router.push('/user/666')">
    &nbsp;
    <input type="button" value="Jump to user page" @click="$router.push({})">
    <hr>
    <!-- view显示匹配到路由规则的组件 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserUrl: "/user/12321"
    };
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
