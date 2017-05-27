<template>
  <div class="login">
    <div class="login-box">
      <div class="header">爱GO商城后台管理系统</div>
      <div class="main">
        <div>
          <input type="text" spellcheck="false" placeholder="用户名" />
          <span class="icon user"></span>
        </div>
        <div style="margin-top: 25px;">
          <input type="password" placeholder="密码" />
          <span class="icon pswd"></span>
        </div>
        <div style="margin-top: 26px; display: inline-flex; justify-content: space-between; align-items: center;">
          <label class="remember" for="remember">
              <input type="checkbox" name="remember" />
              记住密码
            </label>
          <input class="login-button" type="button" value="登录" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scope>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: url('/static/images/bg.png') no-repeat;
    background-size: cover;
    position: absolute;
  }
  .login .login-box {
    width: 400px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px;
  }
  .login .login-box .header {
    font-size: 18px;
    background-color: #F1675F;
    color: #FFFFFF;
    border-top: 1px solid #B86662;
    border-bottom: 1px solid #B86662;
    padding: 20px;
    text-align: left;
  }
  .login .login-box .main {
    padding: 32px 25px 38px;
  }
  .login .login-box .main>div {
    width: 100%;
    position: relative;
  }
  .login .login-box .main input[type=text],
  .login .login-box .main input[type=password] {
    width: 100%;
    font-size: 16px;
    color: #777777;
    border: 1px solid #DCDCDC;
    border-radius: 2px;
    padding: 10px 30px 10px 15px;
  }
  .login .login-box .main .remember {
    display: inline-flex;
    align-items: center;
  }
  .login .login-box .main .remember input[type=checkbox] {
    margin-right: 5px;
  }
  .login .login-box .main input[type=button].login-button {
    background-color: #F15B53;
    border: 0;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 16px;
    padding: 6px 19px;
    cursor: pointer;
  }
  .login .login-box .main .icon {
    right: 10px;
    top: 10px;
    position: absolute;
  }
  .login .login-box .main .icon:before {
    font-family: IconFont;
    font-size: 16px;
  }
  .login .login-box .main .icon.user:before {
    content: '\e66a';
  }
  .login .login-box .main .icon.pswd:before {
    content: '\e654';
  }
</style>
