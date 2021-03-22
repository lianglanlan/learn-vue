<template>
  <div class="cart-list">
    <scroll class="scroll-content">
      <cart-list-item
        v-for="(item, index) in list"
        :key="index"
        :product="item"
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
};
</script>
<style>
.cart-list {
  height: calc(100vh - 44px - 49px);
}
.scroll-content {
  height: 100%;
  overflow: hidden;
}
</style>  