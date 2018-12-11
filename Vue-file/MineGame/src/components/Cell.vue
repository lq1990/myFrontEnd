<template>
  <td :class="{'mine-clear': cellData.isClear}" @click="cellClick" :style="{width: size.w+'px', height: size.h+'px'}" class="cell">
    <template v-if="cellData.isBoom">Bo</template>
    <template v-else>
      <span v-if="cellData.numOfSurBoom!==0">{{cellData.numOfSurBoom}}</span>
    </template>
  </td>
</template>

<script>
export default {
  name: "cell",
  data() {
    return {};
  },
  methods: {
    cellClick(e) {
      if (e.button === 0) {
        // 点击鼠标左键
        if (this.cellData.isBoom) {
          // 发送游戏结束的事件
          console.log("boom...");
        } else {
          // 让当前的单元格：显示数字
          // this.$set(this.cellData, "isClear", true); // 修改cellData的"isClear"属性为true
          // 把要清理的坐标index发送给父容器。因为牵扯到周边的cell，不合适在自容器内做
          this.$emit("clearboom", this.cellData.cellIndex);
        }
      }
    }
  },
  props: {
    cellData: {
      type: Object,
      required: true
    },
    size: {
      type: Object,
      required: false,
      default: function() {
        return {
          w: 30,
          h: 30
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
td {
  color: white;
  text-align: center;
  vertical-align: middle;
}
.mine-clear {
  background-color: #3f4954 !important; // 此样式要覆盖之前的样式，需要设置 !important
}
</style>
