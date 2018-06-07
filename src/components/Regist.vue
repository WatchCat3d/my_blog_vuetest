<template>
    <div id="regist_form">
        <form action="./regist" method="POST" role="form">
            <legend><h1>注册</h1></legend>

            <div class="form-group has-feedback">
                <label for="">用户名</label>
                <input type="text" class="form-control" name="username" id="username" v-model="username" v-on:change="username_verify" maxlength="18" placeholder="6~18位英文字母、数字或下划线,开头只能是字母或下划线">
                <span class="glyphicon glyphicon-ok form-control-feedback" v-show="istrue_username"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="">密码</label>
                <input type="password" class="form-control" name="password" id="password" v-model="password" v-on:change="password_verify" autocomplete="off" placeholder="密码至少6位">
                <span class="glyphicon glyphicon-ok form-control-feedback" v-show="istrue_password"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="">确认密码</label>
                <input type="password" class="form-control" name="verify_password" id="verify_password" v-model="verify_password" v-on:change="verify_password_verify" autocomplete="off" placeholder="请再次确认密码">
                <span class="glyphicon glyphicon-ok form-control-feedback" v-show="issame_password"></span>
            </div>
            <div class="form-group has-feedback">
                <label for="">邮箱</label>
                <input type="email" class="form-control" name="email" id="email" v-model="email" v-on:change="email_verify" placeholder="正确的邮箱地址">
                <span class="glyphicon glyphicon-ok form-control-feedback" v-show="istrue_email"></span>
            </div>  
            
            <button type="submit" class="btn btn-primary" v-on:click.prevent="submit" v-bind:disabled="isAllTrue">注册</button>
            <button type="reset" class="btn btn-warning" v-on:click.prevent="reset">重置</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Regist',
  data: function () {
      return {
          username: "",
          password: "",
          verify_password: "",
          email: "",
          istrue_username: false,
          istrue_password: false,
          issame_password: false,
          istrue_email: false
      }
  },
  methods: {
      username_verify: function () {
          var pattem = /^[a-zA-Z_][a-zA-Z0-9_]{5,17}/;
          var pattem2 = /[^a-zA-Z_0-9]/;
          if(pattem.test(this.username) && (!pattem2.test(this.username))) {
              this.istrue_username = true;
          }
          else {
              this.istrue_username = false;
          }
      },
      password_verify: function () {
          if (this.password.length >= 6) {
              this.istrue_password = true;
          }
          else {
              this.istrue_password = false;
          }
      },
      verify_password_verify: function () {
          if ((this.verify_password.length >= 6) && (this.password == this.verify_password)) {
              this.issame_password = true;
          }
          else {
              this.issame_password = false;
          }
      },
      email_verify: function () {
          var pattem = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
          if (pattem.test(this.email)) {
              this.istrue_email = true;
          }
          else {
              this.istrue_email = false;
          }
      },
      reset: function () {
          this.username= "";
          this.password= "";
          this.verify_password= "";
          this.email= "";
          this.istrue_username= false;
          this.istrue_password= false;
          this.issame_password= false,
          this.istrue_email= false
      },
      submit: function () {
          var post = {
              username: this.username,
              password: this.password,
              verify_password: this.verify_password,
              email: this.email,
              regist_date: (new Date()).getTime()
          }
          this.$http.post('./regist', post).then(function (res) {
              if (res.data == "success") {
                alert("注册成功,请登录");
                //document.location = "http://localhost:3000/#/login";
                this.$router.push("/login");
              }
              else if (res.data == "exist_username") {
                alert("用户名重复");
              }
              else if (res.data == "exist_email") {
                alert("此邮箱已被注册");
              }
          })
      }
  },
  computed: {
      isAllTrue: function () {
          if (this.istrue_email && this.istrue_username && this.istrue_password && this.issame_password) {
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
    #regist_form {
        text-align: left;
    }
</style>

