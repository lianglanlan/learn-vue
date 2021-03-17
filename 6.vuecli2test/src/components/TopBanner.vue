<template>
  <div class="bannerWrap">
    <div class="top-banner">
      <TopBannerL />
    </div>
  </div>
</template>
<script>
import TopBannerL from "./TopBannerL";
export default {
  components: {
    TopBannerL,
  },
};
</script>
<style scoped>
.bannerWrap {
  background-color: #f3f4f8;
}

.top-banner {
  max-width: 1440px;
  /* 需要修改 */
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
}
</style>