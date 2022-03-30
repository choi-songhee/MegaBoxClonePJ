<template>
  <div class="container">
    <div class="contents">
      <div class="contents__inner">
        <h1 class="contents__title">진행중인 이벤트</h1>
        <Tab></Tab>
      </div>
    </div>

  </div>
</template>

<script>
import Tab from './Tab'

export default {
  name: 'EventMain',
  components: {
    Tab
  }
}
</script>

<style lang="scss" scoped>
</style>
