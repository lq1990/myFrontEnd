<template>
    <div class="playsound">
        <audio ref="sd" :src="srcSound"></audio>
    </div>
</template>

<script>
import EventBus from "../eventBus.js";
export default {
  name: "playsound",
  data() {
    return {};
  },
  props: {
    srcSound: {
      type: String,
      required: true
    }
  },
  created() {
    EventBus.$on("click-cell", () => {
      console.log("created...");
      // click-cell 是从Cell.vue中emit出来的
      console.log(this.$refs.sd);
      this.$refs.sd.play();
    });
  }
};
</script>

<style lang="scss" scoped>
.playsound {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute; // 让其绝对定位，而不影响其它元素。
}
</style>
