<template>
    <div class="bgImg">
        <div id="write_blog" class="container">
            <form action="./write_blog" method="POST" role="form">
                <legend><h1>写博客</h1></legend>

                <div class="form-group">
                    <label for="">标题</label>
                    <input name="title" v-model="title" type="text" class="form-control" id="title" autocomplete="off" placeholder="博客标题">
                </div>
                
                <div class="input-group">
                    <label for="">内容</label>
                    <textarea name="content" v-model="content" id="content" class="form-control" cols="153" rows="30" autocomplete="off" required="required"></textarea>
                </div>
                <br>
                <div>
                    <button type="submit" v-bind:disabled="is_submit" v-on:click.prevent="submit" class="btn btn-primary buttonWidth">发布</button>
                    <button type="submit" v-bind:disabled="is_empty" v-on:click.prevent="draft_add" class="btn btn-warning buttonWidth">保存</button>           
                </div>

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
  name: 'Write_blog',
  data: function () {
    return {
      title: "",
      content: "",
      username: ""
    }
  },
  beforeCreate: function () {
    this.$http.post('./sessionGet', {}).then(function (res) {
        this.username = res.data;
    })
  },
  created: function () {  //进入该路由时，会先执行created里面的函数

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
    draft_add: function () {
      var post = {
        title: this.title,
        content: this.content,
        writer: this.username,
        draft_date: (new Date()).getTime()
      }
      this.$http.post('./draft_add', post).then(function (res) {
        this.$router.push("/blog_list_page");
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
    },
    is_empty: function () {
      if (this.title != "" || this.content != "") {
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
  #write_blog {
    text-align: left;
    background-color: white;
  }
  .bgImg {
      background-image: url("../assets/img/book.png");
      background-repeat: no-repeat;
      margin-top: -20px;
      background-size: 100%;
      padding-top: 0px;
  }
  .buttonWidth {
      width: 100px;
  }
</style>
