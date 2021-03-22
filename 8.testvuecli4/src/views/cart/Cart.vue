<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <!-- 列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
  },
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
  },
};
</script>
<style>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
</style>