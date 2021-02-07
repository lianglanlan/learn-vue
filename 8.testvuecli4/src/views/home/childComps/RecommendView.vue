<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped lang="scss">
.recommend {
  padding: 10px;
  display: flex;
  border-bottom: 8px solid #f1f1f1;
}

.recommend-item {
  flex: 1;
  margin: 0 10px;
  font-size: 12px;
  text-align: center;

  a {
    display: block;
  }

  img {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
