<template>
  <div   v-if="proList" >
    <div class="case-box "   style="cursor: -webkit-grab;">
      <ul class="case-cut ">
        <li class="case-bin"  v-for="(value,index) of proList"   >
          <router-link :to="'/main/showproduct/'+value.id" :title="value.introduce">
          <font>
              <b></b>
              <img class="" :title="value.name" :alt="value.name" :src="DOWNLOAD_PATH + value.smallImgPath">
            </font>
            <span>
              <h3>{{value.name}}</h3>
                  <p>
                   {{ value.introduce | introduceFilter}}
                  </p>
              </span>
          </router-link>
        </li>
      </ul>
    </div>
    <!--控制器-->
    <div class="case-ctrl">
      <div class="ctrl-box ctrl-left">
        <svg-icon icon-class="leftPage"/>
      </div>
      <div class="ctrl-box ctrl-right">
        <svg-icon icon-class="rightPage" />
      </div>
    </div>
  </div>
  <div v-else>
    <b>产品出差去了………………</b>
  </div>
</template>

<script>
  import {DOWNLOAD_PATH} from '@/utils/lib/CommonConstant';

  import {getProductList} from '@/api/product/detailsIndex'
  import Swiper from 'swiper'
  import 'swiper/dist/idangerous.swiper.css';
  export default {
    name: "product-list",

    data() {
      return {

        proList:[],
        DOWNLOAD_PATH:DOWNLOAD_PATH,

      }
    },

    created(){
      this.getProductList();
    },
    computed: {
    },
    filters:{
      introduceFilter( val){
        if(val.length > 25){
          return val.substring(0,25)+'……';
        }
        return val;
      }
    },
    methods:{
      getProductList(){
        getProductList(0).then( res=>{
          this.proList = res.data.data.rows;

        })
      }
    },
    mounted() {
      let mySwiper = new Swiper('.case-box',{
        noSwiping : false,
        loop: true,//无限滚动
        slidesPerView: 4,
        slidesPerGroup : 1,
        spaceBetween : 20,
        breakpoints: {
          //当宽度小于等于320
          479: {
            slidesPerView: 1,
            spaceBetween: 10,
            width: 300,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 10,
            width: 460,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 20,
            width: 600,
          },
          1660: {
            slidesPerView: 3,
            spaceBetween: 30,
            width: 940,
          }
        },

        speed:1000,//切换速度
        debugger: true,
        onlyExternal:true,
        autoHeight: false, //高度随内容变化
        wrapperClass : 'case-cut',
        slideClass : 'case-bin',
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
      })
      let _this = this;

    }
  }
</script>

<style scoped>

  ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
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
    width: 6999px;
  }
  ol, ul {
    margin-top: 0;
    margin-bottom: 11px;
  }
  .case-bin {
    display: block;
    list-style: none;
    margin: 0 20px 0 0;
    padding: 0;
    float: left;
    width: 300px;
    background: #fff;
    position: relative;
  }



  .case-box {
    overflow: hidden;
    width: 1260px;
    margin: 50px auto 0 auto;
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
  .case-bin a:hover font:before {
    opacity: 1;
  }

  .case-bin a:hover font:after {
    opacity: 1;
  }

  .case-bin a:hover font b {
    top: 0;
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
    transition: .4s ease-in-out;
    -moz-transition: .4s ease-in-out;
    -ms-transition: .4s ease-in-out;
    -o-transition: .4s ease-in-out;
    -webkit-transition: .4s ease-in-out;

  }

  a{text-decoration:none}

  .case-bin a:hover span:after {
    height: 100%;
  }

  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  /*一个遮盖层*/
  .case-bin font b:before {
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -ms-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    border: 500px solid rgba(0,0,0,.3);
    left: 50%;
    top: 50%;
    margin: -525px 0 0 -525px;
  }
  .case-bin font b:after {
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ff990261;
    left: 50%;
    top: 50%;
    margin: -25px 0 0 -25px;
  }


  .case-bin a:hover span h3 {
    color: #fff;
  }

  .case-bin a:hover span p {
    color: #fff;
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
  .ctrl-box:hover {
    opacity: 1;
    color: #ff9900;
  }
  .case-bin span p {
    display: block;
    font-size: 12px;
    color: #888;
    margin: 10px 0 0 0;
    position: relative;
    z-index: 2;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
  }

  p {
    margin: 0 0 11px;
  }

  @media (max-width: 1599px){
    .case-box {
      width: 940px;
    }
  }
  @media (max-width: 1200px){
    .case-box {
      width: 620px;
    }
  }
  @media (max-width: 767px){
    .case-box {
      width: 460px;
      margin: 20px auto;
    }
    .case-bin {
      margin: 0 10px 0 0;
      width: 230px;
    }
  }

  @media (max-width: 479px){
    .case-box {
      width: 300px;
      margin: 40px auto 0 auto;

    }
  }
  @media (max-width: 400px){
    .case-box {
      width: 230px;
    }
  }

  .case-cut:after {
    content: '';
    display: table;
    clear: both;
  }
  .case-ctrl .ctrl-left {
    left: 5%;
    top: 50%;
  }
  .case-ctrl .ctrl-right {
    right: 5%;
    top: 50%;
  }
  @media (max-width: 1200px){
    .case-ctrl .ctrl-right {
      right: 0;
    }
    .case-ctrl .ctrl-left {
      left:0;
    }
  }
  @media (max-width: 767px){
    .case-ctrl .ctrl-box {
      width: 50px;
      line-height: 50px;
    }
  }



</style>
