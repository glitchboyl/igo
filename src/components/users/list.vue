<template>
    <div class="a-list">
        <input type="checkbox" :checked="todo.checked" @click="check(todo,list,allChecked)" />
        <div id="select-all" class="account-name">{{ todo.name }}</div>
        <div class="last-IP">{{ todo.IP }}</div>
        <div class="last-times">{{ todo.datetime }}</div>
        <div class="handle">查看</div>
     </div>
</template>

<script>
import Bus from '@/assets/eventBus'
export default {
  props: ["todo","list","allChecked"],
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
}

</script>

<style scoped>
.a-list div{
    display: inline-block;
    margin: 10px 0;
    text-align: center;
    width: calc(25% - 10px);
}
</style>
