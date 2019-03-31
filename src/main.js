import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'

Vue.config.productionTip = false

import "./assets/css/base.css";
import "./assets/js/font.js";

import axios from "axios"
window.axios=axios
Vue.prototype.$http=axios
 
import Config from "./config/config"
window.baseUrl=Config.baseUrl

import filters from "./filters"
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]))

//配置自定义loading插件
import loading from "./plugins/loading/index.js"
Vue.use(loading)


new Vue({
  data:{
    blloading:false,
    blnav:true,
    blfooter:true
  },
  router,
  render: h => h(App)
}).$mount('#app')
