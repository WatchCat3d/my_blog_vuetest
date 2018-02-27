<template>
  <div id="blog_content">
      <h1>标题</h1>
      <h4>作者, 发表于时间</h4>
      <p>经过十年的快速发展，高铁已成为人们日常出行的重要交通工具，“千里江陵一日还”早已变成现实，高铁改变的不仅是不断刷新的“中国速度”，更为区域与城市发展带来新的模式与机遇。

高铁以高速、大容量、集约型、通勤化的特征，在中等距离的
出行上具备极强的竞争力。高铁从无到有的十年也是中国城镇化快速发展的十年，无数大中小城市因高铁而串联，人、钱、物在城市间、地区间的流向更加便捷和高效，高铁网络正以前所未有的速度改变着中国城市的格局，借力高铁，一座座城市正在崛起。
      </p>
  </div>
</template>

<script>
export default {
  name: 'Blog_content_page',
  created: function () {
      alert(document.URL);
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
