<template>
  <div class="container">
    <Location :lists="depthList"/>
    <div class="contents">
      <div class="inner">
        <h1 class="contents__title">메가박스 멤버십</h1>
        <div class="tabs">
          <Tab
            v-for="item in list"
            v-bind="item" :key="item.id"
            v-model="currentId"
          />
        </div>
      </div>
      <div class="tab-content">
          <div v-show="currentId == 0">
            <div class="inner">
              <TextBanner
                class="text-banner--slash-type"
                :bannerTitle="bannerTitle"
                :bannerDesc="bannerDesc"
              />
            </div>
          </div>
          <div v-show="currentId == 1">tab cont2</div>
        </div>
    </div>
  </div>
</template>

<script>
import Tab from './Tab'
import Location from './Location'
import TextBanner from './TextBanner'

export default {
  name: 'BenefitMain',
  components: {
    TextBanner,
    Tab,
    Location
  },
  data () {
    return {
      currentId: 0,
      bannerTitle: 'MEGABOX MEMBERSHIP',
      bannerDesc: '메가박스 멤버십 회원에게만 제공되는 다양한 혜택',
      list: [
        { id: 0, label: '멤버십 안내' },
        { id: 1, label: 'VIP LOUNGE' }
      ],
      depthList: [
        {
          path: '/',
          depthName: '혜택'
        },
        {
          path: '/',
          depthName: '메가박스 멤버십'
        },
        {
          path: '/',
          depthName: '멤버십 안내'
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

<style scoped lang="scss">
.text-banner--slash-type {
  margin-top: 40px;
  border: 1px solid #d8d9db;
  border-radius: 10px;
  background: url('../assets/bg_box-slash.png');
}
</style>
