import Vue from 'vue'
import SvgIcon from '../components/SvgIcon'// svg组件
// register globally


const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)


Vue.component('svg-icon', SvgIcon)
