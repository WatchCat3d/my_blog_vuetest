<template>
  <div id="user_personal_page" class="container">
    <div class="bgImg headWord text-left">
        <h1>{{username}}的个人中心</h1>
    </div>
    <br>
    <ul class="nav nav-tabs">
        <li :class="{'active': active_nav == 0}" v-on:click="my_blog_click"><router-link to="/user_personal_page/user_blog">我的博客</router-link></li>
        <li :class="{'active': active_nav == 1}" v-on:click="my_comment_click"><router-link to="/user_personal_page/user_comment">我的评论</router-link></li>
        <li :class="{'active': active_nav == 2}" v-on:click="my_draft_click"><router-link to="/user_personal_page/user_draft">草稿箱</router-link></li>
        <li v-show="is_creator_or_manager" :class="{'active': active_nav == 3}" v-on:click="manager_click"><router-link to="/user_personal_page/user_manager">管理设置</router-link></li>
        <li :class="{'active': active_nav == 4}" v-on:click="my_detail_click"><router-link to="/user_personal_page/user_detail">个人资料</router-link></li>
    </ul>

    <div id="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User_personal_page',
  data: function () {
      return {
          active_nav: 0,
          is_creator_or_manager: false,
          username: "Watchcat"
      }
  },
  methods: {
      my_blog_click: function () {
          this.active_nav = 0;
      },
      my_comment_click: function () {
          this.active_nav = 1;
      },
      my_draft_click: function () {
          this.active_nav = 2;
      },
      manager_click: function () {
          this.active_nav = 3;
      },
      my_detail_click: function () {
          this.active_nav = 4;
      }
  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
      }
  },
  beforeCreate: function () {
    this.$http.post('./sessionGet', {}).then(function (res) {
        this.username = res.data;
        var post = {
            username: res.data
        }
        this.$http.post('./creator_get', post).then(function (res) {
            if (res.data.length > 0)
                this.is_creator_or_manager = true;
            else {
                this.$http.post('./manager_get', post).then(function (res) {
                    if (res.data.length > 0)
                        this.is_creator_or_manager = true;
                    else 
                        this.is_creator_or_manager = false;
                })
            }
        })
    })
  },
  created: function () {

  }
}
</script>

<style scoped>
.bgImg {
    background-image: url("../assets/img/star.jpg");
    height: 250px;
    margin-top: -40px;
    background-size: 150%;
    background-position-y: -300px;
}
.headWord {
    color: white;
    padding-top: 170px;
    padding-left: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#content {
    margin-left: -15px;
}
</style>

