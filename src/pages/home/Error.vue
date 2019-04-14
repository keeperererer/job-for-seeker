<template>
	<div>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'Error:404---此页面不存在，请输入正确的路径'
			}
		}
	}
</script>
<style scoped>
h2{
	text-align: center;
	margin-top:100px;
}
</style>