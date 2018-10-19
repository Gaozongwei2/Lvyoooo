<!--轮播图-->
<template>
  <!--<div>-->
  <!--<button @click="this.moveleft"  v-if="left<0">左边</button>-->
    <!--<button  @click="this.moveright"v-if="left>-740">右边</button>-->
  <!--<div class="imgs " v-bind:style="{marginLeft: this.left+'px'}" >-->

    <!--<div >-->

      <!--<ul ref="wrapper" class="list-unstyled ">-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/jinli.jpeg" alt="" >-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/lr1.jpeg" alt="">-->

        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/ly2.jpeg" alt="">-->

        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/lr3.jpeg" alt="">-->

        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/jinli.jpeg" alt="">-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/lr1.jpeg" alt="">-->
        <!--</li>-->
        <!--<li>-->
          <!--<img src="../../assets/lunbo/ly2.jpeg" alt="">-->

        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->

  <!--</div>-->
  <!--</div>-->

</template>

<!--复制模板-->

<script>

export default {
  name: 'SowingMap',
  data() {
    //轮播图数据
    return {
      left:0,
    //  计算总图片的长度
      allwidth:0,
    //  图片个数
      photocount:0,
      lent:0
    }
  },
  created:function(){
  },
  mounted:function(){
    this.photocount=this.$refs.wrapper.children.length
    // this.goshow()
    this.hidden()
  },
  methods:{
    goleft: function() {
      pass
    },
    // goshow:function () {
    // //  如果图片的个数大于四个，就弹出1
    //   this.photocount =  this.$refs.wrapper.children.length
    //   if(this.photocount>4){
    //   }
    // },
    moveleft:function () {
      var vm = this
      vm.left = vm.left + 1200
    },
    moveright:function () {
      var vm = this
      vm.left = vm.left - 1200
    },
    hidden:function () {
      var vm = this
      vm.lent=this.$refs.wrapper.lastChild

      if(vm.left>-740){
        for(let i in range(4,this.lent)){
          this.$refs.wrapper.children[i].style.display='none'
        }
      }else if(vm.left<0){
        this.$refs.wrapper.children[5].style.display='block'
      }
    }

  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    list-style: none;
    float: left;
    margin-right: 10px;
  }
 .imgs{
   /*width: 80%;*/
   height: 180px;
   background-color: antiquewhite;

 }
  .imgs>div>img{
    float: left;
    margin-right: 10px;
  }

</style>
