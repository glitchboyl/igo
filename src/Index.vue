<template>
  <div class="main">
    <header class="header">
      <div class="title">爱GO后台管理系统</div>
      <div class="panel">
        <div class="datetime">{{ datetime }}</div>
        <div class="inner">你好！ {{ username }}</div>
        <!--<div class="extend">
                        <span class="caret" :class="{isOpen}" @click="open" v-click-outside="close"></span>
                        <ul class="list" v-if="isOpen">
                          <li class="item" v-for="i in extend" :class="i.name" @click="goto(i.url)">{{ i.title }}</li>
                        </ul>
                      </div>
                      <div class="user-avatar">
                        <img :src="src" />
                      </div>-->
        <span class="quit" @click="quit">&#xe693;</span>
      </div>
    </header>
    <div class="container">
      <menu-list></menu-list>
      <div class="content">
        <div class="position">
          当前位置：{{ position }}
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside'
  import menuList from '@/components/index/menu-list'
  import Bus from '@/assets/eventBus'
  export default {
    name: 'main',
    data: function() {
      return {
        username: '用户',
        datetime: '1997年12月30日　19 : 58 : 11',
        src: '/static/images/doge.jpg',
        position: '主页',
        isOpen: false,
        extend: [{
          name: 'message',
          title: '消息',
          url: '/'
        }, {
          name: 'personal',
          title: '个人中心',
          url: '/personal'
        }]
      }
    },
    directives: {
      ClickOutside
    },
    components: {
      menuList
    },
    methods: {
      open() {
        let self = this;
        self.isOpen = !self.isOpen;
      },
      close() {
        let self = this;
        self.isOpen = false;
      },
      goto(url) {
        let self = this;
        self.isOpen = false;
        Router.push(url);
      },
      quit() {
        let self = this;
        if (confirm('确认退出吗？')) {
          self.$router.push('/login');
          localStorage.userToken = '';
        }
      }
    },
    mounted() {
      let self = this;
      Bus.$on('changePosition', function(obj) {
        self.position = obj.position;
      })
    }
  }
</script>

<style scoped>
  .main {
    color: #333333;
  }
  header.header {
    width: 100%;
    padding: 15px 30px;
    font-size: 14px;
    color: #FFFFFF;
    background-color: #F1675F;
  }
  header.header .title {
    font-size: 18px;
    line-height: 18px;
    float: left;
  }
  header.header .panel {
    right: 0;
    text-align: right;
    position: relative;
  }
  header.header .panel>div {
    display: inline-block;
  }
  header.header .panel .datetime {
    margin-right: 15px;
  }
  header.header .panel .inner {
    margin-right: 30px;
  }
  header.header .panel .user-avatar {
    width: 50px;
    height: 50px;
    position: absolute;
    margin-top: -16px;
  }
  header.header .panel .user-avatar img {
    width: 100%;
    height: 100%;
  }
  header.header .panel .quit {
    /*margin-left: 80px;*/
    font-family: IconFont;
    font-size: 22px;
    line-height: 18px;
    float: right;
    cursor: pointer;
  }
  .extend {
    position: relative;
  }
  .extend .caret {
    width: 10px;
    height: 5px;
    margin-left: -20px;
    margin-top: -8px;
    position: absolute;
  }
  .extend .caret:before {
    content: '';
    border: 5px solid transparent;
    border-top: 5px solid #FFFFFF;
    border-bottom: 0;
    position: absolute;
    cursor: pointer;
    transition: transform .3s;
    left: 0;
    position: absolute;
  }
  .extend .caret.isOpen:before {
    transform: rotate(180deg);
  }
  .extend .list {
    width: 125px;
    top: 15px;
    left: -125px;
    position: absolute;
    background-color: #F1675F;
  }
  .extend .list .item {
    width: 100%;
    padding: 8px 12px;
    line-height: 24px;
    text-align: left;
    display: inline-flex;
    cursor: pointer;
  }
  .extend .list .item:before {
    font-family: IconFont;
    font-size: 22px;
    margin-right: 6px;
  }
  .extend .list .item.message:before {
    content: '\e638';
  }
  .extend .list .item.personal:before {
    content: '\e694';
  }
  .container {
    display: flex;
    margin: 10px;
    font-size: 14px;
    color: #656565;
    align-items: flex-start;
  }
  .container .content {
    flex-grow: 1;
  }
  .container .content .position {
    padding: 15px 20px;
    color: #333333;
    border: 1px solid #DDDDDD;
  }
  .container .content .position:before {
    content: '\e63c';
    color: #656565;
    font-family: IconFont;
    font-size: 24px;
    margin-top: -6px;
    margin-right: 10px;
    float: left;
  }
  .container .content .inner {
    margin-top: 10px;
  }
</style>
