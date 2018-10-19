
<template>
  <div>
    <div class="container-fluid box" v-bind:style="{marginLeft: this.left+'px' }" >
      <div class="img"></div>
      <div class="im"></div>
      <div class="img"></div>
      <div class="im"></div>
      <div class="img"></div>
      <div class="im"></div>
      <div class="img"></div>
      <div class="im"></div>
      <div class="img"></div>
      <div class="im"></div>
      <div class="img"></div>
    </div>
    <a class="btn" @click="this.moveleft"  v-if="left<0">上一页</a>
    <a class="btn" @click="this.moveright" v-if="left>-3080">
      下一页
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      left:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    moveleft:function(){
      var vm = this
      vm.left = vm.left + 1000
    },
    moveright:function () {
      var vm = this
      vm.left = vm.left - 1000
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img{
  background-color: aquamarine;
  height: 180px;
  width: 270px;
  float: left;
  margin-left: 10px;
}
.im{
  background-color: brown;
  height: 180px;
  width: 270px;
  float: left;
  margin-left: 10px;

}
.box{
  height: 180px;
  padding: 0px;
  border:1px solid black;
  overflow: hidden;
}

</style>
