import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/filters'
import "babel-polyfill"
import 'lib-flexible/flexible'
import '@/assets/scss/index.scss'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import transition from '@/components/layout/transition';
Vue.component('lg-transition', transition);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
