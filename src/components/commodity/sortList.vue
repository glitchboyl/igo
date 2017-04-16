<template>
  <div class="sortList">
    <input type="checkbox" @click='check(todo,lists,allChecked)' :checked="todo.checked"/>
    <div class="goodsclassify">{{ todo.goodsClassifys }}</div>
    <div class="addclassify">添加子分类</div>  
    <div class="priority"><span>{{ todo.priority }}</span></div>  
  </div>
</template>

<script>
import Bus from '@/assets/eventBus'
export default{
  props: ['todo','lists','allChecked'],
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
    }
}
</script>

<style scoped>
.sortList{
  padding: 5px 0
}
.sortList div{
  display:inline-block
}
.sortList input{
  margin:3px 3px 0 0 
}
.sortList .goodsclassify{
  width: 33.1%
}
.sortList .addclassify{
  width: 35%
}
.sortList .priority{
  width: 30%
}
</style>
