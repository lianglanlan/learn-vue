<template>
  <div id="tab-bar">
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      首页
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      分类
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      购物车
    </div>
    <div class="tab-bar-item">
      <img src="../../assets/img/tabbar/home.svg" alt="" />
      我的
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style scoped>
#tab-bar {
  position: fixed;
  left: 0;
  width: 100%;
  bottom: 0;
  height: 49px;
  display: flex;
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px 0;
}

.tab-bar-item {
  flex: 1;
  text-align: center;
}

.tab-bar-item img {
  display: block;
  width: 24px;
  margin: 0 auto;
}
</style>