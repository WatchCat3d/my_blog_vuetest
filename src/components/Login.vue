<template>
  <div id="login_form">           
        <form action="./login" method="POST" role="form">
            <legend><h1>登陆</h1></legend>

            <div class="form-group">
                <label for="">用户名</label>
                <input type="text" class="form-control" id="username" name="username" v-model="username" maxlength="18" placeholder="用户名">
            </div>
            <div class="form-group">
                <label for="">密码</label>
                <input type="password" class="form-control" id="password" name="password" v-model="password" autocomplete="off" placeholder="密码">
            </div>

            <button type="submit" v-on:click.prevent="submit" :disabled="is_disabled" class="btn btn-primary">登陆</button>
            <button type="reset" class="btn btn-warning">重置</button>
        </form>   
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
                  //document.location = "http://localhost:3000/#/blog_list_page";
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
    }
</style>
