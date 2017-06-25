<template>
  <div id="commodity-list" class="inner">
    <search-bar :items="searchItems"></search-bar>
    <div class="inner-container">
      <div class="support">
        <submit-button v-for="i in supportButtons" :button="i" :key="i.value"></submit-button>
      </div>
      <commodity-list :commodityItems="commodityItems"></commodity-list>
      <pagination :todo="pagination"></pagination>
    </div>
  </div>
</template>

<script>
  import Bus from '@/assets/eventBus'
  import searchBar from '@/components/general/search-bar'
  import submitButton from '@/components/general/submit-button'
  import pagination from '@/components/general/pagination'
  import commodityList from './list'
  export default {
    data() {
      let self = this;
      return {
        searchItems: [{
          type: 'text-box',
          name: 'title',
          title: '商品标题',
          width: 170,
          value: ''
        }, {
          type: 'text-box',
          name: 'commodityNumber',
          title: '商品编号',
          width: 170,
          value: '',
        }, {
          type: 'choose-box',
          name: 'shelfState',
          title: '上下架',
          width: 122,
          value: '',
          showText: '',
          items: [{
            catalogId: 1,
            nodeName: '是',
            isOpen: false,
            isFocus: false,
            children: []
          }, {
            catalogId: 0,
            nodeName: '否',
            isOpen: false,
            isFocus: false,
            children: []
          }]
        }],
        supportButtons: [{
          value: '添加+',
          style: {
            backgroundColor: '#397DF7',
            marginRight: '10px',
            padding: '7px 15px'
          },
          submit: function() {
            self.$router.push('add')
          }
        }, {
          value: '批量上架',
          style: {
            backgroundColor: '#397DF7',
            marginRight: '10px',
            padding: '7px 15px'
          },
          submit: function() {}
        }, {
          value: '批量下架',
          style: {
            backgroundColor: '#397DF7',
            padding: '7px 15px'
          },
          submit: function() {}
        }],
        commodityItems: null,
        pagination: {
          showQuantity: 10,
          page: 1,
          totalPage: 3
        }
      }
    },
    components: {
      searchBar,
      submitButton,
      commodityList,
      pagination
    },
    watch: {
      '$route' (to, from) {
        let self = this;
        let Axios = self.$axios;
        let query = {
          'tosort': 'asc',
          'page': '0',
          'pagerow': '10',
          'sorting': 'listing_date'
        }
        for (let i in to.query) {
          query[i] = to.query[i];
        }
        Axios.post('/system/commoditdetails/selectallpage', query).then(function(res) {
          let result = res.data.dataResultList;
          self.commodityItems = [];
          for (let i = 0; i < result.length; i++) {
          result[i].settings = {
            name: result[i].commodityId,
            checked: false,
            click() {
              Bus.$emit('check-all-or-not');
            }
          }
            self.commodityItems.push(result[i]);
          }
        })
      }
    },
    mounted() {
      let self = this;
      let Axios = self.$axios;
      let query = {
        'tosort': 'asc',
        'page': '0',
        'pagerow': '10',
        'sorting': 'listing_date'
      };
      for (let i in self.$route.query) {
        query[i] = self.$route.query[i];
      }
      Axios.post('/system/commoditdetails/selectallpage', query).then(function(res) {
        let result = res.data.dataResultList;
        self.commodityItems = [];
        for (let i = 0; i < result.length; i++) {
          result[i].settings = {
            name: result[i].commodityId,
            checked: false,
            click() {
              Bus.$emit('check-all-or-not');
            }
          }
          self.commodityItems.push(result[i]);
        }
      })
      //   Axios.post('/system/commoditdetails/selectallpage', {
      //     tosort: 'desc',
      //     page: 0,
      //     pagerow: 10,
      //     shelfState: 1,
      //     sorting: 'present_price'
      //   }).then(function(res){
      //     console.log(res)
      //   })
    }
  }
</script>

<style scoped>
#commodity-list .inner-container {
  padding: 10px 20px;
  border: 1px solid #DDDDDD;
}

#commodity-list .inner-container .support {
  margin-bottom: 10px;
}
</style>
