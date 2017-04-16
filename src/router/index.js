import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/Main.vue'
import Login from '@/Login'
import Error from '@/Error'
import Index from '@/components/index/inner'
import Commodity from '@/components/commodity'
import Users from '@/components/users'
import Delivery from '@/components/delivery'
import Promotions from '@/components/promotions'
import Aftersale from '@/components/aftersale'
import Order from '@/components/order'

Vue.use(Router)
const router = new Router({
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
      name: 'commodity',
      component: Commodity.inner,
      children: [{
        path: 'add',
        component: Commodity.add
      }, {
        path: 'all',
        component: Commodity.all.inner,
        children: [{
          path: ':twig',
          component: Commodity.all.details
        }]
      }, {
        path: 'sale',
        component: Commodity.sale.inner,
        children: [{
          path: ':twig',
          component: Commodity.sale.details
        }]
      }, {
        path: 'sort',
        component: Commodity.sort
      }, {
        path: 'appraise',
        component: Commodity.appraise.inner,
        children: [{
          path: ':twig',
          component: Commodity.appraise.details
        }]
      }, {
        path: 'recycle',
        component: Commodity.recycle
      }]
    }, {
      path: 'users',
      name: 'users',
      component: Users
    }, {
      path: 'aftersale',
      name: 'aftersale',
      component: Aftersale
    }, {
      path: 'delivery',
      name: 'delivery',
      component: Delivery.inner,
      children: [{
        path: 'await',
        component: Delivery.await
      }, {
        path: 'shipped',
        component: Delivery.shipped
      }]
    }, {
      path: 'promotions',
      name: 'promotions',
      component: Promotions.inner,
      children: [{
        path: 'today',
        component: Promotions.today
      }, {
        path: 'discounts',
        component: Promotions.discounts
      }, {
        path: 'fresh',
        component: Promotions.fresh
      }, {
        path: 'oneyuan',
        component: Promotions.oneyuan
      }]
    }, {
      path: 'order',
      name: 'order',
      component: Order
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/404',
    name: 'error',
    component: Error
  }]
});

export default router;
