<template>
  <div class="home">
    <tophead title="SFA">
      <router-link to="/user" slot="r" class="icon iconfont icon-user"></router-link>
    </tophead>

    <div class="main-bd">
      <div class="data-wrap">{{getYearMonth}}</div>
      <div class="mp-wrap">
        <myprogress title="当前月进度" :val="getDayOfMonth" :percent="true"></myprogress>
        <myprogress title="月销售完成度" :val="monthSalesPercent" :percent="true"></myprogress>
        <myprogress title="有效商店数" :val="shops" :percent="false"></myprogress>
      </div>
    </div>

    <div class="main-nav">
      <div class="nav-cell" v-for="i in 9" :key="i">

        <template v-if="i<=menuList.length">
          <menu-cell
            :url="menuList[i-1].url"
            :menu-name="menuList[i-1].menuName"
            :img-url="menuList[i-1].imgUrl"
          ></menu-cell>
        </template>
         
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHead from "../components/TopHead.vue";
import myprogress from "../components/myProgress.vue";
import services from "../service";
import menuCell from "../components/MenuCell.vue";

const menuList = [
  {
    menuName: "公司通告",
    imgUrl: require("@/assets/img/notice.png"),
    url: "/notice"
  },
  {
    menuName: "进店拜访",
    imgUrl: require("@/assets/img/visit.png"),
    url: "/visitshop"
  },
  {
    menuName: "电话订单",
    imgUrl: require("@/assets/img/phone.png"),
    url: "/phoneorder"
  },
  {
    menuName: "订单状态",
    imgUrl: require("@/assets/img/orders.png"),
    url: "/orders"
  },
  {
    menuName: "培训资料",
    imgUrl: require("@/assets/img/training.png"),
    url: "/training"
  },
  {
    menuName: "消息中心",
    imgUrl: require("@/assets/img/message.png"),
    url: "/message"
  },
  {
    menuName: "新增门店",
    imgUrl: require("@/assets/img/added.png"),
    url: "/addedshop"
  },
  {
    menuName: "同步数据",
    imgUrl: require("@/assets/img/async.png"),
    url: "/asyncdata"
  }
];

export default {
  name: "home",
  data() {
    return {
      monthSalesPercent: 0,
      shops: 0,
      menuList
    };
  },
  computed: {
    getYearMonth() {
      let t = new Date();
      return `${t.getFullYear()}年 ${t.getMonth() + 1}月`;
    },
    getDayOfMonth() {
      let t = new Date();
      return parseInt((t.getDate() / 30) * 100);
    }
  },
  components: {
    tophead: TopHead,
    myprogress,
    menuCell,
    menuList: menuList
  },
  created() {
    services.getUserProgress().then(res => {
      this.monthSalesPercent = parseInt(res.data.monthPercent * 100);
      this.shops = res.data.totalShops;
    });
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .main-nav {
    flex: 1 1 auto;
    padding: 0 px2rem(30);
    display: flex;
    flex-flow: row wrap;
    align-content: stretch;
    align-items: stretch;
    border-top: 1px solid #ccc;
    .nav-cell {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      flex: 1 1 30%;
    }
    .nav-cell:nth-child(3n) {
      border-right: none;
    }
  }
}

.main-bd {
  background: #fff;
  .data-wrap {
    padding: px2rem(40) 0 px2rem(22);
    color: #000;
    font-size: $text-size-mid;
    text-align: center;
  }
  .mp-wrap {
    display: flex;
    justify-content: space-around;
  }
}
</style>

