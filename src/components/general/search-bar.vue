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
            let items = self.items;
            let aka = str => str.match(/^\D/)[0] + str.match(/[A-Z]/)[0];
            let query = self.$route.query;
            let obj = {};
            for (let i = 0; i < items.length; i++) {
              if (items[i].value) {
                obj[aka(items[i].name)] = items[i].value;
              }
            }
            if (query.sq) {
              self.showQuantity = query.sq;
            }
            obj.p = 1;
            obj.sq = self.showQuantity;
            self.$router.push({
              query: obj
            });
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
