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
import ObserveImage from "@better-scroll/observe-image";

BScroll.use(ObserveDOM);
BScroll.use(Pullup);
BScroll.use(ObserveImage);

export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    observeImage: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      observeImage: this.observeImage,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>