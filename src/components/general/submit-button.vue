<template>
<input class="submit" type="button" :value="todo.value" @click="todo.submit"/>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
input.submit[type=button] {
  padding: 5px 15px;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: #FFFFFF;
  background-color: #F1655D;
  border: 0;
  border-radius: 5px;
  cursor:pointer;
}
</style>﻿
