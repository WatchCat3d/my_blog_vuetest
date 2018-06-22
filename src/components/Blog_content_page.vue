<template>
  <div id="main">
    <div id="blog_content">
        <h1>{{blog.title}}</h1>
        <h4>作者: {{blog.writer}} 发表于: {{blog.blog_date | standard_date}}</h4>
        <p v-html="content"></p>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="comments_form" style="text-align:left;">
        <form action="./write_comments" method="POST" role="form">

            <div class="input-group">
                <label for="">评论</label>
                <textarea name="comments" id="comments" v-model="comments" class="form-control" cols="153" rows="4" autocomplete="off" placeholder="写下你的评论" required="required"></textarea>
            </div>      
                
            <button type="submit" v-on:click.prevent="comments_submit" v-bind:disabled="comments_disabled" class="btn btn-primary">提交</button>
        </form>
    </div>
    <br>
    <br>
    <br>
    <legend style="text-align:left;">全部评论</legend>
    <div id="comments_list" class="list-group" style="text-align:left;">
        <li style="list-style: none;" v-for="item in gain_comments" :key="item.id">
            <blockquote>
                <p style="font-size: 12pt;word-break:break-word;">{{item.content}}</p>
                <small>{{item.writer}} {{item.date | standard_date}}</small>
                <hr>
            </blockquote>
        </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog_content_page',
  data: function () {
      return {
          content: "",
          blog: {},
          comments: "",
          gain_comments: [],
          username: ""
      }
  },
  methods: {
      comments_submit: function () {
          if (this.username == "")
            alert("请先登录");
          else {
              var post = {
                  blog_writer: this.blog.writer,
                  blog_date: this.blog.blog_date,
                  content: this.comments,
                  writer: this.username,
                  date: (new Date()).getTime()
              }
              this.$http.post("./write_comments", post).then(function (res) {
                  this.gain_comments = this.gain_comments.reverse();
                  this.gain_comments.push(res.data);
                  this.gain_comments = this.gain_comments.reverse();
              })
              this.comments = "";

              //移动到评论的锚点
          }
      }
  },
  created: function () {  
      //获取session 的用户名
      this.$http.post('./sessionGet', {}).then(function (res) {
          this.username = res.data;
      })
      
      //获取文章内容
      var pattem = document.URL.split('/');
      pattem = pattem.reverse();
      var post = {
          writer: pattem[1],
          blog_date: pattem[0]
      }
      this.$http.post('./blog_content', post).then(function (res) {
          this.blog = res.data;
          this.content = res.data.content;
          this.content = this.content.replace(/\n|\r\n/g,"<br/>");
          this.content = this.content.replace(/ /g, "&nbsp;");
          //this.gain_comments = res.data.comments;
          //this.gain_comments = this.gain_comments.reverse();
      })

      //获取评论
      var post2 = {
          blog_writer: pattem[1],
          blog_date: pattem[0]
      }
      this.$http.post('./blog_comment', post2).then(function (res) {
          this.gain_comments = res.data;
          this.gain_comments = this.gain_comments.reverse();
      })

  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
      }
  },
  computed: {
      comments_disabled: function () {
          if (this.comments == "") return true;
          else return false;
      }
  }
}
</script>

<style scoped>
    #blog_content p {
        margin-top: 20px;
        font-size: 12pt;
        text-align: left;
    }
    #blog_content h4 {
        margin-top: 20px;
    }
</style>
