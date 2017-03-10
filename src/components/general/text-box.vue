<template>
<div class="text-box">
  <label>{{ todo.title }}：</label>
  <input type="text" :style="{ width: todo.width + 'px' }" :name="todo.name" :value="todo.value" />
</div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
.text-box {
  font-size: 14px;
  margin-bottom: 22px;
}

.text-box>input[type=text] {
  padding: 3px 6px;
  color: #BBBBBB;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  border: 1px solid #DDDDDD;
  transition: color .3s ease, border .3s ease;
}

.text-box>input[type=text]:focus {
  color: #656565;
  border: 1px solid #A9A9A9;
}

.text-box:last-child {
  margin-bottom: 0;
}
</style>﻿
