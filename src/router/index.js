import Vue from 'vue'
import Router from 'vue-router'
import EventMain from '@/components/EventMain'
import StoreMain from '@/components/StoreMain'
import BenefitMain from '@/components/BenefitMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'EventMain',
      component: EventMain
    },
    {
      path: '/EventMain',
      name: 'EventMain',
      component: EventMain
    },
    {
      path: '/StoreMain',
      name: 'StoreMain',
      component: StoreMain
    },
    {
      path: '/BenefitMain',
      name: 'BenefitMain',
      component: BenefitMain
    }
  ]
})
