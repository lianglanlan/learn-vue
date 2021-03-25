<template>
  <div>
    <!-- <TopBanner />
    <TopNav @itemClick="navItemclick" />
    <div class="content-wrap">
      <ContentChart />
      <ContentTable />
      <TableMore @moreClick="moreClick" />
    </div>
    <BaseFooter /> -->
    <chart></chart>
  </div>
</template>
<script>
import TopBanner from "../components/TopBanner";
import TopNav from "../components/TopNav";
import ContentChart from "../components/ContentChart";
import ContentTable from "../components/ContentTable";
import TableMore from "../components/TableMore";
import BaseFooter from "../components/BaseFooter";
import Chart from "../components/Chart";

export default {
  name: "Home",
  components: {
    TopBanner,
    TopNav,
    ContentChart,
    ContentTable,
    TableMore,
    BaseFooter,
    Chart,
  },
  methods: {
    navItemclick(index) {
      console.log(index);
    },
    moreClick() {
      console.log("11");
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