import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Regist from '@/components/Regist';
import Login from '@/components/Login';
import Write_blog from '@/components/Write_blog';
import Update_blog from '@/components/Update_blog';
import Update_draft from '@/components/Update_draft';
import Blog_list_page from '@/components/Blog_list_page';
import Blog_content_page from '@/components/Blog_content_page';
import Draft_content_page from '@/components/Draft_content_page';
import User_detail from '@/components/User_detail';
import User_blog from '@/components/User_blog';
import User_comment from '@/components/User_comment';
import User_manager from '@/components/User_manager';
import User_draft from '@/components/User_draft';
import User_personal_page from '@/components/User_personal_page';
import Search_blog from '@/components/Search_blog';
import Test from '@/components/Test';

Vue.use(Router);

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
      path: '/update_blog',
      name: 'Update_blog',
      component: Update_blog
    },
    {
      path: '/update_draft',
      name: 'Update_draft',
      component: Update_draft
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
      path: '/draft_content_page/:username/:blog_date',
      name: 'Draft_content_page',
      component: Draft_content_page
    },
    {
      path: '/user_personal_page',
      name: 'User_personal_page',
      component: User_personal_page,
      children: [
        {
          path: '/user_personal_page/user_detail',
          name: 'User_detail',
          component: User_detail
        },
        {
          path: '/user_personal_page/user_blog',
          name: 'User_blog',
          component: User_blog
        },
        {
          path: '/user_personal_page/user_comment',
          name: 'User_comment',
          component: User_comment
        },
        {
          path: '/user_personal_page/user_manager',
          name: 'User_manager',
          component: User_manager
        },
        {
          path: '/user_personal_page/user_draft',
          name: 'User_draft',
          component: User_draft
        }
      ]
    },
    {
      path: '/search_blog/:search_keywords',
      name: 'Search_blog',
      component: Search_blog
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
});
