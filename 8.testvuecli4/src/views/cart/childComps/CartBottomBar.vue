<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：￥{{ totalPrice }}</div>
    <div class="calculate">去结算({{ checkLength }})</div>
  </div>
</template>
<script>
import CheckButton from "../../../components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  height: 40px;
  background-color: #eee;
  padding: 0 0 0 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.check-content {
  height: 100%;
  display: flex;
  align-items: center;
}

.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 20px;
  flex: 1;
}

.calculate {
  line-height: 40px;
  text-align: center;
  width: 90px;
  background-color: red;
  color: #fff;
}
</style>