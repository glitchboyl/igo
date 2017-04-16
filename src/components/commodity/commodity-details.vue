<template>
<div style="width: 100%; display: inline-flex; flex-direction: column;">
  <div class="form">
    <div class="header">
      商品属性
      <div style="flex-grow: 1; text-align:right;">
        <submit-button :todo="button" style="padding: 3px 16px;"></submit-button>
      </div>
    </div>
    <div class="row">
      商品名称：{{ commodityInfo.commodityName }}
    </div>
    <div class="row">
      <div>商品编号：{{ commodityInfo.commodityNumber }}</div>
      <div>商品品牌：{{ commodityInfo.commodityBrand }}</div>
      <div>产品型号：{{ commodityInfo.commodityModel }}</div>
      <div>商品产地：{{ commodityInfo.commodityOrigin }}</div>
    </div>
    <div class="row">
      <div>适用范围：{{ commodityInfo.commodityApply }}</div>
      <div>条形码：{{ commodityInfo.barCode }}</div>
      <div>商品净重：{{ commodityInfo.commodityWeigh }}</div>
    </div>
    <div class="row">
      商品介绍：{{ commodityInfo.commoditySummary }}
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios'
import Router from '@/router'
import submitButton from '../general/submit-button'
export default {
  data() {
    return {
      button: {
        value: '编辑',
        submit() {
          console.log('ass');
        }
      },
      commodityInfo: {
        commodityNumber: '',
        commodityName: '',
        commodityWeigh: '',
        commodityBrand: '',
        commodityModel: '',
        commodityOrigin: '',
        commodityApply: '',
        barCode: '',
        commoditySummary: ''
      }
    }
  },
  components: {
    submitButton
  },
  mounted() {
    let commodityInfo = this.commodityInfo;
    let twig = Router.app.$route.params.twig;
    Axios.get('/api/commodit/selectbynumber?commoditynumber=' + twig)
      .then(function(res) {
        if (res.data.htmlState.toUpperCase() == 'SUCCESS') {
          let result = res.data.dataResultList[0];
          commodityInfo.commodityName = result.commodityName;
          commodityInfo.commodityNumber = result.commodityNumber;
          commodityInfo.commodityBrand = result.commodityBrand;
          commodityInfo.commodityModel = result.commodityModel;
          commodityInfo.commodityOrigin = result.commodityOrigin;
          commodityInfo.commodityWeigh = result.commodityWeigh + result.commodityUnit;
          commodityInfo.commodityApply = result.commodityApply;
          commodityInfo.barCode = result.barCode;
          commodityInfo.commoditySummary = result.commoditySummary;
        }
      });
  }
}
</script>

<style scoped>
.return {
  display: inline-flex;
  align-items: center;
  transition: color .3s;
}

.return:hover {
  cursor: pointer;
  color: #F1675F;
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
  font-size: 0;
}

.form>div {
  display: inline-flex;
  align-items: baseline;
  padding: 8px 16px;
  border-bottom: 1px solid #DDDDDD;
  font-size: 14px;
}

.form>div:last-child {
  border-bottom: 0;
}

.form .header {
  background-color: #E5E5E5;
}

.form .header>div,
.form .row>div {
  width: 25%;
  display: inline-block;
}
</style>
