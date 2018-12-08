<template>
    <div class="demoabout">
        <p @click="handlerClick">click me</p>
    </div>
</template>

<script>
export default {
  name: "demoabout",
  data() {
    return {};
  },
  methods: {
    handlerClick() {
      this.$emit("trans", 11);
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  p {
    background-color: #44d39f;
  }
}
</style>
