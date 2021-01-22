<template>
  <div id="app">
    <!-- replace不会留下history记录 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <!-- active-class默认值router-link-active -->
    <router-link to="/about" tag="button">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>
