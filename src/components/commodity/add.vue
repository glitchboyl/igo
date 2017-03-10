<template>
<div class="inner add">
  <div style="flex-grow: 1;">
    <text-box :todo="items[0]" :key="items[0].name"></text-box>
    <choose-box :todo="items[1]" :key="items[1].name"></choose-box>
    <text-box :todo="items[2]" :key="items[2].name"></text-box>
    <text-box :todo="items[3]" :key="items[3].name"></text-box>
    <text-box :todo="items[4]" :key="items[4].name"></text-box>
    <text-box :todo="items[5]" :key="items[5].name"></text-box>
    <text-box :todo="items[6]" :key="items[6].name"></text-box>
    <text-box :todo="items[7]" :key="items[7].name"></text-box>
  </div>
  <div style="flex-grow: 5; display: inline-flex; flex-direction: column;">
    <div class="images-box">
      <span class="title">{{ items[8].title }}：</span>
      <div class="images-container">
        <span class="upload">&#xe6c6;</span>
      </div>
    </div>
    <div class="textarea-box">
      <span class="title">{{ items[9].title }}：</span>
      <textarea spellcheck="false" :name="items[9].name">{{ items[9].value }}</textarea>
    </div>
    <div style="width: 520px; text-align: right;">
      <submit-button :todo="button"></submit-button>
    </div>
  </div>
</div>
</template>

<script>
import textBox from '../general/text-box'
import chooseBox from '../general/choose-box'
import submitButton from '../general/submit-button'
export default {
  data: function() {
    return {
      items: [{
        width: 250,
        name: 'name',
        title: '商品名称',
        value: ''
      }, {
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
      }, {
        width: 250,
        name: 'reserve',
        title: '商品库存',
        value: ''
      }, {
        width: 250,
        name: 'price',
        title: '商品价格',
        value: ''
      }, {
        width: 250,
        name: 'brand',
        title: '商品品牌',
        value: ''
      }, {
        width: 250,
        name: 'origin',
        title: '商品产地',
        value: ''
      }, {
        width: 250,
        name: 'netweight',
        title: '商品净重',
        value: ''
      }, {
        width: 250,
        name: 'import',
        title: '进口/国产',
        value: ''
      }, {
        name: 'images',
        title: '商品图片'
      }, {
        name: 'introduction',
        title: '商品介绍',
        value: ''
      }],
      button: {
        value: '提交',
        submit: function() {
          console.log('ass')
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

<style scoped>
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

.add .images-box .title,
.add .textarea-box .title {
  padding-top: 3px;
}
</style>
