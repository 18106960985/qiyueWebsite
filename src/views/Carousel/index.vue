<template>
  <div >

    <ye-page :currentPage.sync="currentPage" >
      <first-page :currentPage="currentPage"></first-page>
    </ye-page>
    <ye-page :currentPage.sync="currentPage"  >
      <second-page :currentPage="currentPage"></second-page>
    </ye-page>
    <ye-page :currentPage.sync="currentPage" >
      <last-page :currentPage="currentPage"></last-page>
    </ye-page>
    <ye-page :currentPage.sync="currentPage">
      <last-page :currentPage="currentPage"></last-page>
    </ye-page>
    <page-controller  :currentPage.sync="currentPage" :pageNum="options.length"  ></page-controller>
  </div>
</template>

<script>
  import yeCarousel from "../../components/Carousel/yeCardPage"
  import pageController from "./components/pageController"
  import firstPage from "./components/firstPage"
  import secondPage from "./components/secondPage"
  import lastPage from "./components/lastPage"

    export default {
        name: "index",
      components:{
        "ye-page":yeCarousel,
        "page-controller":pageController,
        "first-page":firstPage,
        "second-page": secondPage,
        "last-page": lastPage
      },
      data(){
          return{
            show:true,
            currentPage: 1,
            direction:"x",
            options: [
              {
                background: 'rgba(46, 153, 229, 1)',
                color: '#fff',
                isCenter: true,
                direction:"x",
              },
              {
              background: '#1a1a1a',
              // style属性
              color: '#1a1a1a',
              //背景图片
              // 内联样式
              style:{
                backgroundImage: "url('https://images.apple.com/v/mac/home/y/images/home/imac_pro_large_2x.jpg'",
                backgroundSize:"50% 100%",
                backgroundPosition: "center",
              },
              // 是否居中
              isCenter: true,
              //切换方向
              direction:"x",
              // the function before page show

            }, {
              background: '#fff',
              color: '#fff',
              style:{
                backgroundImage: "url('https://images.apple.com/v/home/dn/images/heroes/iphone-x/iphone_x_large_2x.jpg'",
                backgroundSize:"100% 50%",
                backgroundPosition: "center",
              },
              isCenter: true,
              direction:"x",
            }, {
              background: '#fafafa',
              color: '#fff',
              style:{
                backgroundImage: "url('https://images.apple.com/cn/home/images/tier-one-heroes/apple-watch/watch_large_2x.jpg'",
                backgroundSize:"50% 50%",
                backgroundPosition: "center",
              },
              isCenter: true,
              direction:"x",

            }],
            slotsPageText:[
              {
                first: "8",
                second: "年专注 · 通讯开发",
                third: "socket",
                last:"始于 2009 - 2017 <br>展望未来专注于设计体验，专业于解决方案"
              },

              {
                first: "",
                second: "勤能补拙",
                third: "天道酬勤",
                last:"宝剑锋从磨砺出<br>梅花香自苦寒来"
              },
              {
                first: "",
                second: "技术派，论研发",
                third: "DEVELOPER",
                last:"我说，业界没有最好的技术，只有最棒的技术开发者<br>定制研发，为您的客户和团队"
              },
              {
                first: "",
                second: "",
                third: "APPLE WATCH",
                last:""
              },
            ],
            components:{

            }
          }
      },
      methods:{
          initPage(){
            this.$children.forEach((child, index) => {
              if (child.option == null) {
                if(this.options[index]){
                  let childOption = this.options[index];
                  this.$set(childOption, 'index', index + 1);
                  child.option = childOption;
                  let _this =this;
                  child.$nextTick(function () {
                    _this.initSlotPageText(this,index);
                  });
                }
              }
            });
          },
          initSlotPageText(_this,index){
            _this.$children.forEach((child) => {
              if (child.option == null) {
                if(this.slotsPageText[index]){
                  let childOption = this.slotsPageText[index];
                  this.$set(childOption, 'index', index + 1);
                  child.option = childOption;
                }
              }
            });
          }

      },
      mounted(){
        this.initPage();
      }

    }
</script>

<style scoped>




</style>
