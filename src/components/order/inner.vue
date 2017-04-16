<template>
<div class="inner order">
      <div class="order-box">
        <div class="title">
            <div class="title-text active"><span>全部订单</span></div>
            <div class="title-text"><span>等待付款</span></div>
            <div class="title-text"><span>已付款</span></div>
            <div class="title-text"><span>未发货 </span></div>
            <div class="title-text"><span>已发货</span></div>
            <div class="title-text"><span>已完成</span></div>
            <div class="title-text"><span>已退款</span></div>
            <div class="title-text"><span>已退货</span></div>
            <div class="title-text"><span>已作废</span></div>
        </div>
        <div class="order-button">
            <support-button v-for="b in button" :todo="b" :key="b.value"></support-button>
        </div>
        <div class="order-content">
          <div class="content-top">
             <div class="content-check">
                <input type="checkbox" :checked='allChecked'  @click="check" />
            </div>
            <div class="content-title">
                <span>订单号</span>
            </div>
            <div class="content-title">
                <span>商品名称</span>
            </div>
            <div class="content-title">
                <span>店铺名称</span>
            </div>
            <div class="content-title">
                <span>数量</span>
            </div>
            <div class="content-title">
                <span>下单时间</span>
            </div>
            <div class="content-title">
                <span>订单总额</span>
            </div>
            <div class="content-title">
                <span>收货人</span>
            </div>
            <div class="content-title">
                <span>订单状态</span>
            </div>
            <div class="content-title">
                <span>操作</span>
            </div>
          </div>
          <div class="content-middle">
            <list v-for="item in list" :todo="item,list,allChecked" :key="list.orderNumber"></list>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import supportButton from '../general/support-button'
import list from '@/components/order/list'
export default {
    data(){
        return{
            button : [{
                value: '导出当前订单',
                support(){
                    console.log('ass');
                }
            },{
                value: '导出全部订单',
                support(){
                    console.log('ass');
                }
            },{
                value: '批量删除',
                support(){
                    console.log('ass');
                }
            },],
            list : [{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked:false
            },{
                orderNumber : "2016122900001 ",
                goodsName : "智利牛油果4个 130-170g/个 进口新鲜水果",
                shopName : "01_miley敏03 ",
                amount : "1",
                orderTime : "2013/11/23 13:34:13",
                orderAmount : "30.00",
                consignee : "悠悠",
                orderStatus : "未发货",
                checked : false
            },],
            allChecked:false
        }
    },
    components:{
        supportButton,
        list
    },
    methods: {
        check(){
            this.allChecked = !this.allChecked;
            var checked = this.allChecked;
            var list= this.list
            for(var i in list){
                list[i].checked = checked;
            }
        }
    },
    mounted(){
        var self = this;
         Bus.$on("allChecked",function(c){
            self.allChecked = c.checked;
        });
    }
}
</script>

<style scoped>
.order-box{
    border: 1px solid #cdcdcd;
}
.order-box .title{
    padding: 10px 20px
}
.order-box .title .title-text{
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    padding-right: 30px;
}
.order-box .title .active span{
    border-bottom: 3px solid #F0665E;
    padding:7px 3px;
    color: #F0665E
}
.order-box .order-button{
    padding: 15px 20px;
    border: 1px solid #cdcdcd;
    border-right: none; 
    border-left: none
}
.order-box  .order-content .content-middle{
    padding: 15px 20px
}
.order-box  .order-content .content-top{
    display: flex;
    background:#F7F7F7;
    padding: 10px 20px;
    border-bottom: 1px solid #cdcdcd
}
.order-box  .order-content .content-top .content-title{
    flex-grow: 1;
    text-align: center;
}
</style>
