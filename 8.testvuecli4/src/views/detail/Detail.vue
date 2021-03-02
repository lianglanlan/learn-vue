<template>
  <div>详情页</div>
</template>
<script>
export default {
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>