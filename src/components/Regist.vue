<template>
    <div id="regist_form">
        <form action="" method="POST" role="form">
            <legend><h1>注册</h1></legend>

            <div class="form-group">
                <label for="">用户名</label>
                <input type="text" class="form-control" id="username" maxlength="18" autocomplete="off" placeholder="6~18位英文字母、数字或下划线">
            </div>
            <div class="form-group">
                <label for="">密码</label>
                <input type="password" class="form-control" id="password" autocomplete="off" placeholder="至少6位英文字母或数字">
            </div>
            <div class="form-group">
                <label for="">确认密码</label>
                <input type="password" class="form-control" id="verify_password" autocomplete="off" placeholder="至少6位英文字母或数字">
            </div>
            <div class="form-group">
                <label for="">邮箱</label>
                <input type="email" class="form-control" id="email" placeholder="正确的邮箱地址">
            </div>  
            
            <button type="submit" class="btn btn-primary">注册</button>
            <button type="reset" class="btn btn-warning">重置</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Regist'
}
</script>

<style scoped>
    #regist_form {
        text-align: left;
    }
</style>

