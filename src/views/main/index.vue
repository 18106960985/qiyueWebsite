<template>
  <div >


    <!--首页-->
    <keep-alive>
      <meta-page :currentPage="currentPage"   >
        <meta--carousel>
        </meta--carousel>
        <div class="banner-down" @click="currentPage++">
          <svg-icon icon-class="down"/>
        </div>
      </meta-page>
    </keep-alive>
    <!--产品-->
    <keep-alive>
      <meta-page :currentPage="currentPage"  >
        <meta-goods ></meta-goods>
      </meta-page>
    </keep-alive>
    <!--解决方案-->
    <keep-alive>
      <meta-page :currentPage="currentPage"  >
        <meta-answer></meta-answer>
      </meta-page>
    </keep-alive>
    <!--合作-->
    <keep-alive>
      <meta-page :currentPage="currentPage"  >
        <meta-cooperation></meta-cooperation>
      </meta-page>
    </keep-alive>
    <!--关于-->
    <keep-alive>
    <meta-page :currentPage="currentPage"  >
      <meta-about-us></meta-about-us>
    </meta-page>
    </keep-alive>
    <!--联系信息-->
    <keep-alive>
    <meta-page :currentPage="currentPage"  >
      <meta-contact></meta-contact>
    </meta-page>
    </keep-alive>
    <!--使用数据遍历-->
    <meta-nav :currentPage="currentPage"  :ulOptions="components.ulOptions"  :leftMenuIsActive="leftMenuIsActive" @changPage="changPage" @changLeftMenu="changLeftMenu" >
    </meta-nav>

  </div>
</template>
<script>

  import MetaPage from '../../components/Carousel/yeCardPage';
  import Carousel from '../Carousel/index';
  import MetaNav from "./components/metaNavMenu";
  import goodsPage from '../product/index'
  import answer from '../solution/index'
  import cooperation from '../cooperation/index'
  import aboutUs from '../aboutUs/index'
  import contact from '../contact/index'

  export default {
    name: 'app',
    components:{
      "meta-page":MetaPage,
      "meta-nav" :MetaNav,
      "meta-Carousel": Carousel,
      "meta-goods": goodsPage,
      'meta-answer': answer,
      'meta-cooperation': cooperation,
      'meta-about-us': aboutUs,
      'meta-contact': contact
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
          background: '#fff',
          //背景图片
          //是否居中
          isCenter: true,
          //切换方向
          direction:"y",
        }, {
          background: '#fff',
          color: '#fff',
          isCenter: false,
          direction:"y",
        }, {
          background: '#fff',
          color: '#fff',
          isCenter: true,
          direction:"y",
        }, {
          background: '#fff',
          color: '#fff',
          isCenter: true,
          direction:"y",
        },{
          background: '#fff',
          color: '#fff',
          isCenter: true,
          direction:"y",
        },{
          background: '#fff',
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
