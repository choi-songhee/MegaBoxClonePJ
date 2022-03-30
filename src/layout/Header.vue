<template>
  <header class="header">
    <h1 class="header__ci">
      <a href="/" title="event main으로 가기" class="header__home-link">MEGABOX : Life Theater</a>
    </h1>

    <nav class="gnb">
      <ul class="gnb__group">
        <li class="gnb__list">
          <router-link to="/" class="gnb__link">영화</router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link">예매</router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link">극장</router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link">이벤트</router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link">스토어</router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link">혜택</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    z-index: 100;
    width: 100%;
    min-width: 1100px;
    height: 91px;
    background: #fff;
    border-bottom: 1px solid #351f67;

    &__ci {
      position: absolute;
      left: 50%;
      top: 23px;
      width: 140px;
      height: 90px;
      margin: 0 0 0 -70px;
      padding: 0;
    }

    &__home-link {
      display: block;
      width: 140px;
      height: 47px;
      margin: 0;
      padding: 0;
      font-size: 0;
      line-height: 0;
      background: url('../assets/img_logo.png') center center no-repeat;
    }
  }

  .gnb {
    &__group {
      position: relative;
      width: 1100px;
      margin: 90px auto 0 auto;
    }

    &__list {
      &:first-child {
        .gnb__link {
          left: 166px;
        }
      }
    }

    &__link {
      display: block;
      position: absolute;
      top: -38px;
      height: 38px;
      text-indent: -9999px;
      background-position: center 0;
      background-repeat: no-repeat;
    }
  }
</style>
