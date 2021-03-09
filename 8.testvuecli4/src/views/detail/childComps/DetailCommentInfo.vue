<template>
  <div>{{commentInfo}}</div>
</template>
<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>