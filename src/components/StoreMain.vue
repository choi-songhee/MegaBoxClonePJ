<template>
  <div class="container">
    <Location :lists="depthList"/>
    <div class="contents">
      <div class="inner">
        <h1 class="contents__title">스토어</h1>
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
            <div class="goods-area">
              <router-link to="/" class="goods-area__link">
                <div class="goods-area__text-wrap">
                  <strong class="goods-area__slogun c-gblue">1인1팝, 1인1콜!</strong>
                  <strong class="goods-area__slogun c-purple">더블콤보로 함께 해요!</strong>
                  <span class="goods-area__title">더블콤보</span>
                  <span class="goods-area__detail">팝콘(R) 2 + 탄산음료(R) 2</span>
                </div>
                <figure class="goods-area__img-wrap">
                  <img class="goods-area__img" src="../../static/dummy/images/img_bestGoods.png" alt="더블 콤보 상품 이미지">
                </figure>
              </router-link>
            </div>
            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">메가티켓</h3>
              <more-button />
            </div>
            <ul class="event">
              <li v-for="item in megaStoreLists" :key="item.id" class="event__list">
                <ListItem :item="item" :showPrice="true"/>
              </li>
            </ul>

            <div class="contents__title-wrap">
              <h3 class="contents__sub-title">팝콘/음료/굿즈</h3>
              <more-button />
            </div>
            <ul class="event">
              <li v-for="item in megaStoreLists" :key="item.id" class="event__list">
                <ListItem :item="item" :showPrice="true"/>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="currentId == 1">
          <div class="inner">
            <ul class="event event--empty-title">
              <li v-for="item in megaStoreLists" :key="item.id" class="event__list">
                <ListItem :item="item" :showPrice="true"/>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="currentId == 2">
          <div class="inner">
            <ul class="event event--empty-title">
              <li v-for="item in megaStoreLists" :key="item.id" class="event__list">
                <ListItem :item="item" :showPrice="true"/>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="currentId == 3">
          <EmptyResult :emptyMessage="emptyMessage"/>
        </div>
      </div>
    </div>
    <top-button />
  </div>
</template>

<script>
import Tab from './Tab'
import Location from './Location'
import ListItem from './ListItem'
import MoreButton from './MoreButton'
import EmptyResult from './EmptyResult'
import TopButton from './TopButton'

export default {
  name: 'StoreMain',
  components: {
    TopButton,
    Tab,
    Location,
    ListItem,
    MoreButton,
    EmptyResult
  },
  data () {
    return {
      currentId: 0,
      emptyMessage: '판매중인 상품이 없습니다.',
      list: [
        { id: 0, label: '새로운 상품' },
        { id: 1, label: '메가티켓' },
        { id: 2, label: '팝콘/음료/굿즈' },
        { id: 3, label: '포인트몰' }
      ],
      depthList: [
        {
          path: '/',
          depthName: '스토어'
        }
      ],
      megaStoreLists: [
        {
          src: '../../static/dummy/images/img_dummy01.jpeg',
          alt: '메가박스 오리지널 티켓 이미지',
          title: '메가박스 오리지널 티켓 No.49 <모비우스>',
          date: '2022.03.30 ~ 2022.04.13',
          price: '36,000',
          salePrice: '10,000',
          quantity: '56',
          eventLabel: 'EVENT'
        },
        {
          src: '../../static/dummy/images/img_dummy02.jpeg',
          alt: '2022 교향악축제 이미지',
          title: '[클래식소사이어티] 2022 교향악축제 초대 이벤트',
          date: '2022.03.30 ~ 2022.04.13',
          salePrice: '30,000',
          hotLabel: '대표상품'
        },
        {
          src: '../../static/dummy/images/img_dummy03.jpeg',
          alt: '봄시즌음료 이미지',
          title: '[봄시즌음료]딸기라떼, 옥수수라떼 론칭',
          date: '2022.03.30 ~ 2022.04.13',
          price: '36,000',
          salePrice: '10,000'
        },
        {
          src: '../../static/dummy/images/img_dummy04.jpeg',
          alt: '2022년 VIP 회원 혜택 이미지',
          title: '✌ 2022년 VIP 회원 혜택 안내 ✌',
          date: '2022.03.30 ~ 2022.04.13',
          salePrice: '40,000'
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
.goods-area {
  &__link {
    display: flex;
    width: 550px;
    justify-content: flex-start;
  }

  &__text-wrap {
    margin-top: 48px;
    flex: 0 0 265px;
  }

  &__slogun {
    display: block;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 400;

    + .goods-area__slogun {
      margin-top: 10px;
    }

    &.c-gblue {
      color: #01738b;
    }

    &.c-purple {
      color: #503396;
    }
  }

  &__title {
    display: block;
    margin-top: 30px;
    font-size: 18px;
    color: #222;
  }

  &__detail {
    display: block;
    font-size: 15px;
    color: #444;
  }

  &__img-wrap {
    flex: 0 0 300px;
    margin: 0;
  }

  &__img {
    width: 100%;
    height: auto;
  }

  + .contents__title-wrap {
    margin-top: 0;
  }
}
</style>
