import Vue from 'vue'
import Router from 'vue-router'
import EventMain from '@/components/EventMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EventMain',
      component: EventMain
    }
  ]
})
