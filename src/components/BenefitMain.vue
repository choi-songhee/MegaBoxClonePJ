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
            <div class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">메가박스 멤버십 혜택</h3>
              </div>
              <ul class="benefit">
                <li v-for="item in BenefitLists" :key="item.id" class="benefit__list">
                  <IconListItem :item="item" class="benefit__item"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-show="currentId == 1">
          <div class="benefit-vip-lounge">
            <div class="benefit-vip-lounge__title-area">
              <p class="benefit-vip-lounge__title">MEGABOX VIP</p>
              <p class="benefit-vip-lounge__text">메가박스의 더 많은 혜택을 누릴 수 있는 방법!</p>
            </div>
            <div class="benefit-vip-lounge__content-area">
              <div class="benefit-vip-lounge__login-before">
                <i class="icon-set icon-question-circle-big"></i>
                <p class="benefit-vip-lounge__text benefit-vip-lounge__text--type2">로그인 후 메가박스 등급을 확인하세요.</p>
                <div class="benefit-vip-lounge__login-area">
                  <button class="benefit-vip-lounge__login-button">로그인</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <top-button />
  </div>
</template>

<script>
import Tab from './Tab'
import Location from './Location'
import TextBanner from './TextBanner'
import TopButton from './TopButton'
import IconListItem from './IconListItem'

export default {
  name: 'BenefitMain',
  components: {
    TopButton,
    TextBanner,
    Tab,
    Location,
    IconListItem
  },
  data () {
    return {
      currentId: 0,
      buttonName: '자세히 보기',
      bannerTitle: 'MEGABOX MEMBERSHIP',
      bannerDesc: '메가박스 멤버십 회원에게만 제공되는 다양한 혜택',
      list: [
        {id: 0, label: '멤버십 안내'},
        {id: 1, label: 'VIP LOUNGE'}
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
      ],
      BenefitLists: [
        {
          iconBgClass: 'icon--point-save',
          title: '포인트 적립',
          desc: '영화 티켓, 매점 상품 구매 시 등급에 따라\n' +
            '5 ~ 10% 포인트를 적립할 수 있어요',
          buttonName: '자세히 보기'
        },
        {
          src: '../../static/dummy/images/img_dummy01.jpeg',
          title: '포인트 선물',
          desc: '영화 티켓, 매점 상품 구매 시 등급에 따라\n' +
            '5 ~ 10% 포인트를 적립할 수 있어요'
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
.benefit-area {
  .contents__title-wrap {
    margin-bottom: 16px;
  }
}
.benefit {
  display: flex;
  gap: 40px;

  &__list {
    flex: 0 0 calc((100% - 40px) / 2);
  }
}
.icon-card {
  &__icon {
    .icon--point-save {
      background: url('../assets/icon_point-save.png');
    }
  }
}
.tab-content{
  width: 1100px;
  margin: 0 auto;
}
.benefit-vip-lounge{
  background-image: url(../assets/bg_benefit-common-lounge.png);
  overflow: hidden;
  height: 344px;
  margin: 40px 0 0 0;
  padding: 0;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: transparent;
  &__title-area{
    float: left;
    width: 339px;
    height: 100%;
    text-align: center;
  }
  &__title{
    padding: 140px 0 0 0;
    line-height: 1.1;
    font-size: 31px;
    margin: 0;
  }
  &__text{
    padding: 12px 0 0 0;
    line-height: 1.3;
    margin: 0;
    &--type2{
      padding: 30px 0 20px 0;
      line-height: 1.1;
    }
  }
  &__content-area{
    float: left;
    width: calc(100% - 339px);
    height: 100%;
  }
  &__login-before{
    height: 100%;
    padding: 75px 0 0 0;
    text-align: center;
  }
  &__login-button{
    width: 120px;
    padding: 0;
    background-color: transparent;
    line-height: 46px;
    height: 46px;
    border: 1px solid #c1c1c1;
    color: #444;
    font-weight: 400;
    border-radius: 4px;
  }
}
.icon-question-circle-big{
  width: 93px;
  height: 93px;
  background-image: url("../assets/icon_question-circle-big.png");
}
</style>
