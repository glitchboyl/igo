<template>
<div class="d-list">
    <div class="d-list-title">
        <p>订单号：<span>{{ todo.orderNumber }}</span></p>
        <p>下单时间：<span>{{ todo.orderTime }}</span></p>
        <p>付款时间：<span>{{ todo.payTime }}</span></p>
        <button class="d-button">查看物流</button>
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
                <p>顾客留言：<span>{{ todo.message }}</span></p>
            </div>
        </div>
    </div>
</div>  
</div>
</template>

<script>
export default {
  props: ['todo'],
  methods:{
      check(){
        console.log(this.checked)
      }
  }
}
</script>

<style scoped>
.d-list .d-list-title{
    border: 1px solid #cdcdcd;
    padding: 15px 20px;
    border-right: none;
    border-left: none;
}
.d-list .d-list-title p{
    display: inline-block;
    padding-right: 30px;
}
.d-list .d-list-title .d-checkbox{
    display: inline
}
.d-list .d-list-title button{
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #dcdcdc;
    color: #666666;
    padding: 3px 30px;
    float: right;
    margin-top: -5px
}
.d-list .d-list-content{
     display: flex
}
.d-list .d-list-content .d-list-content-left{
    flex-grow:5;
    display: flex;
    align-items:center; 
    border-right: 1px solid #cdcdcd;
    padding: 15px 20px;
}
.d-list .d-list-content .d-list-content-left p{
    flex-grow: 3;
}
.d-list .d-list-content .d-list-content-left .acount span{
    color: #F1675F;
}
.d-list .d-list-content .d-list-content-right{
    flex-grow:2;
    padding: 15px 20px
}
.d-list .d-list-content .d-list-content-right div{
    margin:5px 0
}
</style>
