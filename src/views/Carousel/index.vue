<template>

  <div>
     <ye-page :currentPage="currentPage" :imgSrc="components.imgSrc" :direction="direction" :pageIndex="1" :isCenter="true">
       <h1 class="text-center">项目介绍</h1>
       <section class="animate" ref="section1">
         <p class="demo-intro">Vue-FullPage是一个使用Vue制作的全屏页面模板，是为了学习Vue而制作的一个Vue项目</p>
         <p class="demo-intro">使用到的相关npm包有：
           <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>、
           <a href="https://github.com/vuejs-templates/webpack-simple" target="_blank">webpack-simple模板</a>
         </p>
         <p class="demo-intro">支持：导航条滚动，滚轮滚动，触摸滚动</p>
       </section>
     </ye-page>

    <ye-page :currentPage="currentPage" :direction="direction" :pageIndex="2">

    </ye-page>
    <ye-page :currentPage="currentPage" :direction="direction" :pageIndex="3">

    </ye-page>
    <ye-page :currentPage="currentPage" :direction="direction" :pageIndex="4">

    </ye-page>
    <ye-page :currentPage="currentPage" :direction="direction" :pageIndex="5">

    </ye-page>
    <page-controller  ></page-controller>

  </div>
</template>

<script>
  import yeCarousel from "../../components/Carousel/yeCardPage"
  import pageController from "./components/pageController"

  // 页面进出动画
  function afterEnterAnimate($child) {
    $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right');
  }
  function beforeLeaveAnimate($child) {
    let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right';
    $child.$el.querySelector('.animate').classList.add(moveType);
  }
    export default {
        name: "index",
      components:{
        "ye-page":yeCarousel,
        "page-controller":pageController,
      },
      data(){
          return{
            currentPage: 1,
            direction:"x",
            options: [{
              // the color of background
              background: 'rgba(229, 199, 46, 1)',
              // the color of text
              color: '#fff',
              // is content center
              isCenter: true,
              // the function before page show
              afterEnter: afterEnterAnimate,
              // the function after page show
              beforeLeave: beforeLeaveAnimate
            }, {
              background: 'rgba(79, 204, 76, 1)',
              color: '#fff',
              isCenter: true,
              afterEnter: afterEnterAnimate,
              beforeLeave: beforeLeaveAnimate
            }, {
              background: 'rgba(233, 84, 84, 1)',
              color: '#fff',
              isCenter: true,
              afterEnter: afterEnterAnimate,
              beforeLeave: beforeLeaveAnimate
            }, {
              background: 'rgba(46, 153, 229, 1)',
              color: '#fff',
              isCenter: true,
              afterEnter: afterEnterAnimate,
              beforeLeave: beforeLeaveAnimate
            }],
            components:{
              imgSrc:"https://images.apple.com/v/mac/home/y/images/home/imac_pro_large_2x.jpg",
            }
          }
      },
      computed:{

      }
    }
</script>

<style scoped>

</style>
