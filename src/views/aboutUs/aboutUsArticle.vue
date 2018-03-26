<!--关于我们的文章页面-->
<template>
  <div>
    <!--页眉 横幅-->
    <div class="banner-content" :class="{active : isActive}" @click="isActive=isActive?false:true">
      <!--我们的图片-->
      <div class="met-banner" style="height: auto;">
          <div class="slick-slide" >
            <img class="cover-image"  src="../../assets/product/img-tempBanner.jpg"  alt="科技公司网站模板|科技企业网站" style="height:auto;"/>
          </div>
      </div>
    </div>
    <div class="product-title">
      关于我们
    </div>

    <div class="product-descript">
      <div>
        <p >
          互联网+网络科技有限公司拥有资深网络营销研究专家与专业的服务团队，通过自身丰富的网络和社会传媒资源，为广大客户提供精准、高效的网络营销系列服务！

          公司秉承诚信合作、创新服务、追求卓越、高效共赢的企业理念；以"拒绝平庸，低效可耻"作为事业口号，站在客户的立场成就每一项合作。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about-us-article",
      data(){
          return {
            isActive: false,
          }
      }
    }
</script>

<style scoped>
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
</style>
