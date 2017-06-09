<template>
  <div id="commodity-sort" class="inner">
    <div class="inner-container">
      <text-box :todo="name" style="margin-left: 140px;"></text-box>
      <text-box :todo="othername" style="margin-left: 152px;"></text-box>
      <div style="margin-top: 20px; margin-left: 196px;">
        <submit-button :button="submit"></submit-button>
        <submit-button :button="cancel"></submit-button>
      </div>
    </div>
  </div>
</template>

<script>
  import textBox from '@/components/general/text-box'
  import submitButton from '@/components/general/submit-button'
  export default {
    data() {
      return {
        name: {
          name: 'name',
          title: '名称',
          width: '400',
          value: '',
          necessary: true
        },
        othername: {
          name: 'othername',
          title: '别名',
          width: '400',
          value: '',
          necessary: false
        },
        submit: {
          value: '提交',
          style: {
            padding: '5px 20px',
            marginRight: '15px'
          },
          submit: function() {}
        },
        cancel: {
          value: '取消',
          style: {
            padding: '5px 20px',
            backgroundColor: '#E1E5EB',
            color: '#656565'
          },
          submit: function() {}
        }
      }
    },
    components: {
      textBox,
      submitButton
    }
  }
</script>

<style scoped>
  #commodity-sort .inner-container {
    min-height: 560px;
    padding: 20px;
    border: 1px solid #DDDDDD;
  }
</style>
