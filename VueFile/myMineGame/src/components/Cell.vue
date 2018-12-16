<template>
  <div class="cell">
    <table>
      <tr v-for="(rItem, rIndex) in tableData.rows" :key="rIndex">
        <td
          :class="{
            clear: cellArray[rIndex][cIndex].isClear && !cellArray[rIndex][cIndex].isBoom && !cellArray[rIndex][cIndex].isMarked, 
            boom: cellArray[rIndex][cIndex].isBoom && cellArray[rIndex][cIndex].isBoomShow, 
            mark: cellArray[rIndex][cIndex].isMarked
            }"
          @mousedown.right="mousedownRightEvent(rIndex, cIndex)"
          @mousedown.left="mousedownLeftEvent(rIndex, cIndex)"
          :style="{width: tableData.width+'px', height: tableData.height+'px'}"
          v-for="(cItem, cIndex) in tableData.cols"
          :key="cIndex"
        >
          <span
            v-if="!cellArray[rIndex][cIndex].isBoom && cellArray[rIndex][cIndex].isClear && cellArray[rIndex][cIndex].numOfSurBooms!=0 && !cellArray[rIndex][cIndex].isMarked"
          >{{cellArray[rIndex][cIndex].numOfSurBooms}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  name: "cell",
  data() {
    return {};
  },
  props: {
    tableData: {
      // 成员： rows, cols, width, height
      // tableData: 表格的宽高
      type: Object,
      required: true
    },
    cellArray: {
      // 成员：isBoom,isMarked,numOfSurBooms
      // cells看过一个二维数组
      type: Array,
      required: true
    }
  },
  methods: {
    mousedownRightEvent(r, c) {
      this.$store.commit("updateReset", "false");
      this.$store.commit("updateStart", "true");
      this.$store.commit("updateEnd", "false");

      // 右键功能：标记小旗。如果所有booms都被标记为小旗，而且非booms不会被标记小旗则获胜。
      // this.cellArray[r][c].isMarked = true; // 这样改不会同步，需要用 $set

      // 和一维数组不同。对于二维数组的视图实时更新，需要对第r行的vector重新赋值，只有这样才能实现视图实时更新。
      let rArr = new Array(); // 第r行的vector
      for (let i = 0; i < this.tableData.cols; i++) {
        let isM = this.cellArray[r][i].isMarked;
        let isB = this.cellArray[r][i].isBoom;
        let isBS = this.cellArray[r][i].isBoomShow;
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
            isMarked: !isM,
            numOfSurBooms: numS,
            isClear: isC
          };
        }
      }
      // this.$set(this.cellArray[r][c], "isMarked", true); //这样不行。vue不能实现二维数组的视图实时更新
      this.$set(this.cellArray, r, rArr); // 把cellArray的 第r行 改为 rArr。
      // console.log(this.cellArray[r][c]);
    },
    setCellrcClear(r, c) {
      let rArr = new Array(); // 第r行的vector
      for (let i = 0; i < this.tableData.cols; i++) {
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
            isClear: true
          };
        }
      }
      this.$set(this.cellArray, r, rArr);
    },
    setCellrcBoomShow(r, c) {
      let rArr = new Array(); // 第r行的vector
      for (let i = 0; i < this.tableData.cols; i++) {
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
            isBoomShow: true,
            isMarked: isM,
            numOfSurBooms: numS,
            isClear: isC
          };
        }
      }
      this.$set(this.cellArray, r, rArr);
    },
    clearCells(r, c) {
      if (this.cellArray[r][c].isClear) return;
      this.setCellrcClear(r, c);

      if (this.cellArray[r][c].numOfSurBooms == 0) {
        // 当cell是0时，将周围8个Clear即显示 numOfSurBooms
        for (let i = r - 1; i <= r + 1; i++) {
          for (let j = c - 1; j <= c + 1; j++) {
            if (
              i < 0 ||
              j < 0 ||
              i >= this.tableData.rows ||
              j >= this.tableData.cols
            )
              continue;

            this.clearCells(i, j);
          }
        }
      }
    },
    mousedownLeftEvent(r, c) {
      this.$store.commit("updateReset", "false");
      this.$store.commit("updateStart", "true");
      this.$store.commit("updateEnd", "false");
      console.log(r, c, this.cellArray[r][c]);
      // 如果点击的是boom，则直接退出游戏
      if (this.cellArray[r][c].isBoom) {
        // game over，显示所有booms
        for (let i = 0; i < this.tableData.rows; i++) {
          for (let j = 0; j < this.tableData.cols; j++) {
            this.setCellrcBoomShow(i, j);
          }
        }
        Message.warning({
          message: "Game Over!",
          center: true
        });
        this.$store.commit("updateEnd", "true");
      } else {
        // 点左键时，把数字显示 isClear
        // 如果数字为0，则把周围所有是0的都显示，迭代
        this.clearCells(r, c);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  .clear {
    background-color: #3f4954;
  }
  .boom {
    background-image: url("/mine.png") !important;
    background-size: cover;
  }
  .mark {
    background-image: url("/flag.png") !important;
    background-size: cover;
  }
  td {
    background-color: lightblue;
    text-align: center;
    vertical-align: middle;
    color: white;
  }
}
</style>
