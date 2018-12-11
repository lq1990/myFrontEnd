<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>vuex中的num: {{$store.state.num}}</h3>
    <aboutd v-on:trans="handler"></aboutd>
    <aboutd v-on:trans="handler"></aboutd>
    <aboutd v-on:trans="handler"></aboutd>
    <aboutd v-on:trans="handler"></aboutd>

    <input type="text" v-model="num">
    <input type="button" value="异步action修改num" @click="updateNumA">
    <input type="button" value="异步action修改num mapA" @click="updateNumAsync(+num)">
  </div>
</template>

<script>
import { mapActions } from "vuex";
import aboutd from "../components/DemoAbout.vue";
export default {
  name: "about",
  data() {
    return {
      num: 9
    };
  },
  components: {
    aboutd
  },
  methods: {
    handler(e) {
      console.log("e:", e);
    },
    updateNumA() {
      this.$store.dispatch("updateNumAsync", Number(this.num));
      // commit 触发mutations, dispatch 触发acitons
      // 第二个参默认是 str格式
    },
    ...mapActions(["updateNumAsync"])
  }
};
</script>
