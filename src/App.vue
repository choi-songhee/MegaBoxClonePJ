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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
