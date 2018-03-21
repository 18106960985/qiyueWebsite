<template>
  <div  >


    <meta-page :currentPage="currentPage"  >
      <meta-answer></meta-answer>
    </meta-page>

    <meta-page :currentPage="currentPage"   >
      <meta--carousel>
      </meta--carousel>
      <div class="banner-down" @click="currentPage++">
        <svg-icon icon-class="down"/>
      </div>
    </meta-page>
    <meta-page :currentPage="currentPage"  >
      <meta-goods ></meta-goods>
    </meta-page>
    <meta-page :currentPage="currentPage"  >
      3333333
    </meta-page>
    <!--使用数据遍历-->
    <meta-nav :currentPage="currentPage"  :ulOptions="components.ulOptions"  :leftMenuIsActive="leftMenuIsActive" @changPage="changPage" @changLeftMenu="changLeftMenu" >
    </meta-nav>
  </div>
</template>
<script>
  import MetaPage from '../../components/Carousel/yeCardPage';
  import Carousel from '../Carousel/index';
  import MetaNav from "./components/metaNavMenu";
  import goodsPage from '../goods/index'
  import answer from '../answer/index'

  export default {
    name: 'app',
    components:{
      "meta-page":MetaPage,
      "meta-nav" :MetaNav,
      "meta-Carousel": Carousel,
      "meta-goods": goodsPage,
      'meta-answer': answer,

    },
    props:{
      leftMenuIsActive:{
        type:Boolean,
        default:false
      }
    },
    created(){
    },
    data(){
      return {
        options: [{
          background: 'rgba(79, 204, 76, 1)',
          //背景图片
          //是否居中
          isCenter: true,
          //切换方向
          direction:"y",
        }, {
          background: 'rgba(79, 204, 76, 1)',
          color: '#fff',
          isCenter: false,
          direction:"y",
          bimgSrc:"https://images.apple.com/v/mac/home/y/images/home/imac_pro_large_2x.jpg",
        }, {
          background: 'rgba(233, 84, 84, 1)',
          color: '#fff',
          isCenter: true,
          direction:"y",
        }, {
          background: 'rgba(46, 153, 229, 1)',
          color: '#fff',
          isCenter: true,
          direction:"y",
        }],

        currentPage: 1,
        totalPage: 2,//总页数

        components:{
          //遍历的标题栏样式
          ulOptions:
            [
              {
                name: "首页",
                index :1 ,//切换的卡片页面
              },
              {
                name: "产品",
                index : 2,
              },
              {
                name: "方案",
                index : 3,
              },
              {
                name: "合作",
                index : 4,
              },
              {
                name: "关于",
                index : 5,
              },
              {
                name: "联系",
                index: 6,
              }

            ],
        },

      }
    },
    computed:{


    },
    methods: {
      changPage(index){
        this.currentPage = index;
      },
      changLeftMenu(isActive){
        this.$emit("update:leftMenuIsActive",isActive);
      },
      initPage(){
        console.log(this.totalPage)
        this.$children.forEach((child, index) => {
          if (child.option == null) {
            let childOption = this.options[index];
            this.$set(childOption, 'index', index + 1);
            child.option = childOption;
          }
        });
      }
    },
    mounted() {

     let size= this.options.length -1;
      this.$children.forEach((child, index) => {
        if (index >size) return;
        if (child.option == null) {
          let childOption = this.options[index];
          this.$set(childOption, 'index', index + 1);
          child.option = childOption;
        }

      });

    }
  }
</script>

<style>




</style>
