<template>

  <div>
     <ye-page :currentPage.sync="currentPage" >
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

    <ye-page :currentPage.sync="currentPage" :direction="direction" :pageIndex="2">

    </ye-page>
    <ye-page :currentPage.sync="currentPage" :direction="direction" :pageIndex="3">

    </ye-page>
    <ye-page :currentPage.sync="currentPage" :direction="direction" :pageIndex="4">

    </ye-page>

    <page-controller  :currentPage.sync="currentPage" :pageNum="options.length"></page-controller>

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
              background: '#1a1a1a',
              // style属性
              color: '#1a1a1a',
              //背景图片
              bimgSrc:"",
              // 内联样式
              style:{
                backgroundImage: "url('https://images.apple.com/v/mac/home/y/images/home/imac_pro_large_2x.jpg'",
                backgroundSize:"50% 100%",
                backgroundPosition: "center",
              },
              // 是否居中
              isCenter: true,
              //切换方向
              direction:"x",

            }, {
              background: '#fff',
              color: '#fff',
              style:{
                backgroundImage: "url('https://images.apple.com/v/home/dn/images/heroes/iphone-x/iphone_x_large_2x.jpg'",
                backgroundSize:"100% 50%",
                backgroundPosition: "center",
              },
              isCenter: true,
              direction:"x",


            }, {
              background: '#fafafa',
              color: '#fff',
              style:{
                backgroundImage: "url('https://images.apple.com/cn/home/images/tier-one-heroes/apple-watch/watch_large_2x.jpg'",
                backgroundSize:"50% 50%",
                backgroundPosition: "center",
              },
              isCenter: true,
              direction:"x",

            }, {
              background: 'rgba(46, 153, 229, 1)',

              color: '#fff',
              isCenter: true,
              direction:"x",

            }],
            components:{

            }
          }
      },
      computed:{

      },
      mounted(){
        let size= this.options.length -1;
        this.$children.forEach((child, index) => {
          if (index >size) return;
          if (child.option == null) {
            let childOption = this.options[index];
            this.$set(childOption, 'index', index + 1);
            child.option = childOption;
          }

        });
      }
    }
</script>

<style scoped>

</style>
