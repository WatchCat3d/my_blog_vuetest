<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>作者: WatchCat3d</h2>

    <h2>github地址</h2>
    <ul>
      <li>
        <a
          href="https://github.com/WatchCat3d/my_blog_express"
          target="_blank"
        >
          https://github.com/WatchCat3d/my_blog_express
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: '主要依赖: express + vue + vue-cli + vue-resource + vue-router'
    }
  },
  created: function () {
    //添加创始人
    /*var post = {
      username: "WatchCat",
      regist_date: (new Date()).getTime()
    }
    this.$http.post('./creator_add', post).then(function (res) {
      if (res.data == 'exist_creator') {
        alert("该用户已经是创始人");
      }
      else if (res.data == 'not_exist_user') {
        alert('该用户不存在');
      }
      else if (res.data == 'success'){
        alert("成功将该用户设为创始人");
      }
    })*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
