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
          <div class="event-slider">
            <div class="event-slider__head">
              <h3 class="event-slider__sub-title contents__sub-title">추천 이벤트</h3>
              <div class="event-slider__bullet swiper-pagination-bullets">
                <span class="swiper-pagination-bullet swiper-pagination-bullet--active"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
                <span class="swiper-pagination-bullet"></span>
              </div>
              <div
                class="event-slider__pagination swiper-pagination"
                slot="pagination"
              ></div>
              <div class="event-slider__util">
                <div class="swiper-button-prev swiper-button-prev--type-arrow" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-next--type-arrow" slot="button-next"></div>
                <button
                  type="button"
                  class="event-slider__pause"
                  :class="{ on : !onClickAutoPlay }"
                  @click="onClickAutoPlay = !onClickAutoPlay">
                  <span v-show="!onClickAutoPlay">자동재생</span>
                  <span v-show="onClickAutoPlay">일시정지</span>
                </button>
              </div>
              <div class="event-slider__control">
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </div>
            </div>
            <swiper
              ref="eventSwiper"
              class="event-slider__body"
              :options="swiperOption"
            >
              <swiper-slide class="event-slider__item">
                <a href="#" class="event-slider__link">
                  <div class="event-slider__image-wrap">
                    <img src="../assets/img_swiper-banner1.jpeg" alt="U+멤버십 고객 영화 2,000원 할인 이미지"
                         class="event-slider__image" />
                  </div>
                  <div class="event-slider__desc">
                    <p class="event-slider__title">U+멤버십 고객 영화 2,000원 할인</p>
                    <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="event-slider__item">
                <a href="#" class="event-slider__link">
                  <div class="event-slider__image-wrap">
                    <img src="../assets/img_swiper-banner2.jpeg" alt="차이로 결제하고 캐시백+쿠폰 혜택 받으세요! 이미지"
                         class="event-slider__image" />
                  </div>
                  <div class="event-slider__desc">
                    <p class="event-slider__title">차이로 결제하고 캐시백+쿠폰 혜택 받으세요!</p>
                    <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="event-slider__item">
                <a href="#" class="event-slider__link">
                  <div class="event-slider__image-wrap">
                    <img src="../assets/img_swiper-banner3.jpeg" alt="[알뜰교통카드 X 메가박스] 알뜰하게 영화보고 콤보 구매하는 방법 이미지"
                         class="event-slider__image" />
                  </div>
                  <div class="event-slider__desc">
                    <p class="event-slider__title">[알뜰교통카드 X 메가박스] 알뜰하게 영화보고 콤보 구매하는 방법</p>
                    <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="event-slider__item">
                <a href="#" class="event-slider__link">
                  <div class="event-slider__image-wrap">
                    <img src="../assets/img_swiper-banner4.jpeg" alt="U+멤버십 고객 영화 2,000원 할인 이미지"
                         class="event-slider__image" />
                  </div>
                  <div class="event-slider__desc">
                    <p class="event-slider__title">U+멤버십 고객 영화 2,000원 할인</p>
                    <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
                  </div>
                </a>
              </swiper-slide>
              <swiper-slide class="event-slider__item">
                <a href="#" class="event-slider__link">
                  <div class="event-slider__image-wrap">
                    <img src="../assets/img_swiper-banner5.jpeg" alt="신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요 이미지"
                         class="event-slider__image" />
                  </div>
                  <div class="event-slider__desc">
                    <p class="event-slider__title">신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요 </p>
                    <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
                  </div>
                </a>
              </swiper-slide>
            </swiper>
          </div>
          <div class="inner">
            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">메가Pick</h3>
              <more-button />
            </div>
            <ul class="event">
              <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                <ListItem :item="item"/>
              </li>
            </ul>

            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">영화</h3>
              <more-button />
            </div>
            <ul class="event">
              <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                <ListItem :item="item"/>
              </li>
            </ul>

            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">극장</h3>
              <more-button />
            </div>
            <ul class="event">
              <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                <ListItem :item="item"/>
              </li>
            </ul>

            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">제휴/할인</h3>
              <more-button />
            </div>
            <ul class="event">
              <li v-for="item in megaPickLists" :key="item.id" class="event__list">
                <ListItem :item="item"/>
              </li>
            </ul>

            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">시사회/무대인사</h3>
              <more-button />
            </div>
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
                  <router-link :to="tab.path" :class="['sub-tab__link', {'is-active': index === selectedTab}]">
                    {{ tab.name }}
                  </router-link>
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
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
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
        {id: 0, label: '전체'},
        {id: 1, label: '메가Pick'},
        {id: 2, label: '영화'},
        {id: 3, label: '극장'},
        {id: 4, label: '제휴/할인'},
        {id: 5, label: '시사회/무대인사'}
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
      ],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 40,
        disableOnInteraction: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        controller: {
          inverse: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
      },
      onClickAutoPlay: false,
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
    },
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

.event-slider {
  position: relative;
  height: 402px;
  margin: 40px 0 0 0;
  background-color: #f8f8fa;

  &__head {
    position: relative;
    width: 1100px;
    margin: 0 auto;
  }

  &__sub-title {
    margin: 0;
    padding: 40px 0 20px 0;
  }

  &__bullet {
    position: absolute;
    right: 105px;
    top: 51px;
    height: 2px;
  }

  &__pagination {
    display: inline-block;
    right: 0;
    left: unset;
    width: unset;
    top: 44px;
    color: #503396;
    line-height: 1.1;
  }

  &__util {
    position: absolute;
    right: 52px;
    top: 45px;
    height: 12px;
  }

  &__pause, &__play {
    display: block;
    float: left;
    height: 12px;
    margin: 0 0 0 12px;
    padding: 0;
    border: 0;
    font-size: 0;
    line-height: 0;
    background-color: transparent;
  }

  &__pause {
    width: 6px;
    background-image: url("../assets/pc/icon_swiper-pause.png");

    &.on {
      background-image: url("../assets/pc/icon_swiper-play.png");
    }
  }

  &__body {
    overflow: hidden;
    position: absolute;
    left: 50%;
    width: 1110px;
    margin: 0 0 0 -550px;
    padding: 0 0 0 0;
  }

  &__item {
    width: 530px;
  }

  &__image-wrap {
    width: 530px;
    height: 245px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &__image {
    width: 530px;
    height: 245px;
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &__desc {
    position: relative;
    line-height: 1.1;
    margin: 15px 0 0 0;
    padding: 0 170px 0 0;
  }

  &__title {
    overflow: hidden;
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #222;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  &__date {
    position: absolute;
    right: 0;
    top: 2px;
    font-size: 13px;
    padding: 0;
    margin: 0;
  }
}

.swiper-pagination-bullet {
  display: block;
  float: left;
  width: 30px;
  height: 2px;
  border-radius: 0;
  background-color: #fff;
  opacity: 1;

  &--active {
    background-color: #503396;
  }
}

.swiper-arrow-prev, .swiper-arrow-next {
  display: block;
  float: left;
  height: 12px;
  margin: 0 0 0 12px;
  padding: 0;
  border: 0;
  font-size: 0;
  line-height: 0;
  background-color: transparent;
  width: 7px;
  cursor: pointer;
}

.swiper-button-prev, .swiper-button-next {
  display: block;
  position: absolute;
  top: 180px;
  z-index: 2;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;
  line-height: 0;
  border-radius: 100%;
  box-shadow: 4px 4px 10px 0 rgb(45 45 45 / 30%);
  background-color: transparent;
  background-position: 0 0;
  background-repeat: no-repeat;

  &:after {
    content: unset;
  }

  &--type-arrow {
    position: relative;
    display: block;
    float: left;
    height: 12px;
    margin: 0 0 0 12px;
    padding: 0;
    border: 0;
    font-size: 0;
    line-height: 0;
    background-color: transparent;
    top: 0;
    width: 7px;
    border-radius: unset;
    box-shadow: none;
  }

}

.swiper-button-prev {
  left: -25px;
  background-image: url("../assets/pc/icon_swiper-button-prev.png");

  &--type-arrow {
    left: 0;
    background-image: url("../assets/pc/icon_swiper-arrow-prev.png");
  }
}

.swiper-button-next {
  right: -25px;
  background-image: url("../assets/pc/icon_swiper-button-next.png");

  &--type-arrow {
    right: 0;
    background-image: url("../assets/pc/icon_swiper-arrow-next.png");
  }
}

.swiper-wrapper {

}

</style>
