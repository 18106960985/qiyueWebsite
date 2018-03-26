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
              {{ currentArticle.seenNum}}
              &nbsp;·&nbsp;
              <u>发布日期</u>
              <svg-icon icon-class="releaseDate"></svg-icon>
              {{ currentArticle.releaseDate}}
              &nbsp;·&nbsp;
              <svg-icon icon-class="author"></svg-icon>
              普京
            </em>
          </div>

          <!--文章内容-->
          <div class="information-content">
            <div>
             {{currentArticle.content}}
            </div>
          </div>
        </div>

        <!--推荐栏-->
        <div class="information-hots shadow">
          <div>
            <h3>为您推荐</h3>
            <ul v-if="recommends">
              <li v-for="value in recommends">
                <a :href="value.routerPath" :title="value.title" :alt="value.title">
                  <img :src="value.imageUrl" :title="value.title" :alt="value.title"  style="display: block;">
                  <span>
                    {{value.title}}
                  </span>
                  <font>
                    <svg-icon icon-class="releaseDate"></svg-icon>
                   {{ value.title}}
                  </font>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "metaDetails",
      data(){
        return {
          currentArticle:{
            imageUrl:require('../../assets/information/thumb.jpg' ),
            releaseDate: '2018-03-24',
            seenNum: 299,
            title: ' 其实，我觉得吧压力也没那么大！',
            introduction:'其实，设计LOGO并不难！用对工具，你也可以成为设计师！Logo是一个企业丶团体丶组织或独立个体的视觉识别形象代表。 通常是人们一眼看见所产生的第一印象，因此如何创造出一个令人印象深刻的logo，来帮助您建立您心目中所期望塑造的品牌形象是一门大学问。一个好的logo对于一个品牌打入市场的成功与否，扮演着举足轻重的脚色。因此投入足够的时间来绞尽脑汁，设计出一个独一无二的logo是不可避免的过程。在开始',
            content:'其实，设计LOGO并不难！用对工具，你也可以成为设计师！Logo是一个企业丶团体丶组织或独立个体的视觉识别形象代表。 通常是人们一眼看见所产生的第一印象，因此如何创造出一个令人印象深刻的logo，来帮助您建立您心目中所期望塑造的品牌形象是一门大学问。一个好的logo对于一个品牌打入市场的成功与否，扮演着举足轻重的脚色。因此投入足够的时间来绞尽脑汁，设计出一个独一无二的logo是不可避免的过程。在开始',

            routerPath:'#'
          },
          recommends:[
            {
              imageUrl:require('../../assets/information/thumb.jpg' ),
              releaseDate: '2018-03-24',
              seenNum: 299,
              title: ' 其实，我觉得吧压力也没那么大！',
              introduction:'其实，设计LOGO并不难！用对工具，你也可以成为设计师！Logo是一个企业丶团体丶组织或独立个体的视觉识别形象代表。 通常是人们一眼看见所产生的第一印象，因此如何创造出一个令人印象深刻的logo，来帮助您建立您心目中所期望塑造的品牌形象是一门大学问。一个好的logo对于一个品牌打入市场的成功与否，扮演着举足轻重的脚色。因此投入足够的时间来绞尽脑汁，设计出一个独一无二的logo是不可避免的过程。在开始',
              content:'其实，设计LOGO并不难！用对工具，你也可以成为设计师！Logo是一个企业丶团体丶组织或独立个体的视觉识别形象代表。 通常是人们一眼看见所产生的第一印象，因此如何创造出一个令人印象深刻的logo，来帮助您建立您心目中所期望塑造的品牌形象是一门大学问。一个好的logo对于一个品牌打入市场的成功与否，扮演着举足轻重的脚色。因此投入足够的时间来绞尽脑汁，设计出一个独一无二的logo是不可避免的过程。在开始',
              routerPath:'#'
            },
            {
              imageUrl:require('../../assets/information/thumb.jpg' ),
              releaseDate: '2018-03-24',
              seenNum: 299,
              title: ' 其实，我觉得吧压力也没那么大！',
              introduction:'其实，设计LOGO并不难！用对工具，你也可以成为设计师！Logo是一个企业丶团体丶组织或独立个体的视觉识别形象代表。 通常是人们一眼看见所产生的第一印象，因此如何创造出一个令人印象深刻的logo，来帮助您建立您心目中所期望塑造的品牌形象是一门大学问。一个好的logo对于一个品牌打入市场的成功与否，扮演着举足轻重的脚色。因此投入足够的时间来绞尽脑汁，设计出一个独一无二的logo是不可避免的过程。在开始',
              content:'',
              routerPath:'#'
            },
          ],
        }
      }
    }
</script>

<style scoped>

</style>
