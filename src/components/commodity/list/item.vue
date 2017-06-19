<template>
  <div class="item">
    <div style="flex-basis: 3.5%">
      <checkbox :settings="settings"></checkbox>
    </div>
    <div style="flex-basis: 10%">
      <submit-button :button="edit"></submit-button>
      <submit-button :button="del"></submit-button>
    </div>
    <div style="flex-basis: 34%;">{{ item.commodityName }}</div>
    <div style="flex-basis: 7.5%">{{ scale }}</div>
    <div style="flex-basis: 7.5%">{{ item.commodityNumber }}</div>
    <div style="flex-basis: 7.5%">{{ item.sort }}</div>
    <div style="flex-basis: 10%">{{ item.commodityBrand }}</div>
    <div style="flex-basis: 5%">{{ item.kucun }}</div>
    <div style="flex-basis: 5%">{{ item.price }}</div>
    <div style="flex-basis: 5%">{{ item.marketprice }}</div>
    <div style="flex-basis: 5%">{{ shelf }}</div>
  </div>
</template>

<script>
  import checkbox from '@/components/general/checkbox'
  import submitButton from '@/components/general/submit-button'
  export default {
    props: ["item"],
    data() {
      let self = this;
      return {
        settings: {
          name: self.item.commodityId,
          checked: false
        },
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
      scale() {
        let self = this;
        return self.item.commodityWeigh + self.item.commodityUnit;
      },
      shelf() {
        let self = this;
        return (self.item.isshelf ? '是' : '否');
      }
    },
    components: {
      checkbox,
      submitButton
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
