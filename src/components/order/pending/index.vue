<template>
  <div class="pending">
    <order-list :orderItems="orderItems"></order-list>
  </div>
</template>

<script>
  import orderList from './list'
  export default {
    data() {
      return {
        orderItems: [{
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }, {
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }, {
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }, {
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }, {
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }, {
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }, {
          orderNumber: 2017041125699054,
          memberName: 'znmsd',
          receiver: '刘一',
          receiveArea: '美国圣地亚哥',
          orderTotal: '148.00',
          paymentStatu: '已支付',
          shippingStatu: '未发货',
          paymentMethod: '支付宝',
          shippingMethod: '自取',
          orderTime: '2017-05-24 11：02'
        }]
      }
    },
    components: {
      orderList
    }
  }
</script>

<style scoped>
  .pending {
    padding: 10px 20px;
  }
</style>