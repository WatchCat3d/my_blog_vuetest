<template>
  <div class="hello">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div class="jumbotron backgroundLogo">
          <h1>
            看门猫的博客
          </h1>
          <p>
            这是一个简单的博客系统，实现了路人的注册和用户的登录，登陆后的用户能够写博客，写完后的博客可以选择保存或发布，选择发布，博客会直接发布在博客中心，
            选择保存，则保存到个人中心的草稿箱，在草稿箱中可以查看、修改、发布和删除草稿，可以对已发布的博客进行评论，自己发布的博客和评论也会在个人中心显示，
            可以对已发布的博客查看、修改、删除，也可以对评论进行查看和删除。博客会有一个群主，用户名WatchCat，密码123456，群主可以在个人中心查看、添加和删除
            管理员，管理员可以对已发布的博客和评论进行删除。
            </br>
          </p>
          <p>
            <a class="btn btn-primary btn-large" href="https://github.com/WatchCat3d/my_blog_express">网站github地址</a>
          </p>
        </div>
      </div>
    </div>
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div class="carousel slide" id="carousel-908603">
          <ol class="carousel-indicators">
            <li data-slide-to="0" data-target="#carousel-908603">
            </li>
            <li data-slide-to="1" data-target="#carousel-908603" class="active">
            </li>
            <li data-slide-to="2" data-target="#carousel-908603">
            </li>
          </ol>
          <div class="carousel-inner">
            <div class="item">
              <img alt="" src="../assets/logo.png" />
              <div class="carousel-caption">
                <h4>
                  First Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
            <div class="item active">
              <img alt="" src="v3/default1.jpg" />
              <div class="carousel-caption">
                <h4>
                  Second Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
            <div class="item">
              <img alt="" src="v3/default2.jpg" />
              <div class="carousel-caption">
                <h4>
                  Third Thumbnail label
                </h4>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
            </div>
          </div> <a class="left carousel-control" href="#carousel-908603" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-908603" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
        </div>
      </div>
    </div>
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div class="row">
          <div class="col-md-4">
            <div class="thumbnail">
              <img alt="300x200" src="v3/default4.jpg" />
              <div class="caption">
                <h3>
                  Thumbnail label
                </h3>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="thumbnail">
              <img alt="300x200" src="v3/default5.jpg" />
              <div class="caption">
                <h3>
                  Thumbnail label
                </h3>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="thumbnail">
              <img alt="300x200" src="v3/default6.jpg" />
              <div class="caption">
                <h3>
                  Thumbnail label
                </h3>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a class="btn btn-primary" href="#">Action</a> <a class="btn" href="#">Action</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


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
.backgroundLogo {
  background-image: url();
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
