<template>
  <div class="member-list">
    <div class="header">
      <div class="title" style="flex-basis: 15%">操作</div>
      <div class="title" style="flex-basis: 15%;">用户名</div>
      <div class="title" style="flex-basis: 15%">Email</div>
      <div class="title" style="flex-basis: 15%">手机号</div>
      <div class="title" style="flex-basis: 10%">性别</div>
      <div class="title" style="flex-basis: 15%">注册时间</div>
      <div class="title" style="flex-basis: 15%">注册IP</div>
    </div>
    <member-item v-for="item in memberItems" :item="item" :key="item.memberId"></member-item>
  </div>
</template>

<script>
  import checkbox from '@/components/general/checkbox'
  import memberItem from './item'
  export default {
    props: ["memberItems"],
    data() {
      return {
        selectAll: {
          name: 'select-all',
          checked: false
        }
      }
    },
    components: {
      checkbox,
      memberItem
    }
  }
</script>

<style scoped>
  .member-list {
    border: 1px solid #DDDDDD;
  }
  .member-list .header {
    width: 100%;
    display: inline-flex;
  }
  .member-list .header>div {
    color: #333333;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .member-list .header>div:last-child {
    border-right: 0;
  }
  .member-list .header .title {
    font-size: 14px;
    font-weight: 600;
  }
</style>
