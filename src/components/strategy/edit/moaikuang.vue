<!--查看槽点对话框-->
<template lang="html">
  <div class="motaikuang " :class="show" @click="disappear">
    <div class="show" @click.prevent.stop >


            <div class="modal-header row ">
              <span class="float text-center h3" >添加景点</span>
              <div class="col-lg-3  col-md-4 hidden-xs form-group search float" style="margin-top: 17px;">
                <input type="text" class="input-form-control " id="search" style="width: 170px;position: absolute;left: 270px">
              </div>
            </div>


            <div class="row ">
              <!--各种景点信息-->
              <ul class="list-unstyled lin li-margin-top" id="add-ul">

                <li class="add-sec-infor">
                  <!--图片-->
                  <div class="div-img">
                    <!--<img src="../images/renminlu.jpeg" alt="" class="add-sec-img">-->
                  </div>
                  <!--名称-->
                  <div class="add-sec-span">
                    西江千户苗寨
                  </div>
                  <!--加入行程-->
                  <a href="javascript:;" class="add-sec-a">加入行程</a>

                </li>
                <li class="add-sec-infor">

                  <!--图片-->
                  <div class="div-img">
                    <!--<img src="../images/jinli.jpeg" alt="" class="add-sec-img">-->
                  </div>
                  <!--名称-->
                  <div class="add-sec-span">
                    西江千户
                  </div>
                  <!--加入行程-->
                  <a href="javascript:;" class="add-sec-a">加入行程</a>

                </li>





              </ul>
            </div>



            <div class="row margin-footer-top center-block">
              <span  style="margin-left: 180px">已选3个景点</span>
              <button type="button" class="btn btn-default btn-style" id="sure-btn" data-dismiss="modal">确认</button>
              <button type="button" class="btn btn-primary btn-style" >取消</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->



</template>

<script>
  export default {
    props: ['txt'],
    created() {
    },
    data() {
      return {
        show:'motaikuang',
        myVisible: this.visible,
      }
    },
      methods: {
        disappear:function () {
          var vm = this;
          vm.show = "motaikuang1";
        }
      },
    created:function () {
      console.log(this.txt)
    }
    }

</script>



<style lang="css" scoped>
  .motaikuang{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.49);
    display: block;
    overflow: hidden;
  }
  .motaikuang1{
    position: fixed;
    top: -100%;
    opacity: 0;
    transition: opacity 0.5s, top 0.4s;
    overflow: hidden;
  }
  .show{
    position:absolute;
    width: 50%;
    /*height: 80%;*/
    top: 30%;
    left: 50%;
    background-color: white;
    border-radius: 10px;
    transform: translate(-50%,0);
    z-index: 100;
  }
  .float{
    float: left;
  }
  .h3{
    font-size: 20px;
  }

  /*导航条*/
  .row{
    line-height: 58px;
  }
  .search{
    display: flex;
    justify-content: flex-end;
  }
  /*搜索栏*/
  .input-form-control{
    /*圆角*/
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;

    background-color:#EFEFEF;
    border: none;
    width: 60%;
    height: 30px;
    transition: width 0.5s;
    /*background-image: url("../images/search2.svg");*/
    background-repeat: no-repeat;
    background-position: 95%;
  }
  .input-form-control:focus{
    outline-style: none;
    transition: width 1s;
    width: 100%;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
    border:1px solid #ff9d00;
    /*background: url("../images/search3.png");*/
    background-position: 95%;
    background-repeat: no-repeat;

  }

  /*添加景点信息*/
  .add-sec-infor{
    width: 251px;
    height: 314px;
    background-color: #FFFFFF;
    margin-left: 32px;
    margin-bottom: 12px;
    border: 1px solid #f2f2f2;
  }

  /*景点图片大小*/
  .add-sec-img{
    width: 251px;
    height: 160px;
  }
  /*文字设置*/
  .add-sec-span{
    border: 1px solid #f2f2f2;
    height: 90px;
    background-color:#FFFFFF;
  }
  /*foot距离上面的距离*/
  .margin-footer-top{
    margin-top: 10px;
  }

</style>
