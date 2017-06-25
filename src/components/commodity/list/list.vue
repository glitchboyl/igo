<template>
  <div class="commodity-list">
    <div class="header">
      <div style="flex-basis: 3.5%">
        <checkbox :settings="selectAll"></checkbox>
      </div>
      <div class="title" style="flex-basis: 10%">操作</div>
      <div class="title" style="flex-basis: 34%;">商品标题</div>
      <div class="title" style="flex-basis: 7.5%">商品规格</div>
      <div class="title" style="flex-basis: 7.5%">商品编号</div>
      <div class="title" style="flex-basis: 7.5%">产地</div>
      <div class="title" style="flex-basis: 15%">品牌</div>
      <div class="title" style="flex-basis: 10%">型号</div>
      <div class="title" style="flex-basis: 5%">上下架</div>
    </div>
    <commodity-item v-for="item in commodityItems" :item="item" :key="item.commodityId"></commodity-item>
  </div>
</template>

<script>
  import Bus from '@/assets/eventBus'
  import checkbox from '@/components/general/checkbox'
  import commodityItem from './item'
  export default {
    props: ["commodityItems"],
    data() {
      let self = this;
      return {
        selectAll: {
          name: 'select-all',
          checked: false,
          click() {
            Bus.$emit('check-all', self.selectAll.checked);
          }
        }
      }
    },
    components: {
      checkbox,
      commodityItem
    },
    mounted() {
      let self = this;
      Bus.$on('check-all-or-not', function(r) {
        let commodityItems = self.commodityItems;
        for (let i = 0; i < commodityItems.length; i++) {
          if (!commodityItems[i].settings.checked) {
            self.selectAll.checked = false;
            return;
          }
        }
        self.selectAll.checked = true;
      })
    }
  }
</script>

<style scoped>
  .commodity-list {
    border: 1px solid #DDDDDD;
  }
  .commodity-list .header {
    width: 100%;
    display: inline-flex;
  }
  .commodity-list .header>div {
    color: #333333;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .commodity-list .header>div:last-child {
    border-right: 0;
  }
  .commodity-list .header .title {
    font-size: 14px;
    font-weight: 600;
  }
</style>
