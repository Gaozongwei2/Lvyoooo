
<!--面包导航-->
<template>
  <div>
    <ol class="breadcrumb items bg-color-fa" >
      <li class="item">
        <a href="" class="a-none-line"> 目的地</a>
      </li>
      <li class="item">
        <a href="" class="a-none-line"> 洛阳</a>
      </li>
      <li class="item">
        <a href="" class="a-none-line"> 洛阳</a>
      </li>
    </ol>
  </div>
</template>

<!--复制模板-->

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*背景颜色fafafa*/
  .bg-color-fa{
    background-color: #fafafa;;
  }

  /*取消超链接下划线*/
  .a-none-line{
    text-decoration: none !important;
  }

  /*目的地*/
  .breadcrumb >li+li:before{
    color: #CCCCCC;
    padding: 0 5px;
  }

  li.item{
    float: left;
  }

  ol.items{

    height:50px;
  }

</style>
