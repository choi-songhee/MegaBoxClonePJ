<template>
  <div class="text-banner">
    <strong class="text-banner__title">{{ bannerTitle }}</strong>
    <span class="text-banner__desc">{{ bannerDesc }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextBanner',
  props: {
    bannerTitle: {
      type: String,
      default: ''
    },
    bannerDesc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.text-banner {
  padding: 30px 0;
  text-align: center;

  &__title {
    display: block;
    font-size: 32px;
    font-weight: 400;
    line-height: 1.1;
    color: #503396;
  }

  &__desc {
    display: block;
    margin-top: 15px;
    font-size: 15px;
    color: #444;
  }
}
</style>
