<template>
  <div>{{detailInfo}}</div>
</template>
<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return detailInfo;
      },
    },
  },
};
</script>
<style scoped>
</style>