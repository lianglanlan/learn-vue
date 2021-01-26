<template>
  <div class="tab-bar-item">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->

    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  display: block;
  width: 24px;
  margin: 3px auto 2px;
}
</style>