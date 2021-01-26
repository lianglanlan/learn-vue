<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
    å;
  },
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      console.log(this.path);
      this.$router.replace(this.path).catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  display: block;
  width: 24px;
  margin: 3px auto 2px;
}

.active {
  color: red;
}
</style>