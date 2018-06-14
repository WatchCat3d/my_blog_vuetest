<template>
  <div id="write_blog">
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
        

        <button type="submit" v-bind:disabled="is_submit" v-on:click.prevent="submit" class="btn btn-primary">提交</button>
    </form> 
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
      if (this.username == "") {
          alert("请先登录");
  
          this.$router.push("/login");
      }
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
        //document.location = "http://localhost:3000/#/blog_list_page";
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
    }
  }
}
</script>


<style scoped>
  #write_blog {
    text-align: left;
  }
</style>
