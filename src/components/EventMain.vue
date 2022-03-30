<template>
  <div class="content-wrap">
    <h1>Event Main</h1>
    <Tab></Tab>
    <SearchArea></SearchArea>
    <div class="container">
      <div class="contents">
        <div class="contents__inner">
          <h1 class="contents__title">진행중인 이벤트</h1>
          <Tab></Tab>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
</style>
