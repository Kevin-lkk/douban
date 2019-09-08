// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//引用axios
import axios from 'axios'
Vue.prototype.axios = axios
require("./mock");//引用mock

Vue.config.productionTip = false

import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
 
// import 'bootstrap/dist/js/bootstrap.min.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
