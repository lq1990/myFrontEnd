<template>
  <div class="login">
    <h1>Welcome to BaoJie SFA..</h1>
    <div class="top_hat"></div>
    <div class="login-box">
      <!-- logo -->
      <div class="logo-wrap">
        <div class="logo-box"></div>
      </div>

      <!-- login -->
      <div class="input-group" :class="{active: act_index===1, error: errors.has('cno')}">
        <label for="cm_code">Company ID:</label>
        <input
          name="cno"
          v-validate="{required: true, max:6, min:4}"
          @focus="act_index=1"
          type="number"
          id="cm_code"
          v-model="cm_code"
        >
      </div>
      <div class="input-group" :class="{active: act_index===2, error: errors.has('eno')}">
        <label for="PNO">Employee ID:</label>
        <input
          name="eno"
          v-validate="{required: true, max: 12, min: 4}"
          @focus="act_index=2"
          type="number"
          id="PNO"
          v-model="PNO"
        >
      </div>
      <div class="input-group" :class="{active: act_index===3, error: errors.has('pwd')}">
        <label for="Passwd">Password:</label>
        <input
          name="pwd"
          v-validate="{required:true, max: 12, min:4}"
          @focus="act_index=3"
          type="password"
          id="Passwd"
          v-model="passwd"
        >
      </div>
      <div class="ck-row">
        <div class="ckbox_wrap" @click="rememberSet" :class="{active: remember}">
          <i class="iconfont" :class="{'icon-check-square':remember, 'icon-border': !remember}"></i>
          <span>remember</span>
        </div>

        <div class="ckbox_wrap" @click="autologinSet" :class="{active: autologin}">
          <i class="iconfont" :class="{'icon-check-square':autologin, 'icon-border': !autologin}"></i>
          <span>auto login</span>
        </div>
      </div>
    </div>
    <div class="btn-wrap" @click="loginBtnClick">
      <p>Login</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
import { Indicator, Toast } from "mint-ui";
import services from "../service";

import "../assets/font/iconfont.css";
export default {
  name: "login",
  data() {
    return {
      act_index: 1,
      cm_code: "",
      PNO: "",
      passwd: "",
      remember: false,
      autologin: false
    };
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("Login_data"));
    if (data) {
      this.cm_code = data.CNO;
      this.passwd = data.Passwd;
      this.PNO = data.PNO;
      this.autologin = data.autologin;
      this.remember = data.remember;
    }

    // when mounted...
    // it is forced to do validation.
    this.$validator.validate();
    // in all VueInstance, there is $validator, that is provided by VeeValidate

    if (this.autologin) {
      this.loginBtnClick();
    }
  },
  methods: {
    ...mapMutations(["initUser"]),
    rememberSet() {
      this.remember = !this.remember;

      this.remember || (this.autologin = false);
    },
    autologinSet() {
      this.autologin = !this.autologin;

      this.autologin && (this.remember = true);
    },
    loginBtnClick() {
      // check whether all of validation are passed
      if (this.errors.any()) {
        console.log("errors!");

        return;
      }
      // console.log("no errors.");

      Indicator.open("loading...");
      // setTimeout(()=>{
      //   Indicator.close();

      // },2000);

      // send ajax, use axios
      // axios
      //   .post("/api/login", {
      //   // .post("http://localhost:56789/login", {
      //     CNO: this.cm_code,
      //     PNO: this.PNO,
      //     Passwd: this.passwd
      //   })
      services
        .login({
          CNO: this.cm_code,
          PNO: this.PNO,
          Passwd: this.passwd
        })
        .then(res => {
          console.log(res);
          // console.log(res.data);
          if (res) {

            // succeed to login, save userData and jump to Home
            localStorage.setItem(
              "Login_data",
              JSON.stringify({
                remember: this.remember,
                autologin: this.autologin,
                PNO: this.remember ? this.PNO : "",
                CNO: this.remember ? this.cm_code : "",
                Passwd: this.remember ? this.passwd : ""
              })
            );

            // put userInfo into vuex.
            // Not only put it into Vuex, but also into sessionStorage,
            // because without sessionStorage,
            // if the page is refreshed, all the data would be deleted.
            let res_data_user = res.data.user ? res.data.user : "who";
            sessionStorage.setItem("LoginUser", JSON.stringify(res_data_user));
            // 在login时，把token数据放到 sessionStorage 中。
            sessionStorage.setItem("LoginToken", res.data.token);

            // this.$store.commit('initUser',res.data.user);
            this.initUser(res.data.user);

            // jump to Home
            this.$router.push("/home");
          } else {
            // failed
            Toast({
              message: "password is wrong.",
              duration: 2000
            });
          }
          Indicator.close();
        })
        .catch(() => {
          // console.log("failed to login!", e);
          Toast({
            message: "failed to login",
            duration: 2000
          });
          Indicator.close();
        });
    }
  }
};
</script>


<style lang="scss" scoped>
// @import "../lib/px2rem.scss";
h1 {
  text-align: center;
  font-size: px2rem(36);
  height: px2rem(36);
  padding: px2rem(148-36-44) 0 px2rem(44) 0;
  line-height: px2rem(36);
  color: white;
}

@mixin login_wrap {
  width: px2rem(600);
  margin: 0 auto;
  background-color: #fff;
  border-radius: px2rem(20);
}

.login {
  background: #2ade69;
  height: 100%;
  .top_hat {
    width: px2rem(537);
    height: px2rem(18);
    background-color: #eee;
    margin: 0 auto;
    border-radius: px2rem(18) px2rem(18) 0 0;
  }

  .login-box {
    @include login_wrap;
    height: px2rem(836);

    .logo-wrap {
      padding: px2rem(80) 0;
      .logo-box {
        width: px2rem(190);
        height: px2rem(190);
        margin: 0 auto;
        background-image: url(../assets/logo.jpg);
        background-size: cover;
      }
    }

    @mixin rowStyle() {
      padding: 0 px2rem(36);
      color: $text-color;
      width: px2rem(400);
    }
    .input-group {
      border: 2px solid #e2e2e2;
      border-radius: px2rem(45);
      font-size: $text-size-mid;
      line-height: px2rem(90);
      @include rowStyle();
      margin: 0 auto px2rem(30);
      input {
        border: 0 none;
        font-size: $text-size-mid;
        line-height: px2rem(90);
        width: px2rem(200);
        padding-left: px2rem(10);
      }
    }

    .input-group.active {
      color: $text-color-imp;
      border: 2px solid $act-color;
    }
    .input-group.error {
      color: red;
      border: 2px solid red;
    }

    .ck-row {
      font-size: $text-size;
      @include rowStyle();
      display: flex;
      justify-content: space-between;
      .ckbox_wrap {
        padding-top: px2rem(8);
        padding-left: px2rem(36);
        i::before {
          display: inline-block;
          height: px2rem(32);
          width: px2rem(32);
          font-size: px2rem(32);
        }
      }
      .ckbox_wrap.active {
        color: $act-color;
      }
    }
  }

  .btn-wrap {
    @include login_wrap;
    font-weight: bold;
    letter-spacing: px2rem(10);
    height: px2rem(100);
    text-align: center;
    line-height: px2rem(100);
    font-size: $text-size-imp;
    color: $act-color;
    margin-top: px2rem(20);
  }
}
</style>


<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>