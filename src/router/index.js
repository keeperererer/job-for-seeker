import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Jobs from '@/pages/list/Jobs'
import Person from '@/pages/list/Person'
import Watch from '@/pages/list/Watch'
import Jdetails from '@/pages/list/components/Jdetails'
import Error from '@/pages/home/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/Jobs',
    	name:'Jobs',
    	component:Jobs
    },{
    	path:'/Person',
    	name:'Person',
    	component:Person
    },{
    	path:'/Watch',
    	name:'Watch',
    	component:Watch
    },{
      path:'/Jobs/Jdetails',
      name:'Jdetails',
      component:Jdetails
    },{
      path:'*',
      component: Home
    }
  ]
})
