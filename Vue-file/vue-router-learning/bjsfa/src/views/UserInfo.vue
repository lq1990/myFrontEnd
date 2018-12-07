<template>
  <div class="userinfo">
    <h1>用户页面 ID: {{$route.params.id}}</h1>
    <!-- 区分 route: 为一条路径。vue自带 $route属性 -->
    <!-- 在user路由下，设置 子路由。 用到router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    console.log(
      "%c组件内的守卫, beforeRouteEnter",
      "background-color: #44d39f"
    );
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(
      "%c组件内的守卫 beforeRouteUpdate",
      "background-color: #40d39f"
    );
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("%c组件内的守卫 beforeRouteLeave", "background-color: #4ad39f");
    next();
  },

  beforeCreate() {
    console.log("%c==> beforeCreate", "color:blue");
  },
  created() {
    console.log("%c==> created", "color:blue");
  },
  beforeUpdate() {
    console.log("%c==> beforeUpdate", "color:blue");
  },
  updated() {
    console.log("%c==> updated", "color:blue");
  },
  beforeDestroy() {
    console.log("%c==> beforeDestroy", "color:blue");
  },
  destroyed() {
    console.log("%c==> destroyed", "color:blue");
  }
};
</script>
