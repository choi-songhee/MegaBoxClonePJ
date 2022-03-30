<template>
  <div class="content-wrap">
    <h1 class="">메가박스 멤버십</h1>
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
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './Tab'

export default {
  name: 'BenefitMain',
  components: {
    Tab
  },
  data () {
    return {
      currentId: 0,
      list: [
        { id: 0, label: '멤버십 안내' },
        { id: 1, label: 'VIP LOUNGE' }
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
