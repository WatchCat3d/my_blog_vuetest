import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Regist from '@/components/Regist'
import Login from '@/components/Login'
import Write_blog from '@/components/Write_blog'
import Blog_list_page from '@/components/Blog_list_page'
import Blog_content_page from '@/components/Blog_content_page'
import User_detail from '@/components/User_detail'
import Search_blog from '@/components/Search_blog'

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
    },
    {
      path: '/blog_list_page',
      name: 'Blog_list_page',
      component: Blog_list_page
    },
    {
      path: '/blog_content_page/:username/:blog_date',
      name: 'Blog_content_page',
      component: Blog_content_page
    },
    {
      path: '/user_detail',
      name: 'User_detail',
      component: User_detail
    },
    {
      path: '/search_blog/:search_keywords',
      name: 'Search_blog',
      component: Search_blog
    }
  ]
})
