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
        <div v-show="currentId == 1">tab cont2</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './Tab'
import Location from './Location'
import TextBanner from './TextBanner'
import IconListItem from './IconListItem'

export default {
  name: 'BenefitMain',
  components: {
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
</style>
