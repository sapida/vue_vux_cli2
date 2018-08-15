// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "babel-polyfill"

//刷新组件
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

//消除延迟组件
import FastClick from 'fastclick'
FastClick.attach(document.body)

import  { ToastPlugin,ConfirmPlugin,LoadingPlugin,DatetimePlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)
import vux from '@/utils/vux.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
