<template>
    <footer class="footer">
    <!--  footer-top  -->
    <div class="footer__top">
        <ul class="fnb">
          <li class="fnb__list"><router-link to="/" class="fnb__link">회사소개</router-link></li>
          <li class="fnb__list"><router-link to="/" class="fnb__link">인재채용</router-link></li>
          <li class="fnb__list"><router-link to="/" class="fnb__link">사회공헌</router-link></li>
          <li class="fnb__list"><router-link to="/" class="fnb__link">제휴/광고/부대사업문의</router-link></li>
          <li class="fnb__list"><router-link to="/" class="fnb__link">이용약관</router-link></li>
          <li class="fnb__list"><router-link to="/" class="fnb__link">위치기반서비스 이용약관</router-link>
          <li class="fnb__list"><router-link to="/" class="fnb__link fnb__link--privacy">개인정보처리방침</router-link></li>
          <li class="fnb__list"><a href="#" target="_blank" title="윤리경영 페이지로 이동" class="fnb__link">윤리경영</a></li>
        </ul>

        <router-link to="/" class="search-theater">
          <i class="icon-search icon-set"></i>
          극장찾기
        </router-link>
      </div>
    <!-- // footer-top  -->

    <!--  footer-bottom  -->
    <div class="footer__bottom">
        <div class="footer__ci">MEGABOX : LIFE Theater</div>
        <div class="footer__info">
          <div class="address">
            <address class="address__info">서울특별시 마포구 월드컵로 240, 지상2층(성산동, 월드컵주경기장)</address>
            <span class="address__tel">ARS 1544-0070</span>
          </div>
          <span>대표자명 홍정인</span>
          <span>· 개인정보보호책임자 공성진</span>
          <span>· 사업자등록번호 211-86-59478</span>
          <span>· 통신판매업신고번호 제 2020-서울마포-4545 호</span>
          <p class="footer__copyright">COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
        </div>
        <div class="footer__sns">
          <a href="https://twitter.com/megaboxon" target="_blank" title="megabox 트위터 페이지로 이동" class="footer__sns-link">
            <i class="icon-twitter icon-set">트위터</i>
          </a>
          <a href="https://www.facebook.com/megaboxon" target="_blank" title="megabox 페이스북 페이지로 이동" class="footer__sns-link">
            <i class="icon-facebook icon-set">페이스북</i>
          </a>
          <a href="http://instagram.com/megaboxon" target="_blank" title="megabox 인스타그램 페이지로 이동" class="footer__sns-link">
            <i class="icon-instagram icon-set">인스타그램</i>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.megabox.mop" target="_blank" title="megabox 구글플레이 페이지로 이동" class="footer__sns-link">
            <i class="icon-googleplay icon-set">구글플레이</i>
          </a>
          <a href="https://itunes.apple.com/kr/app/megabox/id894443858?l=ko&ls=1&mt=8" target="_blank" title="megabox 앱스토어 페이지로 이동" class="footer__sns-link">
            <i class="icon-appstore icon-set">앱스토어</i>
          </a>
        </div>
    </div>
    <!-- // footer-bottom  -->
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  min-width: 1100px;
  width: 100%;
  height: 200px;
  margin: 0;
  padding: 0;
  background-color: #f8f8fa;
  box-sizing: border-box;

  &__top {
    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
    padding: 30px 0;
  }

  .fnb {
    float: left;
    list-style-type: none;
    margin: 0;
    padding: 0;

    &__list {
      float: left;
      margin-left: 14px;
      &:first-child{
        margin-left: 0;
      }
    }

    &__link {
      display: block;
      color: #666;
      line-height: 30px;
      font-size: 13px;
      text-decoration: #666;
      &:hover{
        text-decoration: underline;
      }
      &--privacy {
        color: #222;
        font-weight: 700;
      }
    }
  }

  .search-theater {
    cursor: pointer;
    overflow: hidden;
    float: right;
    display: block;
    width: 106px;
    height: 30px;
    text-align: center;
    line-height: 28px;
    color: #666;
    font-size: 13px;
    border: 1px solid #d8d9db;
    border-radius: 30px;
    text-decoration: none;
  }

  .icon{
    cursor: pointer;
    &-search{
      margin-right: 4px;
      width: 15px;
      height: 15px;
      background-image: url('../assets/icon_search-white.png');
    }
    &-twitter{
      width: 32px;
      height: 30px;
      background-image: url("../assets/icon_twitter.png");
    }
    &-facebook{
      width: 32px;
      height: 30px;
      background-image: url("../assets/icon_facebook.png");
    }
    &-instagram{
      width: 32px;
      height: 30px;
      background-image: url("../assets/icon_instagram.png");
    }
    &-googleplay{
      width: 32px;
      height: 30px;
      background-image: url("../assets/icon_googleplay.png");
    }
    &-appstore{
      width: 32px;
      height: 30px;
      background-image: url("../assets/icon_appstore.png");
    }
  }

  &__bottom {
    overflow: hidden;
    width: 1100px;
    margin: 0 auto;
    padding: 0;
  }

  &__ci {
    overflow: hidden;
    display: block;
    float: left;
    width: 150px;
    height: 50px;
    margin: 0 20px 0 0;
    padding: 0;
    text-indent: -9999px;
    background: url('../assets/icon_logo-opacity.png');
  }

  &__info {
    float: left;
    font-size: 13px;
    letter-spacing: 0;
  }

  .address{
    &__info{
      display: inline-block;
      font-style: normal;
    }
  }

  &__copyright{
    margin: 0;
  }

  &__sns{
    float: right;
    &-link{
      display: block;
      float: left;
      width: 32px;
      height: 30px;
      margin-left: 5px;
      font-size: 0;
      line-height: 0;
    }
  }
}
</style>
