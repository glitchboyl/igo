<template>
  <div class="extend-list">
    <div class="header">
      <div class="title" style="flex-basis: 20%">操作</div>
      <div class="title" style="flex-basis: 30%">名称</div>
      <div class="title" style="flex-basis: 30%">别名</div>
      <div class="title" style="flex-basis: 20%">前台显示</div>
    </div>
    <extend-item v-for="item in extendItems" :item="item" :key="item.id"></extend-item>
  </div>
</template>

<script>
  import extendItem from './item'
  export default {
    props: ["extendItems"],
    components: {
      extendItem
    }
  }
</script>

<style scoped>
  .extend-list {
    border: 1px solid #DDDDDD;
  }
  .extend-list .header {
    width: 100%;
    display: inline-flex;
  }
  .extend-list .header>div {
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .extend-list .header>div:last-child {
    border-right: 0;
  }
  .extend-list .header .title {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
  }
</style>
