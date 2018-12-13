<template>
    <div class="aboutd">
        <p @click="handlerClick">click me!</p>
        <p @click="handlerClick">click me!</p>
        <p @click="handlerClick">click me!</p>
        <p @click="handlerClick">click me!</p>
        <p @click="handlerClick">click me!</p>
    </div>
</template>

<script>
export default {
  name: "aboutd",
  data() {
    return {};
  },
  methods: {
    handlerClick() {
      this.$emit("trans", "you are handsome");
    }
  }
};
</script>

<style lang="scss" scoped>
.aboutd {
  color: #fd6e01;
}
</style>
