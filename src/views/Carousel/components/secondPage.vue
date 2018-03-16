
<!--第二张幻灯片效果-->
<template>
  <div  v-if="option && option.index === currentPage ? true :false">
  <!--说明-->
    <div  class="table-box">
      <div class="table-cell">
        <div class="banner-write " >
          <transition appear name="write-one">
           <span class="write-box wc">
					  <span class="write-two">{{option.second}}</span>
					  <span class="write-three">{{option.third}}</span>
					  <span class="write-four" v-html="option.last" ></span>
					</span>

          </transition>
        </div>
      </div>
    </div>
    <!--边框-->
    <div class="banner-absolute">
      <transition appear name="banner-background">
        <div class="banner-background visible-lg-block"></div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
      name: "second-page",
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
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }



</style>
