<template>
  <input class="submit" type="button" :value="button.value" @click="button.submit" :style="button.style" />
</template>

<script>
  export default {
    props: ['button']
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
    cursor: pointer;
  }
</style>
