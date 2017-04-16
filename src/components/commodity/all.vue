<template>
<div class="inner" :class="{'all':!details,'all-details':details}">
  <search-bar :todo="searchItems" v-if="!details"></search-bar>
  <commodity-list :todo="commodityItems" v-if="!details"></commodity-list>
  <router-view v-if="details"></router-view>
</div>
</template>

<script>
import Axios from 'axios'
import Router from '@/router'
import Bus from '@/assets/eventBus'
import searchBar from '../general/search-bar'
import commodityList from '../general/commodity-list'
export default {
  data() {
    return {
      details: Router.app.$route.params.twig ? true : false,
      searchItems: [{
        type: 'text-box',
        name: 'commodityName',
        title: '商品名称',
        width: 170,
        value: ''
      }, {
        type: 'text-box',
        name: 'commodityBrand',
        title: '商品品牌',
        minValue: '',
        maxValue: ''
      }, {
        type: 'text-box',
        name: 'commodityModel',
        title: '商品型号',
        width: 170,
        value: ''
      }, {
        type: 'text-box',
        name: 'commodityOrigin',
        title: '商品产地',
        width: 170,
        value: ''
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
          name: 'commodityBrand',
          title: '商品品牌'
        }, {
          name: 'commodityModel',
          title: '商品型号'
        }, {
          name: 'commodityOrigin',
          title: '商品产地'
        }, {
          name: 'operation',
          title: '操作'
        }],
        summary: '',
        button: [{
          value: '下架',
          support() {
            // console.log(Router.app.$route.query)
            Router.push({
              query: {
                ass: 'we'
              }
            });
          }
        }, {
          value: '促销',
          support() {
            Router.push({
              query: {
                can: 'we'
              }
            });
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
        commodities: [],
        allChecked: false,
        pagination: {
          showQuantity: 10,
          page: 1,
          totalPage: 1
        }
      },
      init() {
        let self = this;
        let display = self.commodityItems.display;
        let showQuantity = self.commodityItems.pagination.showQuantity;
        let page = self.commodityItems.pagination.page;
        Axios.post('/api/commodit/selectallpage', {
          page: (page - 1) * showQuantity,
          pagerow: showQuantity,
          tosort: 'asc',
          sorting: 'commodity_name'
        }).then(function(res) {
          let array = [];
          let dataList = res.data.dataResultList;
          let length = (showQuantity >= dataList.length ? dataList.length : showQuantity);
          for (let i = 0; i < length; i++) {
            array.push({
              commodityId: dataList[i].commodityId,
              commodityNumber: dataList[i].commodityNumber,
              commodityName: dataList[i].commodityName,
              commodityBrand: dataList[i].commodityBrand,
              commodityModel: dataList[i].commodityModel,
              commodityOrigin: dataList[i].commodityOrigin,
              display() {
                return display;
              }
            });
          }
          self.commodityItems.commodities = array;
          self.commodityItems.summary = '共有 ' + dataList[0].dataTotal + ' 件商品';
          self.commodityItems.pagination.totalPage = res.data.paginalNumber;
        }).catch(function(err) {
          self.commodityItems.pagination.page--;
          if (self.commodityItems.pagination.page > 0) {
            Router.push({
              query: {
                p: self.commodityItems.pagination.page,
                sq: self.commodityItems.pagination.showQuantity
              }
            });
          }
        });
      },
      detect() {
        let self = this;
        let query = Router.app.$route.query;
        if (!isNaN(query.sq)) {
          if (query.sq < 10 || (query.sq > 10 && query.sq < 20)) {
            self.commodityItems.pagination.showQuantity = 10;
          } else if (query.sq > 20 && query.sq < 30) {
            self.commodityItems.pagination.showQuantity = 20;
          } else if (query.sq > 30) {
            self.commodityItems.pagination.showQuantity = 30;
          } else{
            self.commodityItems.pagination.showQuantity = query.sq;
          }
        }
        if (!isNaN(query.p)) {
          self.commodityItems.pagination.page = query.p;
        }
      }
    }
  },
  components: {
    searchBar,
    commodityList
  },
  watch: {
    '$route' (to, from) {
      let twig = Router.app.$route.params.twig;
      let query = Router.app.$route.query;
      this.details = twig ? true : false;
      if (!this.details && query.sq && query.p) {
        this.detect();
        this.init();
      }
    }
  },
  beforeMount() {
    let self = this.commodityItems;
    Bus.$on('allChecked', function(c) {
      self.allChecked = c.checked;
    });
    this.detect();
    this.init();
  }
}
</script>

<style scoped>
.all-details {
  min-height: 800px;
  border: 1px solid #DDDDDD;
  padding: 15px 20px;
}
</style>
