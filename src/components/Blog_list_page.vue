<template>
    <div id="blog_list">
        <div class="list-group">
            <router-link to="/blog_content_page" class="list-group-item">
                <div class="panel-heading">
                    <h3 class="panel-title"><strong>博客标题</strong></h3>
                </div>
                <div class="panel-body">
                    作者  时间
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog_list_page',
}
</script>

<style scoped>
    #blog_list {
        text-align: left;
    }
</style>
