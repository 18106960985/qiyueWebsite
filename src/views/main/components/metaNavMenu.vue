<template>
  <!--这是一个导航栏-->
  <div  class="meta-head" :class="{active:currentPage >1}">
    <!--左侧 LOGO预设-->
    <div class="head-left">
    <img src="http://www.goomay.com/upload/201704/1491380439.png"/>
    </div>
    <!--居中的菜单-->
    <div class="visible-lg-block" >
      <div class="nav-line"  ref="slider" :style="{width:slider.width , left :slider.left}"></div>
      <ul ref="navBox">
       <li v-for="index in ulOptions"  @mouseenter="setSliderStyle($event.target)"  @mouseleave="initSlider"  @click="changePage(index.index),setSliderStyle($event.target)" :class="{active: index.index == currentPage}" ref="targetEle">
         <label>{{index.name}}</label>
       </li>
     </ul>
    </div>
    <!--右侧联系电话 以及 左侧导航呼出-->
    <div class="head-right">
      <svg-icon icon-class="tel" />
      <b>0592-7195528</b>
    </div>
    <div class="head-rights">
      <ol :class="{active:sidebar.opened}" @click="toggleSideBar">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
</template>

<script>
  import { mapGetters} from  'vuex'
    export default {
        name: "meta-nav-menu",
        props:{
          currentPage:{
            type:Number,
            default: 0,
          },
          ulOptions: {
            type: Array,
            default:{
              index: 1,
              name: "暂无菜单"
            }
          }
        },
      data(){
          return {
               slider:{
                 width: "0px",
                 left: '0px'
               },
          }
      },
      computed: {
        ...mapGetters([
          'sidebar'
        ]),
        nextPage(){
          let pageNum =this.currentPage;
          let pageSize = this.ulOptions.length;
          return pageNum === pageSize ?pageSize:pageNum +1;
        },
        prevPage(){
          let pageNum =this.currentPage;
          let pageSize = this.ulOptions.length;
          return pageNum === 1 ? 1 :pageNum -1;
        }
      },
       watch:{

       },
      methods:{
        toggleSideBar(){
          this.$store.dispatch("toggleSideBar");
        },
        changePage(index) {
          this.$emit("changPage", index);
          this.setSliderStyle(this.$refs.targetEle[index-1]);
        },
        initSlider(){
          this.setSliderStyle(this.$refs.targetEle[this.currentPage-1]);
        },
        setSliderStyle(targetELe){
          //属性声明
          let navBox = this.$refs.navBox,
            curOffsetLeft = targetELe.offsetLeft,
            curOffsetWidth = targetELe.offsetWidth,
            childLabeWidth = targetELe.lastChild.offsetWidth,
            BoxLeft =  navBox.offsetLeft,
            BoxWidth = navBox.offsetWidth,
            startOffset  =  BoxLeft - (BoxWidth/2)+curOffsetLeft +((curOffsetWidth - childLabeWidth)/2 -5);//起始偏移量

          this.slider.width = childLabeWidth +5 + "px";
          this.slider.left = startOffset + "px";
        },
        changLeftMenu(isActive){
          this.$emit("changLeftMenu",isActive);
        }
      },

      mounted(){
        let _this = this;
        let timer = null;
        let start = 0;
        // 滚轮处理 原本放在index想了想解耦就放menu里面控制了
      function scrollHandler(direction){

          // 防止重复触发滚动事件
          if (timer != null) {
            return;
          }
          if (direction === 'down') {
            _this.changePage(_this.nextPage);
          } else {
            _this.changePage(_this.prevPage);
          }
          //为了防止滚动太快出现，变换太快，设置为1秒只能切换一次
          timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
          }, 800);
        }

        function handle(delta) {

          let direction = delta> 0 ? 'up':'down';
          scrollHandler(direction);
        }//from www.fengfly.com
        function wheel(event){
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
            delta = event.wheelDelta/120;
            if (window.opera) delta = -delta;
          } else if (event.detail) {
            delta = -event.detail/3;
          }
          if (delta)
            handle(delta);
        }
        if (window.addEventListener)
          window.addEventListener('DOMMouseScroll', wheel, false);
        window.onmousewheel = document.onmousewheel = wheel;
        this.initSlider();
      }

    }
</script>
<style scoped>
  .meta-head {
    position: absolute;
    display: table;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    width: 100%;
    height: 90px;
    background: rgba(0,0,0,0);
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
  }
  .meta-head.active {
    height: 70px;
    background: rgba(0,0,0,.5);
  }

  /*LOGO区域*/
  @media (min-width: 300px){
    .meta-head .head-left {
      width: 70%;
    }
  }

  @media (min-width: 768px){
    .meta-head .head-left {
      width: 50%;
    }

  }
  @media (min-width: 1200px){
    .meta-head .head-left {
      width: 20%;
    }
  }
  @media (min-width: 1440px){
    .meta-head .head-left {
      width: 25%;
    }
  }
  .meta-head .head-left {
    position: absolute;
    left: 2.5%;
    top: 50%;
    color: #fff;
    cursor: pointer;
    transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
  }

  .meta-head .head-left img {
    max-width: 100%;
    max-height: 90px;
    transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform-origin: left center;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -o-transform-origin: left center;
    -webkit-transform-origin: left center;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    vertical-align: middle;
    float: left;
  }

  .meta-head.active .head-left img {
    transform: scale(.777777);
    -moz-transform: scale(.777777);
    -ms-transform: scale(.777777);
    -o-transform: scale(.777777);
    -webkit-transform: scale(.777777);
  }






  .visible-lg-block {
    display: none !important;
  }

  /*menu区域*/
  @media (min-width: 1200px){
    .visible-lg-block {
      display: block !important;
    }
  }


  ul {
    margin-top: 0;
    margin-bottom: 11px;
  }

  .meta-head ul {
    position: absolute;
    left: 50%;
    top: 50%;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0;
    transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
  }



  .meta-head ul li {
    list-style: none;
    cursor: pointer;
    padding: 20px;
    margin: 0;
    font-size: 20px;
    color: #ccc;
    display: inline-block;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
  }
  .meta-head ul li.active {
    color: #ff9900;
  }

  .meta-head hr {
    display: block;
    position: absolute;
    width: 0;
    height: 3px;
    border: 0;
    margin: 0;
    padding: 0;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    background: #ff9900;
    top: 0;
    left: 0;
  }

  .meta-head .nav-line {
    display: block;
    position: absolute;
    width: 0;
    height: 3px;
    border: 0;
    margin: 0;
    padding: 0;
    transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    -webkit-transition: .3s;
    background: #ff9900;


  }

  .meta-head .head-right {
    position: absolute;
    right: 5%;
    top: 50%;
    margin: 0;
    height: 28px;
    padding-right: 28px;
    transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
  }
  .meta-head.active .head-right {
    height: 24px;
    padding-right: 24px;
  }

  .meta-head .head-right  .svg-icon  {
    color: #ff9900;
    font-size: 20px;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 26px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
    overflow: hidden;
    transition: .3s;
    -moz-transition: .3s;


  }
  .meta-head.active .svg-icon {
    font-size: 14px;
    width: 24px;
    height: 24px;
    line-height: 20px;
  }
  @media (max-width: 767px) {
    .meta-head .head-right .svg-icon {
      margin-right: 28px;
    }
  }


  .meta-head .head-right b{
    color: #ff9900;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 26px;
    height: 28px;
    line-height: 30px;
    float: left;
    display: block;
    transition: .3s;


  }
  .meta-head.active .head-right b {
    font-size: 20px;
    height: 24px;
    letter-spacing: 0;
    line-height: 24px;
  }
  @media (max-width: 767px){
    .meta-head .head-right b{
      display: none !important ;
    }
  }

  .meta-head .head-rights {
    position: absolute;
    right: 2.5%;
    top: 50%;
    height: 28px;
    transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    -webkit-transform: translate(0,-50%);
    margin: 0;
    padding-right: 28px;
  }

  .meta-head.active .head-rights {
    top: 46%;
    height: 20px;
  }

  .meta-head .head-rights ol{
    font-style: normal;
    margin: 1px;
    padding: 0;
    width: 26px;
    height: 26px;
    display: block;
    cursor: pointer;
  }
  .meta-head.active .head-rights ol {
    width: 22px;
    height: 22px;
  }
  .meta-head .head-rights ol li{
    width: 11px;
    height: 11px;
    float: left;
    margin: 1px;
    background: #ff9900;
    display: block;
    overflow: hidden;
  }
  .meta-head.active .head-rights ol li {
    width: 9px;
    height: 9px;
  }
  .meta-head .head-rights ol.active li{
    background: #fff;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
  }



</style>
