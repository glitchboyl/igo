<template>
<div class="inner add">
  <div style="flex-grow: 1;">
    <text-box :todo="items['commodityName']" :key="items['commodityName'].name"></text-box>
    <choose-box :todo="items['sort']" :key="items['sort'].name"></choose-box>
    <text-box :todo="items['commodityBrand']" :key="items['commodityBrand'].name"></text-box>
    <text-box :todo="items['commodityModel']" :key="items['commodityModel'].name"></text-box>
    <text-box :todo="items['commodityApply']" :key="items['commodityApply'].name"></text-box>
    <text-box :todo="items['commodityOrigin']" :key="items['commodityOrigin'].name"></text-box>
    <text-box :todo="items['commodityWeigh']" :key="items['commodityWeigh'].name"></text-box>
    <text-box :todo="items['commodityUnit']" :key="items['commodityUnit'].name"></text-box>
  </div>
  <div style="flex-grow: 5; display: inline-flex; flex-direction: column;">
    <text-box class="special" :todo="items['barCode']" :key="items['barCode'].name"></text-box>
    <div class="images-box">
      <span class="title">{{ items['commodityPhoto'].title }}：</span>
      <div class="images-container">
        <span class="upload">&#xe6c6;</span>
      </div>
    </div>
    <div class="textarea-box">
      <span class="title">{{ items['commoditySummary'].title }}：</span>
      <textarea spellcheck="false" :name="items['commoditySummary'].name" v-model="items['commoditySummary'].value">{{ items['commoditySummary'].value }}</textarea>
    </div>
    <div style="width: 520px; text-align: right;">
      <submit-button :todo="button"></submit-button>
    </div>
  </div>
</div>
</template>

<script>
import Axios from 'axios'
import textBox from '../general/text-box'
import chooseBox from '../general/choose-box'
import submitButton from '../general/submit-button'
import checkbox from '../general/checkbox'
export default {
  data() {
    let self = this;
    return {
      items: {
        'commodityName': {
          width: 250,
          name: 'commodityName',
          title: '商品名称',
          value: ''
        },
        'sort': {
          width: 250,
          name: 'sort',
          title: '商品分类',
          value: '',
          items: [{
            value: 'ass'
          }, {
            value: 'we'
          }, {
            value: 'can'
          }]
        },
        'commodityModel': {
          width: 250,
          name: 'commodityModel',
          title: '商品型号',
          value: ''
        },
        'commodityApply': {
          width: 250,
          name: 'commodityApply',
          title: '适用范围',
          value: ''
        },
        'commodityBrand': {
          width: 250,
          name: 'commodityBrand',
          title: '商品品牌',
          value: ''
        },
        'commodityOrigin': {
          width: 250,
          name: 'commodityOrigin',
          title: '商品产地',
          value: ''
        },
        'commodityWeigh': {
          width: 250,
          name: 'commodityWeigh',
          title: '商品净重',
          value: ''
        },
        'commodityUnit': {
          width: 250,
          name: 'commodityUnit',
          title: '重量单位',
          value: ''
        },
        'barCode': {
          width: 450,
          name: 'barCode',
          title: '条形码',
          value: ''
        },
        'commodityPhoto': {
          name: 'commodityPhoto',
          title: '商品图片'
        },
        'commoditySummary': {
          name: 'commoditySummary',
          title: '商品介绍',
          value: ''
        }
      },
      button: {
        value: '提交',
        submit() {
          let items = self.items;
          /* let data = {
            'commodityName': items.commodityName.value,
            'commodityModel': items.commodityModel.value,
            'commodityApply': items.commodityApply.value,
            'commodityBrand': items.commodityBrand.value,
            'commodityOrigin': items.commodityOrigin.value,
            'commodityWeigh': items.commodityWeigh.value,
            'commodityUnit': items.commodityUnit.value,
            'barCode': items.barCode.value,
            'commoditySummary': items.commoditySummary.value
          };
          Axios.post('/api/commodit/insertcommodityinfo', {
            info: data,
            classify: {
              'ParentsId': '1'
            }
          }).then(function(res) {
            console.log(res.data.htmlState.toUpperCase());
          }); */
          console.log(items.commodityName.value)
        }
      }
    }
  },
  components: {
    textBox,
    chooseBox,
    submitButton
  }
}
</script>

<style>
.add {
  font-size: 14px;
  color: #656565;
  padding: 15px 20px;
  border: 1px solid #DDDDDD;
  display: flex;
}

.add .images-box {
  display: inline-flex;
  margin-bottom: 22px;
}

.add .images-box .images-container {
  width: 450px;
  min-height: 100px;
  border: 1px solid #DDDDDD;
  position: relative;
}

.add .images-box .images-container .upload {
  right: 8px;
  bottom: 8px;
  font-size: 24px;
  font-family: IconFont;
  position: absolute;
}

.add .textarea-box {
  display: inline-flex;
  margin-bottom: 15px;
}

.add .textarea-box>textarea {
  resize: none;
  width: 450px;
  height: 200px;
  color: #BBBBBB;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
  padding: 3px 6px;
  border: 1px solid #DDDDDD;
  transition: color .3s ease, border .3s ease;
}

.add .textarea-box>textarea:focus {
  color: #656565;
  border: 1px solid #A9A9A9;
}

.add .text-box.special {
  display: inline-flex;
}

.add .text-box.special label {
  width: 70px;
  padding-top: 3px;
  text-align: right;
}

.add .images-box .title,
.add .textarea-box .title {
  padding-top: 3px;
}
</style>
