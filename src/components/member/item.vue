<template>
  <div class="item">
    <div style="flex-basis: 15%">
      <submit-button :button="button"></submit-button>
    </div>
    <div style="flex-basis: 15%;">{{ item.memberName }}</div>
    <div style="flex-basis: 15%;">{{ item.email }}</div>
    <div style="flex-basis: 15%;">{{ item.phoneNumber }}</div>
    <div style="flex-basis: 10%;">{{ item.sex }}</div>
    <div style="flex-basis: 15%;">{{ item.registrationTime }}</div>
    <div style="flex-basis: 15%; border-right: 0;">{{ item.registrationIP }}</div>
    <div v-if="isRendered" v-show="isOpened" class="details">
      <div class="header">
        <ul>
          <li v-for="i in details" :class="{ isActived:i.isActived }" @click="tabClick(i)">{{ i.title }}</li>
        </ul>
      </div>
      <div class="details-container">
        <div :class="[ details[0].name ]" v-show="details[0].isActived">
          <div style="margin-right: 195px; display: inline-block;">
            <div><span class="title">用户名:</span>{{ memberInfo.username }}</div>
            <div><span class="title">真实姓名:</span>{{ memberInfo.realname }}</div>
            <div><span class="title">手机号:</span>{{ memberInfo.phoneNumber }}</div>
          </div>
          <div style="display: inline-block;">
            <div><span class="title">Email:</span>{{ memberInfo.email }}</div>
            <div><span class="title">注册时间:</span>{{ memberInfo.registrationTime }}</div>
            <div><span class="title">注册IP:</span>{{ memberInfo.registrationIP }}</div>
          </div>
        </div>
        <div :class="[ details[1].name ]" v-show="details[1].isActived">{{ details[1].title }}</div>
        <div :class="[ details[2].name ]" v-show="details[2].isActived">{{ details[2].title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import submitButton from '@/components/general/submit-button'
  export default {
    props: ["item"],
    data() {
      let self = this;
      return {
        isRendered: false,
        isOpened: false,
        open: {
          value: '查看详情',
          style: {
            backgroundColor: '#397FD6',
            padding: '5px 7px'
          },
          submit: function() {
            if (!self.isRendered) {
              self.isRendered = true;
            }
            self.isOpened = true;
          }
        },
        close: {
          value: '关闭详情',
          style: {
            backgroundColor: '#F1675F',
            padding: '5px 7px'
          },
          submit: function() {
            self.isOpened = false;
          }
        },
        details: [{
          name: 'basicInfo',
          title: '基本信息',
          isActived: true
        }, {
          name: 'address',
          title: '收货地址',
          isActived: false
        }, {
          name: 'order',
          title: '订单',
          isActived: false
        }]
      }
    },
    computed: {
      button() {
        let self = this;
        return self.isOpened ? self.close : self.open;
      },
      memberInfo() {
        return {
          username: 'gj9188',
          realname: '郭嘉',
          phoneNumber: '14525625556',
          email: '2254885145@qq.com',
          registrationTime: '2017-05-26 13:41:32',
          registrationIP: '27.21.162.28'
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
    flex-wrap: wrap;
    border-top: 1px solid #DDDDDD;
  }
  .item>div:not(.details) {
    color: #212121;
    font-size: 14px;
    border-right: 1px solid #DDDDDD;
    text-align: center;
    padding: 10px 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .item .details {
    flex-basis: 100%;
    border-top: 1px solid #DDDDDD;
    border-right: 0;
  }
  .item .details .header {
    border-bottom: 1px solid #DDDDDD;
  }
  .item .details .header ul {
    display: flex;
    padding: 0 20px;
  }
  .item .details .header ul li {
    padding: 10px 5px;
    margin-right: 20px;
    border-bottom: 3px solid #FFFFFF;
    transition: color .3s, border-bottom .3s;
    cursor: pointer;
  }
  .item .details .header ul li:hover {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
  }
  .item .details .header ul li.isActived {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
    cursor: default;
  }
  .item .details .details-container>div {
    padding: 15px 25px;
  }
  .item .details .details-container .basicInfo {
    color: #333333;
  }
  .item .details .details-container .basicInfo>div>div {
    margin-bottom: 12px;
  }
  .item .details .details-container .basicInfo>div>div:last-child {
    margin-bottom: 0;
  }
</style>
