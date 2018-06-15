<template>
  <div id="test" class="text-left">
	<br>
	<div class="row clearfix">
		<div class="col-md-12 column">
			<legend>管理员职责</legend>
			<p>
				 <em>管理员职责</em> 管理员可以<strong>删除</strong>不合规则的博客评论等，博客被删除后，
                 原博客链接中会显示该博客内容已被删除，评论被删除后，原评论会显示该评论已被删除。
			</p>
		</div>
	</div>
	<br>
	<br>
	<br>
	<div class="row clearfix">
		<div class="col-md-12 column">
			<legend>管理人员表</legend>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>
							编号
						</th>
						<th>
							用户名
						</th>
						<th>
							任命时间
						</th>
						<th>
							邮箱
						</th>
						<th>
							操作
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in manager" :key="item.id">
						<td>
							{{index + 1}}
						</td>
						<td>
							{{item.username}}
						</td>
						<td>
							{{item.regist_date | standard_date}}
						</td>
						<td>
							{{item.email}}
						</td>
						<th>
							<a role="button" href="#modal-container-14357" v-on:click="click_manager_index(index)" data-toggle="modal">移除</a>
						</th>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="modal fade" id="modal-container-14357" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title" id="myModalLabel">
							移除管理员
						</h4>
					</div>
					<div class="modal-body">
						你确定要移除该管理员吗？
					</div>
					<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> 
							<button type="button" class="btn btn-primary" v-on:click="click_manager_delete">确定</button>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	<br>
	<br>
	<br>
	<div class="row clearfix">
		<div class="col-md-12 column">
			<form role="form">
                <legend>添加新的管理员</legend>
				<div class="form-group">
					 <label>用户名</label>
                     <input type="text" v-model="input_username" class="form-control" placeholder="输入你要添加为管理员的用户名" />
				</div>
                <button type="button" href="#modal-container-80547" data-toggle="modal" :disabled="is_disabled" class="btn btn-primary">确定</button>
                <button type="reset" class="btn btn-default">重置</button>
			</form>
			
			<div class="modal fade" id="modal-container-80547" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h4 class="modal-title" id="myModalLabel">
								添加管理员
							</h4>
						</div>
						<div class="modal-body">
							你确定要添加用户名为<em> {{input_username}} </em>的用户为新的管理员吗？
						</div>
						<div class="modal-footer">
							 <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button> 
                             <button type="button" class="btn btn-primary" v-on:click="click_manager_add">确定</button>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data: function () {
      return {
		  input_username: "",
		  manager_index: "",
		  manager: [
			{
			  username: "1",
			  email: "ww",
			  regist_date: 11
			},
			{
			  username: "1",
			  email: "ww",
			  regist_date: 1113437687
			}  
			]
      }
  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
      }
  },
  methods: {
	  click_manager_add: function () {
		  $('#modal-container-80547').modal('hide');
		  var post = {
			  username: this.input_username,
			  regist_date: (new Date()).getTime()
		  }
		  this.$http.post('./manager_add', post).then(function (res) {
			  this.input_username = "";
              if (res.data == 'exist_manager') {
                  alert("该用户已经是管理员");
			  }
			  else if (res.data == 'not_exist_user') {
				  alert('该用户不存在');
			  }
              else if (res.data == 'success'){
				  this.$http.post('./manager_get', {}).then(function (res) {
					this.manager = res.data;
					alert("成功将该用户设为管理员");
				  })
              }
          })
	  },
	  click_manager_index: function (index) {
		  this.manager_index = index;
	  },
	  click_manager_delete: function () {
		  $('#modal-container-14357').modal('hide');
		  var post = {
			  username: this.manager[this.manager_index].username
		  }
		  this.$http.post('./manager_delete', post).then(function (res) {
			this.$http.post('./manager_get', {}).then(function (res) {
				this.manager = res.data;
			})
		  })
	  }
  },
  created: function () {
	var post = {};
	this.$http.post('./manager_get', post).then(function (res) {
		this.manager = res.data;
	})
  },
  computed: {
	  is_disabled: function () {
		  if (this.input_username != "") return false;
		  else return true;
	  }
  }
}

</script>

<style scoped>

</style>

