<template>
  <div class="content-wrap">
    <h1>Event Main</h1>
    <Tab></Tab>
    <SearchArea></SearchArea>
    <div class="container">
      <div class="contents">
        <div class="contents__inner">
          <h1 class="contents__title">진행중인 이벤트</h1>
          <div class="tabs">
            <Tab
              v-for="item in list"
              v-bind="item" :key="item.id"
              v-model="currentId"
            />
          </div>
          <div class="tab-content">
            <div v-show="currentId == 0">
              tab cont1
            </div>
            <div v-show="currentId == 1">
              <SearchArea></SearchArea>
              tab cont2
            </div>
            <div v-show="currentId == 2">
              <SearchArea></SearchArea>
              tab cont3
            </div>
            <div v-show="currentId == 3">
              <SearchArea></SearchArea>
              tab cont4
            </div>
            <div v-show="currentId == 4">
              <SearchArea></SearchArea>
              tab cont5
            </div>
            <div v-show="currentId == 5">
              <SearchArea></SearchArea>
              tab cont6
            </div>
          </div>
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
  },
  data () {
    return {
      currentId: 0,
      list: [
        { id: 0, label: '전체' },
        { id: 1, label: '메가Pick' },
        { id: 2, label: '영화' },
        { id: 3, label: '극장' },
        { id: 4, label: '제휴/할인' },
        { id: 5, label: '시사회/무대인사' }
      ]
    }
  },
  computed: {
    current () {
      return this.list.find(el => el.id === this.currentId) || {}
    }
  }
}
</script>

<style scoped lang="scss"></style>
