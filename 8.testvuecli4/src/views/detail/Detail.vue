<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import { getDetail, Goods, Shop } from "../../network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      //对res做数据分离
      this.topImages = data.itemInfo.topImages;

      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
    });
  },
};
</script>