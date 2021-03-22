<template>
  <div>
    <nav-bar class="nav-bar"
      ><div slot="center">购物车({{ length }})</div></nav-bar
    >
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  components: {
    NavBar,
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