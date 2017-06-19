<template>
  <div class="item">
    <div style="flex-basis: 8%">
      <submit-button :button="button"></submit-button>
    </div>
    <div style="flex-basis: 13.5%;">{{ item.orderNumber }}</div>
    <div style="flex-basis: 11.5%">{{ item.memberName }}</div>
    <div style="flex-basis: 10%">{{ item.receiver }}</div>
    <div style="flex-basis: 12%">{{ item.receiveArea }}</div>
    <div style="flex-basis: 10%">{{ item.orderTotal }}</div>
    <div style="flex-basis: 6%">{{ item.paymentStatu }}</div>
    <div style="flex-basis: 6%">{{ item.shippingStatu }}</div>
    <div style="flex-basis: 6%">{{ item.paymentMethod }}</div>
    <div style="flex-basis: 6%">{{ item.shippingMethod }}</div>
    <div style="flex-basis: 11%; border-right: 0;">{{ item.orderTime }}</div>
    <div v-if="isRendered" v-show="isOpened" class="details">
      <div class="header">
        <ul>
          <li v-for="i in details" :class="{ isActived:i.isActived }" @click="tabClick(i)">{{ i.title }}</li>
        </ul>
      </div>
      <div class="details-container">
        <div :class="[ details[0].name ]" v-show="details[0].isActived">
          <div class="operation">
            <div v-for="i in operation" style="display: inline-block; margin-right: 35px;">
              {{ i.title }}<span :class="{ isActived: item.isActived }" v-for="item in i.items">{{ item.title }}</span>
            </div>
          </div>
          <div style="width: 100%; margin-top: 12px; display: inline-flex; justify-content: space-between; flex-wrap: wrap;">
            <div class="order-details">
              <div class="header"><span style="padding: 7px 5px; border-bottom: 3px solid #F1655D; display: inline-block;">订单详情</span></div>
              <div class="inner">
                <div><span class="title">商品总额:</span>{{ orderDetails.total }}</div>
                <div><span class="title">配送费用:</span>{{ orderDetails.shippingFees }}</div>
                <div><span class="title">订单总额:</span>{{ orderDetails.orderTotal }}</div>
                <div><span class="title">已支付金额:</span>{{ orderDetails.amountPaid }}</div>
                <div><span class="title">订单状态:</span><span style="padding: 3px 9px; background-color: #397FD6; color: #FFFFFF; display: inline-block;">{{ orderDetails.orderStatu }}</span></div>
                <div><span class="title">支付方式:</span>{{ orderDetails.paymentMethod }}</div>
              </div>
            </div>
            <div class="delivery-info">
              <div class="header"><span style="padding: 7px 5px; border-bottom: 3px solid #F1655D; display: inline-block;">收货信息</span></div>
              <div class="inner">
                <div><span class="title">收货人:</span>{{ deliveryInfo.receiver }}</div>
                <div><span class="title">收货地址:</span>{{ deliveryInfo.address }}</div>
                <div><span class="title">收货人手机:</span>{{ deliveryInfo.phoneNumber }}</div>
                <div><span class="title">邮编:</span>{{ deliveryInfo.zipCode }}</div>
                <div><span class="title">配送方式:</span>{{ deliveryInfo.deliveryMethod }}</div>
                <div><span class="title">配送时间:</span>{{ deliveryInfo.deliveryTime }}</div>
              </div>
            </div>
            <div class="order-commodity">
              <div class="header"><span style="padding: 7px 5px; border-bottom: 3px solid #F1655D; display: inline-block;">订单商品</span></div>
              <div class="inner">
                <div class="commodity-list">
                  <div class="header">
                    <div class="title" style="flex-basis: 40%">商品名称</div>
                    <div class="title" style="flex-basis: 9%;">商品货号</div>
                    <div class="title" style="flex-basis: 16%;">规格</div>
                    <div class="title" style="flex-basis: 8%;">销售价</div>
                    <div class="title" style="flex-basis: 9%;">购买数量</div>
                    <div class="title" style="flex-basis: 9%;">发货数量</div>
                    <div class="title" style="flex-basis: 9%;">小计</div>
                  </div>
                  <commodity-item v-for="item in commodityItems" :item="item" :key="item.itemNumber"></commodity-item>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div :class="[ details[1].name ]" v-show="details[1].isActived">{{ details[1].title }}</div>
        <div :class="[ details[2].name ]" v-show="details[2].isActived">{{ details[2].title }}</div>
        <div :class="[ details[3].name ]" v-show="details[3].isActived">{{ details[3].title }}</div>
        <div :class="[ details[4].name ]" v-show="details[4].isActived">{{ details[4].title }}</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import submitButton from '@/components/general/submit-button'
  import commodityItem from './commodity-item'
  export default {
    props: ["item"],
    data() {
      let self = this;
      return {
        isRendered: false,
        isOpened: false,
        open: {
          value: '查看详情',
          style: {
            backgroundColor: '#397FD6',
            padding: '5px 7px'
          },
          submit: function() {
            if (!self.isRendered) {
              self.isRendered = true;
            }
            self.isOpened = true;
          }
        },
        close: {
          value: '关闭详情',
          style: {
            backgroundColor: '#F1675F',
            padding: '5px 7px'
          },
          submit: function() {
            self.isOpened = false;
          }
        },
        details: [{
          name: 'basicInfo',
          title: '基本信息',
          isActived: true
        }, {
          name: 'boughtCommodity',
          title: '购买商品',
          isActived: false
        }, {
          name: 'paymentRecords',
          title: '收退款记录',
          isActived: false
        }, {
          name: 'commodityRecords',
          title: '收发货记录',
          isActived: false
        }, {
          name: 'orderLog',
          title: '订单日志',
          isActived: false
        }],
        operation: [{
          name: 'order',
          title: '订单操作',
          items: [{
            name: 'paid',
            title: '支付',
            isActived: false
          }, {
            name: 'shipped',
            title: '发货',
            isActived: true
          }, {
            name: 'completed',
            title: '完成',
            isActived: false
          }]
        }, {
          name: 'chargeback',
          title: '退单操作',
          items: [{
            name: 'refunded',
            title: '退款',
            isActived: true
          }, {
            name: 'returned',
            title: '退货',
            isActived: false
          }, {
            name: 'invalid',
            title: '作废',
            isActived: false
          }]
        }],
        commodityItems: [{
          commodityName: '北京稻香村糕点礼盒 北京特产 饼干蛋糕 休闲零食 (十八种口味)',
          itemNumber: '100021',
          specification: '礼盒套装:分享装4斤/盒 ',
          price: '148.00',
          buyNumber: '1',
          shipmentsNumber: '0',
          subtotal: '148.00',
        }]
      }
    },
    computed: {
      button() {
        let self = this;
        return self.isOpened ? self.close : self.open;
      },
      orderDetails() {
        return {
          total: '￥148.00',
          shippingFees: '￥0.00',
          orderTotal: '￥148.00',
          amountPaid: '￥148.00',
          orderStatu: '待发货',
          paymentMethod: '支付宝'
        }
      },
      deliveryInfo() {
        return {
          receiver: '刘一',
          address: '非洲阿萨德部落',
          phoneNumber: '13250261591',
          zipCode: '518000',
          deliveryMethod: '自取',
          deliveryTime: ''
        }
      }
    },
    methods: {
      tabClick(tab) {
        let self = this;
        for (let i in self.details) {
          if (self.details[i].isActived) {
            self.details[i].isActived = false;
          }
        }
        tab.isActived = true;
      }
    },
    components: {
      submitButton,
      commodityItem
    }
  }
</script>

<style scoped>
  .item {
    width: 100%;
    display: inline-flex;
    border-top: 1px solid #DDDDDD;
    flex-wrap: wrap;
  }
  .item>div:not(.details) {
    color: #212121;
    font-size: 14px;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .item .details {
    flex-basis: 100%;
    border-top: 1px solid #DDDDDD;
    border-right: 0;
  }
  .item .details .header {
    border-bottom: 1px solid #DDDDDD;
  }
  .item .details .header ul {
    display: flex;
    padding: 0 20px;
  }
  .item .details .header ul li {
    padding: 10px 5px;
    margin-right: 20px;
    border-bottom: 3px solid #FFFFFF;
    transition: color .3s, border-bottom .3s;
    cursor: pointer;
  }
  .item .details .header ul li:hover {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
  }
  .item .details .header ul li.isActived {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
    cursor: default;
  }
  .item .details .details-container>div {
    padding: 10px 20px;
  }
  .item .details .details-container .operation span {
    color: #999999;
    padding: 5px 10px;
    margin-left: 12px;
    border: 1px solid #DDDDDD;
    display: inline-block;
    transition: color .3s, background-color .3s, border .3s;
  }
  .item .details .details-container .operation span:hover {
    cursor: pointer;
  }
  .item .details .details-container .operation span.isActived:hover {
    cursor: default;
  }
  .item .details .details-container .operation span:hover,
  .item .details .details-container .operation span.isActived {
    color: #FFFFFF;
    background-color: #F1675F;
    border: 1px solid #F1675F;
  }
  .item .details .details-container .order-details,
  .item .details .details-container .delivery-info {
    flex-basis: 47.5%;
    color: #333333;
    border: 1px solid #DDDDDD;
  }
  .item .details .details-container .order-commodity {
    flex-basis: 100%;
    color: #333333;
    border: 1px solid #DDDDDD;
    margin-top: 12px;
  }
  .item .details .details-container .order-details .header,
  .item .details .details-container .delivery-info .header,
  .item .details .details-container .order-commodity .header {
    padding: 0 10px;
  }
  .item .details .details-container .order-details .inner,
  .item .details .details-container .delivery-info .inner,
  .item .details .details-container .order-commodity .inner {
    padding: 15px 25px;
  }
  .item .details .details-container .order-details .inner>div,
  .item .details .details-container .delivery-info .inner>div {
    width: 100%;
    margin-bottom: 8px;
    align-items: center;
    display: inline-flex;
  }
  .item .details .details-container .order-details .inner>div:last-child,
  .item .details .details-container .delivery-info .inner>div:last-child {
    margin-bottom: 0;
  }
  .item .details .details-container .order-details .inner>div .title,
  .item .details .details-container .delivery-info .inner>div .title {
    flex-basis: 25%;
  }
  .item .details .details-container .order-commodity .inner .header {
    width: 100%;
    padding: 0;
    display: inline-flex;
    border-bottom: 0;
  }
  .item .details .details-container .order-commodity .inner .commodity-list {
    border: 1px solid #DDDDDD;
  }
  .item .details .details-container .order-commodity .inner .commodity-list .header .title {
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .item .details .details-container .order-commodity .inner .commodity-list .header .title:last-child {
    border-right: 0;
  }
</style>
