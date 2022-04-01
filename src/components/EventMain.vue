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
        </div>
        <div class="tab-content">
          <div v-show="currentId == 0">
            <div class="inner">
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
          </div>
          <div v-show="currentId == 1">
            <div class="inner">
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="currentId == 2">
            <div class="inner">
              <div class="sub-tab">
                <ul class="sub-tab__lists">
                  <li v-for="(tab, index) in subTabs" :key="index" class="sub-tab__list" @click="onClickTab(index)">
                    <router-link :to="tab.path" :class="['sub-tab__link', {'is-active': index === selectedTab}]">{{ tab.name }}</router-link>
                  </li>
                </ul>
              </div>
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="currentId == 3">
            <div class="inner">
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="currentId == 4">
            <div class="inner">
              <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="currentId == 5">
            <div class="inner">
            <SearchArea></SearchArea>
              <ul class="event">
                <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                  <ListItem :item="item"/>
                </li>
              </ul>
            </div>
          </div>
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
import ListItem from './ListItem'
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
      selectedTab: 0,
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
      subTabs: [
        {
          id: 0,
          path: '/',
          name: '전체'
        },
        {
          id: 1,
          path: '/',
          name: '빵원쿠폰플러스'
        },
        {
          id: 2,
          path: '/',
          name: '빵원쿠폰'
        },
        {
          id: 3,
          path: '/',
          name: '굿즈패키지'
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
  created () {
    // this.selectedTab = this.subTabs[0].id
  },
  computed: {
    current () {
      return this.list.find(el => el.id === this.currentId) || {}
    }
  },
  methods: {
    onClickTab (index) {
      this.selectedTab = index
    }
  }
}
</script>

<style scoped lang="scss">
.sub-tab {
  position: relative;
  padding: 30px 0;

  &__lists::after {
    content: '';
    display: block;
    clear: both;
  }

  &__list {
    float: left;
    position: relative;
    height: 23px;
    line-height: 16px;
    padding-right: 16px;
    margin-right: 15px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 14px;
      background-color: #d8d9db;
    }
  }

  &__link {
    display: inline-block;
    height: 23px;
    font-size: 16px;

    &.is-active {
      border-bottom: 2px solid #503396;
      color: #503396;
    }

    &:not(.is-active) {
      &:active,
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }
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
