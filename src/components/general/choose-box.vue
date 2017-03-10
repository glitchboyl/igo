<template>
<div class="choose-box">
  <span class="title">{{ todo.title }}：</span>
  <select :name="todo.name" :value="todo.value" :style="{ width: todo.width + 'px' }">
    <option v-for="item in todo.items">{{ item.value }}</option>
  </select>
</div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
.choose-box {
  font-size: 14px;
  margin-bottom: 22px;
}

.choose-box>select {
  padding: 3px 6px;
  color: #BBBBBB;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  border: 1px solid #DDDDDD;
  transition: color .3s ease, border .3s ease;
}

.choose-box>select:focus {
  color: #656565;
  border: 1px solid #A9A9A9;
}

.choose-box:last-child {
  margin-bottom: 0;
}
</style>﻿
