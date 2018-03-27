<template>
  <div class="window-back" :style="{backgroundImage: backgroundImg}">
    <div class="table-box">
      <div class="table-cell" v-if="abouts">
        <!--一个关于导航栏-->
        <div class="about-nav swiper-no-swiping">
          <ul  ref="navLi">
            <li class="about-nav-cut" v-for="(value,index) in abouts" :class="{active: index == currentIndex}"  @click="switchActive(index)">
              {{value.navName}}
            </li>
          </ul>
        </div>
        <!--关于对应的内容-->
        <div class="about-box">
          <div class="about-cut">
            <div class="about-bin swiper-slide swiper-no-swiping" v-for="(value, index) in abouts">
              <p class="about-titless">{{value.title}}</p>
              <p>{{value.context}}</p>
            </div>

          </div>

        </div>
        <!--底边滚动条-->
        <div class="about-bottom">
          <ul class="about-ul">
            <li class="about-li">
              <b>611</b>
              位企业客户信赖之选
            </li>
            <li class="about-li">
              <b>611</b>
              位企业客户信赖之选
            </li>
            <li class="about-li">
              <b>611</b>
              位企业客户信赖之选
            </li>
            <li class="about-li">
              <b>611</b>
              位企业客户信赖之选
            </li>
            <li class="about-li">
              <b>611</b>
              位企业客户信赖之选
            </li>
            <li class="about-li">
              <b>611</b>
              位企业客户信赖之选
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
        name: "about-main",
      data(){
          return {
            backgroundImg: 'url('+require('../../assets/background/bg-aboutUs.jpg')+')' ,
            currentIndex: 0,
            myAboutSwiper: undefined,
            myBottomSwiper: undefined,
            abouts:[
              {
                navName: '关于',
                title: '美拓通讯',
                context: '互联网+”是创新2.0下的互联网发展的新业态，是知识社会创新2.0推动下的互联网形态演进及其催生的经济社会发展新形态.互联网+”是互联网思维的进一步实践成果，推动经济形态不断地发生演变，从而带动社会经济实体的生命力，为改革、创新、发展提供广阔的网络平台'
              },
              {
                navName: '文化',
                title: '美拓企业文化',
                context: '互联网+”是创新2.0下的互联网发展的新业态，是知识社会创新2.0推动下的互联网形态演进及其催生的经济社会发展新形态.互联网+”是互联网思维的进一步实践成果，推动经济形态不断地发生演变，从而带动社会经济实体的生命力，为改革、创新、发展提供广阔的网络平台'
              },
              {
                navName: '荣誉',
                title: '美拓所获荣耀',
                context: '互联网+”是创新2.0下的互联网发展的新业态，是知识社会创新2.0推动下的互联网形态演进及其催生的经济社会发展新形态.互联网+”是互联网思维的进一步实践成果，推动经济形态不断地发生演变，从而带动社会经济实体的生命力，为改革、创新、发展提供广阔的网络平台'
              },
            ],
            propagates:[
              {

              }
            ],
          }

      },
      methods:{
        initSwiper(){
          this.myAboutSwiper = new Swiper('.about-box',{
            sleep:1000,
            wrapperClass : 'about-cut',
            on: {
              slideChange: function () {
              },
            },
          });
        },
        initBottomSwiper(){
          this.myBottomSwiper = new Swiper('.about-bottom',{
            wrapperClass : 'about-ul',
            slideClass : 'about-li',
            noSwiping : false,
            loop: true,//无限滚动
            slidesPerView: 6,
            slidesPerGroup : 1,
            breakpoints: {
              //当宽度小于等于320
              400:{
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1660: {
                slidesPerView: 5,
              }
            },
            speed:1000,//切换速度
            autoplay: { //滚动设置
              delay:1000,
              disableOnInteraction:false,//不停止自动滚动
            },
          });
        },
        switchActive(index){
          this.currentIndex = index ;
          this.myAboutSwiper.slideTo(index);
        }

      },
      mounted(){
      this.initSwiper();
      this.initBottomSwiper();

      }
    }
</script>

<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .about-nav {
    position: absolute;
    left: 5%;
    top: 15.5%;
    overflow: hidden;
  }

  .about-nav:after {
    background: #2fd0b5;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    opacity: .15;
    width: 80px;
    height: 100%;
  }

  .about-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .about-nav ul li {
    line-height: 42px;
    height: 42px;
    font-size: 16px;
    color: #656565;
    list-style: none;
    margin: 0;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    white-space: nowrap;
    background: rgba(47,208,181,.15);
    background: rgba(255,255,255,.65);
    transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -ms-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    cursor: pointer;
  }

  .about-nav ul li.back {
    background: #2fd0b5;
    position: absolute;
    z-index: 1;
    left: 0;
    top: -42px;
    opacity: .2;
    height: 42px;
  }

  .about-nav ul li.active {
    color: #fff;
    background: rgba(47,208,181,.2);
    background: rgba(0,0,0,.85);
  }

  .about-box {
    width: 480px;
    margin-left: 50%;
    margin-bottom: 140px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .about-cut {
    width: 2000px;
  }

  .about-bin {
    width: 480px;
    float: left;
    text-align: left;
    color: #999;
    position: relative;
  }

  .about-bin * {
    max-width: 100%;
  }

  .about-bin p {
    margin: 0;
    line-height: 2.5;
  }

  .about-time {
  }

  .about-time p:before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: relative;
    top: -4px;
    margin-right: 10px;
    background: #00dfb9;
  }

  .about-time p u {
    list-style: none;
    padding: 0 10px;
    text-decoration: none;
  }

  .about-titless {
    font-size: 22px;
    color: #00dfb9;
  }

  .about-sixiang {
    font-size: 26px;
  }

  .about-sxtitle {
    color: #ddd;
    font-size: 36px;
  }
  @media (max-width:1200px) {
    .about-box {
      margin-left: 45%;
    }
  }

  @media (max-width:992px) {
    .about-nav {
      top: 25.5%;
    }

    .about-box {
      margin-left: auto;
      margin-right: 5%;
    }
  }

  @media (max-width:767px) {
    .about-nav {
      position: absolute;
      top: 100px;
    }

    .about-box {
      margin: 0;
      margin-left: 10%;
      position: relative;
      left: 80px;
    }
  }

  @media (max-width:767px) and (orientation:landscape) {
    .about-nav ul li {
      width: 80px;
      padding: 0 5px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  @media (max-width:479px) {
    .about-titless {
      text-align: center;
    }

    .about-nav {
      text-align: center;
      margin: 0 auto;
      left: 0;
      top: 0;
      position: relative;
    }

    .about-nav ul:after {
      clear: both;
      content: '';
      display: block;
    }

    .about-nav ul li {
      display: inline-block;
    }

    .about-box {
      width: 300px;
      margin: 20px auto;
      left: 0;
    }

    .about-bin {
      width: 300px;
    }

    .about-bin p {
      line-height: 2;
    }

    .about-bin br {
      display: none;
    }

    .about-sxtitle {
      font-size: 26px;
      text-align: center;
    }

    .about-sixiang {
      font-size: 16px;
      text-align: center;
    }
  }

  .about-bottom {
    width: 100%;
    height: 71px;
    line-height: 70px;
    background: rgba(255,255,255,.1);
    border-top: 1px solid rgba(215,215,215,.3);
    position: absolute;
    bottom: 71px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .about-ul {
    width: 1000%;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .about-li {
    float: left;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 2%;
    color: #bbb;
  }

  .about-li b {
    font-size: 26px;
    padding-right: 6px;
    font-weight: normal;
    color: #00dfb9;
  }

  @media (max-width:767px) and (orientation:landscape) {
    .about-bottom {
      display: none;
    }
  }




</style>
