<template>
    <div class="list">
        <div class="order-number">{{ todo.orderNumber }}</div>
        <div class="order-name"><span>{{ todo.orderName }}</span></div>
        <div class="payer">{{ todo.payer }}</div>
        <div class="order-amount">{{ todo.orderAmount }}</div>
        <div class="refund-amount">{{ todo.refundAmount }}</div>
        <div class="application-time">{{ todo.applicationTime }}</div>
        <div class="refund-status">{{ todo.refundStatus }}</div>
        <div class="handle">
            <submit-button :todo="submitButtons">处理</submit-button>
        </div>  
    </div>
</template>

<script>
import submitButton from '../general/submit-button'
export default {
    props:['todo'],
    data(){
      return  {
          submitButtons :{
              value: '提交',
              submit() {
                console.log('ass')
                }
        }
          }
      },
    components: {
    submitButton
  }
}
</script>

<style scoped>
.list{
    margin:10px 0
}
.list div{
    display: inline-block
}
.list .order-number{width: 11%;text-align: center}
.list .order-name{width: 25%;text-align: center}
.list .payer{width: 11%;text-align: center}
.list .order-amount{width: 9%;text-align: center}
.list .refund-amount{width: 13%;text-align: center}
.list .application-time{width: 9%;text-align: center}
.list .refund-status{width: 12%;text-align: center}
.list .handle{width: 7%;text-align: center;}
</style>
