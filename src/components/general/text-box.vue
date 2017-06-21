<template>
  <div class="text-box">
    <label :for="todo.name" v-if="todo.title"><span v-if="todo.necessary">*</span>{{ todo.title }}：</label>
    <input type="text" :style="{ width: todo.width + 'px' }" :id="todo.name" :name="todo.name" :value="todo.value" v-model="todo.value" :placeholder="todo.placeholder" spellcheck="false" />
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
    margin-bottom: 20px;
  }
  .text-box label span {
    color: #FF1F20;
    margin-right: 5px;
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
  ::-webkit-input-placeholder {
    color: #BBBBBB;
  }
  :-moz-placeholder {
    color: #BBBBBB;
  }
  ::-moz-placeholder {
    color: #BBBBBB;
  }
  :-ms-input-placeholder {
    color: #BBBBBB;
  }
  .text-box:last-child {
    margin-bottom: 0;
  }
</style>
