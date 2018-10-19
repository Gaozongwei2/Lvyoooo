<template>
  <div>
    <div class="btn btn-success" @click="showmessage">显示</div>
    <div class="cover" ref="abc">
      {{this.datafile}}
    </div>

  </div>


</template>

<!--复制模板-->

<script>
  import axios from 'axios'
  export default {
    name: 'test',
    // props:['user'],
    data() {

      return {
        datafile:'',
      }
    },
    created() {

      // this.props.user = this.user

      // this.props.token = "123"
    },

    methods: {

      // 获取关注人信息
      showmessage: function () {
        var vm = this
        axios.get('http://127.0.0.1:8000/user/searchsecrit/22/')
          .then(function (response) {
            // vm.some = response.data
            vm.datafile = response.data
            console.log(response.data)
            vm.$refs.style.innerHTML += response.data
            // 获取所有数据
            // vm.alldata = response.data
          })
          .catch(function (error) {
            return error
          })
      }
    }
  }
</script>

<style scoped>
  /*默认显示*/
  ul, li {
    list-style: none;
  }

  .icno {
    background-color: rgba(169, 169, 169, 0.31);
  }

  .myfocus {
    width: 100%;
    height: 100%;
    align-items: center;
  }

  .card {
    border: rgba(0, 0, 0, 0.2) 1px solid;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 1px;
    padding: 10px 15px;
  }

  .name {
    width: 100%;
    text-align: center;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
  }

  .nopadding {
    padding: 0px !important;
  }

  .hei {
    text-align: center;
  }

  p {
    font-weight: bolder;
    margin-bottom: 0px;

  }

  a {
    font-weight: bold;
  }

  .cancel {
    background-color: darkgrey;
    text-align: center;
    padding: 0px;
    height: 34px;
    line-height: 32px;

  }

  .message {
    border: 1px solid limegreen;
    color: limegreen;
    margin-left: 29.875px;
  }

  .message:hover {
    color: white;
    background-color: limegreen;
    transition: background-color 0.2s, color 0.3s;
  }

  .anniu {
    margin: 10px 0px;
  }
</style>
