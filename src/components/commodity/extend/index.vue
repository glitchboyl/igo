<template>
  <div id="commodity-extend" class="inner">
    <div class="inner-container">
      <div class="support">
        <submit-button v-for="i in supportButtons" :button="i" :key="i.value"></submit-button>
      </div>
      <extend-list :extendItems="extendItems"></extend-list>
    </div>
  </div>
</template>

<script>
  import submitButton from '@/components/general/submit-button'
  import extendList from './list'
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
            self.$router.push('/commodity/extend/add')
          }
        }],
        extendItems: [{
          id: '1',
          name: '包装',
          othername: '',
          isShowed: true
        }, {
          id: '2',
          name: '国产/进口',
          othername: '',
          isShowed: true
        }]
      }
    },
    components: {
      submitButton,
      extendList
    }
  }
</script>

<style scoped>
  #commodity-extend .inner-container {
    min-height: 560px;
    padding: 10px 20px;
    border: 1px solid #DDDDDD;
  }
  #commodity-extend .inner-container .support {
    margin-bottom: 10px;
  }
</style>
