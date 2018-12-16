<template>
  <div class="app">
    <h1>my Mine</h1>
    <div class="container">
      <div class="main">
        <cell :cellArray="cellArray" :tableData="{cols, rows, height, width}"></cell>
      </div>
      <div class="console">
        <div class="block level">
          <el-radio-group size="mini" v-model="level">
            <el-popover
              width="160"
              content="15% of cells are booms."
              trigger="hover"
              placement="top"
            >
              <el-radio-button slot="reference" label="Easy"></el-radio-button>
            </el-popover>
            <el-popover
              width="160"
              content="30% of cells are booms."
              trigger="hover"
              placement="top"
            >
              <el-radio-button slot="reference" label="Normal"></el-radio-button>
            </el-popover>
            <el-popover
              width="160"
              content="45% of cells are booms."
              trigger="hover"
              placement="top"
            >
              <el-radio-button slot="reference" label="Hard"></el-radio-button>
            </el-popover>
          </el-radio-group>
        </div>
        <div class="block rowscols">
          <div class="switch">
            <el-switch v-model="syncRC" active-text="sync rows & cols"></el-switch>
          </div>
          <div class="rows">
            <span class="demonstration">#rows: {{rows}}</span>
            <el-slider class="slider" v-model="rows"></el-slider>
          </div>
          <div class="cols">
            <span class="demonstration">#cols: {{cols}}</span>
            <el-slider class="slider" v-model="cols"></el-slider>
          </div>
        </div>
        <div class="block wh">
          <div class="switch">
            <el-switch v-model="syncWH" active-text="sync width & height"></el-switch>
          </div>
          <div class="width">
            <span class="demonstration">#width: {{width}}</span>
            <el-slider class="slider" v-model="width"></el-slider>
          </div>
          <div class="height">
            <span class="demonstration">#height: {{height}}</span>
            <el-slider class="slider" v-model="height"></el-slider>
          </div>
        </div>
        <div class="resetsubmit">
          <el-button @click="submitEvent" type="primary" size="mini" round>submit</el-button>
          <el-button @click="resetEvent" type="primary" size="mini" round>reset</el-button>
        </div>
      </div>
    </div>
    <timer></timer>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";
import Timer from "./components/Timer.vue";
import { Message } from "element-ui";
export default {
  name: "app",
  data() {
    return {
      level: "Easy",
      syncRC: true,
      rows: 10,
      cols: 10,
      syncWH: true,
      width: 30,
      height: 30,
      cellArray: new Array()
    };
  },
  components: {
    cell: Cell,
    timer: Timer
  },
  methods: {
    submitEvent() {
      this.$store.commit("updateEnd", "true");
      let numOfBooms = this.rows * this.cols * 0.15 * this.getLevelNum();
      let num_markedBoom = 0;
      let num_marked = 0;
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          if (this.cellArray[i][j].isMarked && this.cellArray[i][j].isBoom) {
            num_markedBoom++;
          }
          if (this.cellArray[i][j].isMarked) {
            num_marked++;
          }
        }
      }
      if (num_markedBoom == numOfBooms && num_marked == numOfBooms) {
        Message.success({
          message: "Win",
          center: true
        });
      } else {
        Message.error({
          message: "Failed",
          center: true
        });
      }
    },
    resetEvent() {
      this.initCellArray();
      this.$store.commit("updateReset", "true");
    },
    calcSurBooms(r, c) {
      // 计算某个cell周围的booms数目
      let sum = 0;
      for (let i = r - 1; i <= r + 1; i++) {
        for (let j = c - 1; j <= c + 1; j++) {
          if (i < 0 || j < 0 || i >= this.rows || j >= this.cols) continue;

          if (this.cellArray[i][j].isBoom) {
            sum++;
          }
        }
      }
      return sum;
    },
    getLevelNum() {
      switch (this.level) {
        case "Easy":
          return 1;
        case "Normal":
          return 2;
        case "Hard":
          return 3;
      }
    },
    updateCellrc(r, c) {
      let rArr = new Array(); // 第r行的vector
      for (let i = 0; i < this.cols; i++) {
        let isB = this.cellArray[r][i].isBoom;
        let isBS = this.cellArray[r][i].isBoomShow;
        let isM = this.cellArray[r][i].isMarked;
        let numS = this.cellArray[r][i].numOfSurBooms;
        let isC = this.cellArray[r][i].isClear;
        rArr[i] = {
          isBoom: isB,
          isBoomShow: isBS,
          isMarked: isM,
          numOfSurBooms: numS,
          isClear: isC
        };
        if (i == c) {
          rArr[i] = {
            isBoom: isB,
            isBoomShow: isBS,
            isMarked: isM,
            numOfSurBooms: numS,
            isClear: isC
          };
        }
      }
      this.$set(this.cellArray, r, rArr);
    },
    initCellArray() {
      let numOfBooms = this.rows * this.cols * 0.15 * this.getLevelNum();
      let setOfBooms = new Set();
      while (setOfBooms.size < numOfBooms) {
        // 从0到99随机选 15个数
        let randomVal = Math.floor(Math.random() * this.rows * this.cols);
        setOfBooms.add(randomVal);
      }
      // console.log("numOfBooms:", numOfBooms);
      // console.log("setOfBooms:", setOfBooms);
      for (var r = 0; r < this.rows; r++) {
        // 初始化二维数组 即cells，包含boom等信息
        this.cellArray[r] = new Array();
        for (var c = 0; c < this.cols; c++) {
          // console.log("" + r + c);
          let num_rc = Number("" + r + c);
          let isBm;
          if (setOfBooms.has(num_rc)) {
            isBm = true;
          } else {
            isBm = false;
          }
          this.cellArray[r][c] = {
            isBoom: isBm,
            isBoomShow: false,
            isMarked: false,
            numOfSurBooms: 0,
            isClear: false
          };
        }
      }
      // 计算 每一个cell周围booms数目
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          this.cellArray[r][c].numOfSurBooms = this.calcSurBooms(r, c);
        }
      }

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.updateCellrc(i, j);
        }
      }
    }
  },
  watch: {
    rows(newVal) {
      this.syncRC && (this.cols = newVal);
      this.initCellArray();
    },
    cols(newVal) {
      this.syncRC && (this.rows = newVal);
      this.initCellArray();
    },
    width(newVal) {
      this.syncWH && (this.height = newVal);
    },
    height(newVal) {
      this.syncWH && (this.width = newVal);
    },
    level() {
      this.initCellArray();
    }
    /*
    cellArray(newVal) {
      // 对于一维数组可以watch，但是二维数组不同，不能watch到某一行的具体一列的变化。
      // 因此为了实现视图实时更新，$set 需要把某一行直接替代。
      console.log("newVal of cellArray:", newVal);
    }
    */
  },
  created() {
    this.initCellArray();
    document.oncontextmenu = () => {
      // 右键无用
      return false;
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  h1 {
    color: #ff9645;
    text-align: center;
  }
  .container {
    display: flex;
    .main {
      flex: 5 1 500px;
      min-height: 300px;
    }
    .console {
      flex: 2 1 200px;
      margin-left: 1%;
      min-height: 300px;
      .block {
        margin-bottom: 15px;
        border-bottom: 2px solid #ff9645;
        padding-bottom: 15px;
      }
      .rows,
      .cols,
      .width,
      .height {
        display: flex;
        .demonstration {
          margin: 8px 0;
          flex: 1 1 90px;
        }
        .slider {
          flex: 20 20 100px;
        }
      }
    }
  }
}
</style>
