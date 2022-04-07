<template>
  <button class="button c-purple">
    <span class="button__text">{{ buttonName }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  height: 36px;
  padding: 0 15px;
  text-align: center;
  border-radius: 4px;

  &.c-purple {
    background: #503396;

    &:hover {
      background: #351f67;
    }
  }

  &__text {
    font-size: 15px;
    color: #fff;
  }
}
</style>
