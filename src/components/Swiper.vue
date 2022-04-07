<template>
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
          class="event-slider__auto-play"
          @click="handleAutoPlay"
          v-if="dataPlay"
        >
          <span>자동재생</span>
        </button>
        <button
          type="button"
          class="event-slider__auto-stop"
          @click="handleAutoStop"
          v-else
        >
          <span>일시정지</span>
        </button>
      </div>
      <div class="event-slider__control">
        <div class="swiper-button-prev swiper-button-prev--color" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-next--color" slot="button-next"></div>
      </div>
    </div>
    <swiper
      ref="swiperRef"
      class="event-slider__body"
      :options="swiperOption"
    >
      <swiper-slide class="event-slider__item">
        <a href="#" class="event-slider__link">
          <div class="event-slider__image-wrap">
            <img src="../assets/img_swiper-banner1.jpeg" alt="U+멤버십 고객 영화 2,000원 할인 이미지"
                 class="event-slider__image"/>
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
                 class="event-slider__image"/>
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
                 class="event-slider__image"/>
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
                 class="event-slider__image"/>
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
                 class="event-slider__image"/>
          </div>
          <div class="event-slider__desc">
            <p class="event-slider__title">신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요 </p>
            <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
          </div>
        </a>
      </swiper-slide>
      <swiper-slide class="event-slider__item">
        <a href="#" class="event-slider__link">
          <div class="event-slider__image-wrap">
            <img src="../assets/img_swiper-banner5.jpeg" alt="신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요 이미지"
                 class="event-slider__image"/>
          </div>
          <div class="event-slider__desc">
            <p class="event-slider__title">신규 & 휴면회원 만반잘부! 모두 혜택 받아가세요 </p>
            <p class="event-slider__date">2021.02.01 ~ 2022.12.31</p>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper.vue',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      dataPlay: false,
      // handleAutoPlay: false,
      // handleAutoStop: true,
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
          inverse: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
      },
    }
  },
  methods: {
    onClickTab (index) {
      this.selectedTab = index
    },
    handleAutoPlay () {
      this.dataPlay = !this.dataPlay
      console.log(this.dataPlay);
      console.log(this.$refs.swiperRef)
      this.$refs.swiperRef.$swiper.autoplay.start()
      console.log(this.$refs.swiperRef.$swiper.autoplay.running)
    //   this.handleAutoStop = !this.handleAutoStop;
    },
    handleAutoStop () {
      this.dataPlay = !this.dataPlay
      this.$refs.swiperRef.$swiper.autoplay.stop()
    //   this.handleAutoPlay = true;
    }
  }
}
</script>

<style scoped lang="scss">
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

  &__auto-play, &__auto-stop  {
    display: block;
    float: left;
    height: 12px;
    margin: 0 0 0 12px;
    padding: 0;
    border: 0;
    font-size: 0;
    line-height: 0;
    background-color: transparent;
    width: 6px;
  }

  &__auto-play{
    background-image: url("../assets/pc/icon_swiper-play.png");
  }

  &__auto-stop{
    background-image: url("../assets/pc/icon_swiper-pause.png");
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
  &--color:hover{
    background-image: url("../assets/pc/icon_swiper-button-prev-color.png");
  }

  &--type-arrow {
    left: 0;
    background-image: url("../assets/pc/icon_swiper-arrow-prev.png");
  }
}

.swiper-button-next {
  right: -25px;
  background-image: url("../assets/pc/icon_swiper-button-next.png");
  &--color:hover{
    background-image: url("../assets/pc/icon_swiper-button-next-color.png");
  }

  &--type-arrow {
    right: 0;
    background-image: url("../assets/pc/icon_swiper-arrow-next.png");
  }
}
</style>
