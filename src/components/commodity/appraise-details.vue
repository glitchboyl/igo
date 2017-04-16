<template>
<div style="width: 100%; display: inline-flex; flex-direction: column;">
  <div style="margin-bottom: 12px;">
    <span class="return">&nbsp;返回</span>
  </div>
  <div class="form" style="margin-bottom: 20px;">
    <div class="header">
      商品评价
      <div style="flex-grow: 1; text-align:right;">
        <submit-button :todo="button" style="padding: 3px 16px;"></submit-button>
      </div>
    </div>
    <div class="row">
      <div>商品名称：{{ commodityInfo.commodityName }}</div>
    </div>
    <div class="row">
      <div>好评：{{ commodityInfo.positive }}</div>
      <div>中评：{{ commodityInfo.neutral }}</div>
      <div>差评：{{ commodityInfo.negative }}</div>
    </div>
  </div>
  <div class="form">
    <div class="header">
      好评
      <div style="flex-grow: 1; text-align:right;">
        <submit-button :todo="button" style="padding: 3px 16px;"></submit-button>
      </div>
    </div>
    <div class="row" v-for="p in positive">
      <div>用户名：{{ p.name }}</div>
      <div>评价：{{ p.appraisal }}</div>
    </div>
  </div>
  <div class="support">
    <div class="shows">每页显示数量：<span class="quantity active">10</span><span class="quantity">20</span><span class="quantity">30</span></div>
    <div class="shows" style="margin-left: 15px;">筛选：<span class="quantity active">好评</span><span class="quantity">中评</span><span class="quantity">差评</span></div>
    <div class="pagination">第<span class="now">1</span>页&nbsp;&nbsp;&nbsp;共<span class="total">30</span>页&nbsp;&nbsp;&nbsp;<span class="page active">1</span><span class="page">2</span><span class="page">3</span><span class="page ellipsis">···</span><span class="page next">下一页>></span></div>
  </div>
</div>
</template>

<script>
import submitButton from '../general/submit-button'
export default {
  data() {
    return {
      button: {
        value: '编辑',
        submit: function() {
          console.log('ass');
        }
      },
      commodityInfo: {
        commodityName: 'Astick爱时乐 香草牛奶味威化卷心酥（注心威化饼干）330g/罐 印度尼西亚进口',
        positive: '',
        neutral: '',
        negative: ''
      },
      positive: [{
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }, {
        name: 'Charlotte',
        appraisal: 'ass we can'
      }]
    }
  },
  components: {
    submitButton
  }
}
</script>

<style scoped>
.return {
  display: inline-flex;
  align-items: center;
}

.return:before {
  content: '\f0292';
  font-family: IconFont;
  font-size: 18px;
}

.form {
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #DDDDDD;
}

.form>div {
  display: inline-flex;
  align-items: baseline;
  padding: 8px 16px;
  border-bottom: 1px solid #DDDDDD;
}

.form>div:last-child {
  border-bottom: 0;
}

.form .header {
  background-color: #E5E5E5;
}

.form .header>div,
.form .row>div {
  flex-grow: 1;
}

.support {
  padding: 20px 0;
  display: inline-flex;
}

.support .shows .quantity {
  padding: 3px 5px;
  margin-right: 5px;
  text-align: center;
  border: 1px solid #E5E5E5;
  display: inline-block;
  cursor: pointer;
}

.support .shows .quantity.active,
.support .pagination .page.active {
  border: 1px solid #F1675F;
  color: #F1675F;
}

.support .pagination {
  flex-grow: 1;
  text-align: right;
}

.support .pagination .now,
.support .pagination .total {
  color: #F1675F;
}

.support .pagination .page {
  padding: 3px 7px;
  margin-right: 5px;
  text-align: center;
  border: 1px solid #E5E5E5;
  display: inline-block;
  cursor: pointer;
}

.support .pagination .page.ellipsis {
  border: 1px solid #FFFFFF;
}
</style>
