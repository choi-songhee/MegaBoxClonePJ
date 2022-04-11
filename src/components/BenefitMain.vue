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
            <section class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">메가박스 멤버십 혜택</h3>
              </div>
              <ul class="benefit">
                <li v-for="item in BenefitLists" :key="item.id" class="benefit__list">
                  <IconListItem :item="item" class="benefit__item"/>
                </li>
              </ul>
            </section>
            <section class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">포인트 적립</h3>
              </div>
              <h4 class="benefit-area__subject">포인트 기본 적립</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  영화 티켓 구매 시 유료 결제 금액의 <span class="c-gblue">5~10%</span> 적립
                  <ul class="dash-lists">
                    <li class="dash-lists__list">일반회원 : 5% 적립</li>
                    <li class="dash-lists__list">VIP회원 : 10% 적립 (단, VIP 선정 기준은 5%만 반영)</li>
                  </ul>
                </li>
                <li class="dot-lists__list">매점 유료 결제 금액의 <span class="c-gblue">2%</span> 적립</li>
                <li class="dot-lists__list">결제가 완료된 후 적립 예정 포인트로 적립되며 <span class="c-gblue">영화의 경우 상영일 익일, 매점의 경우 구매일 익일</span> 사용 가능한 포인트(가용 포인트) 로 전환됩니다.</li>
                <li class="dot-lists__list">회원이 로그인 후 온라인 서비스를 이용 하거나 현장 매표소, 키오스크에서 멤버십 카드 제시 또는 회원임을 확인 할 수 있는 정보를 제공하여야 포인트가 적립됩니다.</li>
                <li class="dot-lists__list">메가박스 및 제휴사 할인, 포인트 결제 등을 통해 할인 받은 금액을 제외한 실제 고객님께서 현금, 신용카드 등으로 유료 결제한 금액 기준으로 적립됩니다.</li>
                <li class="dot-lists__list">일부 영화, 상품, 극장, 결제 수단의 경우 적립이 되지 않거나 별도의 적립률이 적용될 수 있으며 상세 내용은 해당 상품, 극장 등에 별도 공지합니다.</li>
                <li class="dot-lists__list">VIP 선정 시 기준이 되는 포인트입니다.</li>
                <li class="dot-lists__list">포인트 적립은 티켓에 노출된 영화 시작 시간 이전까지만 가능하며, 영화 상영 및 매점 상품 구매 이후 사후 적립은 불가능합니다.</li>
              </ul>
              <h4 class="benefit-area__subject">포인트 적립 제외 극장</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  일부 극장의 경우 매점 구매 시 포인트 적립이 불가합니다.
                  <ul class="dash-lists">
                    <li class="dash-lists__list">매점 적립 제외 극장: 경산하양, 경주, 공주, 김천, 남양주, 남원, 남춘천, 북대구(칠곡), 속초, 순천, 아트나인, 안산중앙, 원주, 인천논현, 제천, 진천, 첨단, 청주사창, 충주, 파주금촌</li>
                  </ul>
                </li>
                <li class="dot-lists__list">더 부티크 프라이빗 관람 시 포인트 적립이 불가합니다.</li>
              </ul>
              <h4 class="benefit-area__subject">기타 적립 안내</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">단체 영화 관람 및 매점 구매를 통해 가격 할인을 받은 경우 포인트는 적립되지 않습니다.</li>
                <li class="dot-lists__list">메가박스에서 발행된 관람권은 영화 가격과 무관하게 관람권이 판매된 가격 기준으로 포인트가 적립됩니다.</li>
                <li class="dot-lists__list">모바일 쿠폰(기프티콘, 쇼 등)으로 결제된 티켓은 포인트 적립이 제외됩니다.</li>
                <li class="dot-lists__list">위탁예매사(인터파크, YES24 등)을 통한 티켓 예매 시 회원정보가 동일할 경우 포인트가 적립됩니다.</li>
              </ul>
            </section>
            <section class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">포인트 사용</h3>
              </div>
              <h4 class="benefit-area__subject">포인트 사용</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  적립된 포인트는 사용 가능한 보유포인트 내에서 <span class="c-gblue">영화, 포토카드</span> 상품 구매 시 <span class="c-gblue">상품 정가 전액을 기준</span>
                  으로 포인트를 차감하여 사용 가능하며, 매점 상품 구매 시 <span class="c-gblue">1,000포인트 이상 부터 10P단위로</span> 포인트를 차감하여 사용 가능합니다.<br/>
                  (일부 상품 포인트 사용 제외 될 수 있으며 자세한 사항은 하기 내용 확인 바랍니다.)
                </li>
              </ul>
              <div class="table-wrap">
                <table class="table">
                  <caption class="table__caption">회원상품, 구분, 구포인트, 신포인트 항목을 가진 포인트 사용 표</caption>
                  <colgroup>
                    <col style="width: 140px;">
                    <col style="width: 140px;">
                    <col>
                  </colgroup>
                  <thead class="table__thead">
                    <tr>
                      <th scope="col">회원상품</th>
                      <th scope="col">구분</th>
                      <th scope="col">포인트 사용 기준</th>
                    </tr>
                  </thead>
                  <tbody class="table__tbody">
                    <tr>
                      <td rowspan="2">영화</td>
                      <td>사용 가능 요일</td>
                      <td>월~일(요일 무관)</td>
                    </tr>
                    <tr>
                      <td>차감 포인트</td>
                      <td>티켓 정가 100% 필요</td>
                    </tr>
                    <tr>
                      <td rowspan="2">매점</td>
                      <td>사용 가능 상품</td>
                      <td>매점 판매 상품(일부 상품 제외)</td>
                    </tr>
                    <tr>
                      <td>
                        차감<br/>
                        포인트
                      </td>
                      <td>
                        보유 포인트 내, 최소 1,000 포인트 부터 10 포인트 단위 사용 가능 (키오스크, 모바일 오더)<br/>
                        ※ 현장 직원 결제 시 500 포인트 단위 사용 가능
                      </td>
                    </tr>
                    <tr>
                      <td>포토카드</td>
                      <td>차감 포인트</td>
                      <td>장당 1,000 포인트</td>
                    </tr>
                    <tr>
                      <td>온라인 스토어</td>
                      <td>
                        차감<br/>
                        포인트
                      </td>
                      <td>상품별 차감 기준 상이 / 일부 상품 제외</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  영화 티켓 구매 시
                  <ul class="dash-lists">
                    <li class="dash-lists__list">포인트는 티켓가 전액 차감되며 현금 또는 신용카드 등 다른 결제 수단과 합산하여 사용할 수 없습니다.</li>
                    <li class="dash-lists__list">예 : 13,000원 티켓 구매 시, 13,000 포인트 필요 (전액 차감)</li>
                  </ul>
                </li>
                <li class="dot-lists__list">
                  매점 상품 구매시
                  <ul class="dash-lists">
                    <li class="dash-lists__list">최소 1,000 포인트 부터 10포인트 단위 (키오스크, 모바일오더) 또는 500포인트 단위 (현장 직원 결제 시)로 사용 가능합니다.</li>
                    <li class="dash-lists__list">포인트 사용 후 남은 금액에 대하여 현금 또는 신용카드 등으로 결제 가능합니다.</li>
                  </ul>
                </li>
                <li class="dot-lists__list">메가박스 및 제휴사 할인, 제휴 포인트 결제 등 할인 수단이 적용된 티켓, 매점 상품은 포인트로 구매할 수 없습니다.</li>
                <li class="dot-lists__list">오프라인에서 포인트 사용 시, 멤버십 카드 또는 메가박스 앱을 반드시 제시해야하며, 개인별로 설정된 포인트 비밀 번호 인증이 필요 합니다.</li>
                <li class="dot-lists__list">특별콘텐트 (오페라, 팝콘클래식, 기획전, GV, 라이브중계 등) 및 일부 영화는 포인트 사용 관람이 불가합니다.</li>
                <li class="dot-lists__list">매점 상품 중 프로모션 상품, 특가 상품 및 일부 품목은 포인트 사용이 제한될 수 있으며, 극장에 따라 사용 가능 상품이 상이할 수 있습니다.</li>
                <li class="dot-lists__list">“더 부티크 프라이빗” 관람 시 포인트 사용이 불가합니다.</li>
              </ul>
              <h4 class="benefit-area__subject">포인트 사용 제외 극장</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  일부 극장의 경우 매점에서 포인트 사용이 불가합니다.
                  <ul class="dash-lists">
                    <li class="dash-lists__list">사용 제외 극장 : 경산하양, 경주, 공주, 김천, 남양주, 남원, 남춘천, 북대구(칠곡), 속초, 순천, 아트나인, 안산중앙, 원주, 인천논현, 제천, 진천, 첨단, 청주사창, 충주, 파주금촌</li>
                  </ul>
                </li>
              </ul>
            </section>
            <section class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">유효기간 및 소멸</h3>
              </div>
              <h4 class="benefit-area__subject">포인트 유효기간</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">기본 적립 포인트 : 적립일로부터 24개월이 지난 해당월 말일 (티켓 및 매점 유료 구매 시)</li>
                <li class="dot-lists__list">선물 받은 포인트 : 선물 받은 날로부터 3개월이 지난 해당월 말일</li>
                <li class="dot-lists__list">이벤트 적립 포인트 : 이벤트 마다 유효기간이 상이(개별 확인 필요)</li>
              </ul>
              <h4 class="benefit-area__subject">포인트 소멸</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">유효기간이 경과된 포인트는 매월 말일 영업 종료 후 포인트가 자동 소멸됩니다.</li>
                <li class="dot-lists__list">소멸 기준은 잔여 가용 포인트 중 유효기간이 가장 짧은 포인트부터 소멸되며, 소멸된 포인트는 복구되지 않습니다.</li>
                <li class="dot-lists__list">
                  보유 포인트의 소멸 예정일이 도래할 경우, 포인트 소멸과 관련된 내용을 최소 15일 전에 문자 또는 이메일 등으로 고지합니다.<br />
                  또한, 홈페이지 및 모바일 웹/앱 로그인 시 소멸 예정 포인트를 확인하실 수 있습니다.
                </li>
              </ul>
            </section>
            <section class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">생일 축하 쿠폰</h3>
              </div>
              <h4 class="benefit-area__subject">생일 축하 쿠폰 증정!</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">생일 쿠폰은 메가박스 회원에게만 제공됩니다.</li>
                <li class="dot-lists__list">생일 쿠폰은 1년에 1회 지급되며, 한 번 발급되면 추가 발급되지 않습니다.</li>
                <li class="dot-lists__list">
                  생일 쿠폰은 회원정보에 등록된 생일을 기준으로 발급됩니다.
                  <ul class="dash-lists">
                    <li class="dash-lists__list">생일 2주전 쿠폰이 발행되며, 유효기간은 발행일로부터 4주입니다. (예 : 3월 16일 생일인 경우 3월 2일 발급, 3월 30일까지 사용 가능)</li>
                  </ul>
                </li>
                <li class="dot-lists__list">발행된 쿠폰은 로그인 후 ‘나의 메가박스 > 쿠폰’에서 확인 가능합니다.</li>
                <li class="dot-lists__list">쿠폰 발급일 기준, 정상 회원에게만 제공됩니다. (쿠폰 발급일 이후 가입, 휴면 회원 상태 고객 등 제외)</li>
                <li class="dot-lists__list">쿠폰 내용, 지급 일정, 사용 방법 등은 내부 사정에 따라 변경될 수 있습니다.</li>
              </ul>
            </section>
            <section class="benefit-area">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">멤버십 카드</h3>
              </div>
              <ul class="dot-lists">
                <li class="dot-lists__list">극장 이용 시 멤버십 카드를 꼭 제시해주세요!</li>
              </ul>
              <div class="card">
                <img src="../assets/img_membership-card.png" alt="멤버십 카드 이미지" class="card__image">
              </div>
              <ul class="dot-lists">
                <li class="dot-lists__list">메가박스 회원가입 시 모바일 카드가 자동 발급됩니다.</li>
                <li class="dot-lists__list">플라스틱 카드 수령을 원하시는 분은 메가박스 현장 매표소에서 받으실 수 있습니다.</li>
                <li class="dot-lists__list">플라스틱 카드를 수령하신 경우 홈페이지 ‘나의 메가박스 > 멤버십 포인트 > 멤버십 카드관리’에서 등록 후 이용하실 수 있습니다.</li>
              </ul>
            </section>
          </div>
        </div>
        <div v-show="currentId == 1">
          <div class="inner">
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
          <div class="benefit-slider">
            <Swiper></Swiper>
          </div>
          <div class="inner">
            <section class="benefit-vip-selection">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">VIP 선정 기준</h3>
              </div>
              <h4 class="benefit-area__subject">2022년 VIP 선정 기준</h4>
              <div class="benefit-vip-selection__box-area">
                <div v-for="box in vipSelectionList" :key="box.id" class="benefit-vip-selection__box">
                  <img :src="box.iconImg" :alt="box.iconAlt" class="benefit-vip-selection__icon">
                  <div class="benefit-vip-selection__text-area">
                    <p class="benefit-vip-selection__title">{{box.title}}</p>
                    <p class="benefit-vip-selection__text">{{box.text}}</p>
                    <p class="benefit-vip-selection__text">{{box.text2}}</p>
                    <p class="benefit-vip-selection__text">{{box.text3}}</p>
                  </div>
                </div>
              </div>
            </section>
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
import Swiper from './Swiper'

export default {
  name: 'BenefitMain',
  components: {
    TopButton,
    TextBanner,
    Tab,
    Location,
    IconListItem,
    Swiper
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
          iconImg: require('@/assets/icon_point-save.png'),
          iconAlt: '포인트 적립 아이콘',
          iconSize: 72,
          title: '포인트 적립',
          desc: '영화 티켓, 매점 상품 구매 시 등급에 따라\n' +
            '5 ~ 10% 포인트를 적립할 수 있어요',
          buttonName: '자세히 보기'
        },
        {
          iconImg: require('@/assets/icon_point-present.png'),
          iconAlt: '포인트 선물 아이콘',
          iconSize: 64,
          title: '포인트 선물',
          desc: '사랑하는 가족, 친구에게 포인트를 선물하세요\n' +
            '포인트 선물은 신포인트만 가능해요\n' +
            '* 상세 내용은 모바일앱에서 확인해 주세요!'
        },
        {
          iconImg: require('@/assets/icon_point-use.png'),
          iconAlt: '포인트 사용 아이콘',
          iconSize: 63,
          title: '포인트 사용',
          desc: '보유한 포인트로 원하는 영화 보고\n' +
            '팝콘도 구매하세요',
          buttonName: '자세히 보기'
        },
        {
          iconImg: require('@/assets/icon_point-birthday.png'),
          iconAlt: '생일 축하 쿠폰 아이콘',
          iconSize: 62,
          title: '생일 축하 쿠폰',
          desc: '회원이라면 누구나 생일 축하 쿠폰을 드려요',
          buttonName: '자세히 보기'
        },
        {
          iconImg: require('@/assets/icon_point-vip.png'),
          iconAlt: 'VIP LOUNGE 아이콘',
          iconSize: 65,
          title: 'VIP LOUNGE',
          desc: 'VIP 회원이라면\n' +
            '더 많은 추가 혜택을 받을 수 있어요',
          buttonName: 'VIP LOUNGE'
        },
        {
          iconImg: require('@/assets/icon_point-special.png'),
          iconAlt: '스페셜 멤버십 아이콘',
          iconSize: 61,
          title: '스페셜 멤버십',
          desc: '메가박스 멤버십 혜택에\n' +
            '스페셜 멤버십 추가혜택도 받을 수 있어요',
          buttonName: '스페셜멤버십 안내'
        }
      ],
      vipSelectionList: [
        {
          iconImg: require('@/assets/bg_benefit-vip-selection-vip.png'),
          iconAlt:'VIP 선정기준 아이콘',
          title: 'VIP',
          text:'2021년 누적 승급 포인트',
          text2:'2,000 포인트 이상\n' +
            '(2021년 VIP 회원)',
          text3:'6,000 포인트 이상\n' +
            '(2021년 일반 회원)'
        },
        {
          iconImg: require('@/assets/bg_benefit-vip-selection-vip-p.png'),
          iconAlt:'VIP PREMIUM 선정기준 아이콘',
          title: 'VIP PREMIUM',
          text:'2021년 누적 승급포인트\n' +
            '11,000 포인트 이상'
        },
        {
          iconImg: require('@/assets/bg_benefit-vip-selection-vvip.png'),
          iconAlt:'VVIP 선정기준 아이콘',
          title: 'VVIP',
          text:'2021년 누적 승급포인트\n' +
            '27,000 포인트 이상',
          text2:'또는',
          text3:'서로 다른 영화\n' +
            '50편 이상 유료 관람'
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

  &__subject {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 400;
    color: #222;
    line-height: 1.1;
  }

  .dot-lists + .benefit-area__subject {
    margin-top: 30px;
  }

  .card {
    margin: 5px 0;
    padding: 30px 0;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f4f5;
  }
}
.benefit {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  &__list {
    flex: 0 0 calc((100% - 40px) / 2);

    .icon-card {
      min-height: 210px;
    }
  }
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
.benefit-slider{
  margin: 70px 0;
}
.benefit-vip-selection{
  &__box-area{
    overflow: hidden;
  }
}
</style>
