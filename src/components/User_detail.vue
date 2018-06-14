<template>
  <div id="user_detail">
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>用户名</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{username}}</td>
                </tr>
            </tbody>

            <thead>
                <tr>
                    <th>邮箱</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{email}}</td>
                </tr>
            </tbody>

            <thead>
                <tr>
                    <th>注册时间</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{regist_date | standard_date}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: 'User_datail',
  data: function () {
      return {
          username: "",
          email: "",
          regist_date: ""
      }
  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
      }
  },
  created: function () {
      this.$http.post('./sessionGet', {}).then(function (res) {
          this.username = res.data;

          var post = {username: this.username};
          this.$http.post('./user_detail', post).then(function (res) {
              this.username = res.data[0].username;
              this.email = res.data[0].email;
              this.regist_date = res.data[0].regist_date;
          })
      })
  }
}
</script>

<style scoped>
    #user_detail {
        text-align: left;
    }
</style>

