<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{ useId }}</h2>
  </div>
</template>
<script>
export default {
  name: "User",
  computed: {
    useId() {
      return this.$route.params.id;
    },
  },
  created() {
    console.log("user被创建"); //每次切换到profile都会打印
  },
};
</script>