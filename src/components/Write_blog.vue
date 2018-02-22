<template>
  <div id="write_blog">
    <form action="" method="POST" role="form">
        <legend><h1>写博客</h1></legend>

        <div class="form-group">
            <label for="">标题</label>
            <input type="text" class="form-control" id="title" placeholder="博客标题">
        </div>
        
        <div class="input-group">
            <label for="">内容</label>
            <textarea name="content" id="content" class="form-control" cols="153" rows="30" required="required"></textarea>
        </div>
        

        <button type="submit" class="btn btn-primary">提交</button>
    </form> 
  </div>
</template>


<script>
export default {
  name: 'Write_blog'
}
</script>


<style scoped>
  #write_blog {
    text-align: left;
  }
</style>
