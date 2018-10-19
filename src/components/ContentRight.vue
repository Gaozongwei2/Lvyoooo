<template id="content-right">
  <div class="col-md-9 post-window">
    <ul class="nav nav-tabs card">
      <li role="presentation" class="active"><a href="javascrapy:;">热门游记</a></li>
      <li role="presentation"><a href="javascrapy:;">最新发布</a></li>
      <li role="presentation" class=""><a href="javascrapy:;">新鲜攻略</a></li>
    </ul>
    <!--热门游记-->
    <div class="container list-post hot-travel listall">
      <div class="col-md-4 box">
        <div class="col-md-12 item">
          <div class="col-lg-9 img"></div>
          <div class="cover" data-toggle="modal" data-target="#myModal"><p>简介:</p>
            <p></p></div>
          <div class="col-lg-3 text">
            <div class="good" name="no"></div>
            <div class="goodnum num"></div>
            <div class="look"></div>
            <div class="looknum num"></div>
            <div class="city"></div>
            <div class="citynum num">苏州</div>
          </div>
        </div>
        <div class="user">
          <img src="" alt="" width="20px" height="20px" class="img-circle">
        </div>
        <div class="title">

        </div>
      </div>

      <div class="stay">
        <!--<div class="focus-top"><a href="####"><img src="../assets/images/回到顶部.png" alt=""></a></div>-->
        <!--<div class="w-travelnotes"><a href="####"><img src="../assets/images/" alt=""></a></div>-->
        <!--<div class="w-strategy"><a href="####"><img src="../assets/images/攻略.png" alt="" width="35px" height="35px"></a></div>-->
      </div>
      <div class="container page">
          <button class="btn before-page">上一页</button>
          <div class="lin_page_index btn ">
            <a class="btn btn-default padding" href="####"></a>
          </div>
          <button class="btn next-page">下一页</button>
          <div class="btn ">共<span style="color: #549c55"></span>页</div>
        </div>

    </div>
  </div>
</template>
<!--复制模板-->

<script>
  export default {
    name: 'ContentRight',
    // props:['user'],
    data() {
      return {
        travel: [],
        id: 1,
        aa: 1,
        bb: 0,
        props: ["user", "token"],
        user: {
          'id': '1',
          "username": "棕色试剂瓶",
          "usericno": "http://n3-q.mafengwo.net/s10/M00/0F/9B/wKgBZ1iUpFWAbScxAAC2Vfg46fo14.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
          "sex": "男",
          "mark": "15",
          "birthday": "1997-6-2",
          "state": "大庆",
          "content": "起始",
        },
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      sessionStorage.setItem("token", "congqianyouzuoshan")
      sessionStorage.setItem("id", "1")
      this.token = "gzw"
      console.log(this.props)
    },

    // method:{
    //
    // }

  }
</script>

<style scoped>
  .post-window {
    height: auto;
    display: block;
    padding-top: 10px;
    margin-bottom: 20px;
  }

  .post-window .nav-tabs > li > a {
    border-radius: 5px 5px 0 0;
  }

  .post-window ul li a:hover {
    color: white;
    background-color: #7eeda8;
  }

  .list-post {
    width: 100%;
    height: auto;
    padding: 0;
    padding-bottom: 15px;
  }

  .list-post > a {
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10px;
    height: 150px;
    background-color: white;
  }

  .list-post .item:hover {
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
  }

  .hot-travel {
    min-height: 450px;
  }

  .new-post {
    min-height: 450px;
    display: none;
  }

  .new-strategys {
    min-height: 450px;
    display: none;
  }

  .content {
    width: 100%;

  }

  .box {
    max-width: 300px;
    max-height: 150px;
    min-width: 300px;
    min-height: 150px;
    padding: 0;
    margin-top: 13px;
    margin-right: 13px;
    border-radius: 4px !important;
  }

  .img:hover + .cover {
    display: block;
    height: 100%;
    transition: height 0.2s;
  }

  .user {
    border-radius: 4px 0 0 0;
    width: 75%;
    height: 20%;
    background-color: rgba(14, 13, 13, 0.31);
    padding: 5px 10px;
    filter: alpha(opacity=50);
    position: absolute;
    left: 0;
    z-index: 2;
  }

  .user img {
    float: left;
  }

  .user div {
    color: white;
    font-size: 13px;
    float: left;
    line-height: 20px;
    margin-left: 10px;
    overflow: hidden;
  }

  .title {
    border-radius: 0 0 0 4px;
    width: 75%;
    height: 30%;
    padding: 0 10px;
    background-color: rgba(14, 13, 13, 0.31);
    filter: alpha(opacity=50);
    position: absolute;
    top: 105px;
    left: 0;
    z-index: 2;
    overflow: hidden;
  }

  .title span {
    opacity: 1 !important;
    color: white;
    font-size: 15px;
    overflow: hidden;
  }

  .title2 {
    box-shadow: rgba(0, 0, 0, 0.25) 1px 1px 5px 3px;
  }

  .title2-left li:active {
    background-color: rgba(76, 174, 76, 0.75) !important;
    transition: background-color 0.3s;
    color: whitesmoke;
  }

  /*透明覆盖**********************************/
  .cover {
    width: 75%;
    height: 0;
    background-color: rgba(14, 13, 13, 0.76);
    filter: alpha(opacity=50);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: whitesmoke;
    overflow: hidden;
    z-index: 3;
    transition: height 0.1s;
    border-radius: 4px;

  }

  .cover:hover {
    display: block;
    height: 100%;
    transition: height 0.2s;
  }

  .cover p {
    margin: 15px;
  }

  .cover:active {

  }

  .item {
    padding: 0;
  }
  .stay {
    position: fixed;
    z-index: 4;
    left: 1203px;
    top: 400px;
  }

  .w-strategy {
    padding: 5px;
  }

  .text {
    border-radius: 0 4px 4px 0;
    background-color: white;
    height: 150px;
  }

  .text .num {
    text-align: center;
    color: #333333;
  }

  .good {
    height: 20px;
    width: 20px;
    margin: 5px 0;
    margin-left: 12.5px;
    background-size: cover;
    opacity: 1;
    background-image: url(../assets/images/zan.png);
  }

  .good:visited {
    background-size: cover;
    background-image: url("../assets/images/zan.png");
  }

  .look {
    height: 20px;
    width: 20px;
    /*margin: 5px;*/
    margin: 5px 0;
    margin-left: 12.5px;
    background-size: cover;
    background-image: url("../assets/images/浏览.png");
  }

  .city {
    height: 20px;
    width: 20px;
    margin: 5px 0;
    margin-left: 12.5px;
    background-size: cover;
    background-image: url("../assets/images/定位.png");
  }
</style>
