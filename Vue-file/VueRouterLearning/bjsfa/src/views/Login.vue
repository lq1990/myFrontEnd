<template>
  <div class="login">
    <h1>这是登录页面</h1>
    <input type="button" value="login-laoma" @click="loginSuccess">
    <input type="button" value="login-laoma-mapMu" @click='Login({UserName: "laoma2"})'>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    loginSuccess() {
      this.$store.commit("Login", { UserName: "laoma" });
    },
    ...mapMutations(["Login"])
  }
};
</script>

<style lang="scss" scoped>
</style>
