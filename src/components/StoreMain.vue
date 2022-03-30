<template>
  <div class="container">
    <Location :lists="depthList"/>
    <div class="contents">
      <div class="inner">
        <h1 class="contents__title">스토어</h1>
        <div class="tabs">
          <Tab
            v-for="item in list"
            v-bind="item" :key="item.id"
            v-model="currentId"
          />
        </div>
        <div class="tab-content">
          <div v-show="currentId == 0">tab cont1</div>
          <div v-show="currentId == 1">tab cont2</div>
          <div v-show="currentId == 2">tab cont3</div>
          <div v-show="currentId == 3">tab cont4</div>
        </div>
        <h3 class="contents__sub-title">추천 이벤트</h3>
      </div>
    </div>

  </div>
</template>

<script>
import Tab from './Tab'
import Location from './Location'

export default {
  name: 'StoreMain',
  components: {
    Tab,
    Location
  },
  data () {
    return {
      currentId: 0,
      list: [
        { id: 0, label: '새로운 상품' },
        { id: 1, label: '메가티켓' },
        { id: 2, label: '팝콘/음료/굿즈' },
        { id: 3, label: '포인트몰' }
      ],
      depthList: [
        {
          path: '/',
          depthName: '스토어'
        }
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
