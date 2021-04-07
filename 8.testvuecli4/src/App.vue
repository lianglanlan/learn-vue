<template>
  <div id="app">
    <div class="test"></div>
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "App",
  components: { MainTabBar },
};
</script>

<style lang="scss">
@import "assets/css/base.css";
@import "./assets/css/sprites/_sprite_common.scss";

.test {
  @extend %icon;
  @extend %icon-360;
  background-color: #000;
}
</style>
 