
<!--第二张幻灯片效果-->
<template>
  <div  v-if="option && option.index === currentPage ? true :false">
    <!--说明-->
    <div  class="table-box">
      <div class="table-cell">
        <div class="banner-write " >
           <span class="write-box last-page" style="text-align: center">
             <transition appear name="write-sit-down">
					     <span class="write-two">{{option.second}}</span>
             </transition>
             <transition appear name="write-stand-up">
               <div>
                 <span class="write-three">{{option.third}}</span>
                 <span class="write-four" v-html="option.last"></span>
               </div>
             </transition>
					</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "last-page",
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
    /*-webkit-box-sizing: border-box;*/
    /*-moz-box-sizing: border-box;*/
    /*box-sizing: border-box;*/
  }



</style>
