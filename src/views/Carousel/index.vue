<template>
  <div>
    <ye-page :currentPage.sync="currentPage" >
      <first ></first>
    </ye-page>
    <ye-page :currentPage.sync="currentPage"  >

    </ye-page>
    <ye-page :currentPage.sync="currentPage" >

    </ye-page>
    <ye-page :currentPage.sync="currentPage">

    </ye-page>

    <!--sync写法满足不了复杂的动画监听-->
    <page-controller  :currentPage="currentPage" :pageNum="options.length"  @changePage="changePage"></page-controller>

  </div>
</template>

<script>
  import yeCarousel from "../../components/Carousel/yeCardPage"
  import pageController from "./components/pageController"
  import  first from "./components/first"

  // 页面进出动画
  function afterEnterAnimate(el) {
    el.$el.querySelector('.banner-bin').classList.remove('active');


  }
  function beforeLeaveAnimate(el) {
    el.$el.querySelector('.banner-bin').classList.add('active');


  }
    export default {
        name: "index",
      components:{
        "ye-page":yeCarousel,
        "page-controller":pageController,
        "first":first,
      },
      data(){
          return{
            show:true,
            currentPage: 1,
            direction:"x",
            options: [
              {
                background: 'rgba(46, 153, 229, 1)',
                color: '#fff',
                isCenter: true,
                direction:"x",
                afterEnter: afterEnterAnimate,
                // the function after page show
                beforeLeave: beforeLeaveAnimate
              },
              {
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
              // the function before page show

              afterEnter: afterEnterAnimate,
              // the function after page show
              beforeLeave: beforeLeaveAnimate

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

            }],
            components:{

            }
          }
      },
      created(){

      },
      methods:{
          //动画切换效果
          changePage(index){
            // let beforeIndex = this.currentPage - 1;
            // let leaveFunction = this.options[beforeIndex].beforeLeave;
            // typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);

            this.currentPage = index;

            // let nextIndex = index - 1;
            // let enterFunction = this.options[nextIndex].afterEnter;
            // this.$nextTick(function() {
            //   typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
            // })
          },
          beforeEnter: function (el) {
            console.log(el)
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
          },
          initPage(){

            this.$children.forEach((child, index) => {
              if (child.option == null) {
                if(this.options[index]){
                  let childOption = this.options[index];
                  this.$set(childOption, 'index', index + 1);
                  child.option = childOption;
                }
              }
            });
          }

      },
      mounted(){
        this.initPage();
      }

    }
</script>

<style scoped>




</style>
