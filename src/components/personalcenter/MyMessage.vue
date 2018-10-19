<template>
  <div>
    <div class="usermessage container-fluid">
      <div class="title">
        <span>我的信息：</span>
      </div>
      <div class="col-md-1">

      </div>
      <div class="col-md-8 message">
        <!--<div class="li col-md-12"><img :src="user['icno__imageurl']" class="img-circle changeicno" alt="" width="70px" height="70px"></div>-->
        <div class="li col-md-12">
          <div class="col-md-3"><span >用户名</span></div>
          <input type="text" class="col-md-8" v-model="user.username">
        </div>
        <div class="li col-md-12">
          <div class="col-md-3"><span>性别</span></div>
          <div class="col-md-4 sex">
            <div class="radio left" ref="abc" @click="this.change"></div>
            <div class="left txt" >男</div>
          </div>
          <div class="col-md-4 sex">
            <div class="radio left" ref="def" @click="this.change"></div>
            <div class="left txt">女</div>
            <div class="left txt" ref="ghi" display: none></div>
          </div>
        </div>

        <div class="li col-md-12">
          <div class="col-md-3"><span >居住城市</span></div>
          <input type="text" class="col-md-8" v-model="user.state">
        </div>
        <div class="li col-md-12">
          <div class="col-md-3"><span>出生日期</span></div>
          <!--日历插件##################################################################################-->
          <input type="text" class="col-md-8" v-model="user.birthday">
        </div>

        <div class="li col-md-12" style=" height: auto;">
          <div class="col-md-3"><span>简介</span></div>
          <textarea class="col-md-8" style="margin-top: 15px; width: 281.5px; height: 150px; border-radius: 5px" name="content"  cols="15" rows="5" v-model="user.content"></textarea>
        </div>
        <div class="li col-md-12 button">
          <div class="save" @click="savemessage">保存</div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>

  </div>
</template>

<!--复制模板-->

<script>
import qs from 'qs';
import axios from 'axios'
export default {
  name: 'MyMessage',
  // props:['user'],
  data () {
    return {
      sex:'txt',
      user:{
        "id":sessionStorage.getItem("id"),
        "username":'',
        "state":'',
        "birthday":'',
        "state":'',
        "content":'',
        "sex":'',
      },
      id : sessionStorage.getItem("id"),
    }
  },
  created(){
    this.usermessage()



},

  methods:{

    // 获取用户信息
    // 查询用户id对应的信息
    usermessage:function () {
      var vm  = this
      axios.get('http://127.0.0.1:8000/user/getusermessage/' + vm.id + '/')
        .then(function (response) {
          vm.user.username = response.data[0]["username"]
          vm.user.birthday = response.data[0]["birthday"]
          vm.user.state = response.data[0]["state"]
          vm.user.content = response.data[0]["content"]
          vm.user.sex = response.data[0]["sex__sex"]
          if(vm.user.sex == "男"){
            vm.$refs.abc.style.backgroundColor = "orange"
            vm.$refs.def.style.backgroundColor = "white"
          }else{
            vm.$refs.def.style.backgroundColor = "orange"
            vm.$refs.abc.style.backgroundColor = "white"
          }
        })
        .catch(function (error) {
          return error
        })
    },
    savemessage:function () {
      var vm = this
      var params = new URLSearchParams();
      params.append('usermessage',user)
      axios.post('http://127.0.0.1:8000/user/updateusermessage/',params)
        .then(

        )
        .catch(

        );
      console.log(vm.user)
    },
    change:function () {

      var vm = this
      vm.$refs.ghi.style.backgroundColor = vm.$refs.def.style.backgroundColor
      vm.$refs.def.style.backgroundColor = vm.$refs.abc.style.backgroundColor
      vm.$refs.abc.style.backgroundColor = vm.$refs.ghi.style.backgroundColor
    }


  }

}
</script>

<style scoped>
  .button{
    margin:10px;
    /*text-align: center;*/
  }

  .save{
    margin: auto;
    height: 40px!important;
    width: 90px!important;
    background-color: orange;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    color: white;
  }
  .save:hover{
    background-color: #b47400;
    color: white;
  }
  .txt{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: white;

  }
  .left{
    float: left !important;
  }
  .radio{
    height: 20px!important;
    width: 20px!important;
    border: 1px rgba(0, 0, 0, 0.31) solid;
    border-radius: 50%;
    /*margin: 15px;*/
    margin: 13px 5px;
    margin-top: 15px;
    background-color: white;
  }
  .li span{
    height: 50px !important;
    line-height: 50px !important;
  }
  input{
    height: 40px;
    margin: 5px 0;
    border: none;
    border-radius: 5px;

  }
  .message span{
    height: 50px;
    font-size: 18px;
    line-height: 50px;
    color: #f4f4f4;

  }
  .message div{
    height: 50px;
  }
  .title{
    font-size: 23px;
    font-weight: bold;
    color:white;
    padding: 15px;
    margin: 10px 0;
    height: 60px;
    line-height: 30px;
    border-bottom: 1px solid white;
  }
  .usericno {
    margin: 0;
    height: 54px;
    width: 200px;
  }

  .usericno .icno {
    height: 45px !important;
    width: 45px !important;
    padding: 0;
    margin-top: 5px;
    background-image: url("http://n2-q.mafengwo.net/s10/M00/6C/09/wKgBZ1nm_RuAcRY4AABeA1K-J9Y49.jpeg?imageMogr2%2Fthumbnail%2F%21200x200r%2Fgravity%2FCenter%2Fcrop%2F%21200x200%2Fquality%2F90");
    object-fit: cover;
    vertical-align: center;
  }

  .username {
    font-size: small !important;
    line-height: 54px;
    vertical-align: center;
  }

  .usermessage {
    /*display: none;*/
    border-radius: 4px;
    min-height: 500px;
    width: 100%;
    background-color: yellowgreen;
  }
  .notes-del-confirm {
    width: 480px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 501;
    margin: -130px 0px 0px -240px;
  }
  .notes-del-confirm{
    width: 480px;
    text-align: center;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 501;
    margin: -130px 0px 0px -240px;
  }
</style>
