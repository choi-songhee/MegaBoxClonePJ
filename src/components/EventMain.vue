<template>
  <div class="content-wrap">
    <h1>진행중인 이벤트</h1>
    <div class="inner-wrap">
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
        <div v-show="currentId == 4">tab cont5</div>
        <div v-show="currentId == 5">tab cont6</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue'

export default {
  name: 'EventMain',
  components: {
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

<style scoped lang="scss">
  .inner-wrap {
    width: 1100px;
    margin: 0 auto;
  }
  .tabs {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 2;
      width: 100%;
      height: 1px;
      background-color: #503396;
    }
  }
</style>
