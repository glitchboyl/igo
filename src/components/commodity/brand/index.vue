<template>
  <div id="commodity-brand" class="inner">
    <div class="inner-container">
      <div class="support">
        <submit-button v-for="i in supportButtons" :button="i" :key="i.value"></submit-button>
        <div>
          <choose-box :todo="searchBrand" style="display: inline-block; margin-bottom: 0;"></choose-box>
          <text-box :todo="searchName" style="display: inline-block; margin-bottom: 0;"></text-box>
          <submit-button :button="search"></submit-button>
        </div>
      </div>
      <brand-list :brandItems="brandItems"></brand-list>
    </div>
  </div>
</template>

<script>
  import submitButton from '@/components/general/submit-button'
  import textBox from '@/components/general/text-box'
  import chooseBox from '@/components/general/choose-box'
  import brandList from './list'
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
            self.$router.push('/commodity/brand/add')
          }
        }],
        searchBrand: {
          name: 'search-brand',
          width: '170',
          value: '',
          placeholder: '品牌名'
        },
        searchName: {
          name: 'search-name',
          width: '170',
          value: ''
        },
        search: {
          value: '搜索',
          style: {
            padding: '4px 15px'
          },
          submit: function() {}
        },
        brandItems: [{
          id: '1',
          name: '华为',
          othername: ''
        }, {
          id: '2',
          name: '洛川苹果',
          othername: ''
        }]
      }
    },
    components: {
      submitButton,
      textBox,
      chooseBox,
      brandList
    }
  }
</script>

<style scoped>
  #commodity-brand .inner-container {
    min-height: 560px;
    padding: 10px 20px;
    border: 1px solid #DDDDDD;
  }
  #commodity-brand .inner-container .support {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
