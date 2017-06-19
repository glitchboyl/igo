<template>
  <div class="commodity-list">
    <div class="header">
      <div style="flex-basis: 3.5%">
        <checkbox :settings="selectAll"></checkbox>
      </div>
      <div class="title" style="flex-basis: 10%">操作</div>
      <div class="title" style="flex-basis: 34%;">商品名称</div>
      <div class="title" style="flex-basis: 7.5%">商品规格</div>
      <div class="title" style="flex-basis: 7.5%">商品货号</div>
      <div class="title" style="flex-basis: 7.5%">分类</div>
      <div class="title" style="flex-basis: 10%">品牌</div>
      <div class="title" style="flex-basis: 5%">库存</div>
      <div class="title" style="flex-basis: 5%">销售价</div>
      <div class="title" style="flex-basis: 5%">市场价</div>
      <div class="title" style="flex-basis: 5%">上下架</div>
    </div>
    <commodity-item v-for="item in commodityItems" :item="item" :key="item.commodityId"></commodity-item>
  </div>
</template>

<script>
  import checkbox from '@/components/general/checkbox'
  import commodityItem from './item'
  export default {
    props: ["commodityItems"],
    data() {
      return {
        selectAll: {
          name: 'select-all',
          checked: false
        }
      }
    },
    components: {
      checkbox,
      commodityItem
    }
  }
</script>

<style scoped>
  .commodity-list {
    border: 1px solid #DDDDDD;
  }
  .commodity-list .header {
    width: 100%;
    display: inline-flex;
  }
  .commodity-list .header>div {
    color: #333333;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .commodity-list .header>div:last-child {
    border-right: 0;
  }
  .commodity-list .header .title {
    font-size: 14px;
    font-weight: 600;
  }
</style>
