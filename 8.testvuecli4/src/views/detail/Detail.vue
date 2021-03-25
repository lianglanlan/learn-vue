<template>
  <div id="detail">
    <detail-nav-bar @titleclick="titleclick" ref="nav"></detail-nav-bar>
    <scroll
      class="detail-content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommendList" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "../../components/common/scroll/Scroll";
import GoodsList from "../../components/content/goods/GoodsList";

import { itemImgListener, backTopMixin } from "../../common/mixin";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParams,
} from "../../network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTopYs: [],
      currentIndex: 0,
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
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

      //获取商品详细信息
      this.detailInfo = data.detailInfo;

      //获取参数信息
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      //取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    //请求推荐数据
    getRecommend().then((res) => {
      this.recommendList = res.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
    },
    titleclick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i) {
          if (
            positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]
          ) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = i;
          }
        }
      }
      //判断返回顶部是否显示
      this.isShowBackTop = -position.y > 1000;
    },
    addToCart() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      //将商品添加到购物车
      this.$store.dispatch("addCart", product).then(res=>{
        console.log(res)
      })
    },
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  mixins: [itemImgListener, backTopMixin],
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
}

.detail-content {
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>