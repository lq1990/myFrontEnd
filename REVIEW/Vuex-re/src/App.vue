<template>
  <div id="app">
    <h1>vuex num: {{$store.state.num}} </h1>
    <p>current user：{{$store.getters.getLoginUserName}} </p>
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
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    addVuexNum() {
      this.$store.commit("AddNum", 1); // commit - mutations, dispatch - actions
    },
    minusVuexNum() {
      this.$store.commit("AddNum", -1);
    }
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
