<template>
  <div class="search-bar">
    <component v-for="item in items" :todo="item" :is="item.type" :key="item.name" style="flex-basis: 20%; padding: 5px 0;"></component>
    <div style="align-self: flex-end; padding: 5px 0;">
      <submit-button :button="button"></submit-button>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import textBox from './text-box'
  import chooseBox from './choose-box'
  import range from './range'
  import submitButton from './submit-button'
  export default {
    props: ['items'],
    data() {
      let self = this;
      return {
        showQuantity: 10,
        button: {
          value: '搜索',
          submit: function() {
            let query = {};
            for (let i in self.items) {
              if (self.items[i].value || self.items[i].value === 0) {
                query[self.items[i].name] = self.items[i].value;
              }
            }
            self.$router.push({
              query
            })
          }
        }
      }
    },
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
    padding: 10px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .search-bar .text-box,
  .search-bar .choose-box {
    margin-bottom: 0!important;
  }
</style>
