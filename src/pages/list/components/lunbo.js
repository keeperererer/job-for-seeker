class LunBo {
  constructor ({swiper,slides,slides_box,paginations,prev,next,autoplay = true,delay = 3000,transition = 300,frequency = 20,pagination_active_color = '#007aff'}) {
    this.swiper = swiper;//轮播的总框
    this.slides_box = slides_box;//轮播图的父框
    this.slides = slides;//轮播图，数组
    this.paginations = paginations;//分页器
    this.prev = prev;//上一页
    this.next = next;//下一页
    this.pagination_active_color = pagination_active_color;//分页器激活颜色
    this.autoplay = autoplay;//是否轮播
    this.delay = delay;//自动切换间隔
    this.transition = transition;//过渡间隔
    this.frequency = frequency;//过渡的频率
    this.tool = {
      date:undefined,//间隔定时器
      t_date:undefined,//过渡定时器
      index:0,//当前下标
      key:false,//轮播动画钥匙
    };//进行过渡的一些参数
    this.init();
  }
  init(){
    this.style();//初始化样式
    this.fnTool();//初始化过渡参数
    this.js();//初始化js
  }
  style(){
    this.style_swiper();
    this.style_slides_box();
  }
  fnTool(){
    this.tool.sliding_distance = parseInt(this.swiper.offsetWidth);//轮播一次的距离
    this.tool.no_active = getComputedStyle(this.paginations[0]).backgroundColor;//未被激活颜色
    this.paginations[this.tool.index].style.backgroundColor = this.pagination_active_color;//分页激活颜色
  }
  js(){
    if(this.autoplay)this.tool.date = setTimeout(this.js_slides_box,this.delay);
    this.eventInit();
  }
  eventInit () {
    this.swiper.addEventListener('mouseover',() => clearTimeout(this.tool.date)) 
    this.swiper.addEventListener('mouseout',() => {
      clearTimeout(this.tool.date);
      if(this.autoplay)this.tool.date = setTimeout(this.js_slides_box,this.delay);
    })
    if(this.paginations){
      this.paginations.forEach((data,i)=>{
        data.addEventListener('click',() => this.js_index(() => this.tool.index = i));
      })
    }
    if(this.prev){
      this.prev.addEventListener('click',() => {
        this.js_click_lr(-1);
      })
    }
    if(this.next){
      this.next.addEventListener('click',() => {
        this.js_click_lr(1);
      })
    }
  }
  style_swiper(){
    let swiper = this.swiper;
    swiper.style.overflow = 'hidden';
    swiper.style.position = 'relative';
  }
  style_slides_box(){
    let slides_box = this.slides_box;
    slides_box.style.left = -this.slides[0].offsetWidth + 'px';//第一个是最后一个的克隆
    slides_box.style.display = 'flex';
    slides_box.style.position = 'absolute';
  }
  //
  js_index(fntarget,fn) {
    if(this.tool.key) return;
    this.tool.key = true;
    this.ji_speed(fntarget());
    if(fn)fn()
    this.js_paginations();//分页设置
  }
  //+-1触发轮播
  js_click_lr(target){
    this.js_index(() => this.tool.index += target,() => {
      let slides_box = this.slides_box,
          max = this.paginations.length;
      //达到临界点时
      if(max === this.tool.index){
        this.tool.index = 0;
      }else if(this.tool.index === -1){
        this.tool.index = max - 1;
      }
    });
  }
  //自动播放
  js_slides_box = () => {
    this.js_click_lr(1);
    if(this.autoplay){
      clearTimeout(this.tool.date);
      this.tool.date = setTimeout(this.js_slides_box,this.delay);
    }
  }
  //分页颜色
  js_paginations(){
    this.paginations.forEach(data => {
      data.style.backgroundColor = this.tool.no_active;
    })
    this.paginations[this.tool.index].style.backgroundColor = this.pagination_active_color;
  }
  //目标路程和速度
  ji_speed (index) {
    clearTimeout(this.tool.date);//进行过渡时，间隔停止
    let Left = this.slides_box.offsetLeft,
        target_path = this.tool.sliding_distance * (index + 1) * -1,//目标路程
        distance;//获得路程差
    //如果目标路程小于当前路程，则为向左过渡
    distance = target_path - Left;
    let step = distance / (this.transition / this.frequency);//每一步的路程
    this.js_go(target_path,step);
  }
  //参数：目标路程，时间
  js_go = (target_path,step) => {
    let slides_box = this.slides_box,
        Left = slides_box.offsetLeft;
    //等于则退出
    if (Left == target_path) {
      this.js_go_handle();
      return;
    } 
    if ((step > 0 && Left + step > target_path) || (step < 0 && Left + step < target_path)){
        slides_box.style.left = target_path + 'px';
        this.js_go_handle();
        return;
    }
    slides_box.style.left = Left + step + 'px';
    clearTimeout(this.tool.t_date);//
    if (this.autoplay) this.tool.t_date = setTimeout(this.js_go,this.frequency,target_path,step);
  }
  //一些重用
  js_go_handle () {
    let slides_box = this.slides_box,
        max = this.paginations.length;
        //达到临界点时
        if(this.tool.index == 0){
          slides_box.style.left = this.tool.sliding_distance * - 1 + 'px';
        }else if(this.tool.index == max - 1){
          slides_box.style.left = max * this.tool.sliding_distance * -1 + 'px';
        }
    clearTimeout(this.tool.date);//进行过渡时，间隔停止
    this.tool.key = false;
    if (this.autoplay) this.tool.date = setTimeout(this.js_slides_box,this.delay);//自动开始
  }
}
export default LunBo
