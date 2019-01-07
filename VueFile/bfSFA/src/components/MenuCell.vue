<template>
  <div class="menu-cell">
    <router-link :to="url">
      <!-- 使用router link包裹，为a标签，链接 -->
      <div class="img-wrap">
        <img :src="imgUrl" :alt="menuName">
      </div>

      <div class="title-wrap">{{menuName}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "menucell",
  props: ["menuName", "imgUrl", "url"],
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
.menu-cell {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  font-size: $text-size;
  color: #000;
  .img-wrap {
    display: inline-block; // 设置了 inline-block 后，才能使imgwrap 居中
    width: px2rem(62);
    height: px2rem(62);
    margin-bottom: px2rem(36);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>


