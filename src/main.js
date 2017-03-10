import Vue from 'vue'
import Index from './Index'
import router from './router'
import Bus from '@/assets/eventBus'

// 报错不给予页面提示.
Vue.config.productionTip = false;

const group = {
  'commodity': {
    name: '商品管理',
    twigs: {
      'add': '添加新商品',
      'sale': '出售中的商品',
      'sort': '商品分类',
      'appraise': '商品评价管理',
      'recycle': '商品回收站'
    }
  },
  'promotions': {
    name: '促销活动',
    twigs: {
      'today': '今日疯抢',
      'discounts': '量贩优购',
      'fresh': '生鲜购',
      'oneyuan': '一元购'
    }
  },
  'order': {
    name: '订单管理'
  },
  'delivery': {
    name: '配送管理',
    twigs: {
      'await': '待发货',
      'shipped': '已发货'
    }
  },
  'aftersale': {
    name: '售后管理'
  },
  'users': {
    name: '用户管理'
  }
};

export default new Vue({
  el: '#main',
  router,
  render: h => h(Index),
  watch: {
    '$route' (to, from) {
      var items = to.path.replace('/', '').split('/');
      var position = "";
      if (items[0] != "") {
        position = " > " + group[items[0]].name;
        if (items.length > 1) {
          position += " > " + group[items[0]].twigs[items[1]];
        };
      };
      Bus.$emit("changePosition", {
        item: items[0],
        twig: items[1],
        position: position
      });
    }
  },
  mounted() {
    var items = router.app.$route.path.replace('/', '').split('/');
    var position = "";
    if (items[0] != "") {
      position = " > " + group[items[0]].name;
      if (items.length > 1) {
        position += " > " + group[items[0]].twigs[items[1]];
      };
    };
    Bus.$emit("changePosition", {
      item: items[0],
      twig: items[1],
      position: position
    });
  }
});
