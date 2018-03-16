
<!--第二张幻灯片效果-->
<template>
  <div>
    <!--说明-->
    <div  class="table-box">
      <div class="table-cell">
        <div class="banner-write " >
          <transition appear name="write-one">
           <span class="write-box wc">
					  <span class="write-two">设计控，也醉了</span>
					  <span class="write-three">I·DESIGN</span>
					  <span class="write-four">
              不是非要高大上，只是醉心于设计<br>
              我们想，再上一个好案例
            </span>
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
        name: "second-page"
    }
</script>

<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }



</style>
