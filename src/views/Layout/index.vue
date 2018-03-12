<template>
  <div class="app">
    <!--主体内容区域-->
    <div class="content">

      <ye-index></ye-index>
    </div>
    <!--右侧导航栏 需要配置路由-->
    <div class="nav-menu">

    </div>

  </div>

</template>

<script>
    export default {
        name: "index",
        components:{
          'ye-index':import("../index/index"),

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
