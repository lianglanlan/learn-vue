<template>
  <div class="back-top"></div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../../../assets/css/sprites/_sprite_common.scss";
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  @extend %icon;
  @extend %icon-360;
}
</style>