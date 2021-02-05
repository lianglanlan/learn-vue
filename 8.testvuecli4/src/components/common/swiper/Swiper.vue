<template>
  <div id="hy-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          class="indi-item"
          v-for="(item, index) in slideCount"
          :key="index"
          :class="{ active: index === currentIndex - 1 }"
        ></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrolling: false, //是否正在滚动
      currentIndex: 1, //当前的index
      totalWidth: 0, //swiper的宽度
      swiperStyle: {}, //swiper的样式
      slideCount: 0, //元素个数
    };
  },
  props: {
    interval: {
      type: Number,
      default: 3000,
    },
    animDuration: {
      type: Number,
      default: 300,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    //定时器操作
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    //滚动到正确的位置
    scrollContent(currentPosition) {
      //设置正在滚动
      this.scrolling = true;
      //开始滚动动画
      this.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransform(currentPosition);

      //判断滚动到的位置
      this.checkPosition();
      //滚动完成
      this.scrolling = false;
    },
    //校验正确的位置
    checkPosition() {
      window.setTimeout(() => {
        //1.校验正确的位置
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }

        //结束移动后的回调
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },
    //设置滚动位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px,0,0)`;
    },
    /**
     * 操作DOM, 在DOM前后添加Slide
     */
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let slidesEls = swiperEl.getElementsByClassName("slide");

      //保存个数
      this.slideCount = slidesEls.length;

      //如果个数大于1，那么在前后分别添加一个slide
      if (this.slideCount > 1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      //让swiper元素，显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth);
    },
    // 拖动事件处理
    touchStart(e) {
      //1.如果正在滚动，不可以拖动
      if (this.scrolling) return;

      //2.停止定时器
      this.stopTimer();

      //3.保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      //计算用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      //设置当前位置
      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      //获取移动的位置
      let currentMove = Math.abs(this.distance);
      //判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        //右边移动距离超过一定值
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        //向左边移动距离超过一定值（默认0.25）
        this.currentIndex++;
      }

      //移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
      //移动完成后重新开启定时器
      this.startTimer();
    },
  },
  mounted() {
    //操作Dom，在前后添加slide
    setTimeout(() => {
      this.handleDom();
    }, 3000);
  },
};
</script>
<style scoped>
#hy-swiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>