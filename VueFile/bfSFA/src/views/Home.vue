<template>
  <div class="home">
    <tophead title="SFA">
      <router-link to="/user" slot="r" class="icon iconfont icon-user"></router-link>
    </tophead>
    <h1>I am bjsfa.</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from "../components/TopHead.vue";

export default {
  name: "home",
  components: {
    tophead: TopHead
  }
};
</script>
