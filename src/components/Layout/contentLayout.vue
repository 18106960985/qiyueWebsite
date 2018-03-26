<!--该布局用于产品列表 新闻资讯的布局基础-->

<template>
  <section role="main" >
    <!--主体内容-->
    <div class="main-box">
      <!--页眉 -->
      <div class="sidebar-header active">
        <!--菜单控制器-->
        <div class="sidebar-icon">
          <svg-icon :icon-class="menuActive  ? 'menu' : 'arrow-left'"></svg-icon>
        </div>
        <!--标签栏-->
        <div class="sidebar-nav">
          <ol>全部</ol>
          <ul>
            <li class="active">
              <a>全部</a>
            </li>
          </ul>
        </div>
        <div class="sidebar-search">
            <input type="search" class="searchword" placeholder="search">
            <input type="submit" class="hidden" value=" ">
            <svg-icon icon-class="search"></svg-icon>
        </div>
      </div>
      <!--产品内容-->
      <slot ></slot>
    </div>
    <!--页脚-->
    <footer>
      <p>互联网 版权所有 2008-2016 粤ICP备0123456789-1 </p>
    </footer>
  </section>
</template>

<script>
    export default {
        name: "content-layout",
      data(){
          return {
            menuActive: true,
          }
      },

    }
</script>

<style scoped>


  a{
    text-decoration: none;
  }

   .main-box{
     overflow: hidden;
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     transition: all 0.5s ease 0s;
     z-index: 1;
     width: 100%;
  }
  section[role=main] {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    -o-transition: .5s;
  }
  .sidebar-icon .svg-icon {
    color: black;
    font-size: 24px;
    cursor: pointer;
  }
  .sidebar-search .svg-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -10px;
    width: 20px;
    height: 20px;
  }
  button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  .hidden {
    display: none!important;
  }

  footer {
    position: fixed;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: auto;
    padding: 15px 60px;
    line-height: 30px;
    background: #393939;
    color: #eee;
    text-align: center;
    border: none !important;
  }
  footer p {
    margin-bottom: 0px;
    color: white;
  }
</style>
