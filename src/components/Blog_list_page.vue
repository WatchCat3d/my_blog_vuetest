<template>
    <div id="blog_list">
        <div class="list-group">
            <router-link v-bind:to="{path: '/blog_content_page/' + blog[index].writer + '/' + blog[index].blog_date}" class="list-group-item" v-for="(item, index) in blog" :key="item.id">
                <div class="panel-heading">
                    <h3 class="panel-title"><strong>文章标题 :{{item.title}}</strong></h3>
                </div>
                <div class="panel-body">
                    作者: {{item.writer}} 日期: {{item.blog_date | standard_date}}
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
            blog: []
        }
    },
    created: function () {
        var post = {};
        this.$http.post('./blog_list',post).then(function (res) {
            this.blog = res.data;
            this.blog = this.blog.reverse();
        })
    },
    filters: {
        standard_date: function (value) {
            return (new Date(parseInt(value))).toLocaleDateString();
        }
    }
}
</script>

<style scoped>
    #blog_list {
        text-align: left;
    }
</style>
