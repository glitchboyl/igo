<template>
  <div class="item" :class="todo.name">
    <p class="icon"></p>
    <p class="title">{{ todo.title }}</p>
    <p class="amount">{{ todo.amount }}</p>
  </div>
</template>

<script>
  export default {
    props: ['todo']
  }
</script>

<style scoped>
  .item {
    flex-grow: 1;
    padding: 20px;
    margin-right: 15px;
    color: #333333;
    font-size: 14px;
    text-align: center;
    border: 1px solid #DDDDDD;
    box-shadow: 2px 2px 1px #EEEEEE;
  }
  .item:last-child {
    margin-right: 0;
  }
  .item>p {
    margin-bottom: 2px;
  }
  .item>p:first-child {
    margin-bottom: 3px;
  }
  .item .icon:before {
    font-family: IconFont;
    font-size: 35px;
    font-weight: 600;
  }
  .item.total .icon:before {
    content: '\e6a1';
  }
  .item.active .icon:before {
    content: '\e66a';
  }
  .item.sales .icon:before {
    content: '\e64a';
  }
  .item.order .icon:before {
    content: '\e69c';
  }
</style>
