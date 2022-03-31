<template>
  <div class="container">
    <Location :lists="depthList"/>
      <div class="contents">
        <div class="inner">
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
              <h3 class="contents__sub-title">메가Pick</h3>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>

              <h3 class="contents__sub-title">영화</h3>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>

              <h3 class="contents__sub-title">극장</h3>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>

              <h3 class="contents__sub-title">제휴/할인</h3>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>

              <h3 class="contents__sub-title">시사회/무대인사</h3>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
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
</template>

<script>
import Tab from './Tab'
import SearchArea from './SearchArea'
import MoreButton from './MoreButton'
import Location from './Location'
import ListItem from './ListItem'

export default {
  name: 'EventMain',
  components: {
    ListItem,
    MoreButton,
    SearchArea,
    Tab,
    Location
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
      ],
      depthList: [
        {
          path: '/',
          depthName: '이벤트'
        },
        {
          path: '/',
          depthName: '진행중 이벤트'
        }
      ],
      megaPickLists: [
        {
          src: '../../static/dummy/images/img_dummy01.jpeg',
          alt: '메가박스 오리지널 티켓 이미지',
          title: '메가박스 오리지널 티켓 No.49 <모비우스>',
          date: '2022.03.30 ~ 2022.04.13'
        },
        {
          src: '../../static/dummy/images/img_dummy02.jpeg',
          alt: '2022 교향악축제 이미지',
          title: '[클래식소사이어티] 2022 교향악축제 초대 이벤트',
          date: '2022.03.30 ~ 2022.04.13'
        },
        {
          src: '../../static/dummy/images/img_dummy03.jpeg',
          alt: '봄시즌음료 이미지',
          title: '[봄시즌음료]딸기라떼, 옥수수라떼 론칭',
          date: '2022.03.30 ~ 2022.04.13'
        },
        {
          src: '../../static/dummy/images/img_dummy04.jpeg',
          alt: '2022년 VIP 회원 혜택 이미지',
          title: '✌ 2022년 VIP 회원 혜택 안내 ✌',
          date: '2022.03.30 ~ 2022.04.13'
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
.event {
  overflow: hidden;
  margin: 0 -20px;
  display: flex;
  justify-content: space-between;

  &__list {
    flex: 0 0 245px;
    margin: 0 20px;
  }
}
</style>
