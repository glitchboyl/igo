<template>
<div class="inner sort">
  <div class="sortbox">
    <div class="sortbox-button">
      <input type="checkbox" :checked="allChecked" @click="check()" /><label>全选</label>
      <support-button v-for="b in button" :todo="b" :key="b.value"></support-button>
    </div>
    <div class="title">
      <div class="classifys"><span>分类名称</span></div>
      <div class="addclassify"><span>添加子分类</span></div>
      <div class="s-priority"><span>优先级</span></div>
    </div>
    <div class="sortbox-content">
        <sortList v-for="item in lists" :todo="item,lists,allChecked" :key="item.name"></sortList>
    </div>
  </div>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import sortList from '@/components/commodity/sortList'
import supportButton from '../general/support-button'
export default{
  data(){
    return{
      lists : [{
        goodsClassifys : '生鲜水果',
        priority : 1,
        checked:false
      },{
        goodsClassifys : '酒水',
        priority : 2,
        checked:false
      },{
        goodsClassifys : '生鲜水果',
        priority : 3,
        checked:false
      },{
        goodsClassifys : '酒水',
        priority : 4,
        checked:false
      },],
      allChecked:false,
      button: [{
          value: '删除',
          support() {
            console.log('ass')
          }
        }, {
          value: '添加分类',
          support() {
            console.log('ass')
          }
        }, {
          value: '保存',
          support() {
            console.log('ass')
          }
        }]
    }
  },
  components : {
    sortList,
    supportButton
  },
    methods: {
        check(){
            this.allChecked = !this.allChecked;
            var checked = this.allChecked;
            var list= this.lists
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
.sort .sortbox{
  border: 1px solid #cdcdcd;
  border-top: 5px solid #F1675F
}
.sort .sortbox .sortbox-button, .sort .sortbox .sortbox-content{
  padding: 10px 20px
}
.sort .sortbox .title {
  display: flex;
  border: 1px solid #cdcdcd;
  border-right: none; 
  border-left: none; 
  padding: 10px 0;
}
.sort .sortbox .title div{
  flex-grow: 1;
}
.sort .sortbox .title .classifys{
  margin-left: 40px
}
</style>
