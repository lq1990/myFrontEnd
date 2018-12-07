<template>
    <div class="product">
        <h1>Product ID: {{id}}</h1>
        <!-- 区分 route: 为一条路径。vue自带 $route属性 -->
    </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {};
  },
  props: ["id"]
};
</script>
