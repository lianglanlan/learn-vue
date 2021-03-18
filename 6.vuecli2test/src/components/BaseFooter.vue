<template>
  <div class="footer-wrap">
    <div class="main-box">
      <div class="footer-main">
        <div class="coo">
          <h3 class="logo-title">BitDerivatives</h3>
          <p class="name">商务合作<i class="icon-email"></i></p>
          <p class="email-address">Business@bitdata.com</p>
        </div>
        <div class="about">
          <p class="name">关于我们</p>
          <p class="content">
            我们是<br />
            来袭xxxx<br />x x x x x x x x x x x x x x x x x
          </p>
        </div>
        <div class="service">
          <div class="code-img-wrap"></div>
          <p class="note">添加客服加入社群</p>
        </div>
      </div>
      <div class="footer-time">© 2017 - {{ year }} All rights reserved</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: 2021,
    };
  },
  created() {
    this.year = new Date().getFullYear();
  },
};
</script>
<style scoped>
.footer-wrap {
  padding: 48px 0 32px;
  background: #101215;
  color: #fff;
}

.footer-main {
  display: flex;
}

.coo {
  flex: none;
  padding-left: 140px;
  width: 465px;
}

.logo-title {
  padding: 15px 0 12px;
  font-family: Rockwell;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
}

.name {
  color: #676f81;
  font-size: 24px;
  line-height: 30px;
}

.icon-email {
  display: inline-block;
  vertical-align: middle;
  width: 13px;
  height: 19px;
  margin: 5px 0 0 5px;
  background: url("../assets/images/email.png") no-repeat;
}

.email-address {
  font-size: 24px;
  line-height: 30px;
}

.about {
  flex: none;
  padding: 12px 0 0;
  width: 500px;
}

.about .content {
  margin-top: 24px;
  font-size: 18px;
  line-height: 24px;
}

.code-img-wrap {
  width: 128px;
  height: 128px;
  border-radius: 12px;
  background: #fbfcfd;
}

.service {
  flex: none;
  padding-top: 10px;
}

.service .note {
  margin-top: 10px;
  font-size: 18px;
  line-height: 20px;
}

.footer-time {
  padding-top: 20px;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #676f81;
}
</style>