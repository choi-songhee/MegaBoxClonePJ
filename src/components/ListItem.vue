<template>
  <div class="card">
    <router-link to="/" class="card__link">
      <div v-show="item.eventLabel" class="card__label event">
        {{ item.eventLabel }}
      </div>
      <div v-show="item.hotLabel" class="card__label hot">
        {{ item.hotLabel }}
      </div>
      <figure class="card__image-wrap">
        <img :src="item.src" :alt="item.alt" class="card__image">
      </figure>
      <div class="card__info">
        <strong class="card__title">{{ item.title }}</strong>
        <span class="card__date">{{ item.date }}</span>
        <div v-if="showPrice" class="price">
          <span v-show="item.price" class="price__original">{{ item.price }}원</span>
          <div class="price__detail">
            <span v-show="item.salePrice" class="price__sale">{{ item.salePrice }}원</span>
            <span v-show="item.quantity" class="price__quantity"><em class="price__quantity-num">{{ item.quantity }}</em>개 남음</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    showPrice: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  &__link {
    overflow: hidden;
    display: block;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    min-height: 364px;

    &:hover {
      border: 1px solid #503396;

      .card__title,
      .card__date {
        text-decoration: none;
      }
    }
  }

  &__image-wrap {
    width: 100%;
    margin: 0;
    height: 244px;
    font-size: 0;
    line-height: 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #eee;
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  &__label {
    overflow: hidden;
    position: absolute;
    top: -1px;
    left: -1px;
    height: 24px;
    padding: 0 10px;
    line-height: 27px;
    color: #fff;
    font-size: 13px;

    &.event {
      background-color: #ed4c57;
    }

    &.hot {
      background-color: #000;
    }
  }

  &__info {
    padding: 20px 17px;
  }

  &__title {
    overflow: hidden;
    display: block;
    height: 40px;
    margin-bottom: 10px;
    line-height: 1.3;
    font-size: 15px;
    font-weight: 700;
    color: #222;
  }

  &__date {
    display: block;
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 1.1;
    color: #666;
  }

  .price {
    position: relative;
    padding: 35px 0 0 0;
    line-height: 1.1;
    border-top: 1px solid #e4e4e4;

    &__original {
      position: absolute;
      left: 0;
      top: 15px;
      color: #666;
      font-size: 15px;
      text-decoration: line-through;
    }

    &__detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__sale {
      color: #503396;
      font-size: 24px;
    }

    &__quantity {
      font-size: 15px;
      color: #666;
    }

    &__quantity-num {
      color: #444;
      font-style: normal;
    }
  }

  &.underline-title {
    &:hover {
      .card__title,
      .card__date {
        text-decoration: underline !important;
      }
    }
  }
}
</style>
