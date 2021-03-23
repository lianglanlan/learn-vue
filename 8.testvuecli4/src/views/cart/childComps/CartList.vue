<template>
  <div class="cart-list">
    <scroll class="scroll-content" ref="scroll" :pull-up-load="true">
      <cart-list-item
        v-for="(item, index) in list"
        :key="index"
        :item-info="item"
      ></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import Scroll from "../../../components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters({
      list: "cartList",
    }),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>
<style>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
}
.scroll-content {
  height: 100%;
  overflow: hidden;
}
</style>  