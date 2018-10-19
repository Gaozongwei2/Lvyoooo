<!--查看槽点对话框-->
<template>
  <!--注意ref,点击事件-->
  <div class="motaikuang" ref="abc" @click="Hidden">
    <div class="show" ref="abc" @click.prevent.stop>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        t :"motaikuang",
        t1:"motaikuang motaikuang1",
      }
    },
    methods: {
      // 点击空白处消失
      Hidden:function(){
        // 让它的类名变为t1
        this.$refs.abc.className= this.t1
        this.$emit('hidden')
      },
    },
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
    transition: opacity 0.5s, top 0.4s;
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
    height: 40%;
    top: 30%;
    left: 50%;
    background-color: white;
    border-radius: 10px;
    transform: translate(-50%,0);
    z-index: 100;
  }
</style>
