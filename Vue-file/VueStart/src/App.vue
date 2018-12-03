<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
      <hr>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1"></el-slider>
      </div>
    </div>
    <hr>
    <demo></demo>
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import "element-ui/lib/theme-chalk/index.css";
import Demo from "./components/Demo";

export default {
  name: "app",
  data() {
    return {
      age: 19
    };
  },
  components: {
    demo: Demo
  }
};
</script>
