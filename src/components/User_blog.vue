<template>
    <div id="user_blog" class="text-left">
        <div class="list-group">
            <div class="list-group-item hover-gray" v-for="(item, index) in blog" :key="item.id">
                <div class="panel-heading">
                    <router-link v-bind:to="{path: '/blog_content_page/' + blog[index].writer + '/' + blog[index].blog_date}" id="title" class="panel-title"><strong>文章标题 :{{item.title}}</strong></router-link>
                </div>
                <div class="panel-body">
                    作者: {{item.writer}} 日期: {{item.blog_date | standard_date}} 
					<a class="float-right"  role="button" href="#modal-container-14357" v-on:click="click_blog_index(index)" data-toggle="modal">删除</a> 
					<a class="float-right" role="button" v-on:click.prevent="update_blog_click(index)">修改</a> 

					<div class="modal fade" id="modal-container-14357" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
									<h4 class="modal-title" id="myModalLabel">
										删除
									</h4>
								</div>
								<div class="modal-body">
									你确定要删除该博客吗？
								</div>
								<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> 
										<button type="button" class="btn btn-primary" v-on:click="click_blog_delete">确定</button>
								</div>
							</div>
							
						</div>
					</div>

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
    name: 'User_blog',
    data: function () {
        return {
            blog: [
				{
                    writer: "sss",
                    blog_date: 4354,
                    title: "11",
                    content: "content"
                }
			],
			blog_index: "",
            number_of_page: 1, //page数量初始化为1个
            active_page: 0,  //page从0开始，初始化为0
            username: ""
        }
    },
    created: function () {
        this.$http.post('./sessionGet',{}).then(function (res) {
            this.username = res.data;
            var post = {
                page: 0,
                writer: this.username
            };
            this.$http.post('./blog_list',post).then(function (res) {
                this.blog = res.data;
                this.blog = this.blog.reverse();
            })
            
            var post2 = {
                writer: this.username
            };
            this.$http.post('./blog_count',post2).then(function (res) {
                this.number_of_page = res.data.page;
                this.number_of_page = parseInt(this.number_of_page / 10) + 1;
            })
        })
    },
    methods: {
        update_blog_click: function (index) {
            this.$router.push({
                name: 'Update_blog',
                params: {
                    blog: this.blog[index]
                }
            });
        },
		click_blog_index: function (index) {
			this.blog_index = index;
	    },
		click_blog_delete: function () {
            $('#modal-container-14357').modal('hide');
            var post = {
                writer: this.blog[this.blog_index].writer,
                blog_date: this.blog[this.blog_index].blog_date
            }
			this.$http.post('./blog_delete', post).then(function (res) {
                var post2 = {
                    page: this.active_page,
                    writer: this.username
                }
                this.$http.post('./blog_list', post2).then(function (res) {
                    this.blog = res.data;
                    this.blog = this.blog.reverse();
                })
                this.$http.post('./blog_count',{writer: this.username}).then(function (res) {
                    this.number_of_page = res.data.page;
                    this.number_of_page = parseInt(this.number_of_page / 10) + 1;
                })
            })
		},
        get_blog: function (item) {   //item指显示的内容，index为索引，两者相差了1
            this.active_page = item - 1;
            var post = {
                page: this.active_page,
                writer: this.username
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
                page: this.active_page,
                writer: this.username
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
                page: this.active_page,
                writer: this.username
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
                page: this.active_page,
                writer: this.username
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
                page: this.active_page,
                writer: this.username
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
    #user_blog {
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
    .hover-gray:hover {
        background-color: #FAFAFA;
    }
	.float-right {
		float: right;
		margin-left: 25px;
	}
</style>
