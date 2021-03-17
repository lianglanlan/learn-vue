<template>
  <div>
    <TopBanner />
    <TopNav @itemClick="navItemclick" />
    <div class="content-wrap">
      <ContentChart></ContentChart>
    </div>
  </div>
</template>
<script>
import TopBanner from "../components/TopBanner";
import TopNav from "../components/TopNav";
import ContentChart from "../components/ContentChart";
export default {
  name: "Home",
  components: {
    TopBanner,
    TopNav,
    ContentChart,
  },
  methods: {
    navItemclick(index) {
      console.log(index);
    },
  },
};
</script>
<style scoped>
.content-wrap {
  max-width: 1440px;
  /* 需要修改 */
  margin: 0 auto;
}
</style>