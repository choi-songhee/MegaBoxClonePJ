<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/Header'
import Footer from './layout/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./scss/_base.scss";
@import "./scss/_common.scss";
</style>
