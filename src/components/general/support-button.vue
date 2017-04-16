<template>
<input class="button" type="button" :value="todo.value" @click="todo.support" />
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
input.button[type=button] {
  min-width: 90px;
  padding: 3px 17px;
  margin-right: 8px;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  color: #656565;
  text-align: center;
  background-color: #F7F7F7;
  border: 1px solid #E0E0E0;
  cursor: pointer;
}
</style>
