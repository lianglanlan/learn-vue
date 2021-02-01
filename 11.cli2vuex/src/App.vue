<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <!-- 这样操作值也可运行，但不建议这样做 -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu()">添加学生</button>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>
      {{ $store.getters.more20stu }}
    </h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>通过参数传入界定的年龄{{ $store.getters.moreAgeStu(18) }}</h2>
    <h2>展示info{{ $store.state.info }}</h2>
    <button @click="changeAge">改变info年龄</button>
    <button @click="addAddress">添加info地址属性</button>
    <button @click="deletePro">删除属性</button>
    <button @click="aChangeAge">异步修改属性</button>
    <h2>modules中的内容 {{ $store.state.a.name }}</h2>
    <button @click="updateName">修改modules中的内容</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutations-type";

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
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      //携带参数，官网名称提交Payload
      // this.$store.commit("incrementCount", count);
      //对象风格的提交方式
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStu() {
      const stu = {
        id: 114,
        name: "alan",
        age: 35,
      };
      this.$store.commit("addStu", stu);
    },
    changeAge() {
      this.$store.commit("changeAge");
    },
    addAddress() {
      this.$store.commit("addAddress");
    },
    deletePro() {
      this.$store.commit("deletePro");
    },
    aChangeAge() {
      this.$store.dispatch("aChangeAge", "我是payload").then((res) => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "huge");
    },
    asyncUpdateName() {
      this.$store.dispatch("aChangeAge");
    },
  },
};
</script>

<style>
</style>
