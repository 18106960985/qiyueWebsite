
<!--产品页-->
<template>
  <div class="window-back" :style="{backgroundImage:backgroundImg}">

    <div class="table-box">
      <div class="table-cell">
          <!--标题-->
          <div class="title-box">
            <h1>我们的产品</h1>
            <h2>产品展示</h2>
          </div>

          <!--产品列表 （类型）-->

            <product-list  ></product-list>

           <!--more-->
          <div class="case-more">
            <a title="更多产品"  @click="currentPage++">MORE</a>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  import productList from './components/product'
    export default {
        name: "index",
      components:{
        'product-list':productList,
      },
      data(){
          return {
            backgroundImg: 'url('+require('../../assets/background/bg-goods.jpg')+')' ,
            currentPage:0,
          }
      }
    }
</script>

<style scoped>



</style>
