<template>
<div class="header">
	<ul>
		<li class="wy"><router-link to="/" class="logo li">portrait job</router-link></li>
		<li v-for="nav of navList" :key="nav.id"><router-link :to="nav.list" class="li">{{nav.title}}</router-link></li>
		<div v-if="loginShow">
			<li class="sign"><router-link to="#" class="entry li" data-toggle="modal" data-target="#myModal1">登录</router-link></li>
			<li class="sign"><router-link to="#" class="entry li" data-toggle="modal" data-target="#myModal2">注册</router-link></li>
		</div>
		<div v-else>
			<li class="sign"><span style="color:#fff">{{name}},在线</span></li>
			<form action="http://47.100.121.23:8080/job/user/logout" method="post">
				<li class="sign" @click="exit" style="cursor:pointer;color:#fff"><span>退出</span></li>
			</form>
			
		</div>
	</ul>
<div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
 	<form style="margin-top:60px;"  :model="ruleForm" :rules="rules">
	 	<div class="modal-dialog" style="width:30%">
        	<div class="modal-content">
           		<div class="modal-header">
					<h2>登录</h2>
				</div>
				<div class="modal-body">
					<div class="form-group" prop="username">
							<label for="username" class="sr-only">用户名</label>
							<input type="text" class="form-control" placeholder="用户名" autocomplete="off" v-model="ruleForm.username" name="useraccount">
						</div>
						<div class="form-group" prop="password">
							<label for="password" class="sr-only">密码</label>
							<input type="password" class="form-control" placeholder="密码" autocomplete="off" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" name="password">
						</div>
					<div class="form-group">
						<label for="remember"><input type="checkbox" id="remember1" v-model="checked">记住密码</label>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default z-close" data-dismiss="modal" @click="close_login">关闭</button>
					<input type="submit" value="登录"  data-dismiss="modal" class="btn btn-primary"  @click="submitForm('ruleForm')">
				</div>
			</div>
		</div>
	</form>   
</div>

<!-- http://47.100.121.23:8080/job/user/register -->

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 	<form style="margin-top:60px;">
	 	<div class="modal-dialog" style="width:30%">
        	<div class="modal-content">
           		<div class="modal-header">
					<h2>注册</h2>
				</div>
				<div class="modal-body">
					<div class="form-group" v-for="form2 of formList2" :key="form2.id">
						<label :for="form2.for" class="sr-only">{{form2.title}}</label>
						<input :type="form2.type" ref="shuru" @change="login(form2,$event)" class="form-control" :id="form2.id" :placeholder="form2.desc" :autocomplete="form2.auto" v-model="form2.value" :name="form2.name">
						<span class="iconfont" style="color:blue" v-show="form2.right">&#xe784;</span>
						<span class="iconfont" style="color:red" v-show="form2.error">&#xe785;</span>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default z-close" data-dismiss="modal">关闭</button>
					<input type="button" value="注册" class="btn btn-primary" @click="judge">
				</div>
			</div>
		</div>
	</form>   
</div>

</div>
</template>

<script> 
import axios from 'axios'
export default {
	name: 'HomeHeader',
	data () {
		return {
			show:false,
			navList:[{
				id:'1',
				title:'首页',
				list:'/'
			},{
				id:'2',
				title:'岗位库',
				list:'/Jobs'
				
			},{
				id:'3',
				title:'可视化',
				list:'/Watch'
				
			},{
				id:'4',
				title:'个人中心',
				list:'/Person'
				
			}],
			formList2:[{
				id:'username2',
				name:'useraccount',
				for:'username',
				title:'用户名',
				type:'text',
				desc:'用户名:由字母和数字组成的4-16位字符',
				auto:'off',
				right:false,
				error:false,
				value:''

			},{
				id:'tel',
				name:'telephone',
				for:'tel',
				title:'电话号码',
				type:'text',
				desc:'电话号码:填入有效号码',
				auto:'off',
				right:false,
				error:false,
				value:''
			},{
				id:'email',
				name:'email',
				for:'email',
				title:'邮箱',
				type:'email',
				desc:'邮箱:输入正确的邮箱',
				auto:'off',
				right:false,
				error:false,
				value:''

			},{
				id:'password2',
				name:'password',
				for:'password',
				title:'密码',
				type:'password',
				desc:'密码:由字母和数字组成的4-10位字符',
				auto:'off',
				right:false,
				error:false,
				value:''

			},{
				id:'re-password',
				name:'re-password',
				for:'re-password',
				title:'确认密码',
				type:'password',
				desc:'确认密码',
				auto:'off',
				right:false,
				error:false,
				value:''

			}],
			first_pwd:'',
			sec_pwd:'',
		    checked: true,
            ruleForm: {
                username: '',
                password: ''
            },
            userData: [],
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }]
			},
			loginShow:true,
			name:'',

		}
	},
	mounted() {
        this.getCookie();
        this.login_stats();
    },
	methods:{
		login(data,ev){
			switch(data.title){
				case '用户名':
					this.test_username(data)
					break
				case '邮箱':
					this.test_email(data)
					break;
				case '密码':
					this.test_password(data,ev.target.value)
					break;
				case '确认密码':
					this.test_password(data,ev.target.value)
					break;
				case '电话号码':
					this.test_tel(data)
					break;
			}
		},
		test_username(data){
			let regValue = data.value;
			if(regValue === ''){
				console.log("不能为空");
				data.error = true;
				data.right = false;
			}else{
				if (regValue !== ''){
					let reg = /^[a-zA-Z0-9]\w{3,16}$/;	
					if(reg.test(regValue)){	
						console.log("输入正确");
						data.right = true;
						data.error = false;
					}else{
						console.log("请输入正确的用户名");
						data.error = true;
						data.right = false;
					}
				}
			}
			
		},
		test_tel(data){
			let regValue = data.value;
			if(regValue === ''){
				console.log("不能为空");
				data.error = true;
				data.right = false;
			}else{
				if (regValue !== ''){
					let reg =  /^1\d{10}$/;	
					if(reg.test(regValue)){	
						console.log("输入正确");
						data.right = true;
						data.error = false;
					}else{
						console.log("请输入正确的电话号码");
						data.error = true;
						data.right = false;
					}
				}
			}
		},
		test_email(data){
			let regValue = data.value;
			if(regValue === ''){
				console.log("不能为空");
				data.error = true;
				data.right = false;
			}else{
				if (regValue !== ''){
					let reg =/^\w+@\w+((\.\w+)+)$/;	
					if(reg.test(regValue)){	
						console.log("输入正确");
						data.right = true;
						data.error = false;
					}else{
						console.log("请输入正确的邮箱");
						data.error = true;
						data.right = false;
					}
				}
			}
		},
		test_password(data,ver){
		},
		// judge(){
		// 	let data = {
		// 		name: this.formList2[0].value,
		// 		number:this.formList2[1].value,
		// 		email: this.formList2[2].value,
		// 		password: this.formList2[3].value
		// 	};
		// 	this.$http.post('/job/user/register',data)
		// 	.then(function (response) {
		// 		console.log(response)
		// 	})
		// 	.catch(function(err){
		// 		throw new Error(err.message)
		// 	})
	        
		// },
		// judge(){
		// 	let data = {
		// 		name: this.formList2[0].value,
		// 		number:this.formList2[1].value,
		// 		email: this.formList2[2].value,
		// 		password: this.formList2[3].value
		// 	};
		// 	axios.post('/job/user/register',
		// 		JSON.stringify(data),{
		// 			headers:{'Content-Type':'application/json'}
		// 		}).then(function(response){
		// 			console.log(response)
		// 		}).catch(function(error){
		// 			console.log(error)
		// 		})
		// },
		judge(){
			
			let _this = this;
			$.ajax({
	          url: '/job/user/register',
	          type: 'post',
	          // data对象中的属性名要和服务端控制器的参数名一致 login(name, password)
	          data: {
	            'useraccount': this.formList2[0].value,
				'telephone':this.formList2[1].value,
				'email': this.formList2[2].value,
				'password': this.formList2[3].value
	          },
	          dataType: 'JSONP',
	          success: function (response) {
 					
 					if(response) {
 						console.log("成功")
 						alert('恭喜，注册成功！')
 						// _this.$router.push('/Jobs')
 					}
	          },
	          error: function (e) {
	            console.log(e)
	            if(e){
	            	alert('注册失败')
	            	// _this.$router.push('/Jobs')
	            	
	            }
	          }
        	})
		},
		submitForm(formName) {
			console.log('submitForm');

			let _this = this;
			$.ajax({
	          url: '/job/user/login',
	          type: 'post',
	          // data对象中的属性名要和服务端控制器的参数名一致 login(name, password)
	          data: {
	            'username': _this.ruleForm.username,
	            'password': _this.ruleForm.password
	          },
	          dataType: 'JSONP',
	          success: function (response) {
 					
 					if(response) {
 						console.log("成功")
 						alert('恭喜，登录成功！')

 					}
	          },
	          error: function (e) {
	            console.log(e)
	            if(e){
	            	console.log('登录失败')
	            	alert('登录失败')
	            	
	            }
	          }
        	})


			 //判断复选框是否被勾选 勾选则调用配置cookie方法
			if(this.checked){
				 //传入账号名，密码，和保存天数3个参数
				this.setCookie(this.ruleForm.username, this.ruleForm.password, 7);
			    sessionStorage.setItem('login',true);

			}else {
              //清空Cookie
              this.clearCookie();
			  sessionStorage.setItem('login',false);
            }
			this.name = this.ruleForm.username
			this.loginShow = false
			this.close_login()
        },
         //设置cookie
        setCookie(c_name, c_pwd, exdays) {
            var exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        },
        //读取cookie
        getCookie: function(fn) {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'userName') {
                        this.ruleForm.username = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'userPwd') {
                        this.ruleForm.password = arr2[1];
                    }
                }
                // if(fn)fn(this.ruleForm.username && this.ruleForm.password)
            }
        },
        //清除cookie
        clearCookie: function() {
            this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好
		},
		close_login(){
			
			console.log(this.login_form_show)
			this.login_form_show = false
		},
		exit(){
			this.loginShow = true;
			sessionStorage.setItem('login',false);
			this.clearCookie();
		},
		login_stats(){
			//这个是临时会话版本的cookie，登录设置为true，退出后就是false。
			//关闭浏览器会清空sessionStorage
			if(sessionStorage['login'] == 'true'){
				this.loginShow = false;
				this.name = this.ruleForm.username
			}
		}
	}
};
$(document).ready(function(){
	$(window).scroll(function(){
		let topp = $(document).scrollTop();
		if(topp > 55){
			$(".header").addClass("header-scrolled");
		}else if(topp < 55){
			$(".header").removeClass("header-scrolled");
		}
	})
})
</script>

<style lang="stylus" scoped>
.header{
	height:55px;
	position:fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index:9;
	width:100%;
	font-size: 14px;
    font-weight: 300;
    display:inline-block;
	background-image: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);

}
.header-scrolled {
  background: rgba(134, 81, 228, 0.8);
  transition: all 2s;
}
ul{
	width:100%;
	overflow:hidden;
    margin-top:10px;
    margin-bottom:10px;
}
li{
	line-height:35px;
	text-align:center; 
	width:8%;
	height:35px;
	float:left;
	outline: none;
}
.wy{
	margin:0 20% 0 12%;
}
.li{	
    color: #777777;
    font-family: "Poppins", sans-serif;
	text-decoration: none;
	color: #fff;
	font-weight: 400;
	font-size: 12px;
	cursor: pointer;
}		
.logo{
	font-size:20px;
	font-weight:900;
}
.entry{
	display:inline-block;
	margin-right:0;
	background: #49e4fa;
  	color: #fff;
  	height:35px;
  	width:70%;
	transition: all 0.5s;
}
.entry:hover{
	background: rgba(73, 228, 250, 0.2);
    color: #49e4fa;
}		
h2{
	font-size: 20px;
	color:#6e6c6c;
}
.form-group{
	color:#6e6c6c;
	font-weight:100;
	position:relative;
}
.btn-default{
	padding-right: 20px;
    padding-left: 20px;
    box-shadow: -2px 10px 20px -1px rgba(175, 180, 180, 0.4);
}
.btn-primary{
    padding-right: 20px;
    padding-left: 20px;
    border: none;
    background: #33cccc;
    color: #ffffff;
    box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
}
.modal-body{
	width:80%;
}
.z-close:hover{
	background:#fff;
}
.iconfont{
	position: absolute;
    top: 20%;
    right: 4%;
}
@media only screen and (max-width: 820px){
	.wy{
		margin:0 10% 0 6%;
	}
	li{
		width:12%;
	}
}
@media only screen and (min-width:420px){
	.header{
		height:50px;
	}
}
@media only screen and (min-width:420px) and (max-width: 820px){
	li{
		font-size:10px;
	}
	
}
</style>