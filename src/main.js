// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store' //vuex


import './styles/style.css' //css
import './icons' // icon
import 'babel-polyfill'
Vue.config.productionTip = false
import 'babel-polyfill'
import 'babel-polyfill'


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
