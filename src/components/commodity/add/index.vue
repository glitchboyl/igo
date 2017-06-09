<template>
  <div id="commodity-add" class="inner">
    <div class="header">
      <ul>
        <router-link to="/commodity/add/basic" tag="li">基本信息</router-link>
        <router-link to="/commodity/add/desc" tag="li">详细描述</router-link>
        <router-link to="/commodity/add/album" tag="li">商品相册</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>
  #commodity-add.inner {
    border: 1px solid #DDDDDD;
    border-bottom: 1px solid #DDDDDD;
  }
  #commodity-add .header {
    border-bottom: 1px solid #DDDDDD;
  }
  #commodity-add .header ul {
    display: flex;
    padding: 0 20px;
  }
  #commodity-add .header ul li {
    padding: 10px 5px;
    margin-right: 20px;
    border-bottom: 3px solid #FFFFFF;
    transition: color .3s, border-bottom .3s;
    cursor: pointer;
  }
  #commodity-add .header ul li:hover {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
  }
  #commodity-add .header ul li.router-link-active {
    color: #F1675F;
    border-bottom: 3px solid #F1655D;
    cursor: default;
  }
</style>
