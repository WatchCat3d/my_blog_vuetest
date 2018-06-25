<template>
    <div id="user_draft" class="text-left">
        <div class="list-group">
            <div class="list-group-item hover-gray" v-for="(item, index) in draft" :key="item.id">
                <div class="panel-heading">
                    <router-link v-bind:to="{path: '/blog_content_page/' + draft[index].writer + '/' + draft[index].draft_date}" id="title" class="panel-title"><strong>文章标题 :{{item.title}}</strong></router-link>
                </div>
                <div class="panel-body">
                    作者: {{item.writer}} 日期: {{item.draft_date | standard_date}} 
					<a class="float-right"  role="button" href="#modal-container-14357" v-on:click="click_draft_index(index)" data-toggle="modal">删除</a> 
                    <a class="float-right" role="button" v-on:click.prevent="update_draft_click(index)">修改</a> 
					<a class="float-right" role="button" href="#modal-container-release" v-on:click.prevent="click_draft_index(index)" data-toggle="modal">发布</a> 
                    
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
									你确定要删除该草稿吗？
								</div>
								<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> 
										<button type="button" class="btn btn-primary" v-on:click="click_draft_delete">确定</button>
								</div>
							</div>
							
						</div>
					</div>

                    <div class="modal fade" id="modal-container-release" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
									<h4 class="modal-title" id="myModalLabel">
										发布
									</h4>
								</div>
								<div class="modal-body">
									你确定要发布该博客吗？
								</div>
								<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> 
										<button type="button" class="btn btn-primary" v-on:click="click_draft_release">确定</button>
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
                <li v-on:click.prevent="get_first_draft"><a href="">首页</a></li>
                <li class="page-item" v-on:click.prevent="get_prev_draft"><a class="page-link" href="#">&laquo;</a></li>
                <li :class="{'active': item - 1 == active_page}" v-on:click.prevent="get_draft(item)" v-for="(item, index) in page_loop" :key="item.id"><a class="page-link" href="#">{{item}}</a></li>
                <li class="page-item" v-on:click.prevent="get_next_draft"><a class="page-link" href="#">&raquo;</a></li>
                <li v-on:click.prevent="get_last_draft"><a href="">尾页</a></li>
            </ul>
        </div>
                        
    </div>
</template>

<script>
export default {
    name: 'User_draft',
    data: function () {
        return {
            draft: [
				{
                    writer: "sss",
                    draft_date: 4354,
                    title: "11",
                    content: "draft"
                }
			],
			draft_index: "",
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
            this.$http.post('./draft_list',post).then(function (res) {
                this.draft = res.data;
                this.draft = this.draft.reverse();
            })
            
            var post2 = {
                writer: this.username
            };
            this.$http.post('./draft_count',post2).then(function (res) {
                this.number_of_page = res.data.page;
                this.number_of_page = parseInt(this.number_of_page / 10) + 1;
            })
        })
    },
    methods: {
        update_draft_click: function (index) {
            this.$router.push({
                name: 'Update_draft',
                params: {
                    draft: this.draft[index]
                }
            });
        },
        click_draft_release: function () {
            $('#modal-container-release').modal('hide');
            var post = {
                writer: this.draft[this.draft_index].writer,
                title: this.draft[this.draft_index].title,
                content: this.draft[this.draft_index].content,
                draft_date: this.draft[this.draft_index].draft_date
            }
            this.$http.post('./draft_release', post).then(function (res) {

            })
        },
		click_draft_index: function (index) {
			this.draft_index = index;
	    },
		click_draft_delete: function () {
            $('#modal-container-14357').modal('hide');
            var post = {
                writer: this.draft[this.draft_index].writer,
                draft_date: this.draft[this.draft_index].draft_date
            }
			this.$http.post('./draft_delete', post).then(function (res) {
                var post2 = {
                    page: this.active_page,
                    writer: this.username
                }
                this.$http.post('./draft_list', post2).then(function (res) {
                    this.draft = res.data;
                    this.draft = this.draft.reverse();
                })
                this.$http.post('./draft_count',{writer: this.username}).then(function (res) {
                    this.number_of_page = res.data.page;
                    this.number_of_page = parseInt(this.number_of_page / 10) + 1;
                })
            })
		},
        get_draft: function (item) {   //item指显示的内容，index为索引，两者相差了1
            this.active_page = item - 1;
            var post = {
                page: this.active_page,
                writer: this.username
            }
            this.$http.post('./draft_list',post).then(function (res) {
                this.draft = res.data;
                this.draft = this.draft.reverse();
            })
        },
        get_prev_draft: function () {
            if (this.active_page == 0) return;
            this.active_page--;
            var post = {
                page: this.active_page,
                writer: this.username
            }
            this.$http.post('./draft_list',post).then(function (res) {
                this.draft = res.data;
                this.draft = this.draft.reverse();
            })
        },
        get_next_draft: function () {
            if (this.active_page == this.number_of_page - 1) return;
            this.active_page++;
            var post = {
                page: this.active_page,
                writer: this.username
            }
            this.$http.post('./draft_list',post).then(function (res) {
                this.draft = res.data;
                this.draft = this.draft.reverse();
            })
        },
        get_first_draft: function () {
            if (this.active_page == 0) return;
            this.active_page = 0;
            var post = {
                page: this.active_page,
                writer: this.username
            }
            this.$http.post('./draft_list',post).then(function (res) {
                this.draft = res.data;
                this.draft = this.draft.reverse();
            })
        },
        get_last_draft: function () {
            if (this.active_page == this.number_of_page - 1) return;
            this.active_page = this.number_of_page - 1;
            var post = {
                page: this.active_page,
                writer: this.username
            }
            this.$http.post('./draft_list',post).then(function (res) {
                this.draft = res.data;
                this.draft = this.draft.reverse();
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
            if (this.draft.length == 0)
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
    #user_draft {
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
