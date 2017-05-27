<template>
  <div class="inner index">
    <inner-item v-for="item in itemList" :todo="item" :key="item.name"></inner-item>
  </div>
</template>

<script>
  import innerItem from './inner-item'
  export default {
    data() {
      return {
        itemList: [{
          name: 'total',
          title: '会员总数',
          amount: '605名'
        }, {
          name: 'active',
          title: '活跃会员',
          amount: '345名'
        }, {
          name: 'sales',
          title: '销售额',
          amount: '13542元'
        }, {
          name: 'order',
          title: '今日订单数',
          amount: '254'
        }]
      }
    },
    components: {
      innerItem
    }
  }
</script>

<style scoped>
  .index {
    display: flex;
  }
</style>