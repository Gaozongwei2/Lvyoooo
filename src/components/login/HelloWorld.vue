<template>
  <div class="row">
    <div class="col-md-12">
      {{msg}}
    </div>
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

</style>
