<template>
  <div class="progress">
    <div class="label">
      {{val}}
      <span v-if="isShowPercent">%</span>
    </div>

    <div class="pie-wrap" ref="pie"></div>

    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "progress",
  props: {
    title: {
      type: String,
      required: true
    },
    val: {
      type: Number,
      required: true
    },
    isShowPercent: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.pip-wrap {
    width: px2rem(175);
    height: px2rem(175);
}
</style>


