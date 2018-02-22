import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Write_blog from '@/components/Write_blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/write_blog',
      name: 'Write_blog',
      component: Write_blog
    }
  ]
})
