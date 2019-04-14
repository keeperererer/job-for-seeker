<template>
<div class="left">
	<div class="left1">
		<span class="header1">职位亮点</span>
		<ul class="header-ul">
			<li v-for="tip of tipList" class="header-li">{{tip.name}}</li>
		</ul>
	</div>
	<div class="left2">
		<span class="header1">职位信息</span>
		<ul class="header-ul">
			<span>一、岗位要求</span>
			<li v-for="need of needList" class="left2-li">{{need.title}}</li>
		</ul>
		<ul class="header-ul">
			<span>二、职位方向</span>
			<li v-for="dir of dirList" class="left2-li">{{dir.title}}</li>
		</ul>
		<ul class="header-ul">
			<span>三、福利待遇</span>
			<li v-for="weal of wealList" class="left2-li">{{weal.title}}</li>
		</ul>
		<ul class="header-ul">
			<li v-for="con of conList" class="left2-li">{{con.title}}</li>
		</ul>
	</div>
	<div class="left3">
		<span class="header1">公司概况</span>
		<ul class="header-ul">
			<span class="left3-span">简介</span>
			<li class="left2-li" v-model="value1">{{value1}}</li>
		</ul>
		<ul class="header-ul">
			<span class="left3-span">公司三大主营业务：</span>
			<li class="left2-li" v-model="value2">{{value2}}</li>
		</ul>
		<ul class="header-ul">
			<span class="left3-span">部分资质荣誉</span>
			<li v-for="honer of honerList" class="left2-li">{{honer.title}}</li>
		</ul>
	</div>
</div>
</template>

<script>

export default {
	name: 'ListJdleft',
	data(){
		return{
			tipList:[{
				name:'五险一金'
			},{
				name:'年底双薪'
			},{
				name:'餐补'
			},{
				name:'员工旅游'
			},{
				name:'高温补贴'
			},{
				name:'节日福利'
			}],
			needList:[{
				title:'1、有较强的学习能力、语言沟通能力；',
			},{
				title:'2、希望转型到高薪职位的IT从业人员；或在销售、文职、财务、管理、建筑、采购及预算等领域工作多年，想进入软件开发行业的从业者；',
			},{
				title:'3、毕业后，没有机会进入理想行业的大学生，特别是：计算机、信息管理、经济管理、工商管理、财务金融、工业工程、自动化、物流供应链、电子商务、机械类、应用数学、法律等专业。',
			},{
				title:'4、有计算机语言基础者优先，如：C语言、JAVA、.Net、PHP等',
			},],
			dirList:[{
				title:'JAVA软件开发工程师、软件测试工程师、网络工程师、前端开发工程师等。'
			},{
				title:'职业发展：程序员-高级软件工程师-领队系统分析-项目经理-首席技术官'
			}],
			wealList:[{
				title:'1、签订劳动合同，公司为员工购买五险一金，享受国家规定的保险福利待遇；'
			},{
				title:'2、薪资结构：底薪+绩效奖金+项目提成+项目奖金+社会福利+其他补贴等，试用期1-3个月，转正后享有平均月薪范围5000-8000元；'
			},{
				title:'3、上班时间：9:00-17:00，中午休息一个半小时，周末双休，不加班，享受国家法定节假日；'
			},{
				title:'4、定期组织员工参加户外活动、体育比赛等业余活动，丰富员工的工作生活；'
			},{
				title:'5、良好的晋升机制，广阔的晋升空间；'
			}],
			conList:[{
				title:'联系电话：0731-85067799  QQ：2833958490 '
			},{
				title:'周一至周五9:00-17:00 均可参加面试'
			},{
				title:'工作时间：早上9:00-17:00，周末双休'
			},{
				title:'工作地址：长沙开福区芙蓉路一段458号平安大厦7楼'
			},{
				title:'工作地址 长沙开福区芙蓉路一段458号平安大厦7楼'
			}],
			value1:'自1988年开始，华信智原致力于信息技术研发和专业人才培养，2005年在北京成立华信智原教育技术有限公司，总部设于北京中关村高新技术园区。公司集软件开发、服务外包、大数据应用及企业技术服务、高端人才培训、高等教育实训基地建设于一体，被认定为国家高新技术企业，享受国家专项政策扶持与补贴。公司现已在16个省市成立分、子公司，并联合国内外知名软件、互联网、大数据等高科技企业，在全国建立了60多个高端人才培养基地和 “DT卓越工程师培养基地”,承担了多项国家部委和行业协会委托的专项工程和项目，取得了优异成绩，赢得了社会及业内的广泛好评。',
			value2:'软件服务外包：是公司近年来发展较快的业务，业务涵盖软件项目外包、工程师派遣、软件项目开发等，与NTT Data、神州数码、长城软件、东软、交通部科技研究院等200多家国内外知名企事业单位建立了长期稳定的合作，是众多客户信赖的技术服务提供商和战略合作伙伴。   大数据应用及企业技术服务：是公司主要业务之一，2012年成立“大数据分析技术研究中心”，建立大数据分析环境，系统研究大数据应用技术，是国内较早系统研究和开发大数据应用技术的公司之一。公司长期为软件、信息技术等大企业提供系统的技术咨询、项目解决方案、大数据应用等技术服务，建立合作知名企业300多家。高端人才培训：是公司近年来致力发展的业务，承担了多项国家级和行业协会专项人才培训工程和项目。专注大学生高端人才培训和企业技术人才培训等，为东软、长软、SJC、苍穹软件等300多家企业提供了人才培训服务。公司联合国内外知名高科技企业，在16个省市建立了“高校DT实训基地”、“DT卓越工程师培养基地”、“IT高技能人才培养基地”等高端人才培养基地，与全国200余所高校开展合作，共同培养DT工程师、软件开发工程师、云计算、新媒体、移动互联等方面技术精英，已累计为社会、企业培养和输送一万余名DT精英人才。',
			honerList:[{
				title:'1、28年辉煌历程，走出一条从“IT”迈入“DT”时代的高技能精英人才培养之路。'
			},{
				title:'2、在北京中关村成立高科技软件公司并在美国硅谷成立合资分公司，借助于硅谷的前沿科技、强大研发实力开发适合中国的应用技术训练平台和课程设计'
			},{
				title:'3、成为百度、腾讯、阿里、微软、华为、红帽、东软、长软等多家跨国知名公司合作供应商，人才共建合作伙伴，成立“DT中国精英战略联盟”，共建DT精英培养基地。'
			},{
				title:'4、在全国16个省市建立“高校DT实训基地”和“DT卓越工程师培养基地”，与全国200余所高校建立了大学生实训联合培养基地。'
			},{
				title:'5、联合战略合作单位及专业院校，在全国建立16个DT云技术实训平台，成立“大数据分析技术实验中心”，开创了DT时代大数据精英人才培养的先河。'
			},{
				title:'6、中国软件行业协会、科技部火炬中心、中国国际人才交流基金会共同批准的“中国软件专业人才培养工程”全国独家运营管理和服务提供商。'
			},{
				title:'7、国家科技部门认定的“国家高新技术企业”，国家高新技术专项扶持企业。'
			}]

		}
	}
}	
</script>

<style lang="stylus" scoped>
span{
	font-size:14px;
}
.left{
	width:60%;
	display:inline-block;
	margin-bottom:50px;
}
.header1{
	font-size:18px;
	color:#333;
	position:relative;
	width:100%;
	display:inline-block;
}
.header1:before {
    content: '';
    display: block;
    width: 85%;
    height: 1px;
    background: #F0F0F0;
    position: absolute;
    top: 50%;
    right: 0;
}
.header1:after{
	content:'';
	display:block;
	width:22px;
	height:2px;
	background:#1787fb;
	position:absolute;
	top:28px;
	left:0;
}
.left1,
.left2,
.left3{
	width:87%;
	margin-left:13%;
	margin-bottom:30px;
}	
.header-ul{
	width:100%;
	overflow:hidden;
    margin-top:20px;
    margin-bottom:20px;
}
.header-li{
	line-height:30px;
	text-align:center; 
	width:10%;
	height:30px;
	float:left;
	outline: none;
    border: 1px solid rgb(220, 222, 226);
    border-radius: 2px;
    margin: 0px 10px 10px 0px;
    color:#999;
    font-size: 12px;
}
.left2-li{
	font-size:14px
	line-height:35px;
}
.left3-span{
	font-weight:600;
	color:#5a5757;
}
</style>