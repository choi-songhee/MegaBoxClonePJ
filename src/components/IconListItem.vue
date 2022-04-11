<template>
  <div class="icon-card">
    <div class="icon-card__icon-wrap">
      <img :src="item.iconImg" :alt="item.iconAlt" class="icon-card__icon" :width="iconSize">
    </div>
    <div class="icon-card__text-wrap">
      <strong class="icon-card__title">{{ item.title }}</strong>
      <span class="icon-card__desc">{{ item.desc }}</span>
      <Button v-show="item.buttonName" :buttonName="item.buttonName"/>
    </div>
  </div>
</template>

<script>
import Button from './Button'

export default {
  name: 'IconListItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Button
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.icon-card {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ebebeb;
  border-radius: 10px;

  &__icon-wrap {
    flex: 0 0 190px;
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 50px;
  }

  &__icon {
    display: inline-block;
    height: auto;
  }

  &__text-wrap {
    padding: 40px 60px 35px 0;
  }

  &__title {
    display: block;
    font-size: 20px;
    font-weight: 400;
    color: #503396;
    line-height: 1.1;
  }

  &__desc {
    display: block;
    min-height: 66px;
    margin-top: 10px;
    font-size: 15px;
    color: #444;
  }
}
</style>
