<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";

BScroll.use(ObserveDOM);
BScroll.use(Pullup);

export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true,
      observeDOM: true,
    });
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>