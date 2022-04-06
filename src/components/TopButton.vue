<template>
  <div
    ref="scrollTopButton"
    class="floating-button__wrap"
  >
    <transition>
      <a
        @click="scrollTop"
        href="#" class="floating-button__anchor"
      >
        <span class="sr-only">Top</span>
        <img src="../../src/assets/icon_top_button.png" alt="Scroll to top" class="floating-button__top">
      </a>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TopButton',
  data () {
    return {
      // visible: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollBtn = this.$refs.scrollTopButton
      if (window.pageYOffset > 350) {
        scrollBtn.classList.add('active')
      } else {
        scrollBtn.classList.remove('active')
      }
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
      opacity: 0;
      transition: opacity 0.35s ease-in-out;
      &.active {
        opacity: 1;
      }
    }
    &__anchor {
      display: block;
      position: fixed;
      bottom: 25px;
      right: 5%;
    }
    &__top {
      width: 48px;
      height: auto;
      border-radius: 48px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
