
<template>
<div class="inner index">
  <inner-item v-for="item in itemList" :todo="item" :key="item.name"></inner-item>
</div>
</template>

<script>
import innerItem from '@/components/index/inner-item'
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
        name: 'message',
        title: '消息',
        amount: '25未读消息'
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
