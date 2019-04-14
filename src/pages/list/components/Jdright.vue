<template>
<div class="right">
	<div class="ads .ads-rolled"></div>
</div>
</template>

<script>
export default {
	name: 'ListJdright',
}
$(document).ready(function(){
	$(window).scroll(function(){
		let topp = $(document).scrollTop();
		if(topp > 200){
			$(".right").addClass("right-rolled");
		}else if(topp < 200){
			$(".right").removeClass("right-rolled");
		}
	})
})	
</script>

<style lang="stylus" scoped>
.right{
	width:40%;
	display:inline-block;
	position:absolute;
}
.right-rolled{
	position:fixed;
	top:80px;
}	
.ads{
	background:#cdb6f5;
	width:60%;
	margin-left:20%;
	height:380px;
	background:url('../../../assets/images/ads.png') center;
}
</style>