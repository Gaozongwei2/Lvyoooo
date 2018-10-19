<template>
  <div class="container">
    <div class="logo">
      <div class="logoimg"></div>
      <div class="logoland">旅由网</div>
    </div>
    <div class="land">
      <div class="numberland">登录</div>
      <div class="lineland"></div>
      <div class="landexplain">关于旅由网将实行 <a href="#">手机绑定实名制的说明</a></div>
      <!--<div class="inputnumber">-->
      <input type="text" id="telephone" placeholder="请输入手机号" maxlength="11" v-model="telephone">
      <!--</div>-->
      <div class="interval0">
        <div class="interval0-1" v-if="tel_correct">手机号不合法</div>
      </div>
      <input type="password" id="password" placeholder="密码" maxlength="40" v-model="password">
      <div class="interval1"><a href="#">忘记密码</a>
        <div class="interval1-2" v-if="psd_correct">密码长度小于六位</div>
      </div>
      <button class="btn" @click="login">登录</button>
      <div class="linklogon">
      <div class="linklogon1">
      <div class="qqimg"></div>
      <div class="xinlangimg"></div>
      <div class="weixinimg"></div>
      </div>
      </div>
      <div class="lowerexplain">
        <div class="register">没有账号？ <router-link to="/regist"><a href="2_regist.html">立即注册</a></router-link></div>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    name: "Login",
    data: function () {
      return {
        telephone: '',
        password: '',
        tel_correct: false,
        psd_correct: false
      }
    },
    created: function () {
      this.debouncedvertifyTel = _.debounce(this.Tel, 1000)
      this.debouncedvertifyPsd = _.debounce(this.Psd, 1000)
    },
    methods: {
      Tel: function () {
        if (!this.telephone) {
          this.tel_correct = false
        } else if (!(/^1[34578]\d{9}$/.test(this.telephone))) {
          this.tel_correct = true
        }
        else {
          this.tel_correct = false
        }
      },
      Psd: function () {
        if (!this.telephone) {
          this.psd_correct = false
        } else if (this.password.length < 6) {
          this.psd_correct = true
        }
        else {
          this.psd_correct = false
        }
      },
      //发送ajax请求
      login: function () {
        var that = this
        alert("login")
        axios.post('http://127.0.0.1:8000/user/login/', {'telephone': that.telephone, 'password': that.password})
          .then(function (response) {
            if(response.data.length){
              // sessionStorage.setItem("telephone",response.data[0]["telephone"])
            }
            console.log(response.data)
          })
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          })
      }
    },
    watch: {
      telephone: function (newtel) {
        this.debouncedvertifyTel();
      },
      password: function () {
        this.debouncedvertifyPsd();
      }
    }


  }
</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    height: 641px;
    background: url("https://images.mafengwo.net/images/signup/wallpaper/9.jpg");
    background-size: 100% 641px;
  }

  .container .logo {
    /*float: left;*/
    width: 380px;
    height: 46px;
    /*background: rgba(255, 69, 0, 0.2);*/
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    top: 60px;
  }

  .container .logo .logoimg {
    float: left;
    width: 70px;
    height: 46px;
    /*background: #41465f;*/
    background-image: url("../../assets/login/QQ图片20180830195055.png");
    background-size: 60px 46px;
    background-repeat: no-repeat;
    margin-left: 115px;
  }

  .container .logo .logoland {
    float: left;
    width: 75px;
    height: 46px;
    /*background: #ff4eda;*/
    font-size: 24px;
    color: white;
    margin-left: 10px;
    line-height: 46px;
  }

  .container .land {
    width: 380px;
    height: 436px;
    background: white;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    top: 110px;

  }

  .container .land .numberland {
    width: 165px;
    height: 60px;
    /*background: #41465f;*/
    margin: auto;
    font-size: 16px;
    color: #3f9f5f;
    line-height: 60px;
    text-align: center;
  }

  .container .land .lineland {
    width: 330px;
    height: 1px;
    background: rgba(29, 14, 14, 0.3);
    margin-left: 25px;
  }

  .container .land .landexplain {
    width: 270px;
    height: 50px;
    /*background: #ff8265;*/
    margin-left: 25px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.51);
    line-height: 50px;
  }

  .container .land .landexplain a {
    text-decoration: none;
    color: #3f9f5f;
  }

  .container .land .landexplain a:hover {
    text-decoration: underline;
  }

  .container .land input {
    width: 330px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    padding-left: 5px;
    margin-left: 25px;

  }

  .container .land .interval0 {
    width: 330px;
    height: 30px;
    /*background: white;*/
    margin-left: 25px;

  }

  .container .land .interval0 .interval0-1 {
    width: 330px;
    height: 30px;
    /*background: aqua;*/
    font-size: 12px;
    color: red;
  }

  .container .land .interval1 {
    width: 330px;
    height: 30px;
    /*background: white;*/
    margin-left: 25px;
    line-height: 30px;

  }

  .container .land .interval1 a {
    float: right;
    /*margin-right: 0px;*/
    text-decoration: none;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.51);
  }

  .container .land .interval1 a:hover {
    color: rgba(0, 128, 0, 0.5);
  }

  .container .land .interval1 .interval1-2 {
    width: 330px;
    height: 30px;
    /*background: white;*/
    /*margin-left: 25px;*/
    font-size: 12px;
    color: red;
    /*background: aqua;*/
  }

  .container .land .btn {
    width: 330px;
    height: 36px;
    margin-left: 25px;
    font-size: 16px;
    color: white;
    background: #3f9f5f;
    outline: none;
    border: 0;
    border-radius: 3px;
  }

  .container .land .btn:hover {
    background: rgba(63, 159, 95, 0.61);
  }

  .container .land .linklogon{
  width: 330px;
  height: 90px;
  /*background: #ffa000;*/
  margin-left: 25px;
  }
  .container .land .linklogon .linklogon1{
  float: left;
  width: 330px;
  height: 40px;
  /*background: #41465f;*/
  margin-left: 0px;
  margin-top: 40px;
  }
  .container .land .linklogon .linklogon1 .qqimg{
  float: left;
  width: 40px;
  height: 40px;
  background: url("../../assets/login/QQ.svg");
  background-repeat: no-repeat;
  margin-left: 20px;

  }
  .container .land .linklogon .linklogon1 .xinlangimg{
  float: left;
  width: 40px;
  height: 40px;
  background: url("../../assets/login/群蜂新浪微博.svg");
  background-repeat: no-repeat;
  margin-left: 40px;

  }
  .container .land .linklogon .linklogon1 .weixinimg{
  float: left;
  width: 40px;
  height: 40px;
  background: url("../../assets/login/微信.svg");
  background-repeat: no-repeat;
  margin-left: 40px;
  }
  .container .land .lowerexplain {
    width: 330px;
    height: 40px;
    /*background: #41465f;*/
    margin-left: 25px;
  }

  .container .land .lowerexplain .register {
    float: left;
    width: 175px;
    height: 20px;
    /*background: #3f9f5f;*/
    font-size: 14px;
    margin-left: 0px;
    margin-top: 10px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
  }

  .container .land .lowerexplain .register a {
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 128, 0, 0.5);
  }

  .container .land .lowerexplain .register a:hover {
    text-decoration: underline;
  }


</style>
