<template>
  <div class="item">
    <div style="flex-basis: 3.5%">
      <checkbox :settings="i.settings"></checkbox>
    </div>
    <div style="flex-basis: 10%">
      <submit-button :button="edit"></submit-button>
      <submit-button :button="del"></submit-button>
    </div>
    <div style="flex-basis: 34%;">{{ i.title }}</div>
    <div style="flex-basis: 7.5%">{{ scale }}</div>
    <div style="flex-basis: 7.5%">{{ i.commodityNumber }}</div>
    <div style="flex-basis: 7.5%">{{ i.commodityOrigin }}</div>
    <div style="flex-basis: 15%">{{ i.commodityBrand }}</div>
    <div style="flex-basis: 10%">{{ i.commodityModel }}</div>
    <div style="flex-basis: 5%">{{ shelf }}</div>
  </div>
</template>

<script>
  import Bus from '@/assets/eventBus'
  import checkbox from '@/components/general/checkbox'
  import submitButton from '@/components/general/submit-button'
  export default {
    props: ["item"],
    data() {
      let self = this;
      return {
        edit: {
          value: '编辑',
          style: {
            backgroundColor: '#397DF7',
            marginRight: '10px'
          },
          submit: function() {}
        },
        del: {
          value: '删除',
          style: {
            backgroundColor: '#F1675F'
          },
          submit: function() {}
        }
      }
    },
    computed: {
      i() {
        let self = this;
        return {
          title: self.item.title,
          commodityWeigh: self.item.dataResultList[0].commodityWeigh,
          commodityUnit: self.item.dataResultList[0].commodityUnit,
          commodityNumber: self.item.dataResultList[0].commodityNumber,
          saleUnit: self.item.saleUnit,
          commodityOrigin: self.item.dataResultList[0].commodityOrigin,
          commodityBrand: self.item.dataResultList[0].commodityBrand,
          commodityModel: self.item.dataResultList[0].commodityModel,
          shelfState: self.item.shelfState,
          settings: self.item.settings
        };
      },
      scale() {
        let self = this;
        return self.i.commodityWeigh + self.i.commodityUnit + '/' + self.i.saleUnit;
      },
      shelf() {
        let self = this;
        return (self.i.shelfState == 1 ? '是' : '否');
      }
    },
    components: {
      checkbox,
      submitButton
    },
    mounted() {
      let self = this;
      Bus.$on('check-all', function(r) {
        self.i.settings.checked = r;
      })
    }
  }
</script>

<style scoped>
  .item {
    width: 100%;
    display: inline-flex;
    border-top: 1px solid #DDDDDD;
  }
  .item>div {
    color: #333333;
    font-size: 14px;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .item>div:last-child {
    border-right: 0;
  }
</style>
