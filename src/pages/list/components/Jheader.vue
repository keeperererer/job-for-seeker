<template>
	<div class="jheader">
		<home-header @sendValue='showData'></home-header>
		<home-search></home-search>
	</div>

</template>

<script>
import bus from '../../../assets/script/bus'
import HomeHeader from '../../home/components/Header'
import HomeSearch from '../../home/components/Search'
export default {
	name: 'ListJheader',
	data () {
		return {
			copyData: ''
		}
	},
	components: {
		HomeSearch,
		HomeHeader
	},
	methods: {
		showData: function(data) {
			console.log(data)
			this.copyData = data
		},
		getData: function(){
			bus.$emit('toSon',this.copyData)
		}
	},
	mounted() {
		this.getData()
	}
}
$(document).ready(function(){
	$(window).scroll(function(){
		let topp = $(document).scrollTop();
		if(topp > 170){
			$(".jheader").addClass("jheader-scrolled");
		}else if(topp < 170){
			$(".jheader").removeClass("jheader-scrolled");
		}
	})
})
</script>

<style lang="stylus" scoped>
.jheader >>> .span1{
	display:none;
}
.jheader >>> .bg{
	background:none;
	height:115px;
	margin-top:55px;
}
.jheader >>> .overlay-bg{
	background-image: none;
	height:115px;

}
.jheader >>> .content{
	top:0;
	width:75%;
}
.jheader >>> .form-control{
	width:100%;
	margin-left:0;
}
.jheader >>> .form-wrap{
	margin:0;
	background-color:transparent;
	border:none;
}
.jheader >>> .form-c1{
	width:50%;
	display:inline-block;
}
.jheader >>> .form-c2{
	margin-left:2em;
	width:10%;
}
.jheader >>> .form-c3{
	width:10%;
}
.jheader >>> .search-btn{
	margin-left:3.5rem;
	width:75%;
	margin-right:0;
	background-color:#fff;
	color:#949191;
}
.jheader >>> .tips{
	margin-top:3px;
	text-align:center;
}
.jheader >>> .header-scrolled{
	background:transparent;
}
.jheader{
	background-image: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
	width:100%;
	position:fixed;
	height:170px;
	z-index:99;
}
.jheader-scrolled {
  box-shadow:2px 2px 10px #ccc;
  transition: all 1s;
}
</style>