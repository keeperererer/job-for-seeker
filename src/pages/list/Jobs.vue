<template>
	<div>
		<list-jheader></list-jheader>
		<list-jcontent :Lists="Lists" :index="index" @tabs="setIndex"></list-jcontent>
		<v-pagination :total="total" :current-page='current' :display="display" @pagechange="pagechange"></v-pagination>
	</div>
</template>

<script>

import ListJheader from './components/Jheader'
import ListJcontent from './components/Jcontent'
import pagination from './components/Pagination'

import axios from 'axios'

export default {
	name: 'Jobs',
	components: {
		ListJheader,
		ListJcontent,
		'v-pagination':pagination
	},
	data(){
		return{
			Lists:[],
			total:0,//总条数
			display:15,//每页显示条数
			current:1,//当前的页数
			index: 0,
		}
	},
	methods:{
		setIndex(index){
			this.index = index;
			this.getJobInfo();
		},
		getJobInfo(){
			const apis = [
				'autoMatch',
				'salary',
				'time'
			]
			let job = apis.find((val,i) => this.index == i)
			axios.get(`/job/job/jobLibrary/${job}`)
				.then(this.getJobInfoSucc)
		},
		getJobInfoSucc(res){
			let {display,current} = this;
			let num = display * current;
			let a = num - display;
			res=res.data;
			console.log(res.data)
			if(res.ret&&res.data){
				this.Lists=res.data
				this.total = res.data.total
			}
		},
		pagechange:function(currentPage){
       			console.log(currentPage);

     	}
	},
	created(){
		this.getJobInfo()

	},
	mounted(){

	}
}
</script>

<style>

</style>