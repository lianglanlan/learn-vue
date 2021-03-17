<template>
  <div class="topnav-wrap">
    <div class="topnav">
      <ul class="topnav-list">
        <li
          class="item"
          v-for="(item, index) in list"
          :key="item.id"
          @click="itemClick(index)"
          :class="{ active: index === curIndex }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNav",
  data() {
    return {
      curIndex: 0,
      list: [
        {
          id: 1,
          name: "CEX-Futures",
        },
        {
          id: 2,
          name: "DEX-Futures",
        },
        {
          id: 3,
          name: "CEX-Options",
        },
        {
          id: 4,
          name: "DEX-Options",
        },
      ],
    };
  },
  methods: {
    itemClick(index) {
      this.curIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>
<style scoped>
.topnav-wrap {
  background-color: #f3f4f8;
}

.topnav {
  max-width: 1440px;
  /* 需要修改 */
  margin: 0 auto;
}

.topnav-list {
  display: flex;
  padding: 0 30px 15px;
}

.item {
  font-size: 18px;
  line-height: 38px;
  color: #000;
  margin-right: 20px;
  border-radius: 10px;
  cursor: pointer;
  padding: 0 18px;
}

.active {
  background-color: #fff;
}
</style>