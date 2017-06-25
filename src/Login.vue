<template>
  <div class="login" @keyup.enter="login">
    <div class="login-box">
      <div class="header">爱GO商城后台管理系统</div>
      <div class="main">
        <div>
          <input type="text" spellcheck="false" placeholder="用户名" :value='username' v-model="username" />
          <span class="icon user"></span>
        </div>
        <div style="margin-top: 25px;">
          <input type="password" placeholder="密码" :value='password' v-model="password" />
          <span class="icon pswd"></span>
        </div>
        <div style="margin-top: 25px;">
          <input type="text" spellcheck="false" placeholder="验证码" style="padding-right: 80px;" maxlength="4" :value='verifyCode' v-model="verifyCode" />
          <img class="verifyCode" :src="captcha" @click="changeCaptcha" title="更换验证码" />
        </div>
        <div style="margin-top: 26px; display: inline-flex; justify-content: space-between; align-items: center;">
          <label class="remember" for="remember"><input type="checkbox" name="remember" />记住密码</label>
          <input class="login-button" type="button" value="登录" @click="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import JSEncrypt from '@/assets/jsencrypt'
  import MD5 from '@/assets/md5'
  export default {
    data() {
      return {
        username: '',
        password: '',
        verifyCode: '',
        captcha: '',
        token: ''
      }
    },
    methods: {
      changeCaptcha() {
        let self = this;
        let Axios = self.$axios;
        Axios.get('/public/system/getverificode').then(function(res) {
          let result = res.data.dataResultObj;
          self.captcha = 'data:image/png;base64,' + result.CodeImg;
          self.token = result.LoginToken;
        })
      },
      login() {
        let self = this;
        let {
          username,
          password,
          verifyCode
        } = self;
        if (username == '') {
          alert('用户名不能为空!');
          return;
        }
        if (password == '') {
          alert('密码不能为空!');
          return;
        }
        if (verifyCode == '') {
          alert('请填写验证码!');
          return;
        }
        let Axios = self.$axios;
        Axios.get('/public/rsakey').then(function(res) {
          return res.data.dataResultObj.RsaKey;
        }).then(function(RsaKey) {
          let encrypt = new JSEncrypt();
          encrypt.setPublicKey(RsaKey);
          username = encrypt.encrypt(MD5(MD5(username)));
          password = encrypt.encrypt(MD5(MD5(password)));
          Axios.post('/system/admin/login', {
            username,
            password,
            IdentifyCode: verifyCode
          }, {
            headers: {
              AdminToken: self.token
            }
          }).then(function(res) {
            if (res.data.dataResultObj.LoginState == 'Error') {
              alert(res.data.dataResultObj.Reason);
              return;
            }
            localStorage.userToken = res.data.dataResultObj.LoginToken;
            self.$router.push('/');
          })
        })
      }
    },
    beforeMount() {
      this.changeCaptcha();
    },
    mounted() {
      let self = this;
      let Axios = self.$axios;
    }
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
  .login .login-box .main .verifyCode {
    right: 1px;
    top: 7px;
    position: absolute;
    cursor: pointer;
  }
</style>
