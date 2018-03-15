
<!--幻灯片第一张-->
<template>
  <div>
    <!--说明-->
    <div  class="table-box">
      <div class="table-cell">
        <div class="banner-write " >
          <transition appear name="write-one">
            <span class="write-one">8</span>
          </transition>
          <transition appear name = "write-box">
           <span class="write-box">
					  <span class="write-two">年专注 · 通讯开发</span>
					  <span class="write-three">socket</span>
					  <span class="write-four">始于 2009 - 2017 展望未来<br>专注于设计体验，专业于解决方案</span>
					</span>
          </transition>
        </div>
      </div>
    </div>
    <!--边框-->
    <div class="banner-absolute">
      <transition appear name="border-box">
        <!--外边框-->
        <div class="banner-full visible-lg-block">
          <ol class="list-paddingleft-2">
            <li><p><br></p></li>
            <li><p><br></p></li>
            <li><p><br></p></li>
            <li><p><br></p></li>
          </ol>
          <ul class="list-paddingleft-2">
            <li><p><br></p></li>
            <li><p><br></p></li>
            <li><p><br></p></li>
            <li><p><br></p></li>
          </ul>
        </div>
      </transition>
      <!--内边框-->
      <transition appear name="inner-border-box">
        <div class="inner-border-box visible-lg-block"></div>
      </transition>
    </div>
  </div>
</template>
<script>
    export default {
        name: "first",
    }
</script>

<style scoped>
   *{
     z-index: 2;
   }
   p {
     margin: 0 0 11px;
   }
  .banner-bin .table-box {
    padding-bottom: 6%;
  }
  .table-box {
    display: table;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .table-cell {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }
   .banner-bin .table-cell {
     position: relative;
   }

  .banner-write {
    position: relative;
    z-index: 992;
    word-break: break-all;
    padding: 0 10px;
  }
   .banner-write * {
     max-width: 100%;
   }
  .banner-write .write-one {
    font-family: Microsoft JhengHei;
    color: #fff;
    font-size: 263px;
    display: inline-block;
    line-height: 0;

  }
  .banner-write .write-box {
    text-align: left;
    display: inline-block;
    padding-left: 10px;

  }
  .banner-write .write-box .write-two {
    color: #fff;
    font-size: 36px;
    display: block;
  }
  .banner-write .write-box .write-three {
    line-height: .8;
    letter-spacing: -5px;
    font-family: Helvetica;
    font-size: 82px;
    color: #ff9900;
    display: inline-block;
    border-bottom: 1px solid #ff9900;
    margin: 5px 0 10px 0;
  }
   .banner-write .write-box .write-four {
     color: #ccc;
     font-size: 16px;
     display: block;
   }



   .banner-absolute {
     position: absolute;
     width: 100%;
     height: 94%;
     top: 0;
     left: 0;
   }
   .banner-full {
     width: 800px;
     height: 350px;
     position: absolute;
     border: 2000px solid rgba(0,0,0,.4);
     box-sizing: content-box;
     margin: -2175px 0 0 -2400px;
     background: 0;
     left: 50%;
     top: 50%;
     z-index: 991;
   }

   .inner-border-box {
     margin: -205px 0 0 -300px;
     left: 50%;
     top: 50%;
     position: absolute;
     z-index: 994;
     border: 2px dashed #ff9900;
     width: 600px;
     height: 410px;
     visibility: visible;
   }



   .banner-full ol, .banner-full ul {
     list-style: none;
     margin: 0;
     padding: 0;
   }


   .banner-full ol li, .banner-full ul li {
     border-color: #ff9900;
     border-style: solid;
     border-width: 0;
     position: absolute;
     width: 24px;
     height: 24px;
   }

   .banner-full ol li:nth-child(1) {
     border-width: 5px 0 0 5px;
     top: 0;
     left: 0;
   }
   .banner-full ol li:nth-child(2) {
     border-width: 5px 5px 0 0;
     top: 0;
     right: 0;
   }
   .banner-full ol li:nth-child(3) {
     border-width: 0 0 5px 5px;
     bottom: 0;
     left: 0;
   }
   .banner-full ol li:nth-child(4) {
     border-width: 0 5px 5px 0;
     bottom: 0;
     right: 0;
   }

   .banner-full ul li:nth-child(1) {
     border-width: 5px 0 0 0;
     margin: 0 0 0 -12px;
     top: 0;
     left: 50%;
   }
   .banner-full ul li:nth-child(2) {
     border-width: 0 5px 0 0;
     margin: -12px 0 0 0;
     top: 50%;
     right: 0;
   }
   .banner-full ul li:nth-child(3) {
     border-width: 0 0 5px 0;
     margin: 0 -12px 0 0;
     bottom: 0;
     right: 50%;
   }
   .banner-full ul li:nth-child(4) {
     border-width: 0 0 0 5px;
     margin: 0 0 -12px 0;
     bottom: 50%;
     left: 0;
   }

   /*以下是动画效果*/
   .write-one-enter-active, .write-one-leave-active, .write-box-enter-active, .write-box-leave-active  {
     transition: .3s .4s;
   }
   .write-one-enter, .write-one-leave-to{
       transform: translateX(-150px) scale(.8);
       opacity: 0;
   }
   .write-box-enter, .write-box-leave-to{
     transform: translateX(150px) scale(.8);
     opacity: 0;
   }

   .border-box-enter-active, .border-box-leave-active{
     transition: .5s .6s;
   }

   .border-box-enter, .border-box-leave-to{
     transform: translate(1350px,750px);
   }


   .inner-border-box-enter-active, .inner-border-box-leave-active{
     transition: .4s 1s;
   }
   .inner-border-box-enter, .inner-border-box-leave-to{
     width: 0;
     height: 0;
     visibility:hidden;
   }
   .visible-lg-block {
     display: none !important;
   }

   @media (min-width: 1200px){
     .visible-lg-block {
       display: block !important;
     }
   }



</style>

