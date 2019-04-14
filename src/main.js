// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import $ from 'jquery'
import echarts from 'echarts'
import ajax from './assets/script/ajax.js'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import './assets/styles/bootstrap.min.css'
import './assets/script/bootstrap.min'


Vue.prototype.$http = ajax
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
fastClick.attach(document.body)//300ms点击事件延迟


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
