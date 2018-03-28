
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
        path:'product',
        component: _import('product/showproduct/index'),
      },
      {
        path: 'main',
        component: _import('Layout/index'),
        children:[

          {
            path:'product',
            component: _import('product/showproduct/index'),
          },
          {
            path:'aboutUs',
            component: _import('aboutUs/aboutUsArticle'),
          },
          // {
          //   path:'product',
          //   component: _import('product/showproduct/index'),
          // },
          // {
          //   path:'product',
          //   component: _import('product/showproduct/index'),
          // },
          // {
          //   path:'product',
          //   component: _import('product/showproduct/index'),
          // },
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
