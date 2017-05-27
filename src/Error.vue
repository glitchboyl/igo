<template>
<div class="error">
  <div style="margin-bottom: 25px;">
    <img src="/static/images/error.png" />
  </div>
  <div class="title" style="margin-bottom: 25px;">
    <div class="main">出错啦</div>
    <div class="sub">找不到你访问的页面</div>
  </div>
  <div>
    <input class="return" type="button" value="返回首页" @click="backIndex"/>
  </div>
</div>
</template>

<script>
export default{
  methods:{
    backIndex(){
      let self = this;
      self.$router.push('/');
    }
  }
}
</script>

<style scope>
.error {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
}

.error .title .main {
  font-size: 24px;
  color: #333333;
}

.error .title .main:after {
  content: "！";
  position: absolute;
}

.error .title .sub {
  font-size: 14px;
  color: #656565;
}

.error input[type=button].return {
  font-size: 14px;
  color: #FFFFFF;
  padding: 5px 15px;
  background-color: #F1675F;
  border: 0;
  cursor: pointer;
}
</style>
