<template>
  <div>
    <h2>我是profile组件</h2>
    <h2>{{ $route.query.age }}</h2>
  </div>
</template>
<script>
export default {
  name: "Profile",
  created() {
    console.log("profile被创建"); //每次切换到profile都会打印
  },
};
</script>