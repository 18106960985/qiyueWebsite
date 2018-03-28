<template>
  <div class="app">

    <meta-layout>
       <router-view></router-view>
    </meta-layout>
  </div>

</template>

<script>
  import contentLayout from "@/components/Layout/contentLayout";
  import test from '@/views/product/showproduct/index'
    export default {
        name: "index",
        components:{
          'meta-layout':contentLayout,
          'test':test
        },
      data(){
          return {
             // leftMenuIsActive:false,  已经移交给vuex托管

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
