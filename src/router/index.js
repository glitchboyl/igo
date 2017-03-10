import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/inner'
import Commodity from '@/components/commodity'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/commodity',
    name: 'commodity',
    component: Commodity.inner,
    children: [{
      path: 'add',
      component: Commodity.add
    }, {
      path: 'sale',
      component: Commodity.sale
    }, {
      path: 'sort',
      component: Commodity.sort
    }, {
      path: 'appraise',
      component: Commodity.appraise
    }, {
      path: 'recycle',
      component: Commodity.recycle
    }]
  }]
});

export default router;
