<template>
<div class="search-bar">
  <text-box v-for="item in todo" v-if="item.type == 'text-box'" :todo="item" :key="item.name" style="flex-grow: 1; margin: 8px 0 0;"></text-box>
  <range v-for="item in todo" v-if="item.type == 'range'" :todo="item" :key="item.name" style="flex-grow: 1; margin: 8px 0 0;"></range>
  <choose-box v-for="item in todo" v-if="item.type == 'choose-box'" :todo="item" :key="item.name" style="flex-grow: 1; margin: 8px 0 0;"></choose-box>
  <div style="align-self: flex-end;">
    <submit-button :todo="button"></submit-button>
  </div>
</div>
</template>

<script>
import textBox from './text-box'
import chooseBox from './choose-box'
import range from './range'
import submitButton from './submit-button'
export default {
  data() {
    return {
      button: {
        value: '搜索',
        submit: function() {
          console.log('ass we can')
        }
      }
    }
  },
  props: ['todo'],
  components: {
    textBox,
    chooseBox,
    range,
    submitButton
  }
}
</script>

<style scoped>
.search-bar {
  font-size: 14px;
  border: 1px solid #DDDDDD;
  padding: 5px 20px 10px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>
