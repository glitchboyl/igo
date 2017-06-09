<template>
  <div id="commodity-list" class="inner">
    <search-bar :items="searchItems"></search-bar>
    <div class="inner-container">
      <div class="support">
        <submit-button v-for="i in supportButtons" :button="i" :key="i.value"></submit-button>
      </div>
      <commodity-list :commodityItems="commodityItems"></commodity-list>
    </div>
  </div>
</template>

<script>
  import searchBar from '@/components/general/search-bar'
  import submitButton from '@/components/general/submit-button'
  import commodityList from './list'
  export default {
    data() {
      return {
        searchItems: [{
          type: 'text-box',
          name: 'commodityName',
          title: '商品名称',
          width: 170,
          value: ''
        }, {
          type: 'range',
          name: 'zxcv',
          title: '总销量',
          minValue: '',
          maxValue: ''
        }, {
          type: 'range',
          name: 'qwer',
          title: '库存',
          minValue: '',
          maxValue: ''
        }, {
          type: 'range',
          name: 'asdf',
          title: '销售价',
          minValue: '',
          maxValue: ''
        }, {
          type: 'text-box',
          name: 'commodityOrigin',
          title: '商品货号',
          width: 170,
          value: ''
        }, {
          type: 'choose-box',
          name: 'sort',
          title: '商品分类',
          width: 170,
          value: '',
          showText: '',
          items: []
        }],
        supportButtons: [{
          value: '添加+',
          style: {
            backgroundColor: '#397DF7',
            marginRight: '10px',
            padding: '7px 15px'
          },
          submit: function() {}
        }, {
          value: '批量上架',
          style: {
            backgroundColor: '#397DF7',
            marginRight: '10px',
            padding: '7px 15px'
          },
          submit: function() {}
        }, {
          value: '批量下架',
          style: {
            backgroundColor: '#397DF7',
            padding: '7px 15px'
          },
          submit: function() {}
        }],
        commodityItems: [{
          commodityId: 1,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 2,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 3,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 4,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 5,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 6,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 7,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 8,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 9,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }, {
          commodityId: 10,
          commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）',
          commodityWeigh: '330',
          commodityUnit: 'g',
          commodityNumber: 534381,
          sort: '休闲零食',
          commodityBrand: 'Astick爱时乐',
          kucun: '153',
          price: '17.90',
          marketprice: '36.60',
          isshelf: true
        }]
      }
    },
    components: {
      searchBar,
      submitButton,
      commodityList
    },
    // mounted() {
    //   let self = this;
    //   let Axios = self.$axios;
    //   Axios.post('/system/commoditdetails/selectallpage', {
    //     tosort: 'desc',
    //     page: 0,
    //     pagerow: 10,
    //     shelfState: 1,
    //     sorting: 'present_price'
    //   }).then(function(res){
    //     console.log(res)
    //   })
    // }
  }
</script>

<style scoped>
  #commodity-list .inner-container {
    padding: 10px 20px;
    border: 1px solid #DDDDDD;
  }
  #commodity-list .inner-container .support {
    margin-bottom: 10px;
  }
</style>
