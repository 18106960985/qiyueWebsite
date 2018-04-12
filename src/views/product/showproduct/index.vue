<!-- 展示产品文章-->
<template>
    <div >
      <!--产品横幅 页眉-->
      <div class="banner-content"  :class="{active : isActive}" @click="isActive=isActive?false:true">
        <!--遮盖层 -->
        <div class="banner-click">
          <svg-icon icon-class="img-enlarge"></svg-icon>
        </div>
        <!--横幅图片-->
        <div class="met-banner" style="height: auto;">
          <div class="slick-slide">
            <img class="cover-image"  :src="DOWNLOAD_PATH + detail.imgPath"  :alt="detail.name" style="height:auto;"/>

          </div>
        </div>
      </div>
      <!--产品标题-->
      <div class="product-title">
        产品介绍
      </div>
      <!--产品简介-->
      <div class="product-descript">
        <!--标题-->
        <h3>
          {{detail.name}}
        </h3>
        <!--文章关注的信息-->
        <font>
          <!--阅读-->
          <!--<svg-icon icon-class="eye"></svg-icon>-->
          <!--{{detail.readingNum}}-->
          <!--· -->
          发布日期
          <svg-icon icon-class="releaseDate"></svg-icon>
          {{detail.crtTime}}
        </font>
        <!--简介内容-->
        <div>
          <!--产品图片-->
            <!--<dl >-->
              <!--<dt>-->
                <!--<img class="product-image"  src="https://images.apple.com/cn/apple-watch-series-1/images/hero-and-itemlist/track_and_share_large_2x.jpg"  alt="科技公司网站模板|科技企业网站" style="height:auto;"/>-->
              <!--</dt>-->
            <!--</dl>-->
          <p>
            {{detail.introduce}}
          </p>

        </div>
        <!--简介footer-->
        <span>
          <b>产品类型</b>
          <svg-icon icon-class="label"></svg-icon>
          <a> {{detail.label}}</a>
        </span>
      </div>
      <!--产品详情-->
      <div class="product-title">
        产品详情
      </div>
      <!--产品详情信息-->
      <div class="product-content" v-html="detail.details">

      </div>
      <!--分页-->
      <div class="page-main">
        <ul class="pager pager-round">
          <li class="previous"  v-if="previous">
            <router-link :to="'/main/showproduct/'+previous.id" :title="previous.name" redirect>
              上一产品
              <span aria-hidden="true" class="hidden-xs">：{{previous.name}}</span>
            </router-link>
          </li>
          <li class="previous" v-else>
            <a >
              上一产品
              <span aria-hidden="true" class="hidden-xs">：被风刮跑了!</span>
            </a>
          </li>

          <li class="next " v-if="next">
            <router-link :to="'/main/showproduct/'+next.id" :title="next.name">
              下一产品
              <span aria-hidden="true" class="hidden-xs">：{{next.name}}</span>
            </router-link>
          </li>
          <li class="next " v-else>
            <a >
              下一产品
              <span aria-hidden="true" class="hidden-xs">：被风刮跑了!</span>
            </a>
          </li>

        </ul>
      </div>

        <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50" ref="toTop"></back-to-top>
    </div>
</template>

<script>
  import {DOWNLOAD_PATH} from '@/utils/lib/CommonConstant';

  import BackToTop from '@/components/BackToTop'
  import {getObj,page} from '@/api/product/detailsIndex'
    export default {
        name: "index",
      components:{
        BackToTop,
      },
      props:{
        id:String,
        typeId:String,
      },
      data(){
          return {
            myBackToTopStyle: {
              right: '50px',
              bottom: '180px',
              width: '40px',
              height: '40px',
              'border-radius': '4px',
              'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
              background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
            },
            DOWNLOAD_PATH:DOWNLOAD_PATH,
            isActive: false,
            detail:{},
            query:{
              filters:'',
              sort:'',
              page:1,
              limit:1,
            },
            previous:{},
            next:{},
          }
      },
      created(){

        this.getObj();
      },
      filters:{

      },
      watch:{
          // id(){
          //   this.getObj();
          // },
        '$route':'getObj',//监听路由

      },
      methods:{
          getObj(){
            if(this.$refs.toTop) this.$refs.toTop.backToTop();
            getObj(this.id).then(res=>{
              if(res.data.rel){
                this.detail = res.data.data;
                this.previousPage();
              }
            })


          },
          previousPage(){
            this.query.filters = "GT_id="+this.id;
            page(this.query).then(res=>{
            this.previous = res.data.data.rows[0];
              this.nextPage();
            })
          },
          nextPage(){
            this.query.filters = "LT_id="+this.id;
            page(this.query).then(res=>{
              this.next = res.data.data.rows[0];
            })
          }
      }
    }
</script>

<style scoped>

  a{
    text-decoration: none;
  }
  .banner-content {
    position:relative;
    overflow:hidden;
    max-height: 450px;
    transition: max-height ease-out 1s;
  }

  .banner-content.active {
    max-height: 3000px;
    transition: max-height ease-in .3s;

  }

  .cover-image{
    width: 100%;
  }

  .banner-click {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    z-index:9999;
    opacity:0;
    overflow:hidden;
    visibility:hidden;
    cursor:pointer;
    transition:.3s;
    -moz-transition:.3s;
    -ms-transition:.3s;
    -o-transition:.3s;
    -webkit-transition:.3s;
  }
  .banner-click .svg-icon {
    color:#ff9900;
    font-size:26px;
    position:absolute;
    top:50%;
    left:50%;
    cursor:pointer;
    opacity:.65;
    margin:-25px 0 0 -25px;
    display:block;
    width:50px;
    height:50px;
    border:3px solid #ff9900;
    text-align:center;
    line-height:44px;
    border-radius:4px;
  }
  .banner-content:hover .banner-click {
    opacity:1;
    visibility:visible;
  }
  .banner-content:hover .banner-click i {
    visibility:visible;
    -webkit-animation:bounceInDown 1s .2s ease both;
    -moz-animation:bounceInDown 1s .2s ease both;
  }
  @-webkit-keyframes bounceInDown {
    0% {
      opacity:0;
      -webkit-transform:translateY(-2000px)
    }
    60% {
      opacity:1;
      -webkit-transform:translateY(30px)
    }
    80% {
      -webkit-transform:translateY(-10px)
    }
    100% {
      -webkit-transform:translateY(0)
    }
  }@-moz-keyframes bounceInDown {
     0% {
       opacity:0;
       -moz-transform:translateY(-2000px)
     }
     60% {
       opacity:1;
       -moz-transform:translateY(30px)
     }
     80% {
       -moz-transform:translateY(-10px)
     }
     100% {
       -moz-transform:translateY(0)
     }
   }


  .met-banner {
    width:100%;
    height:500px;
    margin:0 !important;
    display:table;
    background:#ccc;
  }
  .met-banner.fixedheight .slick-slide {
    height:100%;
  }
  .met-banner.fixedheight .slick-slide img {
    width:1920px;
    height:100%;
    position:absolute;
    left:50%;
    top:0;
    -webkit-transform:translateX(-50%);
    -moz-transform:translateX(-50%);
    -o-transform:translateX(-50%);
    -ms-transform:translateX(-50%);
    transform:translateX(-50%);
  }
  @media (max-width:991px) {
    .met-banner.fixedheight .slick-slide img {
      width:991px;
    }
  }@media (max-width:767px) {
    .met-banner.fixedheight .slick-slide img {
      width:767px;
    }
  }@media (max-width:429px) {
    .met-banner.fixedheight .slick-slide img {
      width:429px;
    }
  }.met-banner.slick-slider {
     display:block;
   }
  .met-banner .slick-list,.met-banner .slick-track {
    height:100%;
  }
  .met-banner .slick-slide {
    width:100%;
    height:auto;
    position:relative;
    overflow:hidden;
  }
  .met-banner .slick-slide:first-child {
    display:block;
  }
  .met-banner .slick-arrow {
    width:15%;
    height:100%;
    display:none !important;
    top:50%;
    text-align:center;
  }
  .met-banner .slick-arrow.slick-prev {
    background:linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);
    background:-webkit-linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);
    background:-moz-linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);
    background:-o-linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);
    /* IE 10 */
    background:-ms-linear-gradient(left,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.0001) 100%);
    /* IE < 10 */
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000',endColorstr='#00000000',GradientType=1);
  }
  .met-banner .slick-arrow.slick-next {

    background:linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);
    /* Webkit:Safari 5.1+,Chrome 10+ */
    background:-webkit-linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);
    /* Firefox 3.6+ */
    background:-moz-linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);
    /* Opera 11.10+ */
    background:-o-linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);
    /* IE 10 */
    background:-ms-linear-gradient(left,rgba(0,0,0,0.0001) 0,rgba(0,0,0,0.5) 100%);
    /* IE < 10 */
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#80000000',GradientType=1);
  }
  .met-banner .slick-arrow:hover i {
    opacity:1;
    -moz-opacity:1;
    filter:alpha(opacity=100);
  }
  .met-banner .slick-arrow i {
    font-size:70px;
    color:#fff !important;
    opacity:.5;
    -moz-opacity:.5;
    filter:alpha(opacity=50);
  }
  @media (max-width:767px) {
    .met-banner .slick-arrow i {
      font-size:50px;
    }
  }.met-banner .slick-dots {
     margin:0;
     bottom:20px;
   }
  .met-banner .slick-dots li {
    margin:0 2px;
  }
  @media (max-width:991px) {
    .met-banner {
      height:350px;
    }
  }@media (min-width:768px) {
    .met-banner:hover .slick-arrow {
      display:block !important;
    }
  }@media (max-width:767px) {
    .met-banner {
      height:300px;
    }
    .met-banner .slick-dots {
      bottom:5px;
    }
  }@media (max-width:479px) {
    .met-banner {
      height:150px;
    }
  }.met-banner .banner-text {
     width:100%;
     height:100%;
     position:absolute;
     left:0;
     top:0;
   }
  .met-banner .banner-text .container {
    height:100%;
    display:table;
    text-align:center;
  }
  .met-banner .banner-text .container .banner-text-con {
    display:table-cell;
    vertical-align:middle;
  }
  .met-banner .banner-text.p-1 .container {
    text-align:left;
  }
  .met-banner .banner-text.p-1 .container .banner-text-con div {
    width:60%;
    float:left;
  }
  .met-banner .banner-text.p-2 .container {
    text-align:right;
  }
  .met-banner .banner-text.p-2 .container .banner-text-con div {
    width:60%;
    float:right;
  }
  .met-banner .banner-text.p-3 {
    top:10%;
  }
  .met-banner .banner-text.p-3 .container .banner-text-con {
    vertical-align:top;
  }
  .met-banner .banner-text.p-4 {
    top:auto;
    bottom:10%;
  }
  .met-banner .banner-text.p-4 .container .banner-text-con {
    vertical-align:bottom;
  }
  .met-banner .banner-text.p-3 .container .banner-text-con,.met-banner .banner-text.p-4 .container .banner-text-con,.met-banner .banner-text.p-5 .container .banner-text-con {
    width:60%;
  }
  .met-banner .banner-text h1,.met-banner .banner-text h2,.met-banner .banner-text h3,.met-banner .banner-text p {
    color:#fff;
  }
  .met-banner .banner-text h1,.met-banner .banner-text h2 {
    margin:0;
    font-size:40px;
  }
  .met-banner .banner-text h3 {
    font-size:30px;
    font-weight:500;
    margin:0px;
  }
  .met-banner .banner-text p {
    font-size:36px;
    margin:20px 0 0;
    text-shadow:none;
  }
  .met-banner .banner-text .btn {
    margin-top:30px;
    font-size:20px;
  }
  @media (max-width:991px) {
    .met-banner .banner-text h1,.met-banner .banner-text h2,.met-banner .banner-text h3 {
      font-size:30px;
    }
    .met-banner .banner-text p {
      font-size:20px;
    }
  }@media (max-width:767px) {
    .met-banner .banner-text .container {
      width:100%;
    }
    .met-banner .banner-text.p-5 .container .banner-text-con {
      width:100%;
    }
    .met-banner .banner-text h1,.met-banner .banner-text h2 {
      font-size:24px;
    }
    .met-banner .banner-text h3 {
      font-size:16px;
    }
    .met-banner .banner-text p {
      margin-top:15px;
      font-size:18px;
    }
    .met-banner .banner-text .btn {
      margin-top:20px;
      font-size:16px;
    }
  }/* å†…é¡µbanner */
  .met-banner-ny {
    background-color:#62a8ea;
    height:120px;
  }
  .met-banner-ny h1,.met-banner-ny h2 {
    margin:0px;
    padding:10px 30px;
    font-size:35px;
    font-weight:300;
    text-shadow:none;
    color:#fff;
  }
  @media (max-width:767px) {
    .met-banner-ny {
      height: 90px;
    }
  }

  .product-title {
    font-size:22px;
    line-height:32px;
    height:32px;
    margin:40px 0 0 60px;
    position:relative;
    padding-left:20px;
  }
  .product-title:before {
    width:7px;
    height:32px;
    background:#ff9900;
    border-radius:99px;
    content:'';
    position:absolute;
    top:0;
    left:0;
  }



  .product-descript {
    margin:0 60px;
  }
  .product-descript h3 {
    margin:30px 0 0 0;
    padding:0 20px;
    color:#000;
    font-size:20px;
    display:inline-block;
    font-weight:900;
  }
  .product-descript font {
    color:#999;
  }
  .product-descript font i {
    font-size:16px;
    padding:0 0 0 5px;
  }
  .product-descript div {
    margin-top: 10px;
  }
  .product-descript div:after {
    display:table;
    clear:both;
    content:'';
  }
  .product-descript div dl {
    float:left;
    border-right:1px solid #ccc;
    border-left: none;
    padding:0 30px 0 15px;
    margin:10px 0 0 0;
  }
  .product-descript div dl dt {
    display:block;
    margin:0;
    padding:0;
    color:#777;
    font-size:13px;
  }
  .product-descript div dl dd {
    display:block;
    margin:0;
    padding:0;
    color:#000;
    font-size:14px;
  }
  .product-descript p {
    margin:20px 0 0 0;
    display:block;
    text-indent:20px;
    line-height:1.75;
    color:#555;
  }
  .product-descript span {
    display:block;
  }
  .product-descript span b {
    margin:20px 0 0 0;
    padding:0 0 0 20px;
    display:inline-block;
  }
  .product-descript span i {
    font-size:18px;
    padding:0 3px;
  }
  .product-descript span {
    display:inline-block;
  }
  .product-descript span a {
    color:#fff;
    background:#ff9900;
    display:inline-block;
    line-height:26px;
    padding:0 8px;
    margin:0 0 6px 6px;
    transition:.5s ease-in-out;
    -moz-transition:.5s ease-in-out;
    -ms-transition:.5s ease-in-out;
    -o-transition:.5s ease-in-out;
    -webkit-transition:.5s ease-in-out;
  }
  .product-descript span a:hover {
    background:#393939;
  }
  .product-content {
    padding:30px 60px;
  }
  .product-content img {
    max-width:100%;
  }
  .product-descript {
    margin:0 15px;
  }

  .product-descript font {
    margin:15px 0 0 15px;
  }
  .product-content {
    padding:15px;
  }
  @media (max-width:1200px) {
    .product-title {
      margin: 40px 0 0 30px;
    }
  }

 /*分页*/
  .pager {
    padding-left: 0;
    margin: 22px 0;
    text-align: center;
    list-style: none;
  }
  .pager:before{
    display: table;
    content: " ";
  }
  .pager:after{
    clear: both;
  }

  .page-main {
    padding:0 20px;
  }

  .pager li {
    width: 49%;
    display: inline-block;
  }


  .pager li a {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .pager li a:hover{
    color: #ff9900;
    border-color: #ff9900;
  }

  .pager li>a, .pager li>span {

  }
  .pager li>a, .pager li>span {
    display: inline-block;
    background-color: transparent;
    border: 1px solid #e4eaec;
    border-radius: 3px;
    padding: 10px 20px;
    color: #76838f;
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
  }

  /*给li标签一点圆度*/
  .pager-round li>a, .pager-round li>span {
    border-radius: 1000px;
  }
  .pager .previous>a, .pager .previous>span {
    float: left;
  }
  .pager .next>a, .pager .next>span {
    float: right;
  }


  @media (max-width: 767px) {
    .product-descript h3 {
      display:block;
    }
    .product-descript font {
      display:block;
    }
  }
  .product-image{
    width: 230px;
    height: 230px;
  }

</style>
