<template>
  <div class="cell">
    <table>
      <tr v-for="(rItem, rIndex) in tableData.rows" :key="rIndex">
        <td
          :class="{boom: cellArray[rIndex][cIndex].isBoom}"
          @click="clickEvent(rIndex, cIndex)"
          :style="{width: tableData.width+'px', height: tableData.height+'px'}"
          v-for="(cItem, cIndex) in tableData.cols"
          :key="cIndex"
        ></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "cell",
  data() {
    return {};
  },
  props: {
    tableData: {
      type: Object,
      required: true
    },
    cellArray: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickEvent(r, c) {
      console.log(r, c);
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  .boom {
    background-image: url("/mine.png");
    background-size: cover;
  }
  td {
    background-color: lightblue;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
