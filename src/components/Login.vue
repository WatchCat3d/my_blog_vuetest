<template>
    <div class="bgImg">
        <div class="secondBg">
            <div id="login_form" class="container column col-lg-offset-6 col-md-offset-4 col-sm-offset-4 col-lg-5 col-md-7 col-sm-7">
                <form action="./login" method="POST" role="form">
                    <legend class="text-center"><h1>登陆</h1></legend>

                    <div class="form-group">
                        <label for="">用户名</label>
                        <input type="text" class="form-control" id="username" name="username" v-model="username" maxlength="18" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <label for="">密码</label>
                        <input type="password" class="form-control" id="password" name="password" v-model="password" autocomplete="off" placeholder="密码">
                    </div>
                    <div class="text-center">
                        <button type="submit" v-on:click.prevent="submit" :disabled="is_disabled" class="btn btn-primary buttonWidth">登陆</button>
                        <button type="reset" class="btn btn-warning buttonWidth">重置</button>
                        <br>
                        <br>
                        <router-link to="/Regist">还没有账号了？去注册</router-link>
                    </div>
                </form>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
      return {
          username: "",
          password: ""
      }
  },
  methods: {
      submit: function () {
          var post = {
              username: this.username,
              password: this.password
          }
          this.$http.post('./login', post).then(function (res) {
              if (res.data == 'wrong_username') {
                  alert("用户名不存在");
              }
              else if (res.data == "wrong_password") {
                  alert("密码错误");
              }
              else if (res.data == 'success'){
                  this.$router.push("/blog_list_page");
              }
          })
          
      }
  },
  computed: {
      is_disabled: function () {
          if (this.username != "" && this.password != "")
            return false;
          else return true;
      }
  }
}





</script>

<style scoped>
    #login_form {
        text-align: left;
        background-color: white;
        height: 350px; 
    }
    .secondBg {
        background-image: url("../assets/img/waterBg.jpg");
        height: 730px;
        padding-top: 150px;
    }
    .bgImg {
        background-image: url("../assets/img/blueBg.jpg");
        height: 822px;
        margin-top: -20px;
        padding-top: 50px;
        background-color: #D6E9E7;
    }
    .buttonWidth {
        width: 130px;
    }
</style>
