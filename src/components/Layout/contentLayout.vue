<!--该布局用于产品列表 新闻资讯的布局基础-->

<template>
  <section role="main" class="subpage" :class="{active:sidebar.opened}">
    <!--页眉 -->
    <div class="sidebar-header active">
      <!--菜单控制器-->
      <div class="sidebar-icon" @click="toggleSideBar">
        <svg-icon :icon-class="sidebar.opened  ? 'arrow-left' : 'menu' "></svg-icon>
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
    <div class="main-box">
      <slot ></slot>
    </div>

    <!--页脚-->
    <footer>
      <p>互联网 版权所有 2008-2016 粤ICP备0123456789-1 </p>
    </footer>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "content-layout",
      data(){
          return {
            // menuActive: true,
          }
      },
      computed:{
          ...mapGetters([
            'sidebar',
          ]),
      },
      methods:{
        toggleSideBar(){
          this.$store.dispatch('toggleSideBar');
        }
      }

    }
</script>

<style scoped>


  a{
    text-decoration: none;
  }

   .main-box{
     overflow: hidden;
     transition: all 0.5s ease 0s;
     z-index: 1;
     width: 100%;
     background: #eff2f4;
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
    /*position:absolute;*/
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

  .sidebar-header {
    height: 70px;
    position: fixed;
    z-index: 99999;
    top: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    -o-transition: .5s;
  }

  @media (min-width:1201px) {
    header[role=heading].active+section[role=main] .sidebar-header {
      left: 240px;
    }
  }


  .sidebar-header.active {
    position: relative;
    background: #eff2f4;
    left: 0 !important;
  }

  .sidebar-header.active .sidebar-icon i {
    color: #393939;
  }

  @media (max-width:1200px) {
    .sidebar-header.active {
      background: #fff;
    }
  }

  @media (min-width:1200px) {
    .sidebar-header.active .sidebar-nav>ul>li {
      background: rgba(255,255,255,1);
    }

    .sidebar-header.active .sidebar-nav>ul>li>a {
      color: #393939;
    }

    .sidebar-header.active .sidebar-nav>ul>li.active {
      background: #ff9900;
    }

    .sidebar-header.active .sidebar-nav>ul>li.active>a {
      color: #fff;
    }

    .sidebar-header.active .sidebar-nav>ul>li:hover {
      box-shadow: inset 0 3px 8px rgba(0,0,0,.035);
    }

    .sidebar-header.active .sidebar-nav>ul>li:hover>a {
      text-shadow: 0 2px 3px rgba(0,0,0,.035);
    }
  }

  .sidebar-icon {
    position: absolute;
    left: 30px;
    top: 50%;
    height: 36px;
    width: 20px;
    line-height: 38px;
    margin-top: -18px;
  }

  .sidebar-icon i {
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }

  .sidebar-icon i.fa-arrow-left {
    display: none;
  }

  .sidebar-icon i.fa-th-list {
    display: inline-block;
  }

  .sidebar-icon.active i.fa-arrow-left {
    display: inline-block;
  }

  .sidebar-icon.active i.fa-th-list {
    display: none;
  }

  .sidebar-nav {
    position: absolute;
    top: 50%;
    left: 80px;
    right: 2.5%;
    padding-right: 212px;
    margin-top: -18px;
  }

  .sidebar-nav ol {
    display: none;
  }

  .sidebar-nav ul {
    list-style: none;
    margin: -10px 0 0 0;
    padding: 0;
  }

  .sidebar-nav ul li {
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0;
  }

  .sidebar-nav>ul>li>ul {
    z-index: 999;
  }

  .sidebar-search {
    position: absolute;
    right: 2.5%;
    top: 50%;
    margin-top: -18px;
  }

  .sidebar-search input.searchword {
    width: 200px;
    border: none;
    height: 36px;
    line-height: 34px;
    border: none;
    border-radius: 6px;
    padding: 0 30px 0 15px;
    outline: none;
    transition: .3s;
  }

  .sidebar-search input.searchword:hover {
    box-shadow: inset 0 3px 8px rgba(0,0,0,.05);
  }

  .sidebar-search i {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -10px;
  }

  .sidebar-search i:hover {
    color: #ff9900;
    cursor: pointer;
  }

  .sidebar-header.active .sidebar-search input.searchword {
    border: 1px solid #ccc;
  }

  @media (max-width:1200px) {
    .sidebar-search {
      left: 2.5%;
      right: auto;
    }
  }

  @media (max-width:992px) {
    .sidebar-search {
      left: 5%;
    }
  }

  @media (max-width:350px) {
    .sidebar-search input.searchword {
      width: 150px;
    }
  }

  @media (min-width:1200px) {
    .sidebar-nav>ul {
    }

    .sidebar-nav>ul>li {
      float: left;
      position: relative;
      border: 1px solid #ccc;
      padding: 0 15px;
      line-height: 34px;
      margin-left: 10px;
      border-radius: 6px;
      transition: .35s ease-in-out;
      -moz-transition: .35s ease-in-out;
      -ms-transition: .35s ease-in-out;
      -o-transition: .35s ease-in-out;
      -webkit-transition: .35s ease-in-out;
    }

    .sidebar-nav>ul>li:first-child {
      margin-left: 0;
    }

    .sidebar-nav>ul>li>a {
      display: block;
      color: #fff;
    }

    .sidebar-nav>ul>li.active {
      background: #ff9900;
      border: 0;
      line-height: 36px;
    }

    .sidebar-nav>ul>li.active>a {
      color: #fff;
    }

    .sidebar-nav>ul>li:hover {
      box-shadow: inset 0 3px 8px rgba(0,0,0,.15);
    }

    .sidebar-nav>ul>li.active:hover {
      box-shadow: none;
    }

    .sidebar-nav>ul>li:hover>a {
      text-shadow: 0 2px 3px rgba(0,0,0,.15);
    }

    .sidebar-nav>ul>li>ul {
      background: #171717;
      position: absolute;
      top: 175%;
      left: 50%;
      border-radius: 10px;
      padding: 15px 0;
      opacity: 0;
      visibility: hidden;
      transition: .35s ease-in-out;
      -moz-transition: .35s ease-in-out;
      -ms-transition: .35s ease-in-out;
      -o-transition: .35s ease-in-out;
      -webkit-transition: .35s ease-in-out;
      transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
    }

    .sidebar-nav>ul>li>ul:before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: -16px;
      margin-left: -10px;
    ;
      border-width: 0 9px 16px 9px;
      border-style: solid;
      border-color: transparent transparent #171717 transparent;
    }

    .sidebar-nav>ul>li:hover>ul {
      opacity: 1;
      visibility: visible;
    }

    .sidebar-nav>ul>li>ul>li {
      text-align: center;
    }

    .sidebar-nav>ul>li>ul>li.one {
      display: none;
    }

    .sidebar-nav>ul>li>ul>li>a {
      color: #eee;
      line-height: 36px;
      padding: 0 30px;
      white-space: nowrap;
      display: block;
    }

    .sidebar-nav>ul>li>ul>li>a:hover {
      background: #000;
    }
  }

  @media (max-width:1200px) {
    .sidebar-nav>ul>li>ul>li.one {
      display: block;
    }

    .sidebar-icon {
      left: auto;
      right: 2.5%;
    }

    .sidebar-nav {
      left: auto;
      right: 5%;
      padding: 0 20px 0 0;
    }
  }

  @media (max-width:991px) {
    .sidebar-icon {
      left: auto;
      right: 5%;
    }

    .sidebar-nav {
      padding: 0;
      height: 36px;
      left: auto;
      right: 10%;
      margin-right: 20px;
    }
  }

  @media (max-width:1199px) {
    .sidebar-header {
      cursor: pointer;
    }

    .sidebar-icon {
      left: auto;
    }

    .sidebar-nav {
      padding: 0;
      height: 36px;
      left: auto;
      top: 0 !important;
      margin: 17px 20px 0 0 !important;
      cursor: pointer;
    }

    .sidebar-nav ol {
      display: block;
      list-style: none;
      margin: 0;
      background: #ff9900;
      line-height: 36px;
      padding: 0 15px;
      color: #fff;
      border-radius: 6px;
      position: relative;
    }

    .sidebar-nav>ul {
      background: #171717;
      position: absolute;
      top: 175%;
      left: 50%;
      border-radius: 10px;
      padding: 15px 0;
      opacity: 0;
      visibility: hidden;
      transition: .35s ease-in-out;
      -moz-transition: .35s ease-in-out;
      -ms-transition: .35s ease-in-out;
      -o-transition: .35s ease-in-out;
      -webkit-transition: .35s ease-in-out;
      transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
    }

    .sidebar-nav>ul:before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      top: -16px;
      margin-left: -10px;
    ;
      border-width: 0 9px 16px 9px;
      border-style: solid;
      border-color: transparent transparent #171717 transparent;
    }

    .sidebar-nav:hover>ul {
      opacity: 1;
      visibility: visible;
    }

    .sidebar-nav>ul>li {
      text-align: center;
      position: relative;
    }

    .sidebar-nav>ul>li>a {
      color: #eee;
      line-height: 36px;
      padding: 0 30px;
      white-space: nowrap;
      display: block;
    }

    .sidebar-nav>ul>li>a:hover {
      background: #000;
    }

    .sidebar-nav>ul>li>ul {
      background: #171717;
      position: absolute;
      top: 50%;
      right: 100%;
      border-radius: 10px;
      margin-right: 20px;
      padding: 15px 0;
      opacity: 0;
      visibility: hidden;
      transition: .35s ease-in-out;
      -moz-transition: .35s ease-in-out;
      -ms-transition: .35s ease-in-out;
      -o-transition: .35s ease-in-out;
      -webkit-transition: .35s ease-in-out;
      transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }

    .sidebar-nav>ul>li>ul:before {
      content: '';
      display: block;
      position: absolute;
      right: -16px;
      top: 50%;
      margin-top: -10px;
    ;
      border-width: 9px 0 9px 16px;
      border-style: solid;
      border-color: transparent transparent transparent #171717;
    }

    .sidebar-nav>ul>li:hover>ul {
      opacity: 1;
      visibility: visible
    }

    .sidebar-nav>ul>li>ul>li {
      text-align: center;
    }

    .sidebar-nav>ul>li>ul>li.one {
      display: block;
    }

    .sidebar-nav>ul>li>ul>li>a {
      color: #eee;
      line-height: 36px;
      padding: 0 30px;
      white-space: nowrap;
      display: block;
    }

    .sidebar-nav>ul>li>ul>li>a:hover {
      background: #000;
    }
  }

  .sidebar-header.active {
    position: relative;
    background: #eff2f4;
    left: 0 !important;
  }

  .sidebar-header.active .sidebar-icon i {
    color: #393939;
  }

  @media (max-width:1200px) {
    .sidebar-header.active {
      background: #fff;
    }
  }

  @media (min-width:1200px) {
    .sidebar-header.active .sidebar-nav>ul>li {
      background: rgba(255,255,255,1);
    }

    .sidebar-header.active .sidebar-nav>ul>li>a {
      color: #393939;
    }

    .sidebar-header.active .sidebar-nav>ul>li.active {
      background: #ff9900;
    }

    .sidebar-header.active .sidebar-nav>ul>li.active>a {
      color: #fff;
    }

    .sidebar-header.active .sidebar-nav>ul>li:hover {
      box-shadow: inset 0 3px 8px rgba(0,0,0,.035);
    }

    .sidebar-header.active .sidebar-nav>ul>li:hover>a {
      text-shadow: 0 2px 3px rgba(0,0,0,.035);
    }
  }

  @media(min-width:1200px) {
    section[role=main].subpage.active {
      padding-left: 240px;
    }
  }

</style>
