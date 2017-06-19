<template>
  <div class="sort-list">
    <div class="header">
      <div class="title" style="flex-basis: 25%">操作</div>
      <div class="title" style="flex-basis: 15%">查看</div>
      <div class="title" style="flex-basis: 36%">名称</div>
      <div class="title" style="flex-basis: 24%">子类数</div>
    </div>
    <sort-item v-for="item in sortItems" :item="item" :key="item.id"></sort-item>
  </div>
</template>

<script>
  import sortItem from './item'
  export default {
    props: ["sortItems"],
    components: {
      sortItem
    }
  }
</script>

<style scoped>
  .sort-list {
    border: 1px solid #DDDDDD;
  }
  .sort-list .header {
    width: 100%;
    display: inline-flex;
  }
  .sort-list .header>div {
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sort-list .header>div:last-child {
    border-right: 0;
  }
  .sort-list .header .title {
    color: #333333;
    font-size: 14px;
    font-weight: 600;
  }
</style>
