<template>
<div class="inner" :class="{'sale':!details,'sale-details':details}">
  <search-bar :todo="searchItems" v-if="!details"></search-bar>
  <commodity-list :todo="commodityItems" v-if="!details"></commodity-list>
  <router-view v-if="details"></router-view>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import searchBar from '../general/search-bar'
import commodityList from '../general/commodity-list'
import Router from '@/router'
export default {
  data() {
    return {
      details: Router.app.$route.path.replace('/', '').split('/')[2] ? true : false,
      searchItems: [{
        type: 'text-box',
        name: 'name',
        title: '商品名称',
        width: 170,
        value: ''
      }, {
        type: 'range',
        name: 'sales',
        title: '总销量',
        minValue: '',
        maxValue: ''
      }, {
        type: 'range',
        name: 'reserve',
        title: '库存',
        minValue: '',
        maxValue: ''
      }, {
        type: 'range',
        name: 'price',
        title: '价格',
        minValue: '',
        maxValue: ''
      }, {
        type: 'choose-box',
        name: 'sort',
        title: '商品分类',
        width: 170,
        items: [{
          value: 'ass'
        }, {
          value: 'we'
        }, {
          value: 'can'
        }]
      }],
      commodityItems: {
        display: [{
          name: 'price',
          title: '价格'
        }, {
          name: 'reserve',
          title: '库存'
        }, {
          name: 'sales',
          title: '总销量'
        }, {
          name: 'operation',
          title: '操作'
        }],
        summary: '共有 1252 件商品正在出售',
        button: [{
          value: '下架',
          support() {
            console.log('ass')
          }
        }, {
          value: '促销',
          support() {
            console.log('ass')
          }
        }, {
          value: '取消促销',
          support() {
            console.log('ass')
          }
        }, {
          value: '编辑',
          support() {
            console.log('ass')
          }
        }],
        commodities: [{
          id: 1,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked:false
        }, {
          id: 2,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked:false
        }, {
          id: 3,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked:false
        }, {
          id: 4,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked:false
        }, {
          id: 5,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked:false
        }, {
          id: 6,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked: false
        }, {
          id: 7,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked : false
        }, {
          id: 8,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked: false
        }, {
          id: 9,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked: false
        }, {
          id: 10,
          name: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
          img: '/static/images/doge.jpg',
          price: '17.9元',
          reserve: '156',
          sales: '2512单',
          display: '',
          checked: false
        }],
        allChecked:false
      }
    }
  },
  components: {
    searchBar,
    commodityList
  },
  watch: {
    '$route' (to, from) {
      this.details = Router.app.$route.path.replace('/', '').split('/')[2] ? true : false;
    }
  },
  beforeMount() {
    let display = this.commodityItems.display;
    let commodities = this.commodityItems.commodities;
    for (let i in commodities) {
      commodities[i].display = function() {
        return display;
      }
    }
  },
  mounted(){
    let self = this.commodityItems;
    Bus.$on('allChecked',function(c){
      self.allChecked = c.checked
    })
  }
}
</script>

<style scoped>
.sale-details {
  min-height: 800px;
  border: 1px solid #DDDDDD;
  padding: 15px 20px;
}
</style>
