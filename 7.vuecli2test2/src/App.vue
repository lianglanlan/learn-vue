<template>
  <div id="app">
    <!-- replace不会留下history记录 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <!-- active-class默认值router-link-active -->
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + id" tag="button">用户</router-link>
    <router-link :to="{ path: '/profile', query: { name: 'lanlan', age: 18 } }"
      >档案</router-link
    >
    <router-view></router-view>
    <button @click="homeClick">首页</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: "lisi",
    };
  },
  components: {},
  methods: {
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
