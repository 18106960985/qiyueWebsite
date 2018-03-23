<!--该组件是用swiper组件写的奈何在样式存在很多不可控的因素弃用-->
<template>
  <div  class="case-box"  style="cursor: -webkit-grab;" v-if="temps" >
    <!--<div class="ctrl-left">-->
    <!--<svg-icon icon-class="leftPage"/>-->
    <!--</div>-->
    <!--<div class="ctrl-right" >-->
    <!--<svg-icon icon-class="rgihtPage" />-->
    <!--</div>-->
    <div class="case-cut" >
      <swiper :options="swiperOption"  ref="mySwiper"  >
        <swiper-slide  class="swiper-no-swiping"  v-for="(value,index) of temps" :key="index" >
          <div class="case-bin ">
            <a :title="value.productName"  >
              <font>
                <b></b>
                <img class="" :title="value.productName" alt="浙江晨丰科技股份有限公司" :src="value.productImg">
              </font>
              <span>
              <h3>{{value.productName}}</h3>
            </span>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!--控制器-->
    <div class="case-ctrl">
      <div class="ctrl-box ctrl-left">
        <svg-icon icon-class="leftPage"/>
      </div>
      <div class="ctrl-box ctrl-right">
        <svg-icon icon-class="rgihtPage" />
      </div>
    </div>
  </div>
  <div v-else>
    <b>产品出差去了………………</b>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: "product-list",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          noSwiping : false,
          loop: true,//无限滚动
          slidesPerView: this.clientWidth(),
          slidesPerGroup : 1,
          // spaceBetween : 20,
          speed:1000,//切换速度
          debugger: true,
          onlyExternal:true,
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

        },
        goods: null,
        temps:[
          {
            productName: 'appleWatch',
            uri: '#',
            productImg: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-fog-nc-s3-grid_GEO_CN?wid=540&hei=550&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1507146705002',
            productAlt: 'meta小天才儿童手表',

          },
          {
            productName: 'appleWatch SERIES 3 GPS ',
            uri: '#',
            productImg: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-loop-seashell-s3-grid_GEO_CN?wid=540&hei=550&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1504822127068',
            productAlt: 'meta小天才儿童手表',

          },
          {
            productName: 'appleWatch SERIES 3 GPS + 蜂窝网络',
            uri: '#',
            productImg: ' https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-space-sport-gray-nc-s3-grid_GEO_CN?wid=540&hei=550&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1507146734887',
            productAlt: 'meta小天才儿童手表',

          },


        ],
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      //个数自适应
      clientWidth(){
        let views=0;
        if(document.body.clientWidth<768){
          views = 1;
        }else if(document.body.clientWidth<1200){
          views = 2;
        }else if(document.body.clientWidth<1660){
          views = 3;
        }else {
          views = 4;
        }
        return views;
      }
    },
    mounted() {
      let _this = this;
      window.onresize = function () {
        _this.swiper.params.slidesPerView = _this.clientWidth();

      }
    }
  }
</script>

<style scoped>

  /*.svg-icon{*/
  /*fill: #ff9900;*/
  /*width: 3em;*/
  /*height: 3em;*/
  /*vertical-align: -0.15em;*/
  /*!*fill: currentColor;*!*/
  /*overflow: hidden;*/

  /*}*/
  .svg-icon:hover{
    color: #ff9900;
  }

  .case-cut {
    display: block;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    /*width: 6999px;*/
  }
  ol, ul {
    margin-top: 0;
    margin-bottom: 11px;
  }
  .case-bin {
    display: block;
    list-style: none;
    /*margin: 0 20px 0 0;*/
    padding: 0;
    float: left;
    width: 300px;
    background: #fff;
    position: relative;
  }



  .case-bin a {
    display: block;
  }


  .case-bin font {
    display: block;
    position: relative;
    overflow: hidden;
  }
  .case-bin font:before {
    width: 15px;
    height: 1px;
    margin-left: -7px;
    background: #fff;
    content: '';
    display: block;
    transition: .1s .2s ease-in-out;
    -moz-transition: .1s .2s ease-in-out;
    -ms-transition: .1s .2s ease-in-out;
    -o-transition: .1s .2s ease-in-out;
    -webkit-transition: .1s .2s ease-in-out;
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 10;
    opacity: 0;
  }
  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .case-bin font b {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: -100%;
    left: 0;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
  }
  .case-bin font img {
    display: block;
    width: 100%;
  }

  img {
    vertical-align: middle;
  }

  img {
    border: 0;
  }
  .case-bin font:after {
    width: 1px;
    height: 15px;
    margin-top: -7px;
    background: #fff;
    content: '';
    display: block;
    transition: .1s .2s ease-in-out;
    -moz-transition: .1s .2s ease-in-out;
    -ms-transition: .1s .2s ease-in-out;
    -o-transition: .1s .2s ease-in-out;
    -webkit-transition: .1s .2s ease-in-out;
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 10;
    opacity: 0;

  }

  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .case-bin span {
    display: block;
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,.5);
    text-align: left;
    padding: 15px 20px;
  }


  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }

  .case-bin span h3 {
    display: block;
    font-size: 16px;
    font-weight: normal;
    color: #333;
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    z-index: 2;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;

  }
  .case-bin a:hover span h3{
    color: white;
    z-index: 3;


  }
  .case-bin span:after {
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 0;
    right: 0;
    content: '';
    z-index: 1;
    background: #ff9900;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;

  }

  a{text-decoration:none}

  .case-bin a:hover span:after{

    height: 55px;

  }
  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }



  .case-ctrl .ctrl-box {
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
  @media (max-width: 767px){
    .case-box {
      width: 460px;
      margin: 20px auto;
    }
  }
  @media (max-width: 1200px){
    .case-box {
      width: 620px;
    }
  }
  @media (max-width: 1599px){
    .case-box {
      width: 940px;
    }
  }




  .case-ctrl .ctrl-left {
    left: 5%;
    top: 52%;
  }
  .case-ctrl .ctrl-right {
    right: 5%;
    top: 52%;
  }
  @media (max-width: 1200px){
    .case-ctrl .ctrl-right {
      right: 0;
    }
    .case-ctrl .ctrl-left {
      left:0;
    }
  }

</style>

