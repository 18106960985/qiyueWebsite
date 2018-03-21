
<!--产品页-->
<template>
  <div class="window-back" style="background-image: url('https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481211118.jpg');">

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
            currentPage:0,
          }
      }
    }
</script>

<style scoped>

  .window-back {
    width: 100%;
    height: 100%;
    padding-top: 70px;
    position: relative;
    background-position: center;
    background-size: cover;
  }
  .table-cell {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }
  .case-box {
    overflow: hidden;
    width: 1260px;
    margin: 50px auto 0 auto;
  }
  @media (max-width: 1599px){
    .case-box {
      width: 940px;
    }
  }

  .case-more {
    margin-top: 30px;
  }

  .case-more a {
    border: 1px solid #ff9900;
    font-family: TechnicLite;
    color: #ff9900;
    font-size: 26px;
    padding: 0 20px;
    transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -ms-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    font-weight: bold;
    display: inline-block;
  }
  .case-more:hover a{
    background: #ff9900;
    color: #ffffff;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }

  a {
    color: #393939;
  }
  a {
    color: #62a8ea;
    text-decoration: none;
  }
  a {
    background-color: transparent;
  }
  .title-box h2 {
    font-size: 25px;
    letter-spacing: 3px;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    text-shadow: none;
  }
  @media (max-width: 767px){
    .title-box h1 {
      font-size: 30px;
      margin: 0 0 5px 0;
    }
    .title-box h2 {
      font-size: 18px;
    }
  }

</style>
