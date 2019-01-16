// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "babel-polyfill"
import 'lib-flexible'
import '@/assets/scss/reset.css'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import transition from '@/components/transition';
import header from '@/components/header';
Vue.component('lg-transition', transition);
Vue.component('lg-header', header);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
