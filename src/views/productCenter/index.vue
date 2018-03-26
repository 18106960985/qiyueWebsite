
<!--产品中心 设计  头 脚为公共组件-->
<template>
  <meta-layoutContent>
    <div class="pro-box">
      <ul>
        <!--产品列表-->
        <li class="case-bin pro" style="width: 320px">
          <a href="showproduct.php?lang=cn&amp;id=42" title="家居公司，室内设计公司">
            <font>
              <b></b>
              <img src="https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481290045.jpg?x-oss-process=image/resize,m_fill,h_200,w_320,limit_0" title="家居公司，室内设计公司" alt="家居公司，室内设计公司" data-original="https://images.metinfo.cn/m/M1156008/328/upload/M1156008/328/201612/1481290045.jpg?x-oss-process=image/resize,m_fill,h_200,w_320,limit_0" style="display: block;">
            </font>
            <span>
                <h3>家居公司，室内设计公司</h3>

                <p>高端儒雅, 红色点缀, 视频展示, 文化&nbsp;</p>
              </span>
          </a>
        </li>
      </ul>
    </div>
  </meta-layoutContent>


</template>

<script>
  import metaLayoutContent from '../../components/Layout/contentLayout'
    export default {
        name: "index",
        components:{
          'meta-layoutContent': metaLayoutContent,
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>
