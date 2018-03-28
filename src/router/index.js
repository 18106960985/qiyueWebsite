
import Router from 'vue-router'
import Vue from 'vue'
const _import = require('./_import_' + process.env.NODE_ENV)


Vue.use(Router)



/**
 * 白名单通用路由
 * @type {*[]}
 */
export const constantRouterMap = [
  {
    path: '',
    component: _import('Layout/Layout'),
    children: [
      {
        path: '',
        component: _import('main/index'),
      },
      {
        path: 'main',
        component: _import('Layout/index'),
        children:[

          // 菜单相关
          {
            //产品
            path:'product',
            component: _import('productCenter/index'),
          },
          {
            //公司资讯
            path:'companyNews',
            component: _import('companyNews/index'),
          },
          {
            // 关于 我们
            path:'aboutUs',
            component: _import('aboutUs/aboutUsArticle'),
          },

          // 具体展示组件

          {
            //产品
            path:'showproduct',
            component: _import('product/showproduct/index'),
          },
          {
            //公司资讯
            path:'newDetails',
            component: _import('companyNews/metaDetails'),
          }


        ],
      }
    ]
  },

  {
    path: '/test',
    component: _import('test/test'),
  },

]




export default new Router({
  routes: constantRouterMap
})
