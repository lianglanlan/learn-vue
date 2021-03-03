<template>
  <div>{{ goods }}</div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>