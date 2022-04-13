<template>
  <div
    ref="scrollTopButton"
    class="floating-button__wrap"
  >
    <a
      href="#"
      class="floating-button__anchor"
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
    return {}
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
      if (window.scrollY > 0) {
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
      position: sticky;
      bottom: 25px;
      width: 48px;
      height: 48px;
      right: 5.208vw;
      left: auto;
      display: block;
      float: right;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.35s ease-in-out;
      &.active {
        opacity: 1;
      }
    }
    &__anchor {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      box-shadow: 1px 1px 7px 0 rgb(0 0 0 / 50%);
    }
    &__top {
      width: 48px;
      height: auto;
      border-radius: 48px;
    }
  }

</style>
