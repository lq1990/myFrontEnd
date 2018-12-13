<template>
  <div class="login">
    <h2>login page</h2>
    <input type="button" value="login" @click="loginSuccess">
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    loginSuccess() {
      this.$store.commit("Login", { UserName: "lq" });
    }
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
