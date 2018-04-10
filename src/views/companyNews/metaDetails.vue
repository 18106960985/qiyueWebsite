<!--资讯详情-->
<template>
  <div>

    <div class="information-table">
      <div class="information-row">

        <div class="information-descript">
          <!--文章标题-->
          <div class="information-title">
            <h1>
              {{ currentArticle.title}}
            </h1>
            <em>
              <u>阅读</u>
              <svg-icon icon-class="eye"></svg-icon>
              {{ currentArticle.readingNum}}
              &nbsp;·&nbsp;
              <u>发布日期</u>
              <svg-icon icon-class="releaseDate"></svg-icon>
              {{ currentArticle.displayTime}}
              &nbsp;·&nbsp;
              <svg-icon icon-class="author"></svg-icon>
              {{ currentArticle.author}}
              &nbsp;
              <div v-if="currentArticle.sourceName" style="display: inline">
                ·&nbsp;
                <u>文章来源</u>
                <svg-icon icon-class="author"></svg-icon>
                {{ currentArticle.sourceName}}
              </div>

            </em>
          </div>

          <!--文章内容-->
          <div class="information-content">
            <div v-html="currentArticle.detail"></div>
          </div>
        </div>

        <!--推荐栏-->
        <div class="information-hots shadow">
          <div>
            <h3>为您推荐</h3>
            <ul v-if="recommends">
              <li v-for="value in recommends">
                <router-link :to="'/main/newDetails/'+value.id"   :title="value.title" :alt="value.title">
                  <img :src="value.imgPath" :title="value.title" :alt="value.title"  style="display: block;">
                  <span>
                    {{value.title}}
                  </span>
                  <font>
                    <svg-icon icon-class="releaseDate"></svg-icon>
                    {{ value.introduce | introduceFilter}}
                  </font>
                </router-link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getObj,getRecommends} from '@/api/information/index'

  export default {
        name: "metaDetails",
      props:{
        id:String,
      },
      data(){
        return {
          currentArticle:{},
          recommends:[],
        }
      },
      created(){
        this.getRecommends();
        this.getObj();
      },
      filters:{
        introduceFilter(val){
          if(val.length >9){
            return val.substring(0,9)+'……';
          }
        return val;
        }
      },
      watch:{
        id(){
          this.getObj();
        }
      },
      methods:{
        getObj(){
          getObj(this.id).then(res=>{
            if(res.data.rel){
              this.currentArticle = res.data.data;
            }
          })
        },
        getRecommends(){
          getRecommends().then(res=>{

              this.recommends = res.data.data.rows;

          });
        }
      }
    }
</script>

<style scoped>
 a{
   text-decoration: none;
 }
</style>
