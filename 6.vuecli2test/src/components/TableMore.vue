<template>
  <div class="more-wrap">
    <span class="more" @click="moreClick">加载更多</span>
  </div>
</template>
<script>
export default {
  methods: {
    moreClick() {
      this.$emit("moreClick");
    },
  },
};
</script>
<style scoped>
.more-wrap {
  margin-top: 8px;
  font-size: 24px;
  line-height: 66px;
  text-align: center;
  color: #959dad;
}

.more {
  cursor: pointer;
}
</style>