<template>
  <div class="myprogress">
    <div class="label">
      {{val}}
      <span v-if="percent">%</span>
    </div>

    <div class="pie-wrap" ref="pie"></div>

    <h3>{{title}}</h3>
  </div>
</template>

<script>
// 按需引入， 并非全部引入
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default {
  name: "myprogress",
  props: {
    title: {
      type: String,
      required: true
    },
    val: {
      // 月销售完成度， 有效商店数
      type: Number,
      required: true
    },
    percent: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.initCircle();
  },
  watch:{
    val(val, oldval){
      this.initCircle();
    }
  },
  methods: {
    initCircle() {
      let data = []; // 此处data对应 chart的setOption
      if (this.percent) {
        data.push({ value: this.val, name: "" });
        data.push({ value: 100 - this.val, name: "" });
      } else {
        data.push({ value: 0, name: "" });
        data.push({ value: 100, name: "" });
      }

      let myChart = echarts.init(this.$refs.pie);

      myChart.setOption({
        color: ["rgb(102,208,113)", "rgb(223,223,223)"],
        series: [
          {
            name: this.title,
            type: "pie",
            radius: ["95%", "100%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: "48",
                  fontWeight: "bold"
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin hwwrap {
  width: px2rem(175);
  height: px2rem(175);
}
.myprogress {
  position: relative;
  text-align: center;
  color: #000;
  .label {
    line-height: px2rem(175);
    position: absolute;
    left: 0;
    top: 0;
    font-size: px2rem(48);
    @include hwwrap;
    span {
      vertical-align: super;
      font-size: $text-size-small;
    }
  }
  .pie-wrap {
    @include hwwrap;
  }
  h3 {
    font-size: $text-size;
    padding: px2rem(27) 0 px2rem(52);
    line-height: $text-size;
  }
}
</style>


