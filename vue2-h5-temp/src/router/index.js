import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
const person = () => import('@/views/person.vue');
const child = () => import('@/views/child.vue');
Vue.use(Router)

export default new Router({
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
