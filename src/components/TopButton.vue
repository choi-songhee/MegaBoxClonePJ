<template>
  <div
    class="floating-button__wrap"
  >
    <a
      ref="TopButton"
      @click="scrollTop"
      v-show="visible"
      href="#" class="floating-button__anchor active"
    >
      <span class="sr-only">Top</span>
      <img src="../../src/assets/icon_top_button.png" alt="Scroll to top" class="floating-button__top">
    </a>
  </div>
</template>

<script>
export default {
  name: 'TopButton',
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollTop () {
      const scrollBtn = this.$refs.TopButton
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
          scrollBtn.classList.remove('active')
        } else {
          scrollBtn.classList.add('active')
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener () {
      this.visible = window.scrollY > 350
    }
  }
}
</script>

<style scoped lang="scss">
  .floating-button {
    &__wrap {
      display: block;
      position: relative;
      width: 100%;
      z-index: 10;
    }
    &__anchor {
      display: block;
      position: fixed;
      bottom: 25px;
      right: 5%;
      opacity: 0;
      transition: opacity 0.35s ease-in-out;
      &.active {
        opacity: 1;
      }
    }
    &__top {
      width: 48px;
      height: auto;
      border-radius: 48px;
    }
  }
</style>
