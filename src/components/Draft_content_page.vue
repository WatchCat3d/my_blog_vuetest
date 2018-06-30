<template>
  <div class="bgImg">
    <div id="main" class="container">
        <div id="draft_content">
            <br>
            <br>
            <h1>{{draft.title}}</h1>
            <br>
            <h4>作者: {{draft.writer}} </h4>
            <h4>发表于: {{draft.draft_date | standard_date}}</h4>
            <br>
            <p v-html="content"></p>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
    #main {
        background-color: white;
    }
    #draft_content p {
        margin-top: 20px;
        font-size: 12pt;
        text-align: left;
    }
    #draft_content h4 {
        margin-top: 20px;
    }
    .bgImg {
        background-image: url("../assets/img/flower.jpg");
        width: 100%;
        position: absolute;
        margin-top: -22px;
        padding-top: 50px;
        background-attachment: scroll;
        background-color: #E8EBD6;
    }
</style>
