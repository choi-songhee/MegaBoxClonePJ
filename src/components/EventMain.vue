<template>
  <div class="content-wrap">
    <h1>Event Main</h1>
    <div class="container">
      <div class="contents">
        <div class="contents__inner">
          <h1 class="contents__title">진행중인 이벤트</h1>
          <Tab></Tab>
          <SearchArea></SearchArea>
          <MoreButton></MoreButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './Tab'
import SearchArea from './SearchArea'
import MoreButton from './MoreButton'

export default {
  name: 'EventMain',
  components: {
    MoreButton,
    SearchArea,
    Tab
  }
}
</script>

<style lang="scss" scoped>
</style>
