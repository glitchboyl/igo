<template>
  <div id="commodity-sort" class="inner">
    <div class="inner-container">
      <div class="support">
        <submit-button v-for="i in supportButtons" :button="i" :key="i.value"></submit-button>
      </div>
      <sort-list :sortItems="sortItems"></sort-list>
    </div>
  </div>
</template>

<script>
  import submitButton from '@/components/general/submit-button'
  import sortList from './list'
  export default {
    data() {
      let self = this;
      return {
        supportButtons: [{
          value: '添加+',
          style: {
            backgroundColor: '#397DF7',
            marginRight: '10px',
            padding: '7px 15px'
          },
          submit: function() {
            self.$router.push('/commodity/sort/add')
          }
        }],
        sortItems: [{
          id: '1',
          name: '生鲜水果',
          twigs: '3'
        }, {
          id: '2',
          name: '酒水饮料',
          twigs: '3'
        }, {
          id: '3',
          name: '洗护用品',
          twigs: '3'
        }, {
          id: '4',
          name: '其他',
          twigs: '3'
        }]
      }
    },
    components: {
      submitButton,
      sortList
    }
  }
</script>

<style scoped>
  #commodity-sort .inner-container {
    min-height: 560px;
    padding: 10px 20px;
    border: 1px solid #DDDDDD;
  }
  #commodity-sort .inner-container .support {
    margin-bottom: 10px;
  }
</style>
