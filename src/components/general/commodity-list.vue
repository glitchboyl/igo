<template>
<div class="commodity-list">
  <div class="title">
    <div style="width: 50%;">商品名称</div>
    <div v-for="d in todo.display" style="width: 12.5%;">{{ d.title }}</div>
  </div>
  <div class="support" style="border-bottom: 1px solid #DDDDDD;">
    <div style="margin-right: 25px;">
      <input type="checkbox" :checked="todo.allChecked" @click='allCheck' />
      <span>全选</span>
    </div>
    <div>
      <support-button v-for="b in todo.button" :todo="b" :key="b.value"></support-button>
    </div>
    <div style="flex-grow: 1; text-align: right;">{{ todo.summary }}</div>
  </div>
  <div class="commodity-items">
    <commodity-item v-for="i in todo.commodities" :todo="i,allChecked,list" :key="i.id"></commodity-item>
  </div>
  <pagination :todo="todo.pagination"></pagination>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import supportButton from './support-button'
import commodityItem from './commodity-item'
import pagination from './pagination'
export default {
  props: ['todo'],
  data() {
    return {
      allChecked: '',
      list: ''
    }
  },
  components: {
    supportButton,
    commodityItem,
    pagination
  },
  methods: {
    allCheck() {
      this.todo.allChecked = !this.todo.allChecked;
      var list = this.todo.commodities;
      for (var i in list) {
        list[i].checked = this.todo.allChecked;
      }
    }
  },
  mounted() {
    this.allChecked = this.todo.allChecked;
    this.list = this.todo.commodities;
  }
}
</script>

<style scoped>
.commodity-list {
  margin-bottom: 40px;
  font-size: 14px;
  border: 1px solid #DDDDDD;
  border-top: 4px solid #FF9D7F;
  flex-direction: column;
  display: flex;
}

.commodity-list .title {
  padding: 15px 0px;
  border-bottom: 1px solid #DDDDDD;
  font-size: 0;
}

.commodity-list .title>div {
  display: inline-block;
  text-align: center;
  font-size: 14px;
}

.commodity-list .support {
  padding: 6px 20px;
  display: inline-flex;
  align-items: baseline;
}

.commodity-list .commodity-items {
  display: inline-flex;
  flex-direction: column;
}

.commodity-list .support .shows .quantity {
  padding: 3px 5px;
  margin-right: 5px;
  text-align: center;
  border: 1px solid #E5E5E5;
  display: inline-block;
  cursor: pointer;
}

.commodity-list .support .shows .quantity.active,
.commodity-list .support .pagination .page.active {
  border: 1px solid #F1675F;
  color: #F1675F;
}

.commodity-list .support .pagination {
  flex-grow: 1;
  text-align: right;
}

.commodity-list .support .pagination .now,
.commodity-list .support .pagination .total {
  color: #F1675F;
}

.commodity-list .support .pagination .page {
  padding: 3px 7px;
  margin-right: 5px;
  text-align: center;
  border: 1px solid #E5E5E5;
  display: inline-block;
  cursor: pointer;
}

.commodity-list .support .pagination .page.ellipsis {
  border: 1px solid #FFFFFF;
}
</style>
