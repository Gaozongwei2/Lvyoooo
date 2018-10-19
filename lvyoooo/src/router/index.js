import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/check/HelloWorld'
import all from '@/components/check/all'
import E_Top from '@/components/edit/E_Top'
Vue.use(Router)

export default new Router({
  routes: [
    //查看攻略
    {
      path: '/',
      name: 'all',
      component: all
    },
    //编辑攻略
    {
      path: '/edit',
      name: 'edit',
      component: E_Top
    } 
  ]
})
