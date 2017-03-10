<template>
<div class="range">
  <span class="title">{{ todo.title }}：</span>
  <div>
    <input type="text" :value="todo.minValue" /> -
    <input type="text" :value="todo.maxValue" />
  </div>
</div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
.range {
  font-size: 14px;
  display: inline-flex;
}

.range .title {
  line-height: 29px;
}

.range input[type=text] {
  width: 70px;
  padding: 3px 6px;
  color: #BBBBBB;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  border: 1px solid #DDDDDD;
  transition: color .3s ease, border .3s ease;
}

.range input[type=text]:focus {
  color: #656565;
  border: 1px solid #A9A9A9;
}
</style>﻿
