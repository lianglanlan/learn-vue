<template>
  <div>{{topImages}}</div>
</template>
<script>
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>