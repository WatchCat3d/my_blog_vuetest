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
            <p style="font-size: 12pt;word-break:break-word;">{{item.content}}</p>
            <p >——{{item.writer}} {{item.date}}</p>
            <hr>
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
          gain_comments: []
      }
  },
  methods: {
      comments_submit: function () {
          if (document.cookie == "username=false")
            alert("请先登录");
          else {
              var post = {
                  writer: this.blog.writer,
                  blog_date: this.blog.blog_date,
                  comments: this.comments,
                  comments_writer: document.cookie.replace(/username=/, ""),
                  comments_date: (new Date()).toLocaleDateString()
              }
              this.$http.post("./write_comments", post).then(function (res) {
                this.gain_comments = res.data.comments;
                this.gain_comments = this.gain_comments.reverse();
              })
              this.comments = "";
              window.location.hash = "comments_list";
          }
      }
  },
  created: function () {  
      //http://localhost:3000/#/blog_content_page/
      //var pattem = document.URL.replace(/http:\/\/localhost:3000\/#\/blog_content_page\//, "");
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
          this.gain_comments = res.data.comments;
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
