<template>
  <header class="header">
    <h1 class="header__ci">
      <router-link to="/" class="header__home-link"><span class="sr-only">MEGABOX : Life Theater</span></router-link>
    </h1>

    <div class="util-area">
      <div class="util-area__left-lists">
        <router-link to="/" class="util-area__link">VIP LOUNGE</router-link>
        <router-link to="/" class="util-area__link">멤버십</router-link>
        <router-link to="/" class="util-area__link">고객센터</router-link>
      </div>
      <div class="util-area__right-lists">
        <router-link to="/" class="util-area__link">로그인</router-link>
        <router-link to="/" class="util-area__link">회원가입</router-link>
        <router-link to="/" class="util-area__link">빠른예매</router-link>
      </div>
    </div>

    <div class="link-area">
      <div class="link-area__lists">
        <router-link to="/" class="link-area__link link-area__link--sitemap">사이트맵</router-link>
        <router-link to="/" class="link-area__link link-area__link--search">검색</router-link>
        <router-link to="/" class="link-area__link link-area__link--timetable">상영시간표</router-link>
        <router-link to="/" class="link-area__link link-area__link--mypage">나의 메가박스</router-link>
      </div>
    </div>

    <nav class="gnb">
      <ul class="gnb__group">
        <li class="gnb__list">
          <router-link to="/" class="gnb__link gnb__link--movie"><span class="sr-only">영화</span></router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link gnb__link--reserve"><span class="sr-only">예매</span></router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/" class="gnb__link gnb__link--theater"><span class="sr-only">극장</span></router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/EventMain" class="gnb__link gnb__link--event"><span class="sr-only">이벤트</span></router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/StoreMain" class="gnb__link gnb__link--store"><span class="sr-only">스토어</span></router-link>
        </li>
        <li class="gnb__list">
          <router-link to="/BenefitMain" class="gnb__link gnb__link--benefit"><span class="sr-only">혜택</span></router-link>
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
      z-index: 10;
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

  .util-area {
    z-index: 10;
    position: relative;
    width: 1100px;
    margin: 0 auto;
    color: #666;

    &__left-lists {
      position: absolute;
      top: 15px;
      left: 0;
      font-size: 13px;
    }

    &__right-lists {
      position: absolute;
      top: 15px;
      right: 0;
      font-size: 13px;

      .util-area__link {
        margin-right: 0;
        margin-left: 20px;
      }
    }

    &__link {
      float: left;
      margin-right: 20px;
      vertical-align: top;
      color: #444;

      &:focus, &:hover {
        color: #666;
        text-decoration: underline;
      }
    }
  }

  .link-area {
    z-index: 10;
    position: relative;
    width: 1100px;
    margin: 0 auto;

    &__link {
      display: block;
      position: absolute;
      top: 42px;
      width: 36px;
      height: 36px;
      font-size: 0;
      line-height: 0;
      background-position: center;
      background-repeat: no-repeat;
      background-color: transparent;

      &--sitemap {
        left: 0;
        background-image: url('../assets/icon_hamburgur.png');
      }

      &--search {
        left: 40px;
        background-image: url('../assets/icon_search.png');
      }

      &--timetable {
        right: 40px;
        background-image: url('../assets/icon_timetable.png');
      }

      &--mypage {
        right: 0;
        background-image: url('../assets/icon_mypage.png');
      }
    }
  }

  .gnb {
    height: 91px;
    &__group {
      position: relative;
      width: 1100px;
      height: 100%;
      margin: 0 auto;
    }

    &__link {
      display: block;
      position: absolute;
      bottom: 0;
      height: 38px;
      background-position: center 0;
      background-repeat: no-repeat;

      &--movie {
        left: 166px;
        width: 30px;
        background-image: url('../assets/img_text-movie.png');
      }

      &--reserve {
        left: 256px;
        width: 30px;
        background-image: url('../assets/img_text-reserve.png');
      }

      &--theater {
        left: 345px;
        width: 31px;
        background-image: url('../assets/img_text-theater.png');
      }

      &--event {
        right: 347px;
        width: 45px;
        background-image: url('../assets/img_text-event.png');
      }

      &--store {
        right: 241px;
        width: 44px;
        background-image: url('../assets/img_text-store.png');
      }

      &--benefit {
        right: 150px;
        width: 29px;
        background-image: url('../assets/img_text-benefit.png');
      }
    }
  }
</style>
