<template>
<div class="inner delivery">
  <div class="delivery-box">
    <div class="delivery-box-title">
      <div class="d-title" style="width: 60%; border-right: 1px solid #dcdcdc;"><span>商品信息</span></div>
      <div class="d-title" style="width: 40%;"><span>收货和物流信息</span></div>
    </div>
    <div class="delivery-box-button">
      <div class="d-checkbox">
        <input type="checkbox" :checked="allChecked" @click="check" /><label>全选</label>
      </div>
      <button class="d-sent">批量发货</button>
      <button class="d-invoices">批量打印发货单</button>
      <button class="d-delivery">批量打印配送单</button>
    </div>
    <div class="delivery-box-list">
      <await-list v-for='item in list' :todo="item,list,allChecked" :key="item.orderNumber"></await-list>
    </div>
  </div>
</div>
</template>

<script>
import awaitList from '@/components/delivery/await-list'
import Bus from '@/assets/eventBus'
export default {
  data() {
    return {
      list: [{
        orderNumber: '2016122900001',
        orderTime: '2016-12-29 10:59',
        payTime: '2016-12-27 10:59',
        goodsCode: '0090490875',
        goodsInfo: '智利牛油果4个 130-170g/个 进口新鲜水果',
        goodsPrice: '￥30',
        goodsAmount: '1',
        receipts: '陈小姐',
        consigne: '张女士,13682495778',
        message: 'ass we can',
        address: '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院',
        checked: false
      }, {
        orderNumber: '2016122900001',
        orderTime: '2016-12-29 10:59',
        payTime: '2016-12-27 10:59',
        goodsCode: '0090490875',
        goodsInfo: '智利牛油果4个 130-170g/个 进口新鲜水果',
        goodsPrice: '￥30',
        goodsAmount: '1',
        receipts: '陈小姐',
        consigne: '张女士,13682495778',
        message: 'ass we can',
        address: '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院',
        checked: false
      }, {
        orderNumber: '2016122900001',
        orderTime: '2016-12-29 10:59',
        payTime: '2016-12-27 10:59',
        goodsCode: '0090490875',
        goodsInfo: '智利牛油果4个 130-170g/个 进口新鲜水果',
        goodsPrice: '￥30',
        goodsAmount: '1',
        receipts: '陈小姐',
        consigne: '张女士,13682495778',
        message: 'ass we can',
        address: '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院',
        checked: false
      }, {
        orderNumber: '2016122900001',
        orderTime: '2016-12-29 10:59',
        payTime: '2016-12-27 10:59',
        goodsCode: '0090490875',
        goodsInfo: '智利牛油果4个 130-170g/个 进口新鲜水果',
        goodsPrice: '￥30',
        goodsAmount: '1',
        receipts: '陈小姐',
        consigne: '张女士,13682495778',
        message: 'ass we can',
        address: '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院',
        checked: false
      }],
      allChecked: false
    }
  },
  components: {
    awaitList
  },
  methods: {
    check() {
      this.allChecked = !this.allChecked;
      var checked = this.allChecked;
      var list = this.list;
      for (var i in list) {
        list[i].checked = checked;
      }
    }
  },
  mounted() {
    var self = this;
    Bus.$on("allChecked", function(c) {
      self.allChecked = c.checked;
    });
  }
}
</script>

<style scoped>
.delivery .delivery-box {
  border: 1px solid #dcdcdc;
  border-top: 5px solid #F1675F;
}

.delivery .delivery-box .delivery-box-title {
  font-size: 0;
  background: #f7f7f7;
  border-bottom: 1px solid #dcdcdc;
}

.delivery .delivery-box .delivery-box-title .d-title {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  padding: 10px 0;
}

.delivery .delivery-box .delivery-box-button {
  padding: 15px 20px;
}

.delivery .delivery-box .delivery-box-button .d-checkbox {
  display: inline-block;
}

.delivery .delivery-box .delivery-box-button button {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #dcdcdc;
  color: #666666;
  margin: 0 25px;
  padding: 3px 30px;
}
</style>
