<template>
  <div class="basic">
    <text-box :todo="commodityName" style="margin-left: 42px;"></text-box>
    <text-box :todo="number" style="margin-left: 42px;"></text-box>
    <choose-box :todo="sort" style="margin-left: 42px;"></choose-box>
    <div style="margin-left: 54px;">
      <choose-box :todo="extend" style="display: inline-block; margin-right: 20px;"></choose-box>
      <submit-button :button="addExtend"></submit-button>
    </div>
    <div style="margin-left: 42px;">
      <choose-box :todo="brand" style="display: inline-block; margin-right: 20px;"></choose-box>
      <submit-button :button="addBrand"></submit-button>
    </div>
    <choose-box :todo="supplier" style="margin-left: 28px;"></choose-box>
    <text-box :todo="marketprice" style="margin-left: 42px;"></text-box>
    <text-box :todo="price" style="margin-left: 56px;"></text-box>
    <text-box :todo="reserve" style="margin-left: 70px;"></text-box>
    <text-box :todo="scale" style="margin-left: 42px;"></text-box>
    <file-upload :todo="img" style="margin-left: 14px;"></file-upload>
    <file-upload :todo="thumbnails"></file-upload>
    <div style="display: flex; align-items: center; margin-left: 128px;">
      <checkbox :settings="autoGenerate" style="margin-right: 8px;"></checkbox>
      自动生成商品缩略图
    </div>
    <div style="margin-top: 20px; margin-left: 128px;">
      <submit-button :button="confirm"></submit-button>
      <submit-button :button="reset"></submit-button>
    </div>
  </div>
</template>

<script>
  import textBox from '@/components/general/text-box'
  import fileUpload from '@/components/general/file-upload'
  import chooseBox from '@/components/general/choose-box'
  import submitButton from '@/components/general/submit-button'
  import checkbox from '@/components/general/checkbox'
  export default {
    data() {
      let self = this;
      let Axios = self.$axios;
      return {
        commodityName: {
          name: 'commodityName',
          title: '商品名称',
          width: '400',
          value: '',
          necessary: true
        },
        number: {
          name: 'number',
          title: '商品货号',
          width: '400',
          value: '',
          placeholder: '如果您不输入商品货号，系统将自动生成一个唯一的货号。',
          necessary: true
        },
        sort: {
          name: 'sort',
          title: '商品分类',
          width: '200',
          value: '',
          necessary: true
        },
        extend: {
          name: 'extend',
          title: '扩展分类',
          width: '200',
          value: '',
          necessary: false
        },
        addExtend: {
          value: '添加',
          style: {
            backgroundColor: '#FFFFFF',
            padding: '3px 12px',
            border: '1px solid #F1655D',
            color: '#F1655D'
          },
          submit: function() {}
        },
        brand: {
          name: 'brand',
          title: '商品品牌',
          width: '200',
          value: '',
          necessary: true
        },
        addBrand: {
          value: '添加品牌',
          style: {
            backgroundColor: '#FFFFFF',
            padding: '3px 12px',
            border: '1px solid #F1655D',
            color: '#F1655D'
          },
          submit: function() {}
        },
        supplier: {
          name: 'supplier',
          title: '选择供货商',
          width: '250',
          value: '',
          placeholder: '不指定供货商属于本店商品',
          necessary: true
        },
        marketprice: {
          name: 'marketprice',
          title: '市场售价',
          width: '200',
          value: '',
          necessary: true
        },
        price: {
          name: 'price',
          title: '销售价',
          width: '200',
          value: '',
          necessary: true
        },
        reserve: {
          name: 'reserve',
          title: '库存',
          width: '200',
          value: '',
          necessary: true
        },
        scale: {
          name: 'scale',
          title: '商品规格',
          width: '200',
          value: '',
          necessary: true
        },
        img: {
          name: 'img',
          title: '上传商品图片',
          uploadText: '选择文件',
          value: '',
          multiple: true,
          necessary: true
        },
        thumbnails: {
          name: 'thumbnails',
          title: '上传商品缩略图',
          uploadText: '选择文件',
          value: '',
          multiple: true,
          necessary: true
        },
        autoGenerate: {
          name: 'auto-generate',
          checked: false
        },
        confirm: {
          value: '确定',
          style: {
            padding: '5px 20px',
            marginRight: '15px'
          },
          submit: function() {
            let fileList = self.img.value;
            let form = new FormData();
            for (let i = 0; i < fileList.length; i++) {
              form.append('files', fileList[i]);
            }
            Axios.post('/api/qiniu/update', form, {}).then(function(res) {
              console.log(res)
            })
          }
        },
        reset: {
          value: '重置',
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
      fileUpload,
      chooseBox,
      submitButton,
      checkbox
    }
  }
</script>

<style scoped>
  .basic {
    padding: 20px;
  }
</style>
