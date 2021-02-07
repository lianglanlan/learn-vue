<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  created() {
    //请求数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>
<style scoped>
#home {
  padding: 44px 0 49px;
}
.nav-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>