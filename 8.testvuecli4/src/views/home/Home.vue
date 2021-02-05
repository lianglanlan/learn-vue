<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "../../components/common/swiper";
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
    Swiper,
    SwiperItem,
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
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>