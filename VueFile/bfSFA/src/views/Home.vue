<template>
  <div class="home">
    <tophead title="SFA">
      <router-link to="/user" slot="r" class="icon iconfont icon-user"></router-link>
    </tophead>

    <div class="main-bd">
      <div class="data-wrap">{{getYearMonth}}</div>
    </div>

    <div id="pie" ref="pie_wrap"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from "../components/TopHead.vue";

// 按需引入， 并非全部引入
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default {
  name: "home",
  computed: {
    getYearMonth() {
      let t = new Date();
      return `${t.getFullYear()}年 ${t.getMonth() + 1}月`;
    }
  },
  components: {
    tophead: TopHead
  },
  mounted() {
    let myChart = echarts.init(this.$refs.pie_wrap);
    myChart.setOption({
      color: ["rgb(102,208,113)", "rgb(223,223,223)"],
      series: [
        {
          name: "访问来源",
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
          data: [{ value: 30, name: "" }, { value: 70, name: "" }]
        }
      ]
    });
  }
};
</script>

<style lang="scss" scoped>
.main-bd {
  background: #fff;
  .data-wrap {
    padding: px2rem(40) 0 px2rem(22);
    color: #000;
    font-size: $text-size-mid;
    text-align: center;
    
  }
}
#pie {
  width: px2rem(500);
  height: px2rem(400);
}
</style>

