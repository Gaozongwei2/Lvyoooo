<template id="content-left">
  <div class="col-md-2 city-list">
    <div class="nav   city-title">热门城市</div>
    <!--<ul class="nav navbar navbar-default">-->
    <ul class="nav nav-pills nav-stacked">
      <li><a href="####">北京</a></li>
      <li><a href="####">北京</a></li>
      <li><a href="####">北京</a></li>
      <li><a href="####">北京</a></li>
    </ul>

    <div class="nav   city-title travels">热门景点</div>
    <!--<ul class="nav navbar navbar-default">-->
    <ul class="nav nav-pills nav-stacked">
      <li><a href="####">拙政园</a></li>
      <li><a href="####">外滩</a></li>
      <li><a href="####">西湖</a></li>
      <li><a href="####">松花江</a></li>
    </ul>
  </div>
</template>
<!--复制模板-->

<script>
export default {
  name: 'ContentLeft',
  // props:['user'],
  data () {
    return {
      id:1,
      aa:1,
      bb:0,
      props:["user","token"],
      user:{
        'id':'1',
        "username":"棕色试剂瓶",
        "usericno":"http://n3-q.mafengwo.net/s10/M00/0F/9B/wKgBZ1iUpFWAbScxAAC2Vfg46fo14.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90",
        "sex":"男",
        "mark":"15",
        "birthday":"1997-6-2",
        "state":"大庆",
        "content":"起始",
      },
      token:'123',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    sessionStorage.setItem("token","congqianyouzuoshan")
    sessionStorage.setItem("id","1")
    this.token = "gzw"
    // this.props.user = this.user
    console.log(this.props)
    // this.props.token = "123"
},

  method:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .middle {

    padding-top: 10px;
  }

  .city-list {

    height: 700px;
    width: 250px;
    /*background-color: yellowgreen;*/
  }

  .city-list ul li {
    margin: 5px 0px;
    background-color: rgba(77, 149, 209, 0.22);
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
  }

  .city-title {
    text-align: center;
    color: #FF9D00;
    font-size: large;
    line-height: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .travels {
    color: #53c953;
  }

  .post-window {
    height: auto;
    /*margin-top: 10px;*/
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
    /*background-color: #2aabd2;*/
  }

  .list-post > a {
    border-radius: 5px;

    margin-top: 10px;
    margin-left: 10px;
    height: 150px;
    /*background-color: rgba(247, 247, 247, 0.11);*/
    background-color: white;
  }

  .list-post .item:hover {
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
  }
  .hot-travel{
    min-height: 450px;
    /*display: none;*/
  }
  .new-post{
    min-height: 450px;
    display: none;
  }
  .new-strategys{
    min-height: 450px;
    display: none;
  }
  .content {
    width: 100%;

  }
</style>
