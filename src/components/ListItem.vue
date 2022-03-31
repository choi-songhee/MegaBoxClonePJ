<template>
  <div class="card">
    <router-link to="/" class="card__link">
      <figure class="card__image-wrap">
        <img :src="item.src" :alt="item.alt" class="card__image">
      </figure>
      <div class="card__info">
        <strong class="card__title">{{ item.title }}</strong>
        <span class="card__date">{{ item.date }}</span>
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
      .card__title,
      .card__date {
        text-decoration: underline;
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
    font-size: 13px;
    line-height: 1.1;
    color: #666;
  }
}
</style>
