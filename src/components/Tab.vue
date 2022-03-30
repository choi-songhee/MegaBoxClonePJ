<template>
  <button
    @click="$emit('input', id)"
    :class="[active, 'current-tab']"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    active () {
      return this.value === this.id ? 'active' : false
    }
  }
}
</script>

<style scoped lang="scss">
  .current-tab {
    width: 100%;
    height: 42px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    &.active {
      z-index: 3;
      color: #503396;
      border: 1px solid #503396;
      border-bottom: 0;
    }
  }
</style>
