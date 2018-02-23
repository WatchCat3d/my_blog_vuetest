<template>
    <div id="blog_list">
        <div class="list-group">
            <router-link to="/blog_content_page" class="list-group-item" v-for="item in blog" :key="item.id">
                <div class="panel-heading">
                    <h3 class="panel-title"><strong>文章标题: {{item.title}}</strong></h3>
                </div>
                <div class="panel-body">
                    作者: {{item.writer}} 日期: {{item.date}}
                </div>
            </router-link>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'Blog_list_page',
    data: function () {
        return {
            blog: [
                {
                    writer: "watchcat",
                    date: (new Date()).toLocaleDateString(),
                    title: "my blog",
                    content: "111111111"
                },
                {
                    writer: "watchcatsssss",
                    date: (new Date()).toLocaleDateString(),
                    title: "ssss blog",
                    content: "111111111"
                }
            ]
        }
    }
}
</script>

<style scoped>
    #blog_list {
        text-align: left;
    }
</style>
