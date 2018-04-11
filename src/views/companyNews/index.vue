<!--公司新闻 列表-->
<template>
  <div>
    <div class="information-box">
      <ul class="met-page-ajax" v-if="newList">
        <li class=" news_img news-bin" v-for="(value,index) in newList">
          <!--左边图片-->
          <!--<a :href="value.routerPath" class="image left" >-->
          <router-link :to="'/main/newDetails/'+value.id" class="image left">
            <img class="media-object" :src="value.imgPath" :title="value.title" :alt="value.title">
          </router-link>
          <!--</a>-->
          <span>
           <b>
             <!--发布日期-->
             <svg-icon icon-class="releaseDate"></svg-icon>
              {{value.displayTime}}
             <!--看过人数-->
             <svg-icon icon-class="eye"></svg-icon>
             {{value.readingNum}}
           </b>
          <!--标题-->
          <a class="name">
            {{value.title}}
          </a>
            <p>
              {{ value.introduce}}
            </p>
             <router-link :to="'/main/newDetails/'+value.id" :title="value.title" :alt="value.title" class="more">
               <i>查看文章</i>
             </router-link>
         </span>
          <!--右边图片-->
            <router-link :to="'/main/newDetails/'+value.id" class="image right">
            <img class="media-object" :src="value.imgPath" :title="value.title" :alt="value.title">
            </router-link>
        </li>
      </ul>
      <div v-else> 暂无资讯</div>
    </div>
  </div>
</template>

<script>
  import eventHub from '@/eventHub/eventHub'
  import {getAll} from '@/api/information/index'
    export default {
        name: "index",
      data(){
          return {
            newList:[],
          }
      },
      created(){
        this.getAll();
        this.cleanNav();
      },
      methods:{
          getAll(){
            getAll().then( res =>{
              if(res.data.rel){
                this.newList = res.data.data;
              }
            })
          },
        cleanNav(){
            eventHub.$emit('cleanNav');
        }
      }
    }
</script>

<style scoped>

  a{
    text-decoration: none;
  }


  .information-box {
    margin:0 60px;
    padding-bottom:30px;
  }
  .information-box ul,.information-box li {
    list-style:none;
    margin:0;
    padding:0;
  }
  .information-box li:first-child {
    margin-top:40px;
  }
  .information-box ul {
    margin-bottom:30px;
  }
  .information-box li {
    margin-top:50px;
    line-height:1;
  }
  .information-box li:after {
    display:table;
    content:'';
    clear:both;
  }
  .information-box li font {
    display:block;
    float:left;
    background:#ff9900;
    line-height:22px;
    color:#fff;
    margin-right:15px;
    width:60px;
    height:60px;
    position:relative;
    text-align:center;
    padding:8px;
    border-radius:5px;
  }
  .information-box li font:before {
    position:absolute;
    content:'';
    border-style:solid;
    border-width:22px 5px 0 5px;
    border-color:#ff9900 transparent transparent transparent;
    top:53px;
    left:33px;
    transform:rotate(-40deg);
  }
  .information-box li font b {
    display:block;
    font-size:26px;
    font-family:Helvetica;
    font-weight:normal;
  }
  .information-box li font u {
    display:block;
    font-size:18px;
    text-decoration:none;
  }
  .information-box li img {
    border:3px solid #fff;
    height:160px;
    float:left;
    margin-right:30px;
  }
  .information-box li span {
    display:block;
  }
  .information-box li span h3 {
    margin:0;
    display:block;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }
  .information-box li span h3:hover {
    color:#00dfb9;
  }
  .information-box li span em {
    font-style:normal;
    color:#888;
    display:block;
    margin:12px 0;
  }
  .information-box li span em u {
    text-decoration:none;
  }
  .information-box li p {
    color:#555;
    line-height:22px;
    margin:0;
    height:66px;
    overflow:hidden;
    display:block;
    text-indent:20px;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  .information-box li strong {
    color:#ff9900;
    font-weight:normal;
    display:block;
    margin-top:13px;
  }
  .information-box li strong i {
  }.information-box li strong a {
     color:#ff9900;
     margin-left:6px;
   }
  .information-box li strong a:hover {
    text-decoration:underline;
  }
  @media (max-width:1200px) {
    .information-box {
      margin:0 30px;
    }
  }@media (max-width:767px) {
    .information-box li font,.information-box li span em u {
      display:none;
    }
    .information-box li span h3 {
      font-size:20px;
    }
  }@media (max-width:479px) {
    .information-box {
      margin:0 30px;
    }
    .information-box li {
      margin-top:35px;
    }
    .information-box li span {
      margin:20px 0 10px 0;
    }
    .information-box li font {
      display:block;
    }
    .information-box li img {
      float:none;
      margin:0;
    }
    .information-box li span h3 {
      font-size:18px;
    }
  }@media (max-width:350px) {
    .information-box {
      margin:0 15px;
    }
  }.information-table {
   }.information-row {
      position:relative;
    }
  .information-descript {
    padding-right:370px;
    min-height:800px;
  }
  .information-descript.info0 {
    padding:0;
  }
  .information-title {
    margin:30px 60px;
    padding:0 0 20px 0;
    position:relative;
  }
  .information-title h1 {
    font-size:30px;
  }
  .information-title em {
    font-style:normal;
    color:#888;
    display:block;
    margin:12px 0;
  }
  .information-title em u {
    text-decoration:none;
  }
  .information-title:after {
    content:'';
    border-top:1px solid #dadada;
    border-bottom:1px solid #fff;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
  }
  .information-content {
    margin:0 60px;
    padding:0 0 20px 0;
    word-break:break-all;
  }
  .information-content img {
    max-width:100%;
  }
  .information-hots {
    position:absolute;
    right:60px;
    top:100px;
  }
  .information-hots div {
    width:310px;
    background:#fff;
    display:block;
    overflow:hidden;
  }
  .information-hots h3 {
    display:block;
    margin:20px 10px 7.5px 10px;
    font-size:18px;
    text-indent:3px;
    border-bottom:2px solid #eff2f4;
    line-height:34px;
    position:relative;
  }
  .information-hots h3:after {
    display:block;
    content:'';
    clear:both;
    position:absolute;
    height:2px;
    width:80px;
    background:#00dfb9;
    bottom:-2px;
    left:0;
  }
  .information-hots ul,.information-hots li {
    list-style:none;
    margin:0;
    padding:7.5px;
    display:block;
  }
  .information-hots li:after {
    clear:both;
    display:table;
    content:'';
  }
  .information-hots li img {
    width:100px;
    float:left;
    margin-right:10px;
  }
  .information-hots li span {
    display:block;
    overflow:hidden;
    line-height:22px;
    height:44px;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .information-hots li font {
    color:#888;
    display:block;
    margin-top:5px;
  }
  @media (max-width:1200px) {
    .information-descript {
      padding-right:340px;
    }
    .information-title {
      margin:30px;
    }
    .information-content {
      margin:0 30px;
    }
    .information-hots {
      right:30px;
    }
  }@media (max-width:992px) {
    .information-descript {
      padding:0;
      min-height:200px;
    }
    .information-hots {
      padding:30px;
      position:relative;
      right:0;
      top:0;
    }
    .information-hots div {
      width:auto;
      margin:0;
      top:auto;
    }
    .information-hots ul:after {
      display:table;
      content:'';
      clear:both;
    }
    .information-hots li {
      width:50%;
      float:left;
    }
  }@media (max-width:479px) {
    .information-hots li {
      width:auto;
      float:none;
    }
  }.sidebar-header {
     height:70px;
     position:fixed;
     z-index:99999;
     top:0;
     right:0;
     left:0;
     background:rgba(0,0,0,.5);
     transition:.5s;
     -moz-transition:.5s;
     -webkit-transition:.5s;
     -o-transition:.5s;
   }
  @media (min-width:1201px) {
    header[role=heading].active+section[role=main] .sidebar-header {
      left:240px;
    }
  }

  .news-bin {
    border:none !important;
    background:rgba(255,255,255,.97);
    display:block;
    margin:0 0 38px 0 !important;
    padding:0 !important;
    overflow:hidden;
    box-shadow:0 0 20px rgba(0,0,0,0.1);
  }

  .news-bin a.image {
     float:left;
     width:60%;
     position:relative;
     overflow:hidden;
     display:none;
   }
  @media (max-width:992px) {
    .news-bin {
      margin:0 0 14px 0 !important;
    }
  }
  @media (max-width:1440px) {
    .news-bin {
      margin:0 0 28px 0 !important;
    }
  }
  @media (min-width:993px) {
    .news-bin:nth-child(2n+1) a.image.left {
      display:block;
    }
  }
  @media (max-width:992px) {
    .news-bin a.image.left {
      display:block;
      float:none;
      width:100%;
    }
  }
  @media (min-width:993px) {
    .news-bin:nth-child(2n) a.image.right {
      display:block;
    }
  }
  @media (min-width:1674px) {
    .news-bin a.image {
      float:left;
      width:52.5%;
    }
  }.news-bin a.image.left:before {
     position:absolute;
     content:'';
     right:0;
     top:50%;
     margin-top:-32px;
     z-index:1;
     border-style:solid;
     border-width:32px 38px 32px 0;
     border-color:transparent #fff transparent transparent;
   }
  @media (max-width:992px) {
    .news-bin a.image.left:before {
      position:absolute;
      content:'';
      right:auto;
      left:28px;
      top:auto;
      bottom:0;
      margin:0;
      z-index:1;
      border-style:solid;
      border-width:0 22px 28px 22px;
      border-color:transparent transparent #fff transparent;
    }
  }.news-bin a.image img {
     display:block;
     width:100%;
     height: auto;
     transform:scale(1,1);
     -moz-transform:scale(1,1);
     -ms-transform:scale(1,1);
     -o-transform:scale(1,1);
     -webkit-transform:scale(1,1);
     transition:1.3s .05s;
     -moz-transition:1.3s .05s;
     -ms-transition:1.3s .05s;
     -o-transition:1.3s .05s;
     -webkit-transition:1.3s .05s;
   }
  .media-object {
    width:120px;
  }
  .news-bin span {
    width:40%;
    float:left;
    padding:38px;
  }
  @media (max-width:1440px) {
    .news-bin span {
      width:40%;
      padding:28px;
    }
  }@media (min-width:1674px) {
    .news-bin span {
      width:47.5%;
    }
  }@media (max-width:767px) {
    .news-bin span {
      padding:14px;
    }
  }@media (max-width:992px) {
    .news-bin span {
      float:none;
      display:block;
      width:100%;
    }
  }.news-bin span b {
     display:block;
     font-family:'AddFont';
     font-weight:normal;
     color:#888;
   }
  .news-bin span b i {
    margin-left:8px;
  }

  .news-bin span a.name {
    display:block;
    font-size:19px;
    margin:14px 0 18px 0;
  }
  .met-news ul.met-page-ajax li p {
    font-size:16px;
    font-weight:300;
  }
  .news-bin span p {
    display:block;
    color:#555;
    font-size:14px !important;
    margin:0;
    padding:0;
    line-height:24px;
    max-height:144px;
    overflow:hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:6;
  }
  .news-bin span a.more {
    display:block;
    width:180px;
    height:38px;
    line-height:38px;
    text-align:center;
    background:#00c0ff;
    margin-top:18px;
    position:relative;
  }
  .news-bin span a.more:before {
    display:block;
    width:0;
    height:100%;
    content:'';
    background:#333;
    position:absolute;
    z-index:1;
    transition:.3s .05s;
    -moz-transition:.3s .05s;
    -ms-transition:.3s .05s;
    -o-transition:.3s .05s;
    -webkit-transition:.3s .05s;
  }
  .news-bin span a.more:hover:before {
    width:100%
  }
  .news-bin span a.more i {
    font-size:15px;
    color:#fff;
    font-style:normal;
    position:relative;
    z-index:2;
  }
  .news-bin a.image.right:before {
    position:absolute;
    content:'';
    left:0;
    top:50%;
    margin-top:-32px;
    z-index:1;
    border-style:solid;
    border-width:32px 0 32px 38px;
    border-color:transparent transparent transparent #fff;
  }
  .information-table {
    margin-top:40px;
  }
</style>
