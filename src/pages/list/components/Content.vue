<template>
<div class="bg">
	<div class="overlay-bg"></div>
	<div class="content">
		<form action="http://47.100.121.23:8080/job/userinfo/userinfo" class="serach-form-area" method="post">
			<div class="form-header span1">
				个人信息填写
			</div>
			<div class="form-wrap">
				<div class="form-body">
					<div class="form-group">
						<span class="form-span">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</span>
						<input type="text" class="form-control for1" name="username">
					</div>
					<div class="form-group">
						<span class="form-span">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄:</span>
						<input type="text" class="form-control for1" name="age">
					</div>
					<div class="form-group">
						<span class="form-span" style="margin-right:3%">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</span> 
						<div class="man">
							<input id="item1" type="radio" name="gender" value="man" checked />
							<label for="item1"></label> 
							<span style="margin-left:28px" class="spansex">男</span>
						</div>     
 						<div class="man" style="margin-left:3%;">
 							<input id="item2" type="radio" name="gender" value="woman"/>
							<label for="item2"></label>
							<span style="margin-left:25px" class="spansex">女</span>
 						</div>
						
					</div>
					<div class="form-group">
						<span class="form-span">手机号码:</span>
						<input type="text" class="form-control for1" style="width:30%" name="telephone">
					</div>
					<div class="form-group">
						<span class="form-span">最高学历:</span>
						<select  class="form-select">
						  <option>大专</option>
						  <option selected="selected">本科</option>
						  <option>硕士</option>
						  <option>博士</option>
						  <option>其他</option>
						</select>
					</div>
					<div class="form-group">
						<span class="form-span">毕业学校:</span>
						<input type="text" class="form-control for1" style="width:30%" name="school">
					</div>
					<div class="form-group">
						<span class="form-span">主修专业:</span>
						<input type="text" class="form-control for1" style="width:30%" name="major">
					</div>
					<div class="form-group">
						<span class="form-span">工作经验:</span>
						<select  class="form-select">
							<option >无经验</option>
							<option>1年以下</option>
							<option selected="selected">1-3年</option>
							<option>3-5年</option>
							<option>5-10年</option>
							<option>10年以上</option>
						</select>
					</div>
					<div class="form-group">
						<span class="form-span">期望城市:</span>
						<input type="text" class="form-control for1" style="width:30%" name="city">
					</div>
					<div class="form-group">
						<span class="form-span">期望职位:</span>
						<input type="text" class="form-control for1" style="width:30%" name="job">
					</div>
					<div class="form-group">
						<span class="form-span">期望薪资:</span>
						<input type="text" class="form-control for1" style="width:30%" name="wishsalary">
					</div>
					<div class="form-group">
						<span class="form-span">个人技能:</span>
						<textarea name="experience" id="" cols="30" rows="10" style="height:200px;width:80%;margin-left:15%;border: 1px solid #ccc;
background: #fff;">
							
						</textarea>
					</div>
					<div class="form-group">
						<span class="form-span">实践经验:</span>
						<textarea name="experience" id="" cols="30" rows="10" style="height:200px;width:80%;margin-left:15%;border: 1px solid #ccc;
background: #fff;">
							
						</textarea>
					</div>
				</div>

				<div class="scroll form-group" id="scroll1" ref="scroll1">
					<span class="quanzhong">学历</span>
					<div class="bar" id="bar1" ref="bar1" @mousedown="handleBar1" @mouseup="handleCleanBar1"></div>
					<div class="mask" id="mask1" ref="mask1"></div>
					<span ref="ptxt1" class="sore">{{ptxt1}}</span>
				</div>
				<div class="scroll form-group" id="scroll2" ref="scroll2">
					<span class="quanzhong">期望薪资</span>
					<div class="bar" id="bar2" ref="bar2" @mousedown="handleBar2" @mouseup="handleCleanBar2"></div>
					<div class="mask" id="mask2" ref="mask2"></div>
					<span ref="ptxt2" class="sore">{{ptxt2}}</span>
				</div>
				<div class="scroll form-group" id="scroll3" ref="scroll3">
					<span class="quanzhong">实践经验</span>
					<div class="bar" id="bar3" ref="bar3" @mousedown="handleBar3" @mouseup="handleCleanBar3"></div>
					<div class="mask" id="mask3" ref="mask3"></div>
					<span ref="ptxt3" class="sore">{{ptxt3}}</span>
				</div>
				<div class="scroll form-group" id="scroll4" ref="scroll4">
					<span class="quanzhong">个人技能</span>
					<div class="bar" id="bar4" ref="bar4" @mousedown="handleBar4" @mouseup="handleCleanBar4"></div>
					<div class="mask" id="mask4" ref="mask4"></div>
					<span ref="ptxt4" class="sore">{{ptxt4}}</span>
				</div>



				<div class="form-footer">
					<input type="submit" value="保存信息" class="form-sub">
				</div>
			</div>
			
		</form>

	</div>
	 
</div>
</template>

<script>
export default {
	name: 'ListContent',
	data () {
		return {
			barleft: 0,
			ptxt1: '',
			ptxt2:'',
			ptxt3:'',
			ptxt4:''
		}
	},
	methods: {
		handleBar1 (event) {
			var bar1 = this.$refs.bar1
			var scroll1 = this.$refs.scroll1
			var mask1 = this.$refs.mask1
			var leftVal = event.clientX - bar1.offsetLeft
			var that = this
			document.onmousemove = function(event) {
				that.barleft = event.clientX - leftVal
				if (that.barleft < 0)
					that.barleft = 0
				else if (that.barleft > scroll1.offsetWidth - bar1.offsetWidth)
					that.barleft = scroll1.offsetWidth - bar1.offsetWidth
					mask1.style.width = that.barleft + 'px'
					bar1.style.left = that.barleft + 'px'
					that.ptxt1 = "占比权重" + parseInt(that.barleft/(scroll1.offsetWidth-bar1.offsetWidth) * 100) + "%"
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			}
		},
		handleCleanBar1 () {
			document.onmousemove = null; 
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		},
		handleBar2 (event) {
			var bar2 = this.$refs.bar2
			var scroll2 = this.$refs.scroll2
			var mask2= this.$refs.mask2
			var leftVal = event.clientX - bar2.offsetLeft
			var that = this
			document.onmousemove = function(event) {
				that.barleft = event.clientX - leftVal
				if (that.barleft < 0)
					that.barleft = 0
				else if (that.barleft > scroll2.offsetWidth - bar2.offsetWidth)
					that.barleft = scroll2.offsetWidth - bar2.offsetWidth
					mask2.style.width = that.barleft + 'px'
					bar2.style.left = that.barleft + 'px'
					that.ptxt2 = "占比权重" + parseInt(that.barleft/(scroll2.offsetWidth-bar2.offsetWidth) * 100) + "%"
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			}
		},
		handleCleanBar2 () {
			document.onmousemove = null; 
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		},
		handleBar3 (event) {
			var bar3 = this.$refs.bar3
			var scroll3 = this.$refs.scroll3
			var mask3= this.$refs.mask3
			var leftVal = event.clientX - bar2.offsetLeft
			var that = this
			document.onmousemove = function(event) {
				that.barleft = event.clientX - leftVal
				if (that.barleft < 0)
					that.barleft = 0
				else if (that.barleft > scroll3.offsetWidth - bar3.offsetWidth)
					that.barleft = scroll3.offsetWidth - bar3.offsetWidth
					mask3.style.width = that.barleft + 'px'
					bar3.style.left = that.barleft + 'px'
					that.ptxt3 = "占比权重" + parseInt(that.barleft/(scroll3.offsetWidth-bar3.offsetWidth) * 100) + "%"
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			}
		},
		handleCleanBar3 () {
			document.onmousemove = null; 
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		},
		handleBar4 (event) {
			var bar4 = this.$refs.bar4
			var scroll4 = this.$refs.scroll4
			var mask4= this.$refs.mask4
			var leftVal = event.clientX - bar4.offsetLeft
			var that = this
			document.onmousemove = function(event) {
				that.barleft = event.clientX - leftVal
				if (that.barleft < 0)
					that.barleft = 0
				else if (that.barleft > scroll4.offsetWidth - bar4.offsetWidth)
					that.barleft = scroll4.offsetWidth - bar4.offsetWidth
					mask4.style.width = that.barleft + 'px'
					bar4.style.left = that.barleft + 'px'
					that.ptxt4 = "占比权重" + parseInt(that.barleft/(scroll4.offsetWidth-bar4.offsetWidth) * 100) + "%"
					window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			}
		},
		handleCleanBar4 () {
			document.onmousemove = null; 
			document.onmouseup = function(){
				document.onmousemove = null;
			}
		}
	}
}

</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.overlay-bg{
	height:1400px;
	background-image: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
}
.form-wrap{
	background:#fff;
}
.content{
	width:75%;
	top:100px;
	left:12%;
}
.span1{
	font-size:20px;
	text-align:left;
}	
.for1{
	background: #fff;
    border-bottom: 1px solid #afaeb5;
    display: inline-block;
    position:absolute;
    width:15%;
    margin-left:5%;
    height:30px;
}
.form-span{
	line-height:30px;
	color:#000;
	padding-left:5%;
}
.form-group{
	position:relative;
	line-height:30px;
}
.form-man{
	padding-left:10px;
}
input[type="radio"] {
    width: 20px;
    height: 20px;
    opacity: 0;
}
.man{
	display:inline-block;
	position:relative;
}
#item1,
#item2,
#item1 + label,
#item2 + label{
	position: absolute;
    left: 100%;
    top: 6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #c7c6c6;;
    margin-left:10%;
}
input[type="radio"]:checked+label { 
    background: #846cff;
    border: 1px solid #846cff;
}

input[type="radio"]:checked+label::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 10px;
    top: 2px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
}
.spansex{
	color:#2b2929;
	line-height:30px;
}
.form-select{
	width:20%;
	padding-left:1%;
	border-radius:3px;
	margin-left:47px;
	height: 30px;
	background:#fff;
	border: 1px solid #ccc;
}
.form-sub{
	background-color: #846cff;
    color: #fff;
    border: none;
    width: 15%;
    height: 40px;
    margin-left:43%;
}
.scroll{
    margin:10px;
    width: 40%;
    height: 5px;
    background: #ccc;
    position: relative;
	display:inline-block;
	margin-left: 150px;
}
.bar{
	width: 10px;
	height: 20px;
	background: #369;
	position: absolute;
	top: -7px;
	left: 0;
	cursor: pointer;
	display:inline-block;
}
.mask{
	position: absolute;
	left: 0;
	top: 0;
	background: #369;
	width: 0;
	height: 5px;
	display:inline-block;

}
.quanzhong{
	position: absolute;
    left: -20%;
    height: 5px;
    line-height: 5px;
}
.sore{
    position: absolute;
    right: -40%;
    height: 5px;
    line-height: 5px;
}
</style>
