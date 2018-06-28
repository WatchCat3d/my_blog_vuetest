<template>
  <div id="main" class="container">
    <div id="draft_content">
        <h1>{{draft.title}}</h1>
        <h4>作者: {{draft.writer}} 发表于: {{draft.draft_date | standard_date}}</h4>
        <p v-html="content"></p>
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
  name: 'Draft_content_page',
  data: function () {
      return {
          content: "",
          draft: {},
          username: ""
      }
  },
  methods: {

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
          draft_date: pattem[0]
      }
      this.$http.post('./draft_content', post).then(function (res) {
          this.draft = res.data;
          this.content = res.data.content;
          this.content = this.content.replace(/\n|\r\n/g,"<br/>");
          this.content = this.content.replace(/ /g, "&nbsp;");

      })

  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
      }
  },
  computed: {

  }
}
</script>

<style scoped>
    #draft_content p {
        margin-top: 20px;
        font-size: 12pt;
        text-align: left;
    }
    #draft_content h4 {
        margin-top: 20px;
    }
</style>
