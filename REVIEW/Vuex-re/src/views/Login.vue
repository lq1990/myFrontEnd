<template>
  <div class="login">
    <h2>login page</h2>
    <input type="button" value="login" @click="loginSuccess">&nbsp;
    <input type="button" value="login_mapM" @click="Login({UserName:'lq2'})">
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
      this.$store.commit("Login", { UserName: "lq" });
    },
    ...mapMutations(["Login"])
  }
};
</script>

<style lang="scss" scoped>
.login {
  h2 {
    background-color: #ff9645;
  }
}
</style>
