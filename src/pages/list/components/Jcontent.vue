<template>
<div class="jcontent">
	<div class="sort">
		<ul class="Hul">
			<li @click="tabsSwitch(i)" v-for="(tab,i) in tabsName" :class="{active:i === index}" class="hli" :key="tab.id"><router-link to="#" class="tab-link" :class="{active:i === index}">{{tab.title}}</router-link></li>
		</ul>
		<div class="cards">
			<div class="tab-card" style="display: block;">
				<table>
					<tr class="table-h">
						<th>职位名称</th>
						<th>职位月薪</th>
						<th>公司名称</th>
						<th>工作地点</th>
						<th>发布时间</th>
					</tr>
					<tr v-for="list in dataLists" class="list" :key="list.id" >
						<td><router-link to="/Jobs/Jdetails" class="list-link">{{list.position}}</router-link></td>
						<td class="list-money">{{list.salary}}</td>
						<td>{{list.company}}</td>
						<td>{{list.place}}</td>
						<td class="list-time">{{list.time}}</td>
					</tr>

				</table>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
import bus from '../../../assets/script/bus'	
import axios from 'axios'
export default {
	name: 'ListJcontent',
	props:{
		Lists1: Array,
		index: Number

	},
	data (){
		return{
			tabsName:[{
				id:'01',
				title:'智能匹配',
			},{
				id:'02',
				title:'薪酬最高',

			},{
				id:'03',
				title:'最新发布',

			}],
			active:false,
			dataLists:[],
			jobData: ''

		}
	},
	created(){
        this.getDataDetail()
		// this.display = this.Lists1.length;
	},
    mounted () {
		var self = this;
		bus.$on("toSon",function(msg){
			self.jobData = msg
		})
		console.log(self.jobData)
	},
	methods:{
		tabsSwitch: function(index) {
			this.$emit('tabs', index)
		},
		// getDataDetail() {
		// 	axios.get('/job/main/jobSearch?search=java&choice=position')
		// 	.then(this.getDataList)
		// },
		getDataDetail() {
			axios.get('/job/job/main/jobSearch',{
			params:{
				search:'java',
				choice:'position'
			}
			})
			.then(this.getDataList)
		},
		getDataList(res) {
		  this.dataLists = res.data.data
		  console.log(res.data)
		}
		
	},
	components:{
	}
}	
</script>

<style lang="stylus" scoped>
.jcontent{
	width:100%;
	background:#f4f6f9;
	height:1250px;
}
.sort{
	width:80%;
	background:#fff;
	margin:auto;
	height:1250px;
	position:relative;
}
.Hul{
	position:absolute;
	top:180px;
	width:100%;
	overflow:hidden;
	margin-top:10px;
	margin-bottom:10px;
}
.hli{
	float:left;
	line-height:50px;
	height:50px;
	font-size:1.5em;
	width:10%;
	text-align:center;
	background:#fff;
	margin-right:10px;
}
.tab-link{
	color:#151515;
	text-decoration:none;
}
.active{
	background:#866aea;
	color:#fff;
}

.cards{
	position:absolute;
	top:250px;
	width:100%;
}
table{
	width:100%;
}
.tab-card{
	margin:0 6%;
}
.table-h{
	height: 45px;
	line-height:45px;
    font-size: 15px;
    border-top: 2px solid #f4f6f9;
    border-bottom: 1px solid #f4f6f9;
}
.list{
	height:60px;
	line-height:60px;
	font-size:13px;
	border-bottom:1px solid #f4f6f9;
}
.list-link{
	text-decoration:none;
	color:#866aea;
}
.list-money{
	color: #e24949;
    font-size: 15px;
	
}
.list-time{
	color:#6f6b6b;
}
</style>