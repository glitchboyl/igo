<template>
  <div class="item">
    <div style="flex-basis: 40%">{{ item.commodityName }}</div>
    <div style="flex-basis: 9%;">{{ item.itemNumber }}</div>
    <div style="flex-basis: 16%">{{ item.specification }}</div>
    <div style="flex-basis: 8%">{{ item.price }}</div>
    <div style="flex-basis: 9%">{{ item.buyNumber }}</div>
    <div style="flex-basis: 9%">{{ item.shipmentsNumber }}</div>
    <div style="flex-basis: 9%">{{ item.subtotal }}</div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  .item {
    width: 100%;
    display: inline-flex;
    border-top: 1px solid #DDDDDD;
  }
  .item>div {
    color: #212121;
    font-size: 14px;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .item>div:last-child {
    border-right: 0;
  }
</style>