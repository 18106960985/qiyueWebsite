<template>
  <div class="window-back" style="background-image: url('https://images.apple.com/cn/ipad/home/images/home/ios11_do_more_large_2x.jpg');">
    <!--控制栏-->
      <div class="cooperation-ctrl">
        <div class="ctrl-box ctrl-left">
          <svg-icon icon-class="leftPage"/>
        </div>
        <div class="ctrl-box ctrl-right">
          <svg-icon icon-class="rightPage" />
        </div>
      </div>
    <!--标题-->
    <div class="table-box">
      <div class="table-cell">
        <div class="title-box">
          <h1>合作伙伴</h1>
          <!--<h2></h2>-->
        </div>
        <!--滚动栏-->
        <div class="cooperation-box">
            <ul class="cooperation-cut" v-if="cooperations">
              <li class="cooperation-bin" v-for="index in cooperations">
                <a target="_blank" :href="index.companyUrl" :title="index.companyName">
                  <img  :alt="index.companyName" :src="index.companyLogo">
                </a>
              </li>
            </ul>
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
            mySwiper:null,
            cooperations:[
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },
              {
                companyUrl: 'href="http://huawei.com',
                companyName: '百度百科',
                companyLogo: 'https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481251701.png',
              },

            ],


          }
      },
      created(){

      },
      methods:{
        initSwiper(){
          return new Swiper('.cooperation-box',{
            noSwiping : false,
            slidesPerView: 4,
            slidesPerGroup : 1,
            slidesPerColumn: 3,
            slidesPerColumnFill: 'row',
            breakpoints: {
              //当宽度小于等于320
              440: {
                slidesPerView: 2,
                slidesPerColumn: 4,
              },

              767:{
                slidesPerView: 3,
                slidesPerColumn: 2,
              },
              1000: {
                slidesPerView: 2,
                slidesPerColumn: 3,
              },
              1200: {
                slidesPerView: 3,
                slidesPerColumn: 2,
              },
              1660: {
                slidesPerView: 4,
                slidesPerColumn: 2,
              }
            },
            speed:1000,//切换速度
            debugger: true,
            onlyExternal:true,
            autoHeight: false, //高度随内容变化
            wrapperClass : 'cooperation-cut',
            slideClass : 'cooperation-bin',
            // autoplay: { //滚动设置
            //   delay:3000,
            //   disableOnInteraction:false,//不停止自动滚动
            //   // reverseDirection: true,//开启反向滚动
            // },
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
  .cooperation-ctrl{

  }


  .cooperation-ctrl .ctrl-box {
    position: absolute;
    color: #ffffff;
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
  .cooperation-ctrl .ctrl-box:hover {
    color: #ff9900;
  }
  .cooperation-ctrl .ctrl-left {
    left: 5%;
    top: 52%;
  }
  .cooperation-ctrl  .ctrl-right {
    right: 5%;
    top: 52%;
  }
  .cooperation-box{
    width: 1150px;
    margin: 50px auto 30px auto;
    overflow: hidden;
  }

  .cooperation-cut{
    width: 99999px;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .cooperation-cut:after {
    display: table;
    content: '';
    clear: both;
  }
  .cooperation-bin {
    float: left;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 140px;
    display: table;
    position: relative;
  }
  .cooperation-bin[data-swiper-row="0"] a {
    border-width: 0 1px 0 0;
  }


  .cooperation-bin a {
    display: table-cell;
    vertical-align: middle;
    background: rgba(255,255,255,.35);
    text-align: center;
    width: 100%;
    height: 100%;
    border-color: #ffffff;
    border-style: dotted;
    border-width: 1px 1px 0 0;
  }
  img {
    vertical-align: middle;
  }

  img {
    border: 0;
  }

  .cooperation-bin a img {
    line-height: 0;
    max-width: 210px;
    max-height: 120px;
  }

  .cooperation-bin a:hover img {
    -webkit-animation: tada 1s .2s ease both;
    -moz-animation: tada 1s .2s ease both;
  }

  /*抖动动画效果*/
  @-webkit-keyframes tada {
    0% {
      -webkit-transform: scale(1)
    }

    10%,20% {
      -webkit-transform: scale(0.9) rotate(-3deg)
    }

    30%,50%,70%,90% {
      -webkit-transform: scale(1.1) rotate(3deg)
    }

    40%,60%,80% {
      -webkit-transform: scale(1.1) rotate(-3deg)
    }

    100% {
      -webkit-transform: scale(1) rotate(0)
    }
  }

  @-moz-keyframes tada {
    0% {
      -moz-transform: scale(1)
    }

    10%,20% {
      -moz-transform: scale(0.9) rotate(-3deg)
    }

    30%,50%,70%,90% {
      -moz-transform: scale(1.1) rotate(3deg)
    }

    40%,60%,80% {
      -moz-transform: scale(1.1) rotate(-3deg)
    }

    100% {
      -moz-transform: scale(1) rotate(0)
    }
  }
  @media (max-width: 1440px) {
    .cooperation-box{
      width: 999px;
    }
  }
  @media (max-width: 1200px) {
    .cooperation-box{
      width: 749px;
    }
    .cooperation-ctrl .ctrl-left {
      left: 0;
    }
    .cooperation-ctrl  .ctrl-right {
      right: 0;
    }
  }
  @media (max-width: 992px) {
    .cooperation-box{
      width: 499px;
    }
  }
  @media (max-width: 767px) {
    .cooperation-box{
      width: 479px;
      margin: 20px auto;
    }
    .cooperation-bin {
       height: 80px;
       width: 160px;
     }
    .cooperation-bin a {
      border-width: 0 1px 0 0;
    }
    .cooperation-bin a img {
      line-height: 0;
      max-width: 100px;
      max-height: 50px;
    }



  }

  @media (max-width: 480px){
    .cooperation-box {
      width: 319px;
      margin: 20px auto;
    }

  }

</style>
