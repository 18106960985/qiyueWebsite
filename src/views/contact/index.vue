<template>
  <div class="window-back " :style="{backgroundImage:backgroundImg}">
    <div class="table-box">
      <div class="table-cell">
        <!-- 主体内容-->
        <!--大屏显示-->
         <div class="hidden visible-lg-block">
           <div class="contact-box">
           <div class="contact-left">
             <img :src="contactInfo.QR_code">
           </div>
           <div class="contact-center">
             <p class="t">{{contactInfo.telephone}}</p>
             <p>{{contactInfo.hint}}</p>
             <p>{{contactInfo.location}}</p>
             <p>联系电话：{{contactInfo.contactNumber}}</p>
             <p>地址：{{contactInfo.address}}</p>
           </div>
           <div class="contact-right">
             <p>Email：{{contactInfo.email}}</p>
             <p>中文域名：{{contactInfo.domainName}}</p>
             <p>Copyright 2008-2017<span style="line-height: 1.42857;">互联网</span>
               <span style="line-height: 1.42857;">&nbsp;版权所有</span></p><p>京ICP备 1234567890 号</p><p>京公网安备 1010011000101 号</p>
           </div>
          </div>
           <div class="contact-text">
             <p><em>不</em>积跬步，<em>无</em>以至千里</p>
             <div>A thousand journey takes every step</div>
           </div>
         </div>

        <!--中等屏幕展示-->
        <div class="hidden visible-sm-block visible-md-block">
          <div class="contact-box">
            <div class="contact-left">
              <img :src="contactInfo.QR_code">
            </div>
            <div class="contact-center">
              <p class="t">{{contactInfo.telephone}}</p>
              <p>{{contactInfo.hint}}</p>
              <p>{{contactInfo.location}}</p>
              <p>联系电话：{{contactInfo.contactNumber}}</p>
              <p>地址：{{contactInfo.address}}</p>
            </div>
            <div class="contact-right">
              <p>Email：{{contactInfo.email}}</p>
              <p>中文域名：{{contactInfo.domainName}}</p>
              <p>Copyright 2008-2015互联网 版权所有</p>
              <p>京ICP备 1234567890 号</p>
              <p>京公网安备 1010011000101 号</p>
            </div>
          </div>
        </div>

        <div class="hidden visible-xs-block">
          <div class="contact-box">
            <div class="contact-left">
              <img :src="contactInfo.QR_code">
            </div>
            <div class="contact-center" style="text-align: center">
              <p class="t">{{contactInfo.telephone}}</p>
              <p>{{contactInfo.hint}}</p>
              <p>{{contactInfo.location}}</p>
              <p>联系电话：{{contactInfo.contactNumber}}</p>
              <p>地址：{{contactInfo.address}}</p>
              <p><img class="c" :src="contactInfo.QR_code"></p>
            </div>

          </div>
        </div>

      </div>
    </div>
    <!--网站版权-->
    <div class="window-bin foot ">
      <p>互联网 版权所有 2008-2016 粤ICP备0123456789-1 </p>
    </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
        return {
          backgroundImg: 'url('+require('@/assets/background/bg-bg-contactUs.jpg')+')' ,
          contactInfo:{
             QR_code: 'url('+require('@/assets/QR_code/1493349544.png')+')' ,
            telephone: '0592-1234567',
            hint:'扫码关注美拓微信公众号获取第一资讯',
            location: '中国·厦门创业园',
            contactNumber: "+86-12345678901",
            address: '厦门市湖里区火炬园XXXX',
            email: 'meta@meta.net.cn',
            domainName: 'www.metaXXX.com',
            copyright: {

            }
          }
        }
      },
    }
</script>

<style scoped>
  .hidden {
    display: none!important
  }
  .contact-box {
    width: 800px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0,0,0,.25);
    padding-bottom: 30px;
    text-align: left;
    color: black;
  }

  .contact-box:after {
    content: '';
    clear: both;
    display: block;
  }

  .contact-left {
    width: 220px;
    float: left;
  }

  .contact-left img {
    display: block;
    border: 5px solid #fff;
  }

  .contact-center {
    width: 320px;
    float: left;
  }

  .contact-center p.t {
    font-size: 36px;
    color: #ff9900;
    font-family: Georgia;
    line-height: 1;
    margin-top: -15px;
  }

  .contact-right {
    width: 260px;
    float: left;
  }

  .contact-text {
    margin-top: 40px;
  }

  .contact-text p {
    font-size: 22px;
    color: #ff9900;
    letter-spacing: 3px;
  }

  .contact-text p em {
    display: inline-block;
    width: 44px;
    height: 44px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0;
    margin: 0 5px 0 3px;
    background: #ff9900;
    color: #fff;
    border-radius: 50%;
    text-decoration: none;
    font-style: normal;
  }

  .contact-text div {
    font-family: TechnicLite;
    color: #ff9900;
    font-size: 20px;
  }



    .contact-left {
      width: 220px;
      float: left;
    }
  .contact-left img {
    display: block;
    border: 5px solid #fff;
  }

  @media (max-width:992px) {
    .contact-main {
      width: 640px;
    }

    .contact-box {
      width: 540px;
    }

    .contact-right {
      display: none;
    }
  }

  @media (max-width:767px) and (orientation:landscape) {
    .contact-main {
      width: auto;
      display: inline-block;
    }

    .contact-box {
      padding: 0;
      border: none;
      width: auto;
      display: inline-block;
    }

    .contact-left {
      width: auto;
      padding-right: 30px;
      display: inline-block;
    }

    .contact-center {
      width: auto;
      display: inline-block;
      text-align: left;
    }

    .contact-center img.c {
      display: none;
    }
  }
  .contact-box:after {
    content: '';
    clear: both;
    display: block;
  }
  @media (max-width:767px) and (orientation:portrait) {
    .contact-main {
      width: auto;
      display: inline-block;
    }

    .contact-box {
      padding: 0;
      border: none;
      width: auto;
      display: inline-block;
    }

    .contact-left {
      display: none;
    }

    .contact-center {
      width: auto;
      display: inline-block;
    }

    .contact-center img.c {
      display: block;
      margin: 20px auto 0 auto;
    }
  }

  @media (max-width:350px) {
    .contact-main {
      padding: 20px 10px;
    }
  }
  .window-bin.foot,
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    padding: 15px 60px;
    line-height: 30px;
    background: #393939;
    color: #eee;
    text-align: center;
    border: none !important;
  }

  .window-bin.foot a,
  footer a {
    color: #eee;
  }

  .window-bin.foot a:hover,
  footer a:hover {
    color: #fff;
  }

  .window-bin.foot.none0, footer.none {
    display: none !important;
  }

  .window-bin.foot p {
    margin: 0;
  }



  @media(min-width:1200px) {
    .visible-lg-block {
      display: block!important
    }
    footer {
      padding: 22px 40px;
    }
  }
  @media (min-width:992px) and (max-width:1199px) {
    .visible-md-block {
      display: block!important
    }
  }
  @media (min-width:768px) and (max-width:991px) {
    .visible-sm-block {
      display: block!important
    }

  }

  @media (max-width:767px) {
    .visible-xs-block {
      display: block!important
    }
    footer {
      padding: 22px 20px;
    }
  }



  .window-bin * {
    max-width: 100%;
  }
</style>
