<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>vuex_num: {{$store.state.num}}</h3>
    <demo-about @trans="handlerevent"></demo-about>
    <br>
    <input type="text" v-model="num">&nbsp;
    <input type="button" value="editNumAsync" @click="editNumA">
  </div>
</template>

<script>
import da from "../components/DemoAbout.vue";
export default {
  name: "about",
  data() {
    return {
      num: 1
    };
  },
  components: {
    "demo-about": da
  },
  methods: {
    handlerevent(e) {
      alert(e);
    },
    editNumA() {
      this.$store.dispatch("updateNumAsync", +this.num);
    }
  }
};
</script>
