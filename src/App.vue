<template>
  <div id="app">
    
     <div id="front">
            <nav class="navbar navbar-default" role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">首页</router-link>
                </div>
            
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/blog_list_page">博客</router-link></li>
                    </ul>
                    <form action="./search" method="POST" class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" v-model="search" class="form-control" placeholder="输入标题关键字搜索博客">
                        </div>
                        <button type="submit" v-on:click.prevent="search_submit" v-bind:disabled="search_disabled" class="btn btn-default">搜索</button>
                    </form>
                    <ul class="nav navbar-nav navbar-right">
                        <li><router-link to="/write_blog">写博客</router-link></li>
                        <li v-show="is_logout"><router-link to="/login">登陆</router-link></li>
                        <li v-show="is_logout"><router-link to="/regist">注册</router-link></li>

                        <li class="dropdown" v-show="is_login">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{username}}<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/user_detail">个人资料</router-link></li>
                                <li><a href="#" v-on:click.prevent="logout">退出登录</a></li>                 
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </nav>
      </div>
      <div id="container" class="container">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import './assets/js/jquery-3.2.1'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'App',
  data: function () {
      return {
          cookie: document.cookie,
          search: ""
      }
  },
  methods: {
      logout: function () {
          document.cookie =  "username=false";
          this.cookie = "username=false";
          document.location = "http://localhost:3000/#/";
      },
      search_submit: function () {
          var post = {
              title_words: this.search 
          }


      }
  },
  computed: {
      is_login: function () {
          if (this.cookie != "username=false") {
              return true;
          }
          else {
              return false;
          }
      },
      is_logout: function () {
          if (this.cookie == "username=false") {
              return true;
          }
          else {
              return false;
          }
      },
      username: function () {
          if (this.cookie == "username=false") {
              return "";
          }
          else {
              return this.cookie.replace(/username=/, "");
          }
      },
      search_disabled: function () {
          if (this.search == "") {
              return true;
          }
          else return false;
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
