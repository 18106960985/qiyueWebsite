<template>
  <div>
      <!--两侧左右按钮 使用绝对布局-->
      <div class="banner-ctrl">
        <div class="ctrl-box ctrl-left" @click="changePage(prevIndex)">
          <svg-icon icon-class="leftPage"/>
        </div>
        <div class="ctrl-box ctrl-right" @click="changePage(nextIndex)">
          <svg-icon icon-class="rightPage"/>
        </div>
      </div>
      <!--轮播图导航条-->
      <div class="banner-page container-horizontal pagination-bullets">
        <span v-for="item in pageNum "  :class="{active: currentPage==item}"  class="pagination-bullet" @click="changePage(item)">
        </span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'page-controller',
    props:{
      pageNum: {
        type:Number,
        default:0
      },
      currentPage: {
        type:Number,
        default:1
      },

    },
    data(){
      return{
        option: null,
        timer: null, //计时器
      }
    },
    created(){
      this.switchPage();
    },
    computed:{
      nextIndex() {
        this.switchPage();
        return this.currentPage === this.pageNum ? 1 :this.currentPage + 1;
      },
      prevIndex() {
        this.switchPage();
        return this.currentPage === 1 ? this.pageNum : this.currentPage - 1;
      }
    },
    methods:{
      changePage(index){
        this.$emit('update:currentPage',index);
      },
      // 自动切换页面
      switchPage(){
          // 防止重复触发滚动事件
          if (this.timer != null) {
            clearTimeout(this.timer);
            this.timer = null ;
          }
          let _this = this;
          this.timer = setTimeout(()=>{
            _this.changePage(_this.nextIndex);
          },4000);
      }
    }

  }
</script>

<style scoped>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
  }
  div {
    display: block;
  }

  .banner-ctrl{

  }
  .banner-ctrl .ctrl-box {
    position: absolute;
    width: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 50px;
    cursor: pointer;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
  }
  .ctrl-box.ctrl-left{
    left: 5%;
    top: 46%;
    margin-top: -40px;
  }
  .ctrl-box.ctrl-right{
    right: 5%;
    top: 46%;
    margin-top: -40px;
  }

  @media (max-width: 1000px){
    .ctrl-box.ctrl-left{
      left: 0;
    }
    .ctrl-box.ctrl-right{
      right: 0;
    }
  }

  .ctrl-box {
    opacity: .5;
  }
  .ctrl-box:hover{
    opacity: 1;
    color: #ff9900;
  }
  /*分页*/
  .banner-page{
    position: absolute;
    height: 3px;
    line-height: 0;
    top: 84%;
    bottom: auto !important;
    left: 0;
    right: 0;
    text-align: center;
  }

  .banner-page .pagination-bullet{
    width: 40px;
    height: 3px;
    position: relative;
    line-height: 3px;
    border-radius: 0;
    background: #fff;
    opacity: 1;
  }

  .pagination-clickable .pagination-bullet {
    cursor: pointer;
  }
  .pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #fff;
    opacity: .2;
    margin: 0 5px;
  }

  .pagination-bullet.active{
    background: #ff9900;
  }

  .pagination-bullet:before {
      position: absolute;
      width: 40px;
      height: 30px;
      content: '';
      left: 0;
      top: -10px;
    }


</style>
