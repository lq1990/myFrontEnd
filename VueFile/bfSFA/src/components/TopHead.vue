<template>
  <div class="tophead">
    <div class="th-l" @click="backAction">
      <i class="icon iconfont icon-back"></i>
    </div>

    <div class="th-title">{{title}}</div>

    <div class="th-r">
      <slot name="r">rSlot</slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "tophead",
  props: ["title", "backurl"],
  data() {
    return {};
  },
  methods: {
      backAction() {
          if(this.backurl) {
              this.$router.push(this.backurl)
          } else {
              this.$router.go(-1) // go back 1 step
          }
      }
  }
};
</script>


<style lang="scss" scoped>
.tophead {
    display: flex;
    justify-content: space-between;
    height: $th;
    line-height: $th;
    color: #fff;
    font-size: $text-size-imp;
    background-color: #2ade69;
    .th-title {
        text-align: center;
        flex: 1 1 auto;
    }
    .th-l {
        padding-left: px2rem(25);
    }
    .th-r {
        padding-right: px2rem(25);
    }
    .icon::before {
        font-size: px2rem(36);

    }
}
</style>
