
<!--第二张幻灯片效果-->
<template>
  <div>
    <!--说明-->
    <div  class="table-box">
      <div class="table-cell">
        <div class="banner-write " >
           <span class="write-box last-page" style="text-align: center">
             <transition appear name="write-sit-down">
					     <span class="write-two">技术派，论研发</span>
             </transition>
             <transition appear name="write-stand-up">
               <div>
                 <span class="write-three">DEVELOPER</span>
                 <span class="write-four">我说，业界没有最好的技术，只有最棒的技术开发者<br>定制研发，为您的客户和团队</span>
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
    name: "last-page"
  }
</script>

<style scoped>
  * {
    /*-webkit-box-sizing: border-box;*/
    /*-moz-box-sizing: border-box;*/
    /*box-sizing: border-box;*/
  }



</style>
