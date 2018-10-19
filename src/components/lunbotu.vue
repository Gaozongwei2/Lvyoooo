<template >
  <div class="sowingmap">
    <!--<div class="searchbox">-->
      <!--<div class="input-group">-->
        <!--<input type="text" class="form-control" aria-describedby="basic-addon2" :placeholder="{{flag}}">-->
        <!--<span class="input-group-addon btn btn-success" id="basic-addon2" @click="search">搜索</span>-->
      <!--</div>-->
    <!--</div>-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="https://b1-q.mafengwo.net/s12/M00/39/F7/wKgED1ujYTGAUH0zAAhVpG44zZE10.jpeg?imageMogr2%2Finterlace%2F1"
               alt="...">
          <div class="carousel-caption">
            非著名景点打卡偏执狂的自我救赎 — 泰国伊森地区行记
          </div>
        </div>
        <div class="item">
          <img src="https://n4-q.mafengwo.net/s10/M00/74/08/wKgBZ1o70ESANNk9AAYjORBuvyE52.jpeg?imageMogr2%2Fstrip"
               alt="...">
          <div class="carousel-caption">
            远方很远，藏行川西，只为许你一个魔幻世界
          </div>
        </div>
        <div class="item">
          <img src="https://n4-q.mafengwo.net/s10/M00/74/08/wKgBZ1o70ESANNk9AAYjORBuvyE52.jpeg?imageMogr2%2Fstrip"
               alt="...">
          <div class="carousel-caption">
            远方很远，藏行川西，只为许你一个魔幻世界
          </div>
        </div>
        <div class="item">
          <img src="https://n4-q.mafengwo.net/s10/M00/74/08/wKgBZ1o70ESANNk9AAYjORBuvyE52.jpeg?imageMogr2%2Fstrip"
               alt="...">
          <div class="carousel-caption">
            远方很远，藏行川西，只为许你一个魔幻世界
          </div>
        </div>
        <div class="item">
          <img src="https://n4-q.mafengwo.net/s10/M00/74/08/wKgBZ1o70ESANNk9AAYjORBuvyE52.jpeg?imageMogr2%2Fstrip"
               alt="...">
          <div class="carousel-caption">
            远方很远，藏行川西，只为许你一个魔幻世界
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<!--复制模板-->

<script>
export default {
  name: 'Lunbotu',
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

</style>
