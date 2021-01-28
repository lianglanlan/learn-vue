<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <!-- 这样操作值也可运行，但不建议这样做 -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>
      {{ $store.getters.more20stu }}
    </h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>通过参数传入界定的年龄{{ $store.getters.moreAgeStu(18) }}</h2>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是App组件",
    };
  },
  computed: {},
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
