<template>
  <div id="login_form">           
        <form action="" method="POST" role="form">
            <legend><h1>登陆</h1></legend>

            <div class="form-group">
                <label for="">用户名</label>
                <input type="text" class="form-control" id="username" maxlength="18" placeholder="用户名">
            </div>
            <div class="form-group">
                <label for="">密码</label>
                <input type="password" class="form-control" id="password" placeholder="密码">
            </div>

            <button type="submit" class="btn btn-primary">登陆</button>
            <button type="reset" class="btn btn-warning">重置</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
    #login_form {
        text-align: left;
    }
</style>
