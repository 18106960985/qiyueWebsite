<template>
    <div class="menu-box" :class="{active:sidebar.opened}">
      <div class="top">
        <div class="logo-box">
          <a href="#" title="厦门美拓通讯有限公司">
            <img :src="require('@/assets/logo/1491379886.png')"/>
          </a>
        </div>
        <div class="QRcode-box">
         <p>
           <img :src="require('@/assets/QR_code/1493349544.png')"/>
         </p>
        </div>
      </div>
      <div class="content">
        <ul ref="navBox">
          <li v-for="item  in ulOptions" ref="targetEle" :class="{active: item.index == sidebar.index}"  @click="setMenuIndex(item.index) , $router.push(item.router)"   @mouseenter="setSliderStyle($event.target)" @mouseleave="initSlider">
            <label :data-index="item.index" >
            <!--<router-link :to="item.router">{{item.name}}</router-link>-->
              {{item.name}}
            </label>
            </li>
          <li class="background" :style="{top:slider.top}">
          </li>
        </ul>

      </div>
      <div class="footer">
        <div class="social-box">
          <a href="#">
            <svg-icon icon-class="qq"/>
          </a>
          <a href="#">
            <svg-icon icon-class="wechat"/>
          </a>
        </div>
        <div class="footer-box">
           即时通信无所不能！！
        </div>

      </div>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "meta-left-menu",
      props:{
          //已被vuex托管
          isActive:{
            type:Boolean,
            default:true
          }
      },

      data(){
        return{
          //遍历的标题栏样式
          ulOptions:
            [
              {
                name: "首页",
                index :1 ,//切换的卡片页面
                router:'/#',
              },
              {
                name: "产品",
                index : 2,
                router: '/main/product',
              },
              {
                name: "公司动态",
                index : 3,
                router: '/main/companyNews',
              },
              {
                name: "关于美拓",
                index : 4,
                router: '/main/aboutUs',
              },

            ],
          slider:{
            top: "0px",
          },
          active:{
            color:"black",
            oldIndex:1,
          }
        }
      },
      computed:{
        ...mapGetters([
          'sidebar',
        ])
      },
      methods:{
          setMenuIndex(index){
            this.active.oldIndex = this.sidebar.index;
            this.$store.dispatch('setMenuIndex',index);
            this.setSliderStyle(this.$refs.targetEle[this.sidebar.index-1]);

          },
          initSlider(){
            this.sidebar.index = this.active.oldIndex ;
            this.setSliderStyle(this.$refs.targetEle[ this.sidebar.index-1]);
          },
          setSliderStyle(targetEle){
            let startOffset = targetEle.offsetTop,
                childLabel = targetEle.lastChild;
            //样式变化
            this.slider.top = startOffset+ "px";
            this.sidebar.index =  childLabel.dataset.index;
          },
      },
      mounted(){
        this.initSlider();
      }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .menu-box{
    position: fixed;
    width: 240px;
    height: 100%;
    left: -240px;
    top: 0;
    background: #fff;
    text-align: center;
    z-index: 9999999;
    transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    -o-transition: .5s;
    display: block;
  }

   .active{
    left:0px;
  }

  .menu-box .top{
    overflow: hidden;
  }



  .menu-box .logo-box{
    margin: 30px 0;
  }
  .menu-box .QRcode-box{
    margin: 30px 0;
  }

  .menu-box .QRcode-box p{
    display: block;
    margin: 0 auto;
    font-size: 14px;
    width: 130px;
  }



  .menu-box .content{
    position: relative;
    text-align: center;
    line-height: 36px;
    overflow: auto;
    height: 50%;
  }
  .content>ul {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }
  .content>ul>li{
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    cursor: pointer;
  }
  .content>ul>li.active{
    color: #fff;
  }
  .content>ul>li>label{
    display: block;
    position: relative;
    z-index: 99;
  }
  .content>ul>li.background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 98;
    transition: .2s;
    -moz-transition: .2s;
    -ms-transition: .2s;
    -o-transition: .2s;
    -webkit-transition: .2s;
  }
  .content>ul>li.background:before {
    content: '-';
    width: 130px;
    background: #ff9900;
    color: #ff9900;
    margin: 0 auto;
    border-radius: 32px;
    display: block;
    cursor: pointer;
  }
  .menu-box .footer{
    position: relative;
    z-index: 9;
    margin: 30px 0;
  }
  .social-box{
    margin-bottom: 7.5px;
  }
  .social-box a{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background: #ff9900;
    font-size: 24px;
    margin: 2.5px 7.5px;
    cursor: pointer;
    color: #fff;
    transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
  }
  .footer-box{
    padding: 0 10px;
  }

  @media (max-height: 768px) {
    .menu-box .logo-box{
      margin: 20px 0;
    }
    .menu-box .QRcode-box{
      margin: 20px 0;
    }
    .menu-box .footer{
      margin: 30px 0;
    }
  }
</style>
