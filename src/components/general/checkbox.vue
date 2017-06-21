<template>
  <label class="checkbox-container" :for="settings.name"><span v-show="settings.checked">&#xf032d;</span><input type="checkbox" :id="settings.name" class="checkbox" :checked="settings.checked" v-model="settings.checked" @click="settings.click"/></label>
</template>

<script>
  export default {
    props: ["settings"]
  }
</script>

<style scoped>
  .checkbox-container {
    width: 18px;
    height: 18px;
    display: inline-block;
    border: 1px solid #999999;
    font-family: IconFont;
    font-size: 18px;
    line-height: 18px;
  }
  .checkbox-container input[type=checkbox].checkbox {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
</style>
