<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>Home Page</h1>
    <div class="left">
      <router-view></router-view>
    </div>
    <div class="right">
      <router-view name="right"></router-view>
    </div>
    <div class="footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.left {
  float: left;
  width: 200px;
  background-color: #f5fffa;
  height: 300px;
}
.footer {
  clear: both; // 清除浮动.both left right
  height: 100px;
}
.right {
  margin-left: 202px;
}
</style>
