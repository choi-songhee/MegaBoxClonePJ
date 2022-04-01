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
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
            <div v-show="currentId == 2">
              <div class="sub-tab">

              </div>
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
            <div v-show="currentId == 3">
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
            <div v-show="currentId == 4">
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
            <div v-show="currentId == 5">
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
          </div>
<!--          <Swiper></Swiper>-->
          <swiper
            class="swiper"
            :options="swiperOption"
          >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <div
              class="swiper-pagination"
              slot="pagination"
            >
            </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
import Tab from './Tab'
import SearchArea from './SearchArea'
import MoreButton from './MoreButton'
import Location from './Location'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'EventMain',
  components: {
    ListItem,
    MoreButton,
    SearchArea,
    Tab,
    Location,
    Swiper,
    SwiperSlide
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
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
.sub-tab {

}
.event {
  overflow: hidden;
  margin: 0 -20px;
  display: flex;
  justify-content: flex-start;

  &__list {
    flex: 0 0 245px;
    margin: 0 20px;
  }
}
</style>
