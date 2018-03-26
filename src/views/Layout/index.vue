<template>
  <div class="app">
    <!--主体内容区域-->
    <div class="content">
      <!--左侧菜单-->
      <meta-left-nav-menu :isActive="leftMenuIsActive"></meta-left-nav-menu>
      <!--<ye-index   :leftMenuIsActive.sync="leftMenuIsActive"  ></ye-index>-->
      <test></test>
    </div>
    <!--右侧导航栏 需要配置路由-->


  </div>

</template>

<script>
  import metaIndex from  "../index/index";
  import leftMenu from "./components/metaLeftMenu";

  import test from '../companyNews/index'

    export default {
        name: "index",
        components:{
          'ye-index':metaIndex,
          'meta-left-nav-menu': leftMenu,
          'test' :test,
        },
      data(){
          return {
             leftMenuIsActive:false,


          }
      },
      methods:{

      }
    }
</script>

<style scoped>
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  .app {
    height: 100%;
    width: 100%;
  }
</style>
