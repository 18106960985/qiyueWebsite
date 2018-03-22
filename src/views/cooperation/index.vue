<template>
  <div class="window-back" style="background-image: url('https://images.apple.com/cn/ipad/home/images/home/ios11_do_more_large_2x.jpg');">
      <div class="cooperation-ctrl">
        <div class="ctrl-box ctrl-left">
          <svg-icon icon-class="leftPage"/>
        </div>
        <div class="ctrl-box ctrl-right">
          <svg-icon icon-class="rightPage" />
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .cooperation-ctrl{

  }


  .cooperation-ctrl .ctrl-box {
    position: absolute;
    color: #ffffff;
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
  .cooperation-ctrl .ctrl-left {
    left: 5%;
    top: 52%;
  }
  .cooperation-ctrl  .ctrl-right {
    right: 5%;
    top: 52%;
  }

</style>
