<template>
<div class="inner delivery">
    <div class="delivery-box">
        <div class="delivery-box-title">
            <div class="d-title"><span>商品信息</span></div>
            <div class="d-titles"><span>收货和物流信息</span></div>
        </div>
        <div class="delivery-box-list">
            <shipped-list v-for='item in list' :todo="item" :key="item.orderNumber"></shipped-list> 
        </div>
    </div>        
</div>
</template>

<script>
import shippedList from '@/components/delivery/shipped-list'
export default{
    data() {
            return{
                list:[{
                    orderNumber : '2016122900001 ',
                    orderTime : '2016-12-29 10:59',
                    payTime : '2016-12-27 10:59',
                    goodsCode : '0090490875',
                    goodsInfo : '智利牛油果4个 130-170g/个 进口新鲜水果',
                    goodsPrice : '￥30',
                    goodsAmount : '1',
                    receipts : '陈小姐',
                    consigne : '张女士,13682495778',
                    message : 'ass we can',
                    address : '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院'
                },{
                    orderNumber : '2016122900001 ',
                    orderTime : '2016-12-29 10:59',
                    payTime : '2016-12-27 10:59',
                    goodsCode : '0090490875',
                    goodsInfo : '智利牛油果4个 130-170g/个 进口新鲜水果',
                    goodsPrice : '￥30',
                    goodsAmount : '1',
                    receipts : '陈小姐',
                    consigne : '张女士,13682495778',
                    message : 'ass we can',
                    address : '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院'
                },{
                    orderNumber : '2016122900001 ',
                    orderTime : '2016-12-29 10:59',
                    payTime : '2016-12-27 10:59',
                    goodsCode : '0090490875',
                    goodsInfo : '智利牛油果4个 130-170g/个 进口新鲜水果',
                    goodsPrice : '￥30',
                    goodsAmount : '1',
                    receipts : '陈小姐',
                    consigne : '张女士,13682495778',
                    message : 'ass we can',
                    address : '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院'
                },{
                    orderNumber : '2016122900001 ',
                    orderTime : '2016-12-29 10:59',
                    payTime : '2016-12-27 10:59',
                    goodsCode : '0090490875',
                    goodsInfo : '智利牛油果4个 130-170g/个 进口新鲜水果',
                    goodsPrice : '￥30',
                    goodsAmount : '1',
                    receipts : '陈小姐',
                    consigne : '张女士,13682495778',
                    message : 'ass we can',
                    address : '广东深圳市龙岗区龙城街道将军帽路1号深圳技师学院'
                }],
            }
        },
    components : {
        shippedList
    }
}
</script>

<style scoped>
.delivery .delivery-box {
    border: 1px solid #dcdcdc;
    border-top: 5px solid #F1675F;
}  
.delivery .delivery-box .delivery-box-title{
    background: #f7f7f7;
    display: flex
}
.delivery .delivery-box .delivery-box-title .d-title{
    flex-grow: 3;
    border-right: 1px solid #dcdcdc;
}
.delivery .delivery-box .delivery-box-title .d-titles{
    flex-grow: 2;
}
.delivery .delivery-box .delivery-box-title .d-title, .delivery .delivery-box .delivery-box-title .d-titles {
    display: inline-block;
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
}
.delivery .delivery-box .delivery-box-button{
    padding: 15px 20px;
}
.delivery .delivery-box .delivery-box-button .d-checkbox{
    display: inline-block;
}
.delivery .delivery-box .delivery-box-button button{
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #dcdcdc;
    color: #666666;
    margin: 0 25px;
    padding: 3px 30px;
}

</style>
