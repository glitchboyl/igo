<template>
  <div id="member" class="inner">
    <search-bar :items="searchItems"></search-bar>
    <div class="inner-container">
      <member-list :memberItems="memberItems"></member-list>
    </div>
  </div>
</template>

<script>
  import searchBar from '@/components/general/search-bar'
  import memberList from './list'
  export default {
    data() {
      return {
        searchItems: [{
          type: 'text-box',
          name: 'memberName',
          title: '会员名',
          width: 170,
          value: ''
        }, {
          type: 'text-box',
          name: 'email',
          title: 'Email',
          width: 170,
          value: ''
        }, {
          type: 'text-box',
          name: 'phoneNumber',
          title: '会员手机号',
          width: 170,
          value: ''
        }],
        memberItems: [{
          memberName: 'gj9188',
          email: '2254885145@qq.com',
          phoneNumber: '14525625556',
          sex: '男',
          registrationTime: '2017-05-26 13:41:32',
          registrationIP: '27.21.162.28'
        }, {
          memberName: 'xiaoming',
          email: '4355157145@qq.com',
          phoneNumber: '13542625556',
          sex: '女',
          registrationTime: '2017-05-24 18:55:14',
          registrationIP: '115.200.232.166'
        }, {
          memberName: 'zhangsan',
          email: '787524264@qq.com',
          phoneNumber: '13542625556',
          sex: '女',
          registrationTime: '2017-05-24 12:04:16',
          registrationIP: '120.197.36.58'
        }]
      }
    },
    components: {
      searchBar,
      memberList
    }
  }
</script>

<style scoped>
  #member .inner-container {
    padding: 10px 20px;
    border: 1px solid #DDDDDD;
  }
</style>