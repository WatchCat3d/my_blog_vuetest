<template>
    <div class="bgImg">
      <div id="update_draft" class="container">
        <form action="./draft_update" method="POST" role="form">
            <legend><h1>更新草稿</h1></legend>

            <div class="form-group">
                <label for="">标题</label>
                <input name="title" v-model="title" type="text" class="form-control" id="title" autocomplete="off" placeholder="博客标题">
            </div>
            
            <div class="input-group">
                <label for="">内容</label>
                <textarea name="content" v-model="content" id="content" class="form-control" cols="153" rows="30" autocomplete="off" required="required"></textarea>
            </div>
            
            <button type="submit" v-on:click.prevent="draft_update" class="btn btn-warning">保存</button>
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
  name: 'Update_draft',
  data: function () {
    return {
      title: "",
      content: "",
      username: "",
      draft_date: "",
      writer: ""
    }
  },
  beforeCreate: function () {
    this.$http.post('./sessionGet', {}).then(function (res) {
        this.username = res.data;
    })
  },
  created: function () {  //进入该路由时，会先执行created里面的函数
    this.title = this.$route.params.draft.title;
    this.content = this.$route.params.draft.content;
    this.draft_date = this.$route.params.draft.draft_date;
    this.writer = this.$route.params.draft.writer;
  },
  methods: {
    submit: function () {
      var post = {
        title: this.title,
        content: this.content,
        writer: this.username,
        blog_date: (new Date()).getTime()
      }
      this.$http.post('./write_blog', post).then(function (res) {
        this.$router.push("/blog_list_page");
      })
    },
    draft_update: function () {
      var post = {
        title: this.title,
        content: this.content,
        writer: this.writer,
        draft_date: this.draft_date
      }
      this.$http.post('./draft_update', post).then(function (res) {
        this.$router.push("/user_personal_page/user_draft");
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
  #update_draft {
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
