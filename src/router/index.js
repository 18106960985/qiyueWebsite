
import Router from 'vue-router'
import Vue from 'vue'



const Index = resolve => require(['../views/index/index.vue'], resolve);
const Layout = resolve => require(['../views/Layout/index.vue'], resolve);
// const HEADER = resolve => require(['../components/header/header.vue'], resolve);


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout
    }
  ]
})
