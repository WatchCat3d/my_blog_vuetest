<template>
    <div class="bgImg">
      <div id="update_blog" class="container">
        <form action="./update_blog" method="POST" role="form">
            <legend><h1>更新博客</h1></legend>

            <div class="form-group">
                <label for="">标题</label>
                <input name="title" v-model="title" type="text" class="form-control" id="title" autocomplete="off" placeholder="博客标题">
            </div>
            
            <div class="input-group">
                <label for="">内容</label>
                <textarea name="content" v-model="content" id="content" class="form-control" cols="153" rows="30" autocomplete="off" required="required"></textarea>
            </div>
            

            <button type="submit" v-bind:disabled="is_submit" v-on:click.prevent="submit" class="btn btn-primary">发布</button>
        </form> 
        <br>
        <br>
        <br>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
</template>


<script>

export default {
  name: 'Update_blog',
  data: function () {
    return {
      title: "",
      content: "",
      username: "",
      blog_date: "",
      writer: ""
    }
  },
  beforeCreate: function () {
    this.$http.post('./sessionGet', {}).then(function (res) {
        this.username = res.data;
    })
  },
  created: function () {  //进入该路由时，会先执行created里面的函数
    this.title = this.$route.params.blog.title;
    this.content = this.$route.params.blog.content;
    this.blog_date = this.$route.params.blog.blog_date;
    this.writer = this.$route.params.blog.writer;
  },
  methods: {
    submit: function () {
      var post = {
        title: this.title,
        content: this.content,
        writer: this.writer,
        blog_date: this.blog_date
      }
      this.$http.post('./blog_update', post).then(function (res) {
        this.$router.push("/user_personal_page/user_blog");
      })
    }
  },
  computed: {
    is_submit: function () {
      if (this.title != "" && this.content != "") {
        return false;
      }
      else {
        return true;
      }
    }
  }
}
</script>


<style scoped>
  #update_blog {
    text-align: left;
    background-color: white;
  }
  .bgImg {
        background-image: url("../assets/img/book.png");
        height: 1100px;
        width: 100%;
        position: absolute;
        margin-top: -22px;
        padding-top: 50px;
        background-size: 100% 100%; 
        background-attachment: scroll;
        background-repeat: no-repeat;
        background-color: #E8EBD6;
      
  }
</style>
