
<!--产品中心 设计  头 脚为公共组件-->
<template>
    <div class="pro-box">
      <ul v-if="proList">
        <!--产品列表-->
        <li class="case-bin pro" style="width: 320px"  v-for="(value, index) in proList">
           <router-link :to="'/main/showproduct/'+value.id" :title="value.introduce">
            <font>
              <b></b>
              <img :src="value.smallImgPath" :title="value.introduce" :alt="value.introduce"   style="display: block;">
            </font>
            <span>
                <h3>
                  {{ value.name}}
                </h3>

                <p>
                  {{ value.introduce | introduceFilter}}
                </p>
              </span>
            </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
  import {getProductList} from '@/api/product/detailsIndex'
  import eventHub from '@/eventHub/eventHub'
  import metaLayoutContent from '../../components/Layout/contentLayout'

    export default {
        name: "index",
        components:{
          'meta-layoutContent': metaLayoutContent,
        },
      props:{
        id:String
      },
      data(){
          return {
            query:{
              filters:''
            },
            proList:[
              {
                id:'',
                typeName: '智能通话手表',
                name: 'appleWatch',
                url: '#',
                img: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-loop-seashell-s3-grid_GEO_CN?wid=540&hei=550&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1504822127068',
                introduce: 'meta小天才儿童手表',
              },

            ],
          }
      },
      created(){
        this.getNav();//通知布局去获得导航栏
        this.getProductList() //获取产品列表
      },
      filters:{
        introduceFilter( val){
          if(val.length > 30){
            return val.substring(0,30)+'……';
          }
          return val;
        }
      },
      watch:{
          id(){
            this.getProductList();
          }

      },
      methods:{
          getNav(){
            eventHub.$emit('getNav');
          },
          getProductList(){
            let id = this.id? this.id:0;
            getProductList(id).then( res=>{
              this.proList = res.data.data.rows;

            })
          }

      }
    }
</script>

<style scoped>

  a{
    text-decoration: none;
  }

  .pro-box {
    font-size: 0;
  }

  .pro-box ul {
    padding: 0;
    margin: 20px 0;
    list-style: none;
    display: block;
    text-align: center;
  }

  .case-bin.pro {
    margin: 20px;
    display: inline-block;
    float: none;
    box-shadow: 0 1px 3px rgba(0,0,0,.05);
    transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
  }

  .case-bin.pro span p {
    display: block;
  }

  .pro-page {
    padding-bottom: 30px;
  }

  @media (max-width:1500px) {
    .pro-box ul {
      margin: 40px 0;
    }

    .case-bin.pro {
      margin: 10px;
    }
  }

  @media (max-width:479px) {
    .pro-box ul {
      margin: 10px 0;
    }

    .case-bin.pro {
      margin: 20px auto 0 auto;
      display: block;
      max-width: 90% !important;
    }
  }


  .case-bin {
    display: block;
    list-style: none;
    margin: 0 20px 0 0;
    padding: 0;
    float: left;
    width: 300px;
    background: #fff;
    position: relative;
  }

  .case-bin a {
    display: block;
  }

  .case-bin font {
    display: block;
    position: relative;
    overflow: hidden;
  }

  .case-bin font:before {
    width: 15px;
    height: 1px;
    margin-left: -7px;
    background: #fff;
    content: '';
    display: block;
    transition: .1s .2s ease-in-out;
    -moz-transition: .1s .2s ease-in-out;
    -ms-transition: .1s .2s ease-in-out;
    -o-transition: .1s .2s ease-in-out;
    -webkit-transition: .1s .2s ease-in-out;
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 10;
    opacity: 0;
  }

  .case-bin font:after {
    width: 1px;
    height: 15px;
    margin-top: -7px;
    background: #fff;
    content: '';
    display: block;
    transition: .1s .2s ease-in-out;
    -moz-transition: .1s .2s ease-in-out;
    -ms-transition: .1s .2s ease-in-out;
    -o-transition: .1s .2s ease-in-out;
    -webkit-transition: .1s .2s ease-in-out;
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 10;
    opacity: 0;
  }

  .case-bin a:hover font:before {
    opacity: 1;
  }

  .case-bin a:hover font:after {
    opacity: 1;
  }

  .case-bin font b {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: -100%;
    left: 0;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
  }

  .case-bin a:hover font b {
    top: 0;
  }

  .case-bin font b:before {
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -ms-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    border: 500px solid rgba(0,0,0,.6);
    left: 50%;
    top: 50%;
    margin: -525px 0 0 -525px;
  }

  .case-bin font b:after {
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ff990257;
    left: 50%;
    top: 50%;
    margin: -25px 0 0 -25px;
  }

  .case-bin font img {
    display: block;
    width: 100%;
  }

  .case-bin span {
    display: block;
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,.5);
    text-align: left;
    padding: 15px 20px;
  }

  .case-bin span:after {
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 0;
    right: 0;
    content: '';
    z-index: 1;
    background: #ff9900;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
  }

  .case-bin span h3 {
    display: block;
    font-size: 16px;
    font-weight: normal;
    color: #333;
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    z-index: 2;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
  }

  .case-bin span p {
    display: block;
    font-size: 12px;
    color: #888;
    margin: 10px 0 0 0;
    position: relative;
    z-index: 2;
    transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -ms-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    -webkit-transition: .2s ease-in-out;
  }

  .case-bin a:hover span:after {
    height: 100%;
  }

  .case-bin a:hover span h3 {
    color: #fff;
  }

  .case-bin a:hover span p {
    color: #fff;
  }

  .case-more {
    margin-top: 30px;
  }

  .case-more a {
    border: 1px solid #ff9900;
    font-family: TechnicLite;
    color: #ff9900;
    font-size: 26px;
    padding: 0 20px;
    transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -ms-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    -webkit-transition: .3s ease-in-out;
    font-weight: bold;
    display: inline-block;
  }

  .case-more a:hover {
    background: #ff9900;
    color: #fff;
  }

  @media (max-width:1599px) {
    .case-box {
      width: 940px;
    }
  }

  @media (max-width:1200px) {
    .case-box {
      width: 620px;
    }
  }

  @media (max-width:767px) {
    .case-box {
      width: 460px;
      margin: 20px auto;
    }

    .case-bin {
      margin: 0 10px 0 0;
      width: 230px;
    }

    .case-bin span p {
      display: none;
    }

    .case-more {
      display: none;
    }
  }

  @media (max-width:479px) {
    .case-box {
      width: 300px;
      margin: 40px auto 0 auto;
    }

    .case-bin span p {
      display: block;
    }

    .case-more {
      margin-top: 30px;
      display: block;
    }

    .case-more a {
      border: 1px solid #ff9900;
      font-family: TechnicLite;
      color: #ff9900;
      font-size: 20px;
      padding: 0 10px;
      transition: .3s ease-in-out;
      -moz-transition: .3s ease-in-out;
      -ms-transition: .3s ease-in-out;
      -o-transition: .3s ease-in-out;
      -webkit-transition: .3s ease-in-out;
      font-weight: bold;
      display: inline-block;
    }
  }

  @media (max-width:400px) {
    .case-box {
      width: 230px;
    }
  }

  .pro-box {
    font-size: 0;
  }

  .pro-box ul {
    padding: 0;
    margin: 20px 0;
    list-style: none;
    display: block;
    text-align: center;
  }

  .case-bin.pro {
    margin: 20px;
    display: inline-block;
    float: none;
    box-shadow: 0 1px 3px rgba(0,0,0,.05);
    transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -ms-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
  }

  .case-bin.pro span p {
    display: block;
  }

  .pro-page {
    padding-bottom: 30px;
  }

  @media (max-width:1500px) {
    .pro-box ul {
      margin: 40px 0;
    }

    .case-bin.pro {
      margin: 10px;
    }
  }

  @media (max-width:479px) {
    .pro-box ul {
      margin: 10px 0;
    }

    .case-bin.pro {
      margin: 20px auto 0 auto;
      display: block;
      max-width: 90% !important;
    }
  }



</style>
