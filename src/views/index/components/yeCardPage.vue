<template>

  <section class="page" v-if="pageIndex"
           :class="{'page-before ': pageIndex< currentPage,
                'page-after ': pageIndex > currentPage,
                'page-current ':pageIndex === currentPage}" >
    <div  class="banner-bin bimg" :class="{'all-center ': isCenter}"  style=" background-image:  url('https://images.apple.com/v/mac/home/y/images/home/imac_pro_large_2x.jpg');">
      <slot></slot>
    </div>
  </section>
  <section class="page" v-else>页面正在渲染中。。。</section>
</template>

<script>
  // 卡片布局
    export default {
        name: "ye-card-page",
      props:{
        currentPage: {
          type:Number,
          default: 1,
        },
        //生成组件页面的索引值
        pageIndex:{
          type:Number,
        },
        //是否居中
        isCenter:{
          type:Boolean,
          default:false
        },

      },
      watch:{

      },
      methods:{
          //页面变化
      },
      data(){
        return {
          option: null
        }
      },
    }
</script>

<style scoped>
  .banner-bin {
    width: 100%;
    height: 100%;
    float: left;
    display: block;
    overflow: hidden;
    background: center no-repeat;
    background-size: cover;
    position: relative;
  }


  .bimg{
    overflow:hidden;

    background-size:50% 100%;
    background-position: center;

  }

  .page {
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.5s ease 0s;
    z-index: 1;
    width: 100%;
    background: #1a1a1a;

  }


  .bsize{

  }

  .page-before {
    z-index: 0;
    transform: translate3d(0, -100%, 0);
  }

  .page-after {
    z-index: 0;
    transform: translate3d(0, 100%, 0);
  }


  /* 水平、垂直居中 */
  .all-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
