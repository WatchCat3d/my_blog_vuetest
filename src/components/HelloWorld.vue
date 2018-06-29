<template>
  <div class="marginTop0 text-left backgroundGray">

    <br>

    <div class="hello container">
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
              <a class="btn btn-primary btn-large" target="_blank" href="https://github.com/WatchCat3d/my_blog_express">网站github地址</a>
            </p>
          </div>
        </div>
      </div>

      <br>

      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="row clearfix">
            <div class="col-md-8 column">
              <div class="carousel slide" id="carousel-664990">
                <ol class="carousel-indicators">
                  <li class="active" data-slide-to="0" data-target="#carousel-664990">
                  </li>
                  <li data-slide-to="1" data-target="#carousel-664990">
                  </li>
                  <li data-slide-to="2" data-target="#carousel-664990">
                  </li>
                </ol>
                <div class="carousel-inner">
                  <div class="item active">
                    <img alt="" src="../assets/img/littleSprite2.jpg" />
                    <div class="carousel-caption">
                      <h4>
                        毛线小精灵
                      </h4>
                      <p>
                        这个浑身毛线的神秘生物亚尼将在拟真的游戏中进行冒险，它一边前进，一边拖着背后长长的毛线，它可以消耗身上的毛线前进、攀高或架桥。《毛线小精灵》将自然与怀旧相结合，创造了一段动人的旅程。
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <img alt="" src="../assets/img/ori.jpg" />
                    <div class="carousel-caption">
                      <h4>
                        奥日与黑暗森林
                      </h4>
                      <p>
                        在一片叫做尼布尔山的森林中有个守护神“灵魂树”，灵魂树失去了行使魔力的法器，丧失了对森林的干涉和保护能力，森林丧失了生机。奥里踏上冒险旅程，决心恢复三个生命元素，复活灵魂树。
                      </p>
                    </div>
                  </div>
                  <div class="item">
                    <img alt="" src="../assets/img/journey.jpg" />
                    <div class="carousel-caption">
                      <h4>
                        风之旅人
                      </h4>
                      <p>
                        身着兜帽长袍茕茕孑立的寂寞旅人自沙漠中醒来，唯一的目标便是远方的山。在那座山上有一道光，直通天际。旅者认为那里是圣人的所在地，为了朝圣踏上了未知的旅途。
                      </p>
                    </div>
                  </div>
                </div> <a class="left carousel-control" href="#carousel-664990" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-664990" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
              </div>
            </div>
            <div class="col-md-4 column">
              <div class="row clearfix">
                <div class="col-md-12 column">
                  <img alt="140x140" class="imgSize2" src="../assets/img/Egypt.jpg" />
                </div>
              </div>
              <div class="row clearfix marginTop">
                <div class="col-md-12 column">
                  <img alt="140x140" class="imgSize2" src="../assets/img/cyberPunk.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br>
      <br>
      <br>

      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="row">
            <div class="col-md-4">
              <div class="thumbnail">          
                <img alt="300x200" class="imgSize" src="../assets/img/vueLogo.png" />
                <div class="caption">
                  <h3 class="text-center">
                    vue
                  </h3>
                  <p>
                    本网站的主要依赖为：vue + vue-cli + vue-router + vue-resource，
                    vue是种渐进式JavaScript框架。
                    vue-cli 是一个官方发布 vue.js 项目脚手架。
                    Vue Router 是 Vue.js 官方的路由管理器。
                    vue-resource是一个实现异步加载服务端数据的Vue插件。
                  </p>
                  <p class="text-center">
                    <a class="btn btn-primary" target="_blank" href="https://cn.vuejs.org/">前往vue官网</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <img alt="300x200" class="imgSize" src="../assets/img/bs3.png" />
                <div class="caption">
                  <h3 class="text-center">
                    bootstrap3
                  </h3>
                  <p>
                    本网站用到的UI框架为bootstrap3，Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。
                    Bootstrap 让前端开发更快速、简单。所有开发者都能快速上手、所有设备都可以适配、所有项目都适用
                  </p>
                  <p class="text-center">
                    <a class="btn btn-primary" target="_blank" href="http://www.bootcss.com/">前往bootstrap中文网</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="thumbnail">
                <img alt="300x200" class="imgSize" src="../assets/img/mongodbLogo.png" />
                <div class="caption">
                  <h3 class="text-center">
                    Thumbnail label
                  </h3>
                  <p>
                    本网站使用的数据库MongoDB是一个基于分布式文件存储的数据库，由C++语言编写，为WEB应用提供可扩展的高性能数据存储解决方案。
                    它是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。
                  </p>
                  <p class="text-center">
                    <a class="btn btn-primary" target="_blank" href="https://www.mongodb.com/">前往mongodb官网</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>
    
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
.backgroundGray {
  background-color: #F5F6F7;
}
.backgroundLogo {
  background-image: url('');
  background-repeat: no-repeat;
  background-size: 120%;
  background-position-y: -500px;
  background-position-x: -120px;
}
.marginTop0 {
  margin-top: -20px;
}
.imgSize {
  height: 120px;
}
.imgSize2 {
  height: 100%;
  width: 100%;
}
.marginTop{
  margin-top: 16px;
}
.imgCenter {
  margin: auto;
}
</style>
