<template>
  <div id="app">
    <h1 class="title">Mine Game</h1>
    <div class="container">
      <div class="main">
        <table class="mine-table">
          <tr v-for="(rowItem, rIndex) of rows" :key="'row_'+rIndex">
            <!-- <td
              :style="{width: cellWidth+'px', height: cellHeight+'px'}"
              v-for="(colItem, cIndex) of cols"
              :key="'col_'+cIndex"
            ></td>-->
            <cell
              @clearboom="clearBoom"
              :size="{w: cellWidth, h: cellHeight}"
              :cell-data="cellArray[rIndex*cols+cIndex]"
              v-for="(colItem, cIndex) of cols"
              :key="'col_'+cIndex"
            ></cell>
          </tr>
        </table>
      </div>
      <div class="aside">
        <el-radio-group @change="changeLevel" v-model="level" size="mini">
          <!-- 上面设置 change事件 -->
          <el-radio-button label="Easy"></el-radio-button>
          <el-radio-button label="Normal"></el-radio-button>
          <el-radio-button label="Hard"></el-radio-button>
        </el-radio-group>
        <div class="colsrows">
          <el-switch
            style="display: block"
            v-model="isRowsColsSync"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Sync #Cols and #Rows"
          ></el-switch>
          <div class="block">
            <span class="demonstration">#Cols: {{cols}}</span>
            <el-slider v-model="cols" :min="5" :max="100"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">#Rows: {{rows}}</span>
            <el-slider v-model="rows" :min="5" :max="100"></el-slider>
          </div>
        </div>

        <div class="cellwh">
          <el-switch
            style="display: block"
            v-model="isCellWHSync"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Sync width and height"
          ></el-switch>
          <div class="block">
            <span class="demonstration">cellWidth: {{cellWidth}}</span>
            <el-slider v-model="cellWidth" :min="5"></el-slider>
          </div>
          <div class="block">
            <span class="demonstration">cellHeight: {{cellHeight}}</span>
            <el-slider v-model="cellHeight" :min="5"></el-slider>
          </div>
        </div>

        <div class="reset">
          <el-button @click="initCellData" type="primary" round>reset</el-button>
        </div>
      </div>
    </div>
    <play-sound src-sound="/boom.mp3"></play-sound>
    <timer>

    </timer>
  </div>
  
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import Cell from "./components/Cell.vue";
import PlaySound from "./components/PlaySound.vue";
import Timer from "./components/Timer.vue";
import EventBus from "./eventBus.js";
export default {
  name: "app",
  components: {
    cell: Cell,
    "play-sound": PlaySound,
    timer: Timer
  },
  data() {
    return {
      level: "Easy", // Easy: 1, Normal: 2, Hard: 3.   *0.15
      isRowsColsSync: true,
      cols: 10,
      rows: 10,
      isCellWHSync: true,
      cellWidth: 40,
      cellHeight: 40,
      // {isBoom: false, numOfSurBoom: 2, isMarked: false, isClear: false}
      cellArray: [], // 使用一维数组保存 二维上的数据
      isReset: true // 是否是重置状态
    };
  },
  created() {
    this.initCellData();
    document.oncontextmenu = function() {
      return false;
    };
    EventBus.$on("click-cell", () => {
      this.isReset && EventBus.$emit("start_timer");
      this.isReset = false;
    });
    EventBus.$on("boom-end", () => {
      this.boomEnd();
    });
  },
  methods: {
    boomEnd() {
      // 把所有雷显示，把所有非雷clear
      this.cellArray.forEach(item => {
        if (item.isBoom) {
          this.$set(item, "isShowBoom", true);
        } else {
          this.$set(item, "isClear", true);
        }
      });
    },
    clearBoom(index) {
      const innerClearBoom = cIndex => {
        if (cIndex >= 0 && cIndex < this.cellArray.length) {
          let cell = this.cellArray[cIndex];
          if (cell.isMarked || cell.isBoom || cell.isClear) return;
          this.$set(this.cellArray[cIndex], "isClear", true); // set isClear true指的是：将单元格变黑
          // 如果自己是0，继续清理。迭代
          this.clearBoom(cIndex);
        }
      };
      // 如果当前自己不是0， 那么直接把自己清理掉，isClear:true
      let cell = this.cellArray[index];
      if (cell.numOfSurBoom !== 0) {
        this.$set(cell, "isClear", true);
        return;
      }
      // 若自己是0，那么周围8个都要clear。
      for (let i = -1; i <= 1; i++) {
        let startIdx = index - this.cols * i - 1;
        if (index % this.cols > 0) {
          // 因为用的一维数组存储数据，首尾相连。需要设置这个if来防止过多的clear即变黑
          innerClearBoom(startIdx);
        }
        innerClearBoom(startIdx + 1);
        if (index % this.cols < this.cols - 1) {
          innerClearBoom(startIdx + 2);
        }
      }
      // 若周围元素也是0，那么此元素的周围也要清理
    },
    changeLevel() {
      this.initCellData();
    },
    initCellData() {
      this.isReset = true; // 设置重置状态
      // 1. 初始化 Cell数组，动态随机生成对应的地雷数据。
      let sum = this.cols * this.rows;
      // 计算地雷数目
      let randomBooms = this.getLevelNums() * 0.15 * sum;
      let randomIndexSet = new Set();
      while (randomIndexSet.size < randomBooms) {
        randomIndexSet.add(Math.trunc(Math.random() * sum));
      }
      this.cellArray = []; // 再push之前，把arr清空
      for (let i = 0; i < sum; i++) {
        // this.cellArray[i] = {} // 这种不会被监控，即不会被实时更新
        // this.$set(this.cellArray, i, {})
        let numOfSurBoom = this.getBoomsNum(i, randomIndexSet);
        let isBoom = randomIndexSet.has(i);
        this.cellArray.push({
          isBoom,
          isShowBoom: false,
          numOfSurBoom,
          isMarked: false,
          isClear: false,
          cellIndex: i
        });
      }
    },
    getBoomsNum(index, boomsSet) {
      let count = 0; // 周围总炸弹数目
      for (let i = -1; i <= 1; i++) {
        // 周围boom的数目进行计算
        let startIndex = index - i * this.cols - 1;
        if (index % this.cols > 0) {
          count += boomsSet.has(startIndex);
        }
        count += boomsSet.has(startIndex + 1);
        if (index % this.cols < this.cols - 1) {
          count += boomsSet.has(startIndex + 2);
        }
      }
      return count;
    },
    getLevelNums() {
      if (this.level == "Easy") {
        return 1;
      } else if (this.level == "Normal") {
        return 2;
      } else {
        return 3;
      }
    }
  },
  watch: {
    // #f00
    rows(newVal) {
      this.initCellData();
      this.isRowsColsSync && (this.cols = newVal);
    },
    cols(newVal) {
      this.initCellData();
      this.isRowsColsSync && (this.rows = newVal);
    },
    cellWidth(newVal) {
      // 观测宽度，若宽高同步的话，高度等于 宽度的val
      this.isCellWHSync && (this.cellHeight = newVal);
    },
    cellHeight(newVal) {
      this.isCellWHSync && (this.cellWidth = newVal);
    }
  }
};
</script>

<style lang="scss">
#app {
  .title {
    text-align: center;
    color: #ff9645;
  }
  .container {
    display: flex;
  }
  .main {
    flex: 5 1 500px;
    min-height: 500px;
  }
  .aside {
    margin-left: 1%;
    flex: 2 1 200px;
    min-height: 500px;
  }
  .colsrows {
    border-top: 2px solid #ff9645;
    margin-top: 16px;
    padding-top: 16px;
    & > .block {
      margin-top: 8px;
    }
  }
  .cellwh {
    border-top: 2px solid #ff9645;
    margin-top: 16px;
    padding-top: 16px;
    & > .block {
      margin-top: 8px;
    }
  }
  .reset {
    padding: 0;
    margin-top: 10px;
  }
  .mine-table {
    border-collapse: collapse;
    td {
      border: 2px solid white;
      background-color: lightblue;
    }
  }
}
</style>
