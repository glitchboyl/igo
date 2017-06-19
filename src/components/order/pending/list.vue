<template>
  <div class="order-list">
    <div class="header">
      <div class="title" style="flex-basis: 8%">操作</div>
      <div class="title" style="flex-basis: 13.5%;">订单号</div>
      <div class="title" style="flex-basis: 11.5%">会员名</div>
      <div class="title" style="flex-basis: 10%">收货人</div>
      <div class="title" style="flex-basis: 12%">收货地区</div>
      <div class="title" style="flex-basis: 10%">订单总额</div>
      <div class="title" style="flex-basis: 6%">付款状态</div>
      <div class="title" style="flex-basis: 6%">发货状态</div>
      <div class="title" style="flex-basis: 6%">支付方式</div>
      <div class="title" style="flex-basis: 6%">发货方式</div>
      <div class="title" style="flex-basis: 11%">下单时间</div>
    </div>
    <order-item v-for="item in orderItems" :item="item" :key="item.orderId"></order-item>
  </div>
</template>

<script>
  import orderItem from './item'
  export default {
    props: ["orderItems"],
    components: {
      orderItem
    }
  }
</script>

<style scoped>
  .order-list {
    border: 1px solid #DDDDDD;
  }
  .order-list .header {
    width: 100%;
    display: inline-flex;
  }
  .order-list .header>div {
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .order-list .header>div:last-child {
    border-right: 0;
  }
  .order-list .header .title {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
  }
</style>
