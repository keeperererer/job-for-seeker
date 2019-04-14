<template>
<div class="main1 c1 main-stat">
	<div class="new-info">
		<ul>
			<li style="height:70px;">
				<h1 class="info-h3 l">java开发工程师</h1>
				<strong class="l">8000-10000元/月</strong>
				<div class="l">
					<router-link to='#' class="info-apply">立即申请</router-link>
				</div>
			</li>
			<li class="clearfix">
				<div class="company l">
					<router-link to='#' style="color: #9497A1;font-size:15px;">长沙宏地有限公司</router-link>
				</div>
				<div class="info-three l">
					<span>长沙</span>
					<span>经验不限</span>
					<span>学历不限</span>
					<span>招8人</span>
				</div>
			</li>
		</ul>
	</div>
	
</div>
</template>

<script>

export default {
	name: 'ListJdtitle',
}	
</script>

<style lang="stylus" scoped>
.clear{
	clear:both;
}
.main-stat{
	margin-top:75px;
}
.main1{
	height:auto;
	width:100%;
	background:#f7f9fc;
	margin-bottom:30px;
}	
.new-info{
	margin: 0 auto;
	position:relative;
	width:75%;
	height:auto;
	color:#333;
}
ul{
	width:100%;
	height:auto;
}
li{
	padding-bottom:15px;
	padding-top: 20px;
}
.info-h3 {
    color: #13256A;
    height: auto;
    font-size: 24px;
    margin:0;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
}
strong {
    display: inline-block;
    font-size: 24px;
    color: #ff5959;
    text-align:center;
}
.l{
	float:left;
	height: 50px;
    line-height: 50px;
    width:33%;
}
.info-apply{
    display: block;
    width: 60%;
    height: 48px;
    border-radius: 4px;
    background: #846cff;
    line-height: 48px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin-left:40%;
}
.company {
    height: 50px;
    line-height: 50px;
}
.info-three {
    text-align:center;
}
.main1 .new-info ul .info-three span {
	position:relative;
    display: inline-block;
    margin-right: 29px;
    font-size: 14px;
    color: #9497A1;
}
</style>