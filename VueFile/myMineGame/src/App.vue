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
        <div class="reset">
          <el-button type="primary" size="mini" round>reset</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./components/Cell.vue";
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
    cell: Cell
  },
  methods: {
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
    initCellArray() {
      let numOfBooms = this.rows * this.cols * 0.15 * this.getLevelNum();
      let setOfBooms = new Set();
      while (setOfBooms.size < numOfBooms) {
        // 从0到99随机选 15个数
        let randomVal = Math.floor(Math.random() * this.rows * this.cols);
        setOfBooms.add(randomVal);
      }
      console.log("numOfBooms:", numOfBooms);
      console.log("setOfBooms:", setOfBooms);
      for (var r = 0; r < this.rows; r++) {
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
            isMarked: false,
            numOfSurBooms: 0
          };
        }
      }

      console.log("cellArray: ", this.cellArray);
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
  },
  created() {
    this.initCellArray();
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
