<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="menu-item" v-for="item in menuList" :id="item.name" :class="{ open: item.isOpened, active: item.isActived }">
        <div class="title" @click="open(item)">{{ item.title }}</div>
        <ul class="s-menu" v-if="item.secondary" v-show="item.isOpened">
          <li class="s-menu-item" v-for="i in item.twigs" @click="open(item,i)" :class="{ active: i.isActived }">{{ i.title }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import Bus from '@/assets/eventBus'
  export default {
    data() {
      return {
        menuList: [{
          name: 'commodity',
          title: '商品管理',
          secondary: true,
          isOpened: false,
          isActived: false,
          twigs: [{
            name: 'list',
            title: '商品列表',
            isActived: false
          }, {
            name: 'add',
            title: '添加商品',
            isActived: false
          }, {
            name: 'sort',
            title: '商品分类',
            isActived: false
          }, {
            name: 'brand',
            title: '商品品牌',
            isActived: false
          }, {
            name: 'extend',
            title: '商品扩展属性',
            isActived: false
          }]
        }, {
          name: 'order',
          title: '订单管理',
          secondary: true,
          isOpened: false,
          isActived: false,
          twigs: []
        }, {
          name: 'member',
          title: '会员管理',
          secondary: true,
          isOpened: false,
          isActived: false,
          twigs: []
        }, {
          name: 'supplier',
          title: '供应商管理',
          secondary: true,
          isOpened: false,
          isActived: false,
          twigs: []
        }]
      }
    },
    methods: {
      open(item, twig) {
        let self = this;
        if (twig) {
          if (!twig.isActived) {
            self.$router.push("/" + item.name + "/" + twig.name);
          }
        } else {
          if (item.secondary) {
            item.isOpened = !item.isOpened;
          } else {
            if (!item.isActived) {
              self.$router.push("/" + item.name);
            }
          };
        };
      }
    },
    mounted() {
      let self = this;
      Bus.$on('changePosition', function(obj) {
        for (let i in self.menuList) {
          if (self.menuList[i].name == obj.item) {
            self.menuList[i].isOpened = true;
            self.menuList[i].isActived = true;
          } else {
            self.menuList[i].isActived = false;
          }
          for (let n in self.menuList[i].twigs) {
            if (self.menuList[i].twigs[n].name == obj.twig) {
              self.menuList[i].twigs[n].isActived = true;
            } else{
              self.menuList[i].twigs[n].isActived = false;
            }
          }
        }
      });
    }
  }
</script>

<style scoped>
  .menu {
    min-width: 170px;
    min-height: 500px;
    margin-right: 10px;
    border: 1px solid #DDDDDD;
    cursor: default;
  }
  .menu .menu-list .menu-item {
    padding: 12px 15px;
  }
  .menu .menu-list .menu-item .title {
    width: 100%;
    display: inline-flex;
    align-items: center;
    position: relative;
  }
  .menu .menu-list .menu-item .title:before {
    font-family: IconFont;
    font-size: 20px;
    margin-right: 10px;
  }
  .menu .menu-list .menu-item .title:after {
    content: '\e635';
    font-family: IconFont;
    font-size: 13px;
    top: 4px;
    right: 0;
    position: absolute;
  }
  .menu .menu-list .menu-item.open .title:after {
    transform: rotate(90deg);
  }
  .menu .menu-list .menu-item#commodity .title:before {
    content: '\e600';
  }
  .menu .menu-list .menu-item#order .title:before {
    content: '\e607';
  }
  .menu .menu-list .menu-item#member .title:before {
    content: '\e510';
  }
  .menu .menu-list .menu-item#supplier .title:before {
    content: '\e601';
  }
  .menu .menu-list .menu-item.active .title {
    color: #F1675F;
  }
  .menu .menu-list .menu-item.open .title:before {
    content: '\e62f';
  }
  .menu .menu-list .menu-item .s-menu {
    margin-top: 12px;
    padding-left: 10px;
  }
  .menu .menu-list .menu-item .s-menu .s-menu-item {
    margin-bottom: 8px;
    padding-left: 20px;
    transition: color .3s;
  }
  .menu .menu-list .menu-item .s-menu .s-menu-item:hover {
    color: #F1675F;
    cursor: pointer;
  }
  .menu .menu-list .menu-item .s-menu .s-menu-item.active {
    color: #F1675F;
    cursor: default;
  }
</style>
