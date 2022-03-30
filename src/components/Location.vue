<template>
  <div :class="['page-util', { 'fixed' : isFixed }]" ref="stickyLocation">
    <div class="inner">
      <div class="location">
        <span class="location__home"><em class="sr-only">Home</em></span>
        <router-link
          v-for="list in lists"
          :to="list.path"
          class="location__link"
        >
          {{ list.depthName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  props: {
    lists: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset
      let offsetTop = this.$refs.stickyLocation.offsetTop

      if (scrollTop >= offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page-util {
  z-index: 10;
  display: block;
  position: static;
  width: 100%;
  height: 42px;
  background-color: #f8f8fa;

  &.fixed {
    position: sticky;
    left: 0;
    right: inherit;
    top: 0;
    z-index: 100;
    background-color: #444;

    .location__link {
      color: #fff;
    }
  }

  .inner::after {
    content: '';
    display: block;
    clear: both;
  }
}

.location {
  float: left;
  height: 42px;

  &__home {
    overflow: hidden;
    display: block;
    float: left;
    width: 13px;
    height: 100%;
    margin: 0;
    padding: 0;
    background: url('../assets/icon_home.png') no-repeat center;
  }

  &__link {
    display: block;
    position: relative;
    float: left;
    height: 42px;
    margin-left: 25px;
    line-height: 46px;
    color: #666;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: -14px;
      top: 0;
      width: 5px;
      height: 42px;
      background: url('../assets/icon_arrow.png') no-repeat left center;
    }
  }
}
</style>
