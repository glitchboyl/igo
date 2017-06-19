<template>
  <div class="item">
    <div style="flex-basis: 20%">
      <submit-button :button="edit"></submit-button>
      <submit-button :button="associate"></submit-button>
      <submit-button :button="del"></submit-button>
    </div>
    <div style="flex-basis: 30%">
      {{ item.name }}
    </div>
    <div style="flex-basis: 30%;">{{ item.othername }}</div>
    <div style="flex-basis: 20%">{{ item.isShowed ? '显示' : '不显示' }}</div>
  </div>
</template>

<script>
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
        associate: {
          value: '关联商品',
          style: {
            backgroundColor: '#C39F47',
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
    components: {
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
