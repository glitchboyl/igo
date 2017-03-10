<template>
<div id="main" v-cloak>
  <header class="header">
    <div class="title">爱GO后台管理系统</div>
    <div class="panel">
      <div class="datetime">{{ datetime }}</div>
      <div class="inner">你好！ {{ username }}</div>
      <div class="user-avatar">
        <img :src="src" />
      </div>
      <span class="quit">&#xe601;</span>
    </div>
  </header>
  <div class="container">
    <menu-list></menu-list>
    <div class="content">
      <div class="position">
        当前位置：主页{{ position }}
      </div>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Bus from '@/assets/eventBus'
import menuList from '@/components/index/menu-list'
export default {
  data: function() {
    return {
      username: '用户',
      datetime: '1997年12月30日 19:58:11',
      src: '/static/images/doge.jpg',
      position: ''
    }
  },
  components: {
    menuList
  },
  mounted() {
    var self = this;
    Bus.$on("changePosition", function(obj) {
      self.position = obj.position;
    });
  }
}
</script>

<style>
[v-cloak] {
  display: none;
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

header.header .panel .inner:after {
  content: '';
  margin-top: 6px;
  margin-left: 8px;
  border: 6px solid transparent;
  border-top: 7px solid #FFFFFF;
  position: absolute;
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
  margin-left: 80px;
  font-family: IconFont;
  font-size: 22px;
  line-height: 18px;
  float: right;
}

.container {
  display: flex;
  margin: 10px;
  font-size: 14px;
  color: #656565;
}

.container .content {
  margin-left: 10px;
  flex-grow: 1;
}

.container .content .position {
  padding: 15px 20px;
  border: 1px solid #DDDDDD;
}

.container .content .position:before {
  content: '\e63c';
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
