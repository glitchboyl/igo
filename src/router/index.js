import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Index'
import Login from '@/Login'
import Error from '@/Error'
import Index from '@/components/index/inner'
import Commodity from '@/components/Commodity'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Main,
    children: [{
      path: '',
      name: 'index',
      component: Index
    }, {
      path: 'commodity',
      redirect: 'commodity/list'
    }, {
      path: 'commodity/list',
      name: 'list',
      component: Commodity.list
    }, {
      path: 'commodity/add',
      name: 'add',
      component: Commodity.add
    }, {
      path: 'commodity/sort',
      name: 'sort',
      component: Commodity.sort
    }, {
      path: 'commodity/brand',
      name: 'brand',
      component: Commodity.brand
    }, {
      path: 'commodity/extend',
      name: 'extend',
      component: Commodity.extend
    }]
  }, {
    path: '/login',
    component: Login,
  }, {
    path: '/error',
    component: Error,
  }]
})
