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
  data () {
    return {
      msg: '主要依赖: express + vue + vue-cli + vue-resource + vue-router'
    }
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
