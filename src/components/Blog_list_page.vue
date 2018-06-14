<template>
    <div id="blog_list">
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

        <div id="pagination" v-show="!empty">
            <ul class="pagination pagination">
                <li v-on:click.prevent="get_first_blog"><a href="">首页</a></li>
                <li class="page-item" v-on:click.prevent="get_prev_blog"><a class="page-link" href="#">&laquo;</a></li>
                <li :class="{'active': item - 1 == active_page}" v-on:click.prevent="get_blog(item)" v-for="(item, index) in page_loop" :key="item.id"><a class="page-link" href="#">{{item}}</a></li>
                <li class="page-item" v-on:click.prevent="get_next_blog"><a class="page-link" href="#">&raquo;</a></li>
                <li v-on:click.prevent="get_last_blog"><a href="">尾页</a></li>
            </ul>
        </div>
                        
    </div>
</template>

<script>
export default {
    name: 'Blog_list_page',
    data: function () {
        return {
            blog: [],
            number_of_page: 1, //page数量初始化为1个
            active_page: 0  //page从0开始，初始化为0
        }
    },
    created: function () {
        var post = {page: 0};
        this.$http.post('./blog_list',post).then(function (res) {
            this.blog = res.data;
            this.blog = this.blog.reverse();
        })
        
        var post2 = {}
        this.$http.get('./blog_list',post2).then(function (res) {
            this.number_of_page = res.data.page;
            this.number_of_page = parseInt(this.number_of_page / 10) + 1;
        })
    },
    methods: {
        get_blog: function (item) {   //item指显示的内容，index为索引，两者相差了1
            this.active_page = item - 1;
            var post = {
                page: this.active_page
            }
            this.$http.post('./blog_list',post).then(function (res) {
                this.blog = res.data;
                this.blog = this.blog.reverse();
            })
        },
        get_prev_blog: function () {
            if (this.active_page == 0) return;
            this.active_page--;
            var post = {
                page: this.active_page
            }
            this.$http.post('./blog_list',post).then(function (res) {
                this.blog = res.data;
                this.blog = this.blog.reverse();
            })
        },
        get_next_blog: function () {
            if (this.active_page == this.number_of_page - 1) return;
            this.active_page++;
            var post = {
                page: this.active_page
            }
            this.$http.post('./blog_list',post).then(function (res) {
                this.blog = res.data;
                this.blog = this.blog.reverse();
            })
        },
        get_first_blog: function () {
            if (this.active_page == 0) return;
            this.active_page = 0;
            var post = {
                page: this.active_page
            }
            this.$http.post('./blog_list',post).then(function (res) {
                this.blog = res.data;
                this.blog = this.blog.reverse();
            })
        },
        get_last_blog: function () {
            if (this.active_page == this.number_of_page - 1) return;
            this.active_page = this.number_of_page - 1;
            var post = {
                page: this.active_page
            }
            this.$http.post('./blog_list',post).then(function (res) {
                this.blog = res.data;
                this.blog = this.blog.reverse();
            })
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
        },
        page_loop : function () {
            if (this.number_of_page <= 7) {
                var result = [];
                for (var i = 1; i <= this.number_of_page; i++) {
                    result.push(i);
                }
                return result;
            }
            else {
                if (this.active_page <= 3) {
                    return [1, 2, 3, 4, 5, 6, 7];
                }
                else if (this.active_page >= this.number_of_page - 4) {
                    return [3, 4, 5, 6, 7, 8, 9];
                }
                else {
                    var temp = this.active_page + 1;
                    return [temp - 3, temp - 2, temp - 1, temp, temp + 1, temp + 2, temp + 3];
                }
            }
        }
    }
}

</script>

<style scoped>
    #blog_list {
        text-align: left;
    }
    #show_empty {
        text-align: center;
        background-color:beige;
    }
    #pagination {
        text-align: right;
    }
    #title :hover {
        color: red;
    }
</style>
