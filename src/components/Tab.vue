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

</style>
