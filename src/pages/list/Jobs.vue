<template>
	<div>
		<list-jheader @toFatherData="showFather" ref='search'></list-jheader>
		<list-jcontent :index="index" @tabs="setIndex" :fatherData="fatherData" :Lists="Lists"></list-jcontent>
	</div>
</template>

<script>

import ListJheader from './components/Jheader'
import ListJcontent from './components/Jcontent'

import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
	name: 'Jobs',
	components: {
		ListJheader,
		ListJcontent,
	},
	data(){
		return{
			index: 0,
      fatherData: [],
			Lists: [],
			linkList:[],
			searchData:[]
		}
	},
	methods:{
		setIndex(index){
			this.Lists = []
			this.linkList = index.data
			this.index = index.index;
      this.getJobInfo();
		},
		getJobInfo(){
			const apis = [
				'autoMatch',
				'salary',
				'time'
			]
			$.get(`${API_PROXY}http://47.100.121.23:8080/job/jobLibrary/${apis[this.index]}`,(res)=>{
				// if(this.index != 0){
				// 	this.fatherData = []
				// }
				this.getDataList(res)
			})
      // var _self = this
      // $.ajax({
      //   type: 'GET',
      //   url: API_PROXY + '' + ,
      //   dataType: 'jsonp',
      //   success: function (result) {
      //       if (_self.index !== 0) {
      //        _self.fatherData = []
      //       }
      //     _self.getDataList(result)
      //   }
      // })
		},
    getDataList(res) {
			if(this.index == 0){
				if(this.fatherData.length == 0){
					this.Lists = [...this.linkList,...res.data]
				}else{			
					this.fatherData = [...this.fatherData,...res.data]
				}
			}else{
				this.Lists = [...res.data]
			}
    },
//		getJobInfoSucc(res){
//			let {display,current} = this;
//			let num = display * current;
//			let a = num - display;
//			res=res.data;
//			console.log(res.data)
//			if(res.ret&&res.data){
//				this.Lists=res.data
//				this.total = res.data.total
//			}
//		},
    showFather (msg) {
				const apis = [
				'autoMatch',
				'salary',
				'time'
			]
			$.get(`${API_PROXY}http://47.100.121.23:8080/job/jobLibrary/${apis[this.index]}`,(res)=>{
				this.fatherData = [...msg,...res.data]
			})
		},
	},
	created(){
		this.getJobInfo()
		
	},
	mounted(){
	},
}
</script>

<style>

</style>
