<template>
  <div>
    <div class="container-fluid" style="padding: 0px; margin: 0px ;height: 58px">
      <div class="col-md-3" id="logo-img"></div>
      <ul class="col-md-3" id="nav-list">
        <li>首页</li>
        <li>游记详情</li>
        <li>游记攻略</li>
      </ul>
      <div class="col-md-4 hidden-xs form-group search " style="margin-top: 11px">
        <input type="search" id="search-bar-input" placeholder="搜索目的地">
      </div>
      <div class="col-md-2" id="user-img">
        <img
          src="http://n2-q.mafengwo.net/s12/M00/35/2C/wKgED1uqImOAAxCCAAAeJTVWYJU680.png?imageMogr2%2Fthumbnail%2F%2132x32r%2Fgravity%2FCenter%2Fcrop%2F%2132x32%2Fquality%2F90"
          height="32" width="32" alt="iG的窝">
      </div>
    </div>

    <div id="bg-img"></div>
  </div>
</template>

<script>
  export default {
    name: "WriteNotes"
  }
</script>

<style scoped>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .container-fluid {
    height: 58px;
    /*background: #ffe3d4;*/
    border-bottom: solid 1px #afafaf;
  }

  #logo-img {
    background-image: url("../../assets/travelnote/logoweight.png");
    height: 40px;
    width: 150px;
    background-repeat: no-repeat;
    margin-left: 100px;
    margin-top: 5px;
  }

  #nav-list {
    float: left;
    width: 420px;
    height: 58px;
  }

  #nav-list li {
    float: left;
    display: inline-block;
    padding: 15px 30px;
    color: #333;
    vertical-align: top;
    overflow: hidden;
    font-size: 15px;
    margin-top: 7px;
  }

  #search-bar-input {
    /*圆角*/
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #fafafa;
    border: none;
    width: 130px;
    height: 28px;
    transition: width .5s ease 0s;
    /*background-image: url("../assets/4.svg");*/
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  #search-bar-input:focus {
    outline-style: none;
    transition: width .5s ease 0s;
    width: 375px;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    border: 1px solid #ff9d00;
    /*background: url("../assets/5.svg");*/
    background-position: 95%;
    background-repeat: no-repeat;
    margin-left: 10px;
    margin-top: 6px;
  }

  #user-img {
    border: 0;
    vertical-align: middle;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 10px;
  }

  /*-----------------------------------*/
  /*.container {*/
    /*height: 800px;*/
    /*background: #6c757d;*/
  /*}*/
  #bg-img{

  }
</style>
