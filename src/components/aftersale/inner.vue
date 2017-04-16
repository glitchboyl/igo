<template>
<div class="inner aftersale">
    <div class="aftersale-box">
        <div class="title">
            <div class="title-text"><span>商品编号</span></div>
            <div class="title-texts"><span>商品名称</span></div>
            <div class="title-text"><span>购买人</span></div>
            <div class="title-text"><span>交易金额 </span></div>
            <div class="title-text"><span>退款金额</span></div>
            <div class="title-text"><span>申请时间</span></div>
            <div class="title-text"><span>退款状态</span></div>
            <div class="title-text"><span>操作</span></div>
        </div>
    </div>
    <div class="aftersale-content">
        <list v-for="row in lists" :todo='row' :key="row.name"></list>
    </div>
</div>
</template>

<script>
import list from '@/components/aftersale/list'
export default {
    data() {
        return {
            lists : [{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            },{
                orderNumber : '12358921',
                orderName : 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
                payer : '张艺林',
                orderAmount : '354元',
                refundAmount : '354元',
                applicationTime : '2016/12/2910：00',
                refundStatus : '未退款'
            }
            ]
        }
    },
     components: {
        list
    }
    
}
</script>

<style scoped>
.aftersale{
    border:1px solid #cdcdcd;
    padding: 15px 20px;
    border-top: 5px solid #FF9C7F
}
.aftersale-box .title{
    display: flex;
    text-align: center
}
.aftersale-box .title .title-texts{
    flex-grow: 3
}
.aftersale-box .title .title-text{
    flex-grow: 1
}
.aftersale-content{
    color: #666666
}
</style>
