<template>
  <div class="wrap">
    <div class="left">
      <ul class="leftnav">
        <li
          v-for="(item, index) in list1"
          :key="item.id"
          @click="leftClick(index)"
          class="left-item"
          :class="{ active: index === leftCurIndex }"
        >
          <span class="name">{{ item.name }}</span>
          <span class="value">{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <ul class="topnav">
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list1: [
        {
          id: 1,
          name: "Open interest",
          value: "$400.5B",
        },
        {
          id: 2,
          name: "Open interest",
          value: "$400.5B",
        },
        {
          id: 3,
          name: "Open interest",
          value: "$400.5B",
        },
      ],
      leftCurIndex: 0,
    };
  },
  methods: {
    leftClick(index) {
      this.leftCurIndex = index;
    },
  },
};
</script>
<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 14px;
}

.left {
  padding-top: 65px;
  flex: none;
}

.left-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 65px;
  background: #f3f4f8;
  border-radius: 20px;
  box-sizing: border-box;
  padding-left: 25px;
  margin-bottom: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.left-item:hover {
  transform: translateX(10px);
}

.left-item.active {
  transform: translateX(20px);
}

.name {
  font-size: 18px;
  line-height: 25px;
  margin-bottom: -2px;
}

.value {
  font-size: 24px;
  line-height: 34px;
}

.right {
  flex: none;
}

.topnav {
}
</style>