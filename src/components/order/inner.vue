<template>
  <div id="order" class="inner">
    <search-bar :items="searchItems"></search-bar>
    <div class="inner-container">
      <div class="header">
        <ul>
          <router-link to="/order/pending" tag="li">待发货</router-link>
          <router-link to="/order/a" tag="li">已发货</router-link>
          <router-link to="/order/b" tag="li">待支付</router-link>
          <router-link to="/order/c" tag="li">已支付</router-link>
          <router-link to="/order/d" tag="li">已退款</router-link>
          <router-link to="/order/e" tag="li">已作废</router-link>
          <router-link to="/order/f" tag="li">已完成</router-link>
          <router-link to="/order/g" tag="li">全部</router-link>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import searchBar from '@/components/general/search-bar'
  export default {
    data() {
      return {
        searchItems: [{
          type: 'text-box',
          name: 'orderNumber',
          title: '订单号',
          width: 170,
          value: ''
        }, {
          type: 'text-box',
          name: 'receiver',
          title: '收货人',
          width: 170,
          value: '',
        }, {
          type: 'range',
          name: 'qwer',
          title: '下单日期',
          minValue: '',
          maxValue: ''
        }, {
          type: 'range',
          name: 'asdf',
          title: '订单总额',
          minValue: '',
          maxValue: ''
        }],
      }
    },
    components: {
      searchBar
    }
  }
</script>

<style scoped>
  .inner-container {
    border: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
  }
  .inner-container .header {
    border-bottom: 1px solid #DDDDDD;
  }
  .inner-container .header ul {
    display: flex;
    padding: 0 20px;
  }
  .inner-container .header ul li {
    padding: 10px 5px;
    margin-right: 20px;
    border-bottom: 3px solid #FFFFFF;
    transition: color .3s, border-bottom .3s;
    cursor: pointer;
  }
  .inner-container .header ul li:hover {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
  }
  .inner-container .header ul li.router-link-active {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
    cursor: default;
  }
</style>