<template>
  <div class="content-wrap">
    <h1>Event Main</h1>
    <Tab></Tab>
    <SearchArea></SearchArea>
  </div>
</template>

<script>
import Tab from './Tab'
import SearchArea from './SearchArea'

export default {
  name: 'EventMain',
  components: {
    SearchArea,
    Tab
  }
}
</script>

<style scoped>

</style>
