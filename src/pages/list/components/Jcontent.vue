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
          <tr v-for="list in fatherData.slice((current - 1) * display, current * display)" class="list" :key="list.id"  v-if='isShowData'>
            <td><router-link to="/Jobs/Jdetails" class="list-link">{{list.position}}</router-link></td>
            <td class="list-money">{{list.salary}}</td>
            <td>{{list.company}}</td>
            <td>{{list.place}}</td>
            <td class="list-time">{{list.time}}</td>
          </tr>
					<tr v-for="list in jobData.slice((current - 1) * display, current * display)" class="list" :key="list.id"  v-if="jobData">
						<td><router-link to="/Jobs/Jdetails" class="list-link">{{list.position}}</router-link></td>
						<td class="list-money">{{list.salary}}</td>
						<td>{{list.company}}</td>
						<td>{{list.place}}</td>
						<td class="list-time">{{list.time}}</td>
					</tr>
          <tr v-for="list in Lists.slice((current - 1) * display, current * display)" class="list" :key="list.id"  v-if="Lists">
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
  <el-pagination
    class="pagination"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage1"
    :page-size="display"
    layout="total, prev, pager, next"
    :total="total">
  </el-pagination>
</div>

</template>

<script>
import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
export default {
	name: 'ListJcontent',
	props:{
    Lists: Array,
		index: Number,
    fatherData: Array
	},
	data (){
		return{
      total:0,//总条数
      display:15,//每页显示条数
      current:1,//当前的页数
      currentPage1: 1,
			tabsName:[{
				id:'01',
				title:'智能匹配',
        api: 'autoMatch'
			},{
				id:'02',
				title:'薪酬最高',
        api: 'salary'
			},{
				id:'03',
				title:'最新发布',
        api: 'time'
			}],
			active:false,
      jobData: [],
      btn: 'autoMatch',
      isShowData: false,
			ListData: [],
			linkData:[],
			i : 0
		}
	},
  mounted () {
    this.getDataDetail()
	},
	watch:{
		fatherData:{
			handler(news,old){
				if(old){
					this.ListData = old
					this.isShowData = true
					this.jobData = []
				}
				this.total = news.length
			},
			deep:true
		}
	},
	methods:{
    getDefaultData () {
      var _self = this
       $.ajax({
         type: 'GET',
         url:  API_PROXY + 'http://47.100.121.23:8080/job/jobLibrary/' + this.btn,
         dataType: 'jsonp',
         success: function (result) {
           _self.jobData = result.data
           _self.total = result.data.length
         }
       })
    },
		tabsSwitch: function(index) {
			if(this.fatherData == 'undefined' || this.fatherData.length == 0){
				this.$emit('tabs', {index:index,data:this.linkData})
			} else{
				this.isShowData = false
				this.$emit('tabs', {index:index,data:this.fatherData})
			}
			if (index === 0 && this.fatherData.length === 0) {
			    this.getDefaultData()
      }
			this.jobData = []
    },
    getDataDetail() {
			$.get(`${API_PROXY}http://47.100.121.23:8080/job/jobLibrary/${this.btn}`,(res) =>{
				 this.getDataList(res)
			})
      // var _self = this
      // $.ajax({
      //   type: 'GET',
      //   url:  + '' + this.btn,
      //   dataType: 'jsonp',
      //   success: function (result) {
      //     _self.getDataList(result)
      //   }
      // })
    },
    getDataList(res) {
			this.linkData = this.$route.params.data
      this.jobData = [...this.linkData,...res.data]
			this.total =  this.fatherData.length || this.Lists.length
			//res.data.length ||
    },
    handleCurrentChange(val) {
      this.current = val
    }
	}
}
</script>

<style lang="stylus" scoped>
.jcontent{
  position: relative;
	width:100%;
	background:#f4f6f9;
	height: 1250px;
}
.pagination{
  width: 80%;
  margin:auto;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  bottom: -60px;
  left: 155px;
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
