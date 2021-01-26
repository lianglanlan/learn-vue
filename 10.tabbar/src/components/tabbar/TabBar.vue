<template>
  <div id="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">分类</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div>
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
  line-height: 49px;
}
</style>