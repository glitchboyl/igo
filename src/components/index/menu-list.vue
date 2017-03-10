<template>
<div class="menu">
  <ul class="menu-list">
    <li class="menu-item" v-for="item in menuList" :class="{ open: item.isOpen, active: item.isActive }">
      <div class="title" @click="open(item)">{{ item.title }}</div>
      <ul class="s-menu" v-if="item.secondary" v-show="item.isOpen">
        <li class="s-menu-item" v-for="i in item.menuList" @click="open(item,i)" :class="{ active: i.isActive }">{{ i.title }}</li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import router from '@/router'
export default {
  data: function() {
    return {
      menuList: [{
        name: 'commodity',
        title: '商品管理',
        secondary: true,
        isOpen: false,
        isActive: false,
        menuList: [{
          name: 'add',
          title: '添加新商品',
          isActive: false
        }, {
          name: 'sale',
          title: '出售中的商品',
          isActive: false
        }, {
          name: 'sort',
          title: '商品分类',
          isActive: false
        }, {
          name: 'appraise',
          title: '商品评价管理',
          isActive: false
        }, {
          name: 'recycle',
          title: '商品回收站',
          isActive: false
        }]
      }, {
        name: 'promotions',
        title: '促销活动',
        secondary: true,
        isOpen: false,
        isActive: false,
        menuList: [{
          name: 'today',
          title: '今日疯抢',
          isActive: false
        }, {
          name: 'discounts',
          title: '量贩优购',
          isActive: false
        }, {
          name: 'fresh',
          title: '生鲜购',
          isActive: false
        }, {
          name: 'oneyuan',
          title: '一元购',
          isActive: false
        }]
      }, {
        name: 'order',
        title: '订单管理',
        secondary: false,
        isActive: false
      }, {
        name: 'delivery',
        title: '配送管理',
        secondary: true,
        isOpen: false,
        isActive: false,
        menuList: [{
          name: 'await',
          title: '待发货',
          isActive: false
        }, {
          name: 'shipped',
          title: '已发货',
          isActive: false
        }]
      }, {
        name: 'aftersale',
        title: '售后管理',
        secondary: false,
        isOpen: false,
        isActive: false
      }, {
        name: 'users',
        title: '用户管理',
        secondary: false,
        isOpen: false,
        isActive: false
      }]
    }
  },
  methods: {
    open: function(item, twig) {
      if (twig) {
        router.push("/" + item.name + "/" + twig.name);
      } else {
        if (item.secondary) {
          item.isOpen = !item.isOpen;
        } else {
          router.push("/" + item.name);
        };
      };
    }
  },
  mounted() {
    var self = this;
    var menu = self.menuList;
    Bus.$on("changePosition", function(obj) {
      for (var i in menu) {
        if (menu[i].isOpen == true && menu[i].isActive == true) {
          menu[i].isActive = false;
          if (menu[i].secondary == false) {
            menu[i].isOpen = false;
          };
        };
        if (menu[i].name == obj.item) {
          menu[i].isOpen = true;
          menu[i].isActive = true;
        };
        if (menu[i].menuList) {
          for (var n in menu[i].menuList) {
            if (menu[i].menuList[n].isActive == true) {
              menu[i].menuList[n].isActive = false;
            };
            if (obj.twig && menu[i].menuList[n].name == obj.twig) {
              menu[i].menuList[n].isActive = true;
            };
          };
        };
      };
    });
  }
}
</script>

<style scoped>
.menu {
  width: 170px;
  margin-right: 1·0px;
  border: 1px solid #DDDDDD;
}

.menu .menu-list .menu-item {
  padding: 15px 0px 12px 40px;
}

.menu .menu-list .menu-item .title {
  margin-bottom: 10px;
}

.menu .menu-list .menu-item .title:before {
  content: '\e685';
  font-family: IconFont;
  font-size: 18px;
  margin-top: -2px;
  margin-right: 10px;
  float: left;
}

.menu .menu-list .menu-item.active .title {
  color: #F1675F;
}

.menu .menu-list .menu-item.open .title:before {
  content: '\e62f';
  font-size: 16px;
  margin-top: 2px;
  margin-right: 12px;
}

.menu .menu-list .menu-item .s-menu {
  padding-left: 10px;
}

.menu .menu-list .menu-item .s-menu .s-menu-item {
  margin-bottom: 5px;
}

.menu .menu-list .menu-item .s-menu .s-menu-item.active {
  color: #F1675F;
}
</style>
