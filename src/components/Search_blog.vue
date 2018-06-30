<template>
    <div id="search_blog" class="container noMarginTop">
        <div class="text-left headBackground">

        </div>
        <br>
        <div class="list-group">
            <div class="list-group-item" v-for="(item, index) in blog" :key="item.id">
                <div class="panel-heading">
                    <router-link v-bind:to="{path: '/blog_content_page/' + blog[index].writer + '/' + blog[index].blog_date}" id="title" class="panel-title"><strong>文章标题 :{{item.title}}</strong></router-link>
                </div>
                <div class="panel-body">
                    作者: {{item.writer}} 日期: {{item.blog_date | standard_date}}
                </div>
            </div>
            <div class="list-group-item" id="show_empty" v-show="empty">
                <h3>暂时没有相关内容</h3>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name: "Search_blog",
    data: function () {
        return {
            blog: []
        }
    },
    created: function () {
        var search_keywords = document.URL.split('/').reverse()[0];
        var search_keywords = search_keywords.replace(/ /g, ".*");
        var pattem = ".*" + search_keywords + ".*";
        var post = {
            title: pattem
        }
        this.$http.post('./search_blog',post).then(function (res) {
            this.blog = res.data;
            this.blog = this.blog.reverse();
        })
    },
    watch: {
        $route (to, from) {
            if (from.name == "Search_blog" && to.name == "Search_blog") {
                var search_keywords = document.URL.split('/').reverse()[0];
                var search_keywords = search_keywords.replace(/ /g, ".*");
                var pattem = ".*" + search_keywords + ".*";
                var post = {
                    title: pattem
                }
                this.$http.post('./search_blog',post).then(function (res) {
                    this.blog = res.data;
                    this.blog = this.blog.reverse();
                })
            }
        }
    },
    filters: {
        standard_date: function (value) {
            return (new Date(parseInt(value))).toLocaleDateString();
        }
    },
    computed: {
        empty: function () {
            if (this.blog.length == 0)
                return true;
            else return false;
        }
    }
}
</script>

<style scoped>
    #search_blog {
        text-align: left;
    }
    #show_empty {
        text-align: center;
        background-color:beige;
    }
    #title :hover {
        color: red;
    }
    .headBackground {
        background-image: url('../assets/img/bookAndPen.jpg');
        height: 200px;
        width: 1140px;
        background-size: 100%;
        background-position-y: -400px;
        color: white;
        background-repeat: no-repeat;
        background-attachment: initial;
    }
    .noMarginTop {
        margin-top: -40px;
    }
</style>
