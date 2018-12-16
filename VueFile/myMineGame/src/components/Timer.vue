<template>
  <div class="timer">
    {{mm}}
    <span>min</span>
    {{ss}}
    <span>sec</span>
  </div>
</template>

<script>
export default {
  name: "timer",
  data() {
    return {
      mm: 0,
      ss: 0,
      timer_id: 0,
      t_begin: 0
    };
  },
  computed: {},
  methods: {
    showTime(start, end) {
      let duration = (end - start) / 1000;
      this.ss = Math.trunc(duration % 60);
      this.mm = Math.trunc(duration / 60);
    }
  },
  created() {
    console.log("created, isS:", this.isS);
    // 创建一个总的监听所有setInterval的
    setInterval(() => {
      if (this.$store.state.isStart == "true") {
        // 第一个，用处：显示时间，当为false，即停止、不置为0.
        clearInterval(setI1);
        this.showTime(this.t_begin, Date.now());
      }
      if (this.$store.state.isEnd == "true") {
        // 当submit结束时，使start为false可使time不显示。
        this.$store.commit("updateStart", "false");
        // clearInterval(setI2);
      }
      if (this.$store.state.isReset == "true") {
        this.t_begin = Date.now(); // reset后，不断更新 t_begin,使得点击开始后计时
        this.mm = 0;
        this.ss = 0;
      }
    }, 100);

    // 第一个 setInterval为了 监控click cell，一旦点击开始，就计时
    let setI1 = setInterval(() => {
      this.t_begin = Date.now();
      //   if (this.$store.state.isStart == "true") {
      //     //点击表格时，触发start
      //     console.log("state.isStart: true");
      //     clearInterval(setI1);
      //   }
    }, 100);
    // 第二个setIn为了监控End
    // let setI2 = setInterval(() => {
    //   this.showTime(this.t_begin, Date.now());
    // }, 200);
    // // 第三个setIn监控reset
    // let setI3 = setInterval(() => {
    //   if (this.$store.state.isReset == "true") {
    //     clearInterval(setI2);
    //     this.mm = 0;
    //     this.ss = 0;
    //     // this.showTime();
    //     clearInterval(setI3);
    //   }
    // }, 100);

    // this.timer_id = setInterval(() => {
    //   this.t_begin = Date.now();

    //   if (this.$store.state.isStart == "true") {
    //     console.log("state.isStart=true");
    //     let duration = (Date.now() - this.t_begin) / 1000;
    //     this.ss = Math.trunc(duration % 60);
    //     this.mm = Math.trunc(duration / 60);
    //   }
    // }, 200);
  }
};
</script>

<style lang="scss" scoped>
.timer {
  color: rgb(64, 64, 231);
  span {
    color: rgb(35, 164, 207);
  }
}
</style>
