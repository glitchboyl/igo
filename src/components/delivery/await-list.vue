<template>
<div class="d-list">
  <div class="d-list-title">
    <div class="d-checkbox"><input type="checkbox" :checked="todo.checked" @click="check(todo,list,allChecked)" /></div>
    <p>订单号：<span>{{ todo.orderNumber }}</span></p>
    <p>下单时间：<span>{{ todo.orderTime }}</span></p>
    <p>付款时间：<span>{{ todo.payTime }}</span></p>
    <button class="d-button">发货</button>
  </div>
  <div class="d-list-content">
    <div class="d-list-content-left">
      <p>商品编码：<span>{{ todo.goodsCode }}</span></p>
      <p>{{ todo.goodsInfo }}</p>
      <p class="acount"><span>{{ todo.goodsPrice }}</span>&nbsp;*&nbsp;<span>{{ todo.goodsAmount }}</span></p>
    </div>
    <div class="d-list-content-right">
      <div class="d-receipts">
        <p>发票：<span>{{ todo.receipts }}</span></p>
      </div>
      <div class="d-consigne">
        <p>收货人：<span>{{ todo.consigne }}</span></p>
      </div>
      <div class="d-address">
        <p>收货地址：<span>{{ todo.address }}</span></p>
      </div>
      <div class="d-message">
        <p>顾客留言：<textarea>{{ todo.message }}</textarea></p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
export default {
  props: ['todo', 'list', 'allChecked'],
  methods: {
    check(t, l, c) {
      t.checked = !t.checked;
      if (t.checked == false) {
        Bus.$emit("allChecked", {
          checked: false
        })
      } else {
        for (var i in l) {
          if (l[i].checked == false) {
            return;
          }
        }
        Bus.$emit("allChecked", {
          checked: true
        })
      }
    }
  }
}
</script>

<style scoped>
.d-list .d-list-title {
  border: 1px solid #cdcdcd;
  padding: 15px 20px;
  border-right: none;
  border-left: none;
}

.d-list .d-list-title p {
  display: inline-block;
  padding-right: 30px;
}

.d-list .d-list-title .d-checkbox {
  display: inline;
}

.d-list .d-list-title button {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #dcdcdc;
  color: #666666;
  padding: 3px 30px;
  float: right;
  margin-top: -5px;
}

.d-list .d-list-content {
  font-size: 0;
}

.d-list .d-list-content .d-list-content-left {
  width: 60%;
  display: inline-block;
  font-size: 14px;
  align-items: center;
  border-right: 1px solid #cdcdcd;
  padding: 15px 20px;
}

.d-list .d-list-content .d-list-content-left p {
  flex-grow: 3;
}

.d-list .d-list-content .d-list-content-left .acount span {
  color: #F1675F;
}

.d-list .d-list-content .d-list-content-right {
  width: 40%;
  display: inline-block;
  padding: 15px 20px;
}

.d-list .d-list-content .d-list-content-right div {
  margin: 5px 0;
}

.d-list .d-list-content .d-list-content-right .d-message textarea {
  border: 1px solid #dddddd;
  color: #bbbbbb;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  height: 30px;
  padding: 3px 6px;
  resize: none;
  transition: color 0.3s ease 0s, border 0.3s ease 0s;
  max-width: 250px;
}
</style>
