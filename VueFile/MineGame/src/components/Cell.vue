<template>
  <td
    :class="{'boom':cellData.isShowBoom,'mine-clear': cellData.isClear, 'marked':cellData.isMarked}"
    @mousedown="cellClick"
    :style="{width: size.w+'px', height: size.h+'px'}"
    class="cell"
  >
    <!-- <template v-if="cellData.isBoom">Bo</template> -->
    <!-- <template v-else> -->
    <span
      :style="{color: getNumColor(cellData.numOfSurBoom)}"
      v-if="cellData.numOfSurBoom!==0 && cellData.isClear"
    >{{cellData.numOfSurBoom}}</span>
    <!-- </template> -->
  </td>
</template>

<script>
import EventBus from "../eventBus.js";
export default {
  name: "cell",
  data() {
    return {};
  },
  methods: {
    getNumColor(num) {
      // 颜色不同，也可以用计算属性做（优点：可缓存）
      switch (num) {
        case 1:
          return "#fff";
        case 2:
          return "#af0";
        case 3:
          return "#0ee";
        case 4:
          return "#f70";
        case 5:
          return "#f50";
        case 6:
          return "#f30";
        default:
          return "#f22";
      }
    },
    cellClick(e) {
      if (this.cellData.isClear) {
        return;
      }

      if (e.button === 2) {
        EventBus.$emit("click-cell"); // 只要click了，就触发 click-cell事件，即当reset之后激活timer
        // 鼠标右键用来标记 旗子
        this.$set(this.cellData, "isMarked", !this.cellData.isMarked);
        return;
      }
      if (e.button === 0) {
        // 点击鼠标左键
        if (this.cellData.isBoom) {
          EventBus.$emit("boom-end");
          // 发送游戏结束的事件
        } else {
          // 如果标记了小旗子，直接return
          if (this.cellData.isMarked) return;

          EventBus.$emit("click-cell"); // click-cell 还会激发boom

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
.marked {
  background-image: url("../../public/flag.png") !important;
  background-size: cover; // #f00,cover可使背景图铺满单cell
}
.boom {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("/mine.png") !important;
    background-size: contain;
  }
}
</style>
