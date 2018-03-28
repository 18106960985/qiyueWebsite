<!--整体页面布局-->
<template>
    <div class="app main-container">
      <meta-left-nav-menu :isActive="leftMenuIsActive"></meta-left-nav-menu>
      <keep-alive >
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
  import metaIndex from "../main/index";
  import leftMenu from "./components/metaLeftMenu";

  import metaDetails from '../companyNews/metaDetails'

  export default {
    name: "layout",
    components:{
      'ye-index':metaIndex,
      'meta-left-nav-menu': leftMenu,
      'test' :metaDetails,
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
