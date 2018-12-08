<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>vuex中的num: {{$store.state.num}}</h3>
    <aboutd v-on:trans="handler"></aboutd>
    <aboutd v-on:trans="handler"></aboutd>
    <aboutd v-on:trans="handler"></aboutd>
    <aboutd v-on:trans="handler"></aboutd>
  </div>
</template>

<script>
import aboutd from "../components/DemoAbout.vue";
export default {
  name: "about",
  data() {
    return {};
  },
  components: {
    aboutd
  },
  methods: {
    handler(e) {
      console.log("e:", e);
    }
  }
};
</script>
