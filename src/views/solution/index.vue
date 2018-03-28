<template>
  <div class="window-back" :style="{backgroundImage:backgroundImg}">
    <div class="solution-ctrl">
      <div class="ctrl-box ctrl-left">
        <svg-icon icon-class="leftPage"/>
      </div>
      <div class="ctrl-box ctrl-right">
        <svg-icon icon-class="rightPage" />
      </div>
    </div>

    <div class="table-box">
      <div class="table-cell">
        <!--标题-->
        <div class="title-box">
          <h1>我们提供的解决方案</h1>
          <h2><font color="#fff">深思熟虑，反复推敲</font></h2>
        </div>

        <!--方案展示列表 （类型）-->
        <div class="solution-box">
          <div class="solution-cut" >
            <!--展示列表-->
            <div class="solution-bin" v-if="answers" v-for="index in answers">
              <p class="em-fa n4" style="color: white">
                <svg-icon  v-if="index.svgIcon"  v-for="icon in index.svgIcon"   :icon-class="icon" :key="icon"></svg-icon>
              </p>
              <p  v-if="index.description" v-for="description in index.description">{{description}}</p>
            </div>

          </div>
        </div>
        <!--more-->
        <div class="case-more">
          <a title="更多"  >你以为这就是我们的全部了么？</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "index",
      data(){
        return {
          backgroundImg: 'url('+require('../../assets/background/bg-answer.jpg')+')' ,
          answers:[
            {
              svgIcon:['win', 'linux', 'IOS', 'Andrews'],//图片
              description: [
                '公司技术团队精通不同操作系统',
                '无障碍的跨平台应用开发',
                '问题及时发现,及时处理',
                '专业运维，无需用户操心',

              ],
            },
            {
              svgIcon:['telephone', 'talkie', 'Landline', 'watch'],//图片
              description: [
                '触及智慧灵魂的设计趋势',
                '精心改进的用户体验',
                '匠人精神的成果',
                '呈现在你的眼前',

              ],
            },
            {
              svgIcon:['Mac', 'phone', 'wechat'],//图片
              description: [
                'vue +html5+ css3',
                '快速的开发速度',
                '在任何终端中流畅阅览',
                '因为专业，所以引领',

              ],
            },
            {
              svgIcon:['authority', 'expert', 'server', 'mysql'],//图片
              description: [
                '行业尖端权威认证',
                '专家驻场解答疑问',
                '乔布斯开光服务器，永不宕机',
                '我们卖的是良心',
              ],
            }
          ],
        }
      },
      methods:{
          initSwiper(){
            return new Swiper('.solution-box',{
              noSwiping : false,
              loop: true,//无限滚动
              slidesPerView: 4,
              slidesPerGroup : 1,
              spaceBetween : 20,
              breakpoints: {
                //当宽度小于等于320
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1660: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                }
              },
              speed:1000,//切换速度
              debugger: true,
              onlyExternal:true,
              autoHeight: false, //高度随内容变化
              wrapperClass : 'solution-cut',
              slideClass : 'solution-bin',
              autoplay: { //滚动设置
                delay:3000,
                disableOnInteraction:false,//不停止自动滚动
                // reverseDirection: true,//开启反向滚动
              },
              navigation: {
                prevEl: '.ctrl-left',
                nextEl: '.ctrl-right',
              },
              on: {
                slideChange: function () {
                  // console.log(this.activeIndex);
                },
              },
            });
          }
      },
      mounted(){
          this.mySwiper = this.initSwiper();
      }
    }
</script>

<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  .solution-ctrl .ctrl-left {
    left: 5%;
    top: 52%;
  }

  .solution-ctrl .ctrl-box {
    position: absolute;
    color: #a8a8a8;
    width: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 50px;
    cursor: pointer;
    z-index: 99;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
  }
  .ctrl-box {
    opacity: .5;
  }
  .solution-ctrl .ctrl-right {
    right: 5%;
    top: 52%;
  }

  .solution-ctrl .ctrl-box {
    position: absolute;
    color: #a8a8a8;
    width: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 50px;
    cursor: pointer;
    z-index: 99;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
  }
  .ctrl-box {
    opacity: .5;
  }
  .solution-box {
    overflow: hidden;
    width: 1120px;
    margin: 80px auto 0 auto;
  }

  .solution-cut {
    display: block;
    width: 6999px;
  }

  .solution-bin {
    display: block;
    float: left;
    width: 280px;
    padding: 5px;
    line-height: 30px;
    position: relative;
  }

  .solution-bin video {
    display: block;
    font-size: 0;
  }

  .solution-bin p {
    margin: 0 auto;
    color:#e1e1e1;
  }

  .solution-bin p .svg-icon {
    color:#ff9900;
  }

  .solution-bin .vjs-default-skin {
    margin: 0 auto;
  }

  .solution-bin * {
    max-width: 100%;
  }

  .em-fa {
    display: block;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px !important;
  }

  .em-fa.n3  .svg-icon {
    font-size: 32px;
    margin: 0 15px;
  }
  .em-fa.n4  .svg-icon {
    font-size: 30px;
    margin: 0 15px;
  }
  @media (max-width:1200px) {
    .solution-box {
      margin-top: 60px;
    }

    .solution-text {
      margin-top: 70px;
    }

    .solution-box {
      width: 840px;
    }
  }

  @media (max-width:992px) {
    .solution-box {
      width: 560px;
    }
  }

  @media (max-width:767px) {
    .solution-box {
      margin-top: 30px;
    }

    .solution-text {
      margin-top: 30px;
    }
  }

  @media (max-width:767px) and (orientation:landscape) {
    .solution-text {
      display: none;
    }

    .solution-bin {
      height: 120px;
    }
  }

</style>
