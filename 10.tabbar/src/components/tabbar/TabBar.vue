<template>
  <div id="tab-bar">
    <tab-bar-item>
      <img src="../../assets/img/tabbar/home.svg" alt="" slot="item-icon" />
      <img
        src="../../assets/img/tabbar/home_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item>
      <img src="../../assets/img/tabbar/home.svg" alt="" slot="item-icon" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
  </div>
</template>
<script>
import TabBarItem from "./TabBarItem";

export default {
  name: "TabBar",
  components: {
    TabBarItem,
  },
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
</style>