<template>
    <div class="container-fluid">
      <div class="land">
        <div class="numberland">旅由网登录</div>

        <!--登录-->
        <div class="lineland"></div>
        <input v-model="loginForm.username" type="text" placeholder="输入手机号">

        <div class="interval0"></div>
        <input v-model="loginForm.password" type="text" placeholder="输入密码">

        <div class="interval1"><a href="">忘记密码</a>
        </div>

        <button class="btn" id="denglu">登录</button>
        <!--立即注册-->
        <div class="lowerexplain">
          <div class="register">没有账号？ <router-link to="/regist" ><a>立即注册</a></router-link> </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LoginMain",
        data(){
          return{
            loginForm:{
              username:'',
              password:'',
            }
          }
        },methods:{

      }
    };


</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  .container-fluid{
    height: 641px;
    background: url("//fes.qyerstatic.com/fe_ssr_passport/static/web_login_bg.ecb39528.jpg");
    background-size: 100%;
  }

  .container-fluid .land{
    width: 380px;
    height: 320px;
    background: white;
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
    top: 110px;

  }
  .container-fluid .land .numberland{
    width: 165px;
    height: 60px;
    margin: auto;
    font-size: 16px;
    color: #3f9f5f;
    line-height: 60px;
    text-align: center;
  }
  .container-fluid .land .lineland{
    width: 330px;
    height: 1px;
    background: rgba(29, 14, 14, 0.3);
    margin-left: 25px;
  }

  .container-fluid .land .landexplain a{
    text-decoration: none;
    color: #3f9f5f;
  }
  .container-fluid .land .landexplain a:hover{
    text-decoration: underline;
  }

  .container-fluid .land input{
    width: 330px;
    height: 40px;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
    padding-left: 5px;
    margin-left: 25px;

  }
  .container-fluid .land .interval0{
    width: 330px;
    height: 30px;
    margin-left: 25px;
  }

  .container-fluid .land .interval1{
    width: 330px;
    height: 30px;
    margin-left: 25px;
    line-height: 30px;
  }
  .container-fluid .land .interval1 a{
    float: right;
    text-decoration: none;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.51);
  }
  .container-fluid .land .interval1 a:hover{
    color: rgba(0, 128, 0, 0.5);
  }
  .container-fluid .land .btn{
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
  .container-fluid .land .btn:hover{
    background: rgba(63, 159, 95, 0.61);
  }
  /**/
  .container-fluid .land .lowerexplain .register{
    float: left;
    width: 175px;
    height: 20px;
    font-size: 14px;
    margin-left: 0px;
    margin-top: 30px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }
  .container-fluid .land .lowerexplain .register a{
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 128, 0, 0.5);
  }
  .container-fluid .land .lowerexplain .register a:hover{
    text-decoration: underline;
  }



</style>
