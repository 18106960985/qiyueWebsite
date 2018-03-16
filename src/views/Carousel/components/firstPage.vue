
<!--幻灯片第一张-->
<template>
  <div  v-if="option && option.index === currentPage ? true :false">
    <!--说明-->
    <div  class="table-box" v-if="option">
      <div class="table-cell">
        <div class="banner-write " >
          <transition appear name="write-one">
            <span class="write-one" >{{option.first}}</span>
          </transition>
          <transition appear name = "write-box">
           <span class="write-box">
					  <span class="write-two">{{option.second}}</span>
					  <span class="write-three">{{ option.third }}</span>
					  <span class="write-four" v-html="option.last"></span>
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
      props:{
        currentPage:Number,
      },
      data(){
        return {
          option:null,
        }
      }
    }
</script>

<style scoped>
   *{
     z-index: 2;
   }
   p {
     margin: 0 0 11px;
   }






</style>

