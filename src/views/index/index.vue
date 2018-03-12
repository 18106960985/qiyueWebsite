<template>
  <div id="app" class="app">
    <!--使用数据遍历-->
    <meta-nav :currentPage="currentPage"  :ulOptions="components.ulOptions"  @changPage="changPage">
    </meta-nav>
    <meta-page :currentPage="currentPage"  :isCenter="true" :pageIndex="1" >

    </meta-page>

    <meta-page :currentPage="currentPage"  :pageIndex="2" >
      产品页。不居中
    </meta-page>

    <meta-page :currentPage="currentPage"  :pageIndex="3" >
      产品页。不居中
    </meta-page>
    <meta-page :currentPage="currentPage"  :pageIndex="4" >
      产品页。不居中
    </meta-page>
    <meta-page :currentPage="currentPage"  :pageIndex="5" >
      产品页。不居中
    </meta-page>
    <meta-page :currentPage="currentPage"  :pageIndex="6" >
      产品页。不居中
    </meta-page>

  </div>
</template>

<script>
  import MetaPage from './components/yeCardPage';
  import MetaNav from "./components/metaNavMenu";

  export default {
    name: 'app',
    components:{
      "meta-page":MetaPage,
      "meta-nav" :MetaNav
    },
    data(){
      return{
        currentPage: 1,
        totalPage: 2,//总页数
        controllerOption: {
          arrowsType: false,
          navbar: true,
          highlight: true,
          loop: false
        },
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
    },
    mounted() {

    }
  }
</script>

<style>







  .animate {
    transition: all 1s ease-out 0s;
  }

  .move-left {
    transform: translateX(-1000%);
  }

  .move-right {
    transform: translateX(1000%);
  }

  @media screen and (max-width:768px) {
    html,
    body {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  .person-img {
    width: 223px;
    height: 185px;
    float: left;
    background-color: #fff;
    box-shadow: 3px 3px 10px #999;
  }

  .person-img img {
    height: 100%;
    width: 100%;
  }

  .person-basic-info {
    overflow: hidden;
    float: right;
    margin-left: 40px;
  }

  .info-line {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .text-center {
    text-align: center;
  }

  .text-bold {
    font-weight: bold;
  }

  .demo-intro {
    text-indent: 2em;
  }

  dt {
    font-weight: bold;
    font-size: 16px;
  }

  ul {
    padding-left: 1em;
  }

  .avatar {
    margin: 10px auto;
    display: block;
    box-shadow: 1px 1px 5px #666;
  }

  .author-info {
    text-align: center;
  }
</style>
