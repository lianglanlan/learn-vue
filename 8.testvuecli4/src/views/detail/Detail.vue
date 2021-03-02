<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";

import { getDetail } from "../../network/detail";

export default {
  components: {
    DetailNavBar,
  },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
    });
  },
};
</script>