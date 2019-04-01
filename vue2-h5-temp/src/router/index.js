import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import index from '@/views/index'
const person = () => import('@/views/person.vue');
const child = () => import('@/views/child.vue');
Vue.use(Router)

Router.prototype.goBack = function (val) {
  store.commit('updateDirection', val);
  if(store.state.direction == 'tip'){
    window.history.go(-1);
  }else{
    setTimeout(()=>{window.history.go(-1)},50);
  }
}
const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/person',
          name: 'person',
          component: person,
          children:[
            {
              path: '/person/child',
              name: 'child',
              component: child,
            }
          ]
        }
      ]
    },
  ]
})

router.afterEach((to, from) => {
  if(store.state.direction !== 'tip')
    store.commit('updateDirection', 'tip');
})

export default router;
