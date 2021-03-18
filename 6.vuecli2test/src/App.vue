<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <HelloWorld /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  /* 需要修改 */
  text-decoration: none;
}

ul {
  list-style: none;
}

.main-box {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
