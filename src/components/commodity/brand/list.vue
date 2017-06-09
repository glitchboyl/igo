<template>
  <div class="brand-list">
    <div class="header">
      <div class="title" style="flex-basis: 25%">操作</div>
      <div class="title" style="flex-basis: 36%">名称</div>
      <div class="title" style="flex-basis: 24%">别名</div>
      <div class="title" style="flex-basis: 15%">LOGO</div>
    </div>
    <brand-item v-for="item in brandItems" :item="item" :key="item.id"></brand-item>
  </div>
</template>

<script>
  import brandItem from './item'
  export default {
    props: ["brandItems"],
    components: {
      brandItem
    }
  }
</script>

<style scoped>
  .brand-list {
    border: 1px solid #DDDDDD;
  }
  .brand-list .header {
    width: 100%;
    display: inline-flex;
  }
  .brand-list .header>div {
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .brand-list .header>div:last-child {
    border-right: 0;
  }
  .brand-list .header .title {
    font-size: 14px;
    font-weight: 600;
  }
</style>
