import Vue from 'vue'
import Index from './Index'
import Router from './router'
import Bus from '@/assets/eventBus'

// 报错不给予页面提示.
Vue.config.productionTip = false;

const group = {
  'commodity': {
    name: '商品管理',
    twigs: {
      'add': {
        name: '添加新商品'
      },
      'all': {
        name: '所有商品',
        twigs: '商品详情'
      },
      'sale': {
        name: '出售中的商品',
        twigs: '商品详情'
      },
      'sort': {
        name: '商品分类'
      },
      'appraise': {
        name: '商品评价管理',
        twigs: '商品评价详情'
      },
      'recycle': {
        name: '商品回收站'
      }
    }
  },
  'promotions': {
    name: '促销活动',
    twigs: {
      'today': {
        name: '今日疯抢'
      },
      'discounts': {
        name: '量贩优购'
      },
      'fresh': {
        name: '生鲜购'
      },
      'oneyuan': {
        name: '一元购'
      }
    }
  },
  'order': {
    name: '订单管理',
    twigs: '订单详情'
  },
  'delivery': {
    name: '配送管理',
    twigs: {
      'await': {
        name: '待发货'
      },
      'shipped': {
        name: '已发货'
      }
    }
  },
  'aftersale': {
    name: '售后管理'
  },
  'users': {
    name: '用户管理',
    twigs: '用户详情'
  }
};

export default new Vue({
  el: '#app',
  router: Router,
  render: h => h(Index),
  data() {
    return {
      init(path) {
        let items = path.replace('/', '').split('/');
        let position = "";
        if (items[0] != "" && items[0] != "login" && items[0] != "404") {
          if (items[0] != "order" && items[0] != "users") {
            position = " > " + group[items[0]].name;
            if (items.length == 2) {
              position += " > " + group[items[0]].twigs[items[1]].name;
            };
            if (items.length == 3) {
              position += " > " + group[items[0]].twigs[items[1]].name + " > " + group[items[0]].twigs[items[1]].twigs;
            };
          } else {
            position = " > " + group[items[0]].name;
            if (items.length == 2) {
              position += " > " + group[items[0]].twigs;
            };
          };
        };
        Bus.$emit("changePosition", {
          item: items[0],
          twig: items[1],
          position: position
        });
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.init(to.path);
    }
  },
  mounted() {
    this.init(Router.app.$route.path);
  }
});
