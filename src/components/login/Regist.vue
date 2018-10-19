<template>
  <div class="container">
    <div class="logo">
      <div class="logoimg"></div>
      <div class="logoland">旅由网</div>
    </div>
    <div class="regist">
      <div class="liregist">
        <input type="text" class="tel" placeholder="输入用于登录的手机号码" maxlength="11" v-model="telephone">
        <!--<div class="interval0"></div>-->
        <!--<div class="case1">-->
        <!--<input type="text" class="imgcode" placeholder="图片识别码">-->
        <!--<div class="imgc"></div>-->
        <!--</div>-->
        <!--<div class="interval1"></div>-->
        <!--<div class="case2">-->
        <!--<input type="text" class="verificationcode" placeholder="输入短信中的验证码">-->
        <!--<button class="btn">发送验证码</button>-->
        <!--</div>-->
        <div class="interval2">
          <div class="interval2-1" v-if="tel_correct">手机号不合法</div>
        </div>
        <input type="password" class="password" placeholder="请输入密码" maxlength="40" v-model="password">
        <div class="interval3"></div>
        <input type="password" class="password1" placeholder="再次输入密码" maxlength="40" v-model="password1">
        <div class="interval4">
          <div class="interval4-2" v-if="psd_correct">密码长度小于六位</div>
        </div>
        <button class="btn0" @click="regist">注册</button>
      </div>
      <div class="underneath">
        <div class="land">已有账号？ <router-link to="/login"><a href="1_land.html">登录</a></router-link></div>
        <div class="memberexplain">同意<a href="">会员条款</a>和<a href="">免责声明</a></div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Regist",
    data: function () {
      return {
        telephone: '',
        password: '',
        password1:'',
        tel_correct: false,
        psd_correct: false
      }
    },
    created: function () {
      this.debouncedvertifyTel = _.debounce(this.Tel, 1000)
      this.debouncedvertifyPsd = _.debounce(this.Psd, 1000)
      this.debouncedvertifyPsd1 = _.debounce(this.Psd1, 1000)
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

      Psd1: function () {
        if (!this.telephone) {
          this.psd_correct = false
        } else if (this.password1.length < 6) {
          this.psd_correct = true
        }
        else {
          this.psd_correct = false
        }
      },

      //发送ajax请求
      regist: function () {
        var that = this;
        axios.post('http://127.0.0.1:8000/user/regist/', {'telephone': that.telephone, 'password': that.password,'password1':that.password1})
          .then(function (response) {
            console.log(response)
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
        this.debouncedvertifyPsd1();
      }
    }


  }
</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  .container{
    width: 100%;
    height: 641px;
    background: url("https://images.mafengwo.net/images/signup/wallpaper/9.jpg");
    background-size: 100% 641px;
  }

  .container .logo{
    /*float: left;*/
    width: 380px;
    height: 46px;
    /*background: rgba(255, 69, 0, 0.2);*/
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    top: 50px;
  }

  .container .logo .logoimg{
    float: left;
    width: 70px;
    height: 46px;
    /*background: #41465f;*/
    background-image: url("../../assets/login/QQ图片20180830195055.png");
    background-size: 60px 46px;
    background-repeat: no-repeat;
    margin-left: 115px;
  }
  .container .logo .logoland{
    float: left;
    width: 75px;
    height: 46px;
    /*background: #ff4eda;*/
    font-size: 24px;
    color: white;
    margin-left: 10px;
    line-height: 46px;
  }
  .container .regist{
    width: 380px;
    height: 336px;
    background: white;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    top: 80px;
  }

  .container .regist .liregist{
    float: left;
    width: 330px;
    height: 276px;
    /*background: #636985;*/
    margin-top: 10px;
    margin-left: 25px;
  }
  .container .regist .liregist .tel{
    /*float: left;*/
    width: 330px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    padding-left: 5px;
    /*margin-left: 0px;*/
    margin-top: 30px;
  }
  /*.container .regist .liregist .interval0{*/
  /*width: 330px;*/
  /*height: 30px;*/
  /*background: white;*/
  /*}*/

  /*.container .regist .liregist .case1{*/
  /*width: 330px;*/
  /*height: 40px;*/
  /*!*background: #3f9f5f;*!*/
  /*}*/
  /*.container .regist .liregist .case1 .imgcode{*/
  /*float: left;*/
  /*width: 200px;*/
  /*height: 40px;*/
  /*!*background: #ff4500;*!*/
  /*outline: none;*/
  /*box-sizing: border-box;*/
  /*padding-left: 5px;*/
  /*!*border: 0;*!*/
  /*}*/
  /*.container .regist .liregist .case1 .imgc{*/
  /*float: left;*/
  /*width: 126px;*/
  /*height: 40px;*/
  /*background: url("https://passport.qyer.com/qcross/passport/captcha?scene=mobile_register_sms&timer=1535786340707");*/
  /*background-repeat: no-repeat;*/
  /*margin-left: 4px;*/
  /*}*/
  /*.container .regist .liregist .interval1{*/
  /*width: 330px;*/
  /*height: 30px;*/
  /*background: white;*/
  /*}*/
  /*.container .regist .liregist .case2{*/
  /*width: 330px;*/
  /*height: 40px;*/
  /*!*background: #1d0e0e;*!*/
  /*}*/
  /*.container .regist .liregist .case2 .verificationcode{*/
  /*float: left;*/
  /*width: 200px;*/
  /*height: 40px;*/
  /*!*background: #ff4500;*!*/
  /*outline: none;*/
  /*box-sizing: border-box;*/
  /*padding-left: 5px;*/
  /*!*border: 0;*!*/
  /*}*/
  /*.container .regist .liregist .case2 .btn{*/
  /*float: left;*/
  /*width: 126px;*/
  /*height: 40px;*/
  /*font-size: 14px;*/
  /*color: white;*/
  /*background: #3f9f5f;*/
  /*outline: none;*/
  /*border: 0;*/
  /*border-radius: 3px;*/
  /*margin-left: 4px;*/
  /*}*/
  /*.container .regist .liregist .case2 .btn:hover{*/
  /*background: rgba(63, 159, 95, 0.61);*/
  /*}*/

  .container .regist .liregist .interval2{
    width: 330px;
    height: 30px;
    background: white;
  }

  .container .regist .liregist .interval2 .interval2-1{
    width: 330px;
    height: 30px;
    background: white;
    font-size: 12px;
    color: red;
  }

  .container .regist .liregist .password{
    width: 330px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    padding-left: 5px;
    /*border: 0;*/
  }

  .container .regist .liregist .interval3{
    width: 330px;
    height: 30px;
    background: white;
  }

  .container .regist .liregist .password1{
    width: 330px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    padding-left: 5px;
    /*border: 0;*/
  }
  .container .regist .liregist .interval4{
    width: 330px;
    height: 30px;
    background: white;
  }

  .container .regist .liregist .interval4 .interval4-2{
    width: 330px;
    height: 30px;
    background: white;
    font-size: 12px;
    color: red;
  }

  .container .regist .liregist .btn0{
    width: 330px;
    height: 36px;
    font-size: 16px;
    color: white;
    background: #3f9f5f;
    outline: none;
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
  }
  .container .regist .liregist .btn0:hover{
    background: rgba(63, 159, 95, 0.61);
  }

  .container .regist .underneath{
    float: left;
    width: 330px;
    height: 40px;
    /*background: #ff4eda;*/
    margin-left: 25px;
  }

  .container .regist .underneath .land{
    float: left;
    width: 140px;
    height: 20px;
    /*background: #3f9f5f;*/
    font-size: 14px;
    margin-left: 0px;
    margin-top: 10px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
  .container .regist .underneath .land a{
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 128, 0, 0.5);
  }
  .container .regist .underneath .land a:hover{
    text-decoration: underline;
  }

  .container .regist .underneath .memberexplain{
    float: right;
    width: 160px;
    height: 20px;
    /*background: #3f9f5f;*/
    font-size: 14px;
    margin-right: 0px;
    margin-top: 10px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
  .container .regist .underneath .memberexplain a{
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 128, 0, 0.5);
  }
  .container .regist .underneath .memberexplain a:hover{
    text-decoration: underline;
  }



</style>
