<template>
<div class="commodity-list">
  <div class="title">
    <div style="flex-grow: 4;">商品名称</div>
    <div v-for="d in todo.display" style="flex-grow: 1;">{{ d.title }}</div>
  </div>
  <div class="support">
    <div>
      <input type="checkbox" />
      <span>全选</span>
    </div>
    <div>
      <input type="button" value="下架" />
      <input type="button" value="促销" />
      <input type="button" value="取消促销" />
      <input type="button" value="编辑" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
.commodity-list {
  font-size: 14px;
  border: 1px solid #DDDDDD;
  border-top: 4px solid #FF9D7F;
  flex-direction: column;
  display: flex;
}

.commodity-list .title {
  padding: 15px 0px;
  border-bottom: 1px solid #DDDDDD;
  display: inline-flex;
}

.commodity-list .title>div {
  text-align: center;
}

.commodity-list .support {
  border-bottom: 1px solid #DDDDDD;
}
</style>
