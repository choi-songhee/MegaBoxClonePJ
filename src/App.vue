<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Tab></Tab>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/Header'
import Footer from './layout/Footer'
import Tab from './layout/Tab'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Tab
  }
}
</script>

<style>
@import "./scss/_base.scss";
</style>
