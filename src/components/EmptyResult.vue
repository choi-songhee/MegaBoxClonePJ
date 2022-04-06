<template>
  <div class="empty-result">
    <span class="empty-result__text">
      {{ emptyMessage }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'emptyResult',
  props: {
    emptyMessage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-result {
  padding: 80px 0 50px;
  text-align: center;

  &__text {
    font-size: 15px;
    color: #444;
  }
}
</style>
