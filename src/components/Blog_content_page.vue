<template>
  <div id="blog_content">
      <h1>{{blog.title}}</h1>
      <h4>作者: {{blog.writer}} 发表于: {{blog.blog_date | standard_date}}</h4>
      <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: 'Blog_content_page',
  data: function () {
      return {
          content: "",
          blog: {}
      }
  },
  created: function () {  //http://localhost:3000/#/blog_content_page/
      var pattem = document.URL.replace(/http:\/\/localhost:3000\/#\/blog_content_page\//, "");
      pattem = pattem.split('/');
      var post = {
          writer: pattem[0],
          blog_date: pattem[1]
      }
      this.$http.post('./blog_content', post).then(function (res) {
          this.blog = res.data;
          this.content = res.data.content;
          this.content = this.content.replace(/\n|\r\n/g,"<br/>");
          this.content = this.content.replace(/ /g, "&nbsp;");
      })
  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
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
