import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
const path = require('path')

Vue.use(Vuex)
//自动化导入模块
const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
  let name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})
const store = new Vuex.Store({
  modules,
  getters
})
export default store

// const path = require('path')
// const files = require.context('@/components/home', false, /\.vue$/)
// const modules = {}
// files.keys().forEach(key => {
//  const name = path.basename(key, '.vue')
//  modules[name] = files(key).default || files(key)
// })
// components:modules