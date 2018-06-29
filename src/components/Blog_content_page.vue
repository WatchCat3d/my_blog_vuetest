<template>
  <div class="bgImg">
    <div id="main" class="container">
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
                <br>
                <button type="submit" v-on:click.prevent="comments_submit" v-bind:disabled="comments_disabled" class="btn btn-primary">提交</button>
            </form>
        </div>
        <br>
        <br>
        <br>
        <legend style="text-align:left;">全部评论</legend>
        <div id="comments_list" class="list-group" style="text-align:left;">
            <li style="list-style: none;" v-for="(item, index) in gain_comments" :key="item.id">
                <blockquote>
                    <p style="font-size: 12pt;word-break:break-word;">{{item.content}}</p>
                    <a class="float-right fontSmall" v-show="is_manager" role="button" href="#modal-container-14357" v-on:click="click_comment_index(index)" data-toggle="modal">删除</a> 
                    <small>{{item.writer}} {{item.date | standard_date}}</small>             
                </blockquote>

                <div class="modal fade" id="modal-container-14357" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 class="modal-title" id="myModalLabel">
                                    删除
                                </h4>
                            </div>
                            <div class="modal-body">
                                你确定要删除该评论吗？
                            </div>
                            <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> 
                                    <button type="button" class="btn btn-primary" v-on:click="click_comment_delete">确定</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </li>
        </div>
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
          gain_comments: [{
              writer:"sss",
              date: 15135131,
              content:"sdfasdf"
          }],
          username: "",
          comment_index: "",
          is_manager: false
      }
  },
  methods: {
      click_comment_index: function (index) {
          this.comment_index = index;
      },
      click_comment_delete: function () {
        $('#modal-container-14357').modal('hide');
          
        //获取用户名 二次验证
        this.$http.post('./sessionGet', {}).then(function (res) {
            this.username = res.data;
            var post = {
                username: this.username
            }
            if (this.username == "") {
                this.is_manager = false;
            }
            else {
                this.$http.post('./manager_count', post).then(function (res) {
                    if (res.data.count > 0) {
                        this.is_manager = true;
                    }
                    else {
                        this.is_manager = false;
                    }
                })
            }
            if (this.is_manager == false) {
                alert("请用管理员账号登录");
                return;
            }
            
            var post = {
                writer: this.gain_comments[this.comment_index].writer,
                date: this.gain_comments[this.comment_index].date
            }
            this.$http.post('./blogComment_delete', post).then(function (res) {
                //获取评论
                var pattem = document.URL.split('/');
                pattem = pattem.reverse();
                var post2 = {
                    blog_writer: pattem[1],
                    blog_date: pattem[0]
                }
                this.$http.post('./blog_comment', post2).then(function (res) {
                    this.gain_comments = res.data;
                    this.gain_comments = this.gain_comments.reverse();
                })
            })

        })
      },
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

        var post = {
            username: this.username
        }
        if (this.username == "") {
            this.is_manager = false;
        }
        else {
            this.$http.post('./manager_count', post).then(function (res) {
                if (res.data.count > 0) {
                    this.is_manager = true;
                }
                else {
                    this.is_manager = false;
                }
            })
        }
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
    #main {
        background-color: white;
    }
    #blog_content p {
        margin-top: 20px;
        font-size: 12pt;
        text-align: left;
    }
    #blog_content h4 {
        margin-top: 20px;
    }
    .float-right {
        float: right;
    }
    .fontSmall {
        font-size: 12pt;
    }
    .bgImg {
        background-image: url("../assets/img/flower.jpg");
        height: 100%;
        width: 100%;
        position: absolute;
        margin-top: -22px;
        padding-top: 50px;
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-color: #E8EBD6;
    }
</style>
