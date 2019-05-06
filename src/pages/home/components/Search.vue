<template>
<div class="bg">
	<div class="overlay-bg"></div>
	<div class="content">
		<span class="span1">
		我们将为您提供最适合您的岗位
		</span>
		<form  class="serach-form-area">
			<div class="form-wrap">
				<div class="form-content">
				<div class="form-c form-c1">
					<input type="text" class="form-control form-title" name="search" placeholder="您在寻找什么？" value="" v-model="search_data">
				</div>
				<div class="form-c form-c2">
					<div id="default-selects">
						<select  class="form-select form-control" name="choice" @change="showChoice">
							<option value="position">岗位</option>
							<option value="company">公司</option>
						</select>
					</div>
				</div>
				<div class="form-c form-c3">
				    <button type="button" class="btn search-btn" @click="search">
				       Search
				    </button>
				</div>
				</div>
			</div>
		</form>
		<div class="tips">
			我们为您提供<router-link to="#" class="jobs" v-for="job in jobList" :key="job.id" @click.native="jobClick(job)">{{job.title}}</router-link>方向的岗位
		</div>
	</div>

</div>
</template>

<script>
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default{
	name: 'HomeSearch',
	data () {
		return {
			jobList:[{
				id:'1',
				title:'java开发'
			},{
				id:'2',
				title:'Python'

			},{
				id:'3',
				title:'数据分析师'

			},{
				id:'4',
				title:'Android'

			},{
				id:'5',
				title:'Hadoop'

			},{
				id:'6',
				title:'Web前端'

			},{
				id:'7',
				title:'人工智能'

			},{
				id:'8',
				title:'PHP'

			}],
			search_data:'',
      choice: 'position',
      dataLists: []
		}
	},
	methods:{
		jobClick : function(i){
			// console.log(i.title);
			this.search_data = i.title;
		},
		search:function(){
			$.get(`${API_PROXY}http://47.100.121.23:8080/job/main/jobSearch`,{search:this.search_data,choice:this.choice},(res)=>{
				this.getDataList(res)
				// this.$emit('getDataLists', this.dataLists)
			})
      // var _self = this
      // $.ajax({
      //   type: 'GET',
      //   url:  + '' +  + '' + ,
      //   dataType: 'jsonp',
      //   success: function (result) {
      //     _self.getDataList(result)
      //     _self.$emit('getDataLists', _self.dataLists)
      //   }
      // })
		},
    getDataList(res) {
			if(this.$route.path != '/Jobs'){
				this.dataLists = res.data
				this.$router.push({name:'Jobs',params:{data:this.dataLists}})
			}else{
				this.$emit('getDataLists',res.data)
			}
			
      // console.log(this.dataLists)
    },
    showChoice(value) {
      this.choice = value.srcElement.value
    }
	}
}
</script>
<!-- <script>
	$(function(){
		console.log($('.form-select option').value);
	})
</script> -->
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.bg{
	background: url(../../../assets/images/bg.jpg) center;

}
.overlay-bg{
	background-image: -webkit-linear-gradient(0deg, #bfacff 0%, #795fff 100%);
}
.form-c{
	display:inline-block;
}
.btn{
	margin-left:1rem;
	margin-right:2rem;
    background-color: #49e4fa;
    color:#fff;
}
.form-content{
	dispaly:inline-block;
	text-align:center;
}
.form-control{
	height:35px;
	width:300px;
	margin-left:2rem;
}
.form-select{
	height:35px;
	width:100px;
	color: #777777;
    font-family: "Poppins", sans-serif;
}
option{
	color: #777;
    font-family: "Poppins", sans-serif;
}
.tips{
	color: #49e4fa;
}
.jobs{
	color:#fff;
	padding:2px 5px;
	cursor: pointer;
	transition:all 0.8s;
}
.jobs:hover{
	background-color:#49e4fa;
	border-radius:5px;
	text-decoration:none;
}
@media only screen and (min-width:375px) and (max-width: 580px){
	.span1{
		font-size:25px;
	}
	.form-control{
		width:100%;
		margin-left:0;
	}
}
@media only screen and (max-width:375px){
	.span1{
		font-size:22px;
	}
	.form-control{
		width:100%;
		margin-left:0;
		padding:0;
	}
}

</style>
