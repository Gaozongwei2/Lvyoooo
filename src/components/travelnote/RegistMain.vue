<template>
  <div class="container-fluid">
    <div class="logo">
      <div class="logo-img"></div>
      <div class="logoland">旅由网</div>
    </div>

    <div class="regist">
      <div class="liregist">
        <input type="text" class="tel" placeholder="输入您的手机号">

        <div class="interval1"></div>
        <div class="case2">
          <input type="text" class="verificationcode" placeholder="输入手机验证码">
          <button class="btn">发送验证码</button>
        </div>

        <div class="interval3"></div>
        <input type="text" class="password" placeholder="输入8-16位密码，包含字母及数字">
        <div class="interval4"></div>
        <button class="btn0">立即注册</button>
      </div>
      <div class="underneath">
        <div class="land">已有账号？ <router-link to="/login">登录</router-link></div>

      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "RegistMain"
    }
</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  /*背景图片*/
  .container-fluid{
    height: 641px;
    background: url("https://images.mafengwo.net/images/signup/wallpaper/40.jpg ");
    background-size: 100% 641px;
  }
  /*logo*/
  .container-fluid .logo{
    width: 380px;
    height: 46px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    top: 50px;
  }

  .container-fluid .logo .logo-img{
    float: left;
    width: 45px;
    height: 46px;
    background-image: url("../../assets/travelnote/lvy-logo2.png");
    background-size: 40px 46px;
    background-repeat: no-repeat;
    margin-left: 120px;
  }
  .container-fluid .logo .logoland{
    float: left;
    width: 75px;
    height: 46px;
    font-size: 24px;
    color: white;
    margin-left: 10px;
    line-height: 46px;
  }
  /*注册表*/
  .container-fluid .regist{
    width: 380px;
    height: 400px;
    background: white;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    top: 80px;
  }

  .container-fluid .regist .liregist{
    float: left;
    width: 300px;
    height: 350px;
    margin-top: 6px;
    margin-left: 25px;
  }
  .container-fluid .regist .liregist .tel{
    width: 200px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    padding-left: 5px;
    margin-top: 30px;
  }


  .container-fluid .regist .liregist .interval1{
    width: 330px;
    height: 30px;
    background: white;
    margin-top:8px;
  }
  .container-fluid .regist .liregist .case2{
    width: 330px;
    height: 40px;
  }
  .container-fluid .regist .liregist .case2 .verificationcode{
    float: left;
    width: 200px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    padding-left: 5px;
  }
  .container-fluid .regist .liregist .case2 .btn{
    float: left;
    width: 126px;
    height: 40px;
    font-size: 14px;
    color: white;
    background: #3f9f5f;
    outline: none;
    border: 0;
    border-radius: 3px;
    margin-left: 4px;
  }
  .container-fluid .regist .liregist .case2 .btn:hover{
    background: rgba(63, 159, 95, 0.61);
  }

  .container-fluid .regist .liregist .interval3{
    width: 330px;
    height: 30px;
    background: white;
  }

  /*输入密码*/
  .container-fluid .regist .liregist .password{
    width: 330px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    padding-left: 5px;

  }
  .container-fluid .regist .liregist .interval4{
    width: 330px;
    height: 30px;
    background: white;
  }

  .container-fluid  .regist .liregist .btn0{
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
  .container-fluid  .regist .liregist .btn0:hover{
    background: rgba(63, 159, 95, 0.61);
  }

  .container-fluid  .regist .underneath{
    float: left;
    width: 330px;
    height: 40px;
    margin-left: 25px;
  }

  .container-fluid  .regist .underneath .land{
    float: left;
    width: 140px;
    height: 20px;
    font-size: 14px;
    margin-left: 0px;
    margin-top: 3px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
  .container-fluid  .regist .underneath .land a{
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 128, 0, 0.5);
  }
  .container-fluid  .regist .underneath .land a:hover{
    text-decoration: underline;
  }

  .container-fluid  .regist .underneath .memberexplain a{
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 128, 0, 0.5);
  }
  .container-fluid  .regist .underneath .memberexplain a:hover{
    text-decoration: underline;
  }

</style>
