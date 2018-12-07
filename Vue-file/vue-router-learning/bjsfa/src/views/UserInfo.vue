<template>
    <div class="userinfo">
        <h1>用户页面 ID: {{$route.params.id}}</h1>
        <!-- 区分 route: 为一条路径。vue自带 $route属性 -->
    </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {};
  }
};
</script>
