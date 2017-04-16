<template>
    <div class="order-list">
        <div class="list">
            <input type="checkbox" :checked='todo.checked' @click='check(todo,list,allChecked)' />
        </div>
        <div class="list orderNumber">
            <span>{{ todo.orderNumber }}</span>
        </div>
        <div class="list goodsName">
            <span>{{ todo.goodsName }}</span>
        </div>
        <div class="list shopName">
            <span>{{ todo.shopName }}</span>
        </div>
        <div class="list amount">
            <span>{{ todo.amount }}</span>
        </div>
        <div class="list orderTime">
            <span>{{ todo.orderTime }}</span>
        </div>
        <div class="list orderAmount">
            <span>{{ todo.orderAmount }}</span>
        </div>
        <div class="list consignee">
            <span>{{ todo.consignee }}</span>
        </div>
        <div class="list orderStatus">
            <span>{{ todo.orderStatus }}</span>
        </div>
         <div class="handle">
            <submit-button :todo="submitButtons">发货</submit-button>
        </div>  
    </div>
</template>

<script>
import Bus from '@/assets/eventBus'
import submitButton from '../general/submit-button'
export default {
    props: ['todo','list','allChecked'],
    data (){
      return  {
          submitButtons :{
              value: '提交',
              submit: function() {
                console.log('ass')
                }
        }
          }
      },
    methods : {
        check (t,l,a){
            t.checked =!t.checked;
            if(t.checked==false){
                Bus.$emit('allChecked',{
                    checked:false
                })
            }else{
                for(var i in l){
                    if(l[i].checked == true){
                        return
                    }
                }
                Bus.$emit('allChecked',{
                    checked:true
                })
            }
        }
    },
    components: {
    submitButton
  }
}
</script>

<style scoped>
.order-list .list, .order-list .handle{
    display: inline-block;
    margin: 10px 0;
    vertical-align: middle;
}
.order-list .orderNumber{
    width: 10%;
    text-align: center;
}
.order-list .goodsName{
    width: 12%;
    text-align: center;
}
.order-list .shopName{
    width: 10%;
    text-align: center;
}
.order-list .amount{
    width: 12%;
    text-align: center;
}
.order-list .orderTime{
    width: 9%;
    text-align: center;
}
.order-list .orderAmount{
    width: 13%;
    text-align: center;
}
.order-list .consignee{
    width: 9%;
    text-align: center;
}
.order-list .orderStatus{
    width: 13%;
    text-align: center;
}
.order-list .handle{
    width: 8%;
    text-align: center;
}
</style>
