
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
    children: [{
      path: '',
      component: _import('main/index'),
    
    }]
  },
]




export default new Router({
  routes: constantRouterMap
})
