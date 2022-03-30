<template>
<div class="more-button">
  <router-link to="/" class="more-button__link">
    더보기<i class="icon-set icon-arrow-right"></i>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'moreButton'
}
</script>

<style lang="scss" scoped>
.more-button{
  float: right;
  &__link{
    display: inline-block;
  }
  .icon-arrow-right{
    overflow: hidden;
    width: 7px;
    height: 12px;
    background-image: url('../assets/icon_arrow-right.png');
    margin-left: 8px;
  }
}
</style>
