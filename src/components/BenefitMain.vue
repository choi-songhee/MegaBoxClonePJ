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
                <li class="dot-lists__list">결제가 완료된 후 적립 예정 포인트로 적립되며 <span
                  class="c-gblue">영화의 경우 상영일 익일, 매점의 경우 구매일 익일</span> 사용 가능한 포인트(가용 포인트) 로 전환됩니다.
                </li>
                <li class="dot-lists__list">회원이 로그인 후 온라인 서비스를 이용 하거나 현장 매표소, 키오스크에서 멤버십 카드 제시 또는 회원임을 확인 할 수 있는 정보를
                  제공하여야 포인트가 적립됩니다.
                </li>
                <li class="dot-lists__list">메가박스 및 제휴사 할인, 포인트 결제 등을 통해 할인 받은 금액을 제외한 실제 고객님께서 현금, 신용카드 등으로 유료 결제한 금액
                  기준으로 적립됩니다.
                </li>
                <li class="dot-lists__list">일부 영화, 상품, 극장, 결제 수단의 경우 적립이 되지 않거나 별도의 적립률이 적용될 수 있으며 상세 내용은 해당 상품, 극장 등에
                  별도 공지합니다.
                </li>
                <li class="dot-lists__list">VIP 선정 시 기준이 되는 포인트입니다.</li>
                <li class="dot-lists__list">포인트 적립은 티켓에 노출된 영화 시작 시간 이전까지만 가능하며, 영화 상영 및 매점 상품 구매 이후 사후 적립은 불가능합니다.</li>
              </ul>
              <h4 class="benefit-area__subject">포인트 적립 제외 극장</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  일부 극장의 경우 매점 구매 시 포인트 적립이 불가합니다.
                  <ul class="dash-lists">
                    <li class="dash-lists__list">매점 적립 제외 극장: 경산하양, 경주, 공주, 김천, 남양주, 남원, 남춘천, 북대구(칠곡), 속초, 순천, 아트나인,
                      안산중앙, 원주, 인천논현, 제천, 진천, 첨단, 청주사창, 충주, 파주금촌
                    </li>
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
                  으로 포인트를 차감하여 사용 가능하며, 매점 상품 구매 시 <span class="c-gblue">1,000포인트 이상 부터 10P단위로</span> 포인트를 차감하여 사용
                  가능합니다.<br/>
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
                    <li class="dash-lists__list">최소 1,000 포인트 부터 10포인트 단위 (키오스크, 모바일오더) 또는 500포인트 단위 (현장 직원 결제 시)로 사용
                      가능합니다.
                    </li>
                    <li class="dash-lists__list">포인트 사용 후 남은 금액에 대하여 현금 또는 신용카드 등으로 결제 가능합니다.</li>
                  </ul>
                </li>
                <li class="dot-lists__list">메가박스 및 제휴사 할인, 제휴 포인트 결제 등 할인 수단이 적용된 티켓, 매점 상품은 포인트로 구매할 수 없습니다.</li>
                <li class="dot-lists__list">오프라인에서 포인트 사용 시, 멤버십 카드 또는 메가박스 앱을 반드시 제시해야하며, 개인별로 설정된 포인트 비밀 번호 인증이 필요
                  합니다.
                </li>
                <li class="dot-lists__list">특별콘텐트 (오페라, 팝콘클래식, 기획전, GV, 라이브중계 등) 및 일부 영화는 포인트 사용 관람이 불가합니다.</li>
                <li class="dot-lists__list">매점 상품 중 프로모션 상품, 특가 상품 및 일부 품목은 포인트 사용이 제한될 수 있으며, 극장에 따라 사용 가능 상품이 상이할 수
                  있습니다.
                </li>
                <li class="dot-lists__list">“더 부티크 프라이빗” 관람 시 포인트 사용이 불가합니다.</li>
              </ul>
              <h4 class="benefit-area__subject">포인트 사용 제외 극장</h4>
              <ul class="dot-lists">
                <li class="dot-lists__list">
                  일부 극장의 경우 매점에서 포인트 사용이 불가합니다.
                  <ul class="dash-lists">
                    <li class="dash-lists__list">사용 제외 극장 : 경산하양, 경주, 공주, 김천, 남양주, 남원, 남춘천, 북대구(칠곡), 속초, 순천, 아트나인, 안산중앙,
                      원주, 인천논현, 제천, 진천, 첨단, 청주사창, 충주, 파주금촌
                    </li>
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
                  보유 포인트의 소멸 예정일이 도래할 경우, 포인트 소멸과 관련된 내용을 최소 15일 전에 문자 또는 이메일 등으로 고지합니다.<br/>
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
                    <li class="dash-lists__list">생일 2주전 쿠폰이 발행되며, 유효기간은 발행일로부터 4주입니다. (예 : 3월 16일 생일인 경우 3월 2일 발급, 3월
                      30일까지 사용 가능)
                    </li>
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
                <li class="dot-lists__list">플라스틱 카드를 수령하신 경우 홈페이지 ‘나의 메가박스 > 멤버십 포인트 > 멤버십 카드관리’에서 등록 후 이용하실 수 있습니다.
                </li>
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
                  <div class="button-wrap">
                    <button class="button">로그인</button>
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
              <h4 class="subject">2022년 VIP 선정 기준</h4>
              <div class="benefit-vip-selection__box-area">
                <div class="benefit-vip-selection__box benefit-vip-selection__box--vip">
                  <p class="benefit-vip-selection__title">VIP</p>
                  <p class="benefit-vip-selection__text">
                    2021년 누적 승급 포인트<br>
                    <br>
                    2,000 포인트 이상<br>
                    (2021년 VIP 회원)<br>
                    <br>
                    6,000 포인트 이상<br>
                    (2021년 일반 회원)</p>
                </div>
                <div class="benefit-vip-selection__box benefit-vip-selection__box--premium">
                  <p class="benefit-vip-selection__title">VIP PREMIUM</p>
                  <p class="benefit-vip-selection__text">
                    2021년 누적 승급포인트<br>
                    11,000 포인트 이상
                  </p>
                </div>
                <div class="benefit-vip-selection__box benefit-vip-selection__box--vvip">
                  <p class="benefit-vip-selection__title">VVIP</p>
                  <p class="benefit-vip-selection__text">
                    2021년 누적 승급포인트<br>
                    27,000 포인트 이상<br>
                    <br>
                    또는<br>
                    <br>
                    서로 다른 영화<br>
                    50편 이상 유료 관람
                  </p>
                </div>
              </div>
              <div class="benefit-vip-selection__period-area">
                <p class="dot-lists__list">선정기간 : 2021.01.01 ~ 2021.12.31 (상영일 기준)</p>
                <p class="dot-lists__list">자격기간 : 2022.03.02 ~ 2023.02.28 (상영일 기준)</p>
              </div>
              <ul class="benefit-ul">
                <li class="dot-lists__list">VIP 등급 선정 기준 및 혜택은 매년 상이할 수 있습니다.</li>
                <li class="dot-lists__list">VIP 회원 혜택은 내부 사정에 의하여 변경 또는 종료될 수 있습니다.</li>
                <li class="dot-lists__list">VIP 회원 추가 적립 포인트, 선물 받은 포인트, 이벤트 적립 포인트, 제휴처 적립 포인트 등은 VIP 산정에서 제외됩니다.</li>
                <li class="dot-lists__list">“서로 다른 영화”는 선정 기간 내 멤버십 포인트 적립된 영화 중 서로 다른 영화를 의미합니다. (동일 영화는 1편으로 산정)</li>
              </ul>
            </section>
            <section class="benefit-vip-advantage">
              <div class="contents__title-wrap">
                <h3 class="contents__sub-title">VIP 멤버십 혜택</h3>
              </div>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">VIP 쿠폰북</span>
                <span class="subject-desc">회원님의 취향에 따라 원하시는 쿠폰을 선택하시고 다운 받으세요!</span>
              </div>
              <ul class="benefit">
                <li v-for="item in vipBenefit" :key="item.id" class="benefit__list">
                  <IconListItem :item="item" class="benefit__item" :couponType="true"/>
                </li>
              </ul>
              <ul class="benefit-ul">
                <li class="dot-lists__list">본 혜택은 VIP 등급 유지 기간 중 제공됩니다. 직접 쿠폰을 선택하신 후 다운받으셔야 쿠폰을 이용하실 수 있습니다.</li>
                <li class="dot-lists__list">등급 별 VIP 쿠폰 제공이 상이하오니 VIP 쿠폰북 안내를 통해 확인해주세요.</li>
                <li class="dot-lists__list">쿠폰마다 유효 기간이 상이합니다. 유효기간을 꼭 확인해 주세요!</li>
              </ul>
              <div class="button-wrap button-wrap--vip">
                <a href="#" class="button button--color">VIP쿠폰 상세보기</a>
              </div>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">5년 연속 VIP 혜택</span>
                <span class="subject-desc">축하드립니다!<strong class="subject-desc--strong">5년 연속 VIP 회원</strong>에게 추가 혜택을 드립니다.</span>
              </div>
              <div class="benefit-vip-advantage__box-area">
                <IconListItem :item="specialCoupon" class="benefit__item" :couponType="true"/>
              </div>
              <ul class="benefit-ul">
                <li class="dot-lists__list">지난 VIP 등급 이력은 로그인 후 “나의 메가박스 > 지난 등급 조회”에서 확인 가능합니다.</li>
                <li class="dot-lists__list">스페셜 쿠폰은 2022년 3월 2일 이후 순차적으로 지급됩니다.</li>
                <li class="dot-lists__list">스페셜 쿠폰의 세부 사항은 쿠폰 발급 후, 쿠폰 내 유의 사항을 참고해 주십시오.</li>
              </ul>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">VIP 미션 이벤트 </span>
                <span class="subject-desc">매월 서로 다른 영화 5회 이상 관람 시 미션 성공 쿠폰 제공!</span>
              </div>
              <div class="benefit-vip-advantage__mission">
                <table class="mission-table">
                  <tbody class="mission-table__body">
                  <tr class="mission-table__tr">
                    <td class="mission-table__td">
                      <i class="icon-set icon_benefit-mission"></i>
                    </td>
                    <td class="mission-table__td">
                      <div>
                        <p class="mission-table__title">VIP, VIP PREMIUM</p>
                        <p class="mission-table__text">영화 2천원 할인 쿠폰 2매</p>
                      </div>
                      <div class="mission-table__td-div">
                        <p class="mission-table__title">VVIP</p>
                        <p class="mission-table__text">일반 2D 무료관람 쿠폰 1매</p>
                      </div>
                    </td>
                    <td class="mission-table__td">
                      <i class="icon-set icon_plus-circle">더하기</i>
                      콤보 4천원 할인 쿠폰 1매
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <ul class="benefit-ul">
                <li class="dot-lists__list">영화 유료 관람 후, 포인트가 적립된 티켓 기준으로 서로 다른 영화 관람 편수가 책정됩니다.</li>
                <li class="dot-lists__list">미션 달성 시 제공되는 쿠폰은 매월 2주차 내에 제공됩니다.</li>
                <li class="dot-lists__list">지급되는 쿠폰은 일부 제한 사항이 있을 수 있습니다. 쿠폰 내 유의 사항을 참고 바랍니다.</li>
                <li class="dot-lists__list">이벤트 진행 사항 및 경품 지급 내용은 사정에 따라 변경될 수 있습니다.</li>
              </ul>
              <div class="button-wrap button-wrap--vip">
                <button class="button button--color">VIP 미션 이벤트 보기</button>
              </div>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">VIP DAY</span>
                <span class="subject-desc">매주 수요일 영화 관람 시 포인트 추가 적립!</span>
              </div>
              <div class="benefit-vip-advantage__vip">
                <table class="vip-table">
                  <tbody class="vip-table__body">
                  <tr class="vip-table__tr">
                    <td class="vip-table__td">
                      <i class="icon-set icon_benefit-coin"></i>
                      <p class="vip-table__text">기본적립</p>
                    </td>
                    <td class="vip-table__td">
                    <i class="icon-set icon_plus-gray-big"></i>
                    </td>
                    <td class="vip-table__td">
                      <i class="icon-set icon_benefit-coin"></i>
                      <p class="vip-table__text">VIP 추가적립</p>
                    </td>
                    <td class="vip-table__td">
                      <i class="icon-set icon_plus-gray-big"></i>
                    </td>
                    <td class="vip-table__td">
                      <i class="icon-set icon_benefit-coin2"></i>
                      <p class="vip-table__text">
                        VIP DAY 추가 적립
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <ul class="benefit-ul">
                <li class="dot-lists__list">VIP 회원은 영화 관람 시, “기본 적립 포인트”만큼 추가 적립을 받을 수 있습니다.</li>
                <li class="dot-lists__list">수요일 영화 관람 시, “기본 적립 + VIP 추가 적립 포인트” 만큼 VIP DAY 포인트가 적립됩니다.</li>
                <li class="dot-lists__list">VIP 추가 적립, VIP DAY 적립 포인트는 VIP 선정 포인트에서 제외됩니다.</li>
                <li class="dot-lists__list">VIP 추가 적립, VIP DAY 적립 포인트 관련 사항은 변경될 수 있습니다.</li>
              </ul>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">VIP 생일 축하 쿠폰</span>
                <span class="subject-desc">생일 축하 콤보 무료 쿠폰 제공</span>
              </div>
              <ul class="benefit-ul">
                <li class="dot-lists__list">생일을 맞으신 VIP 고객님께 콤보 무료(오리지널 팝콘 L + 탄산음료 R * 2) 쿠폰을 드립니다.</li>
                <li class="dot-lists__list">생일 쿠폰은 1년에 1번 지급되며, 한번 발급되면 추가 발급되지 않습니다.</li>
                <li class="dot-lists__list">생일 쿠폰은 회원정보에 등록된 생일을 기준으로 쿠폰이 발급됩니다.</li>
                <li class="dot-lists__list">생일 2주전 쿠폰이 발행되며, 유효기간은 발행일로부터 4주입니다. (예: 3월 16일이 생일이라면 3월 2일부터 3월 30일까지 이용
                  가능)
                </li>
                <li class="dot-lists__list">발행된 쿠폰은 로그인 후 ‘나의 메가박스 > 쿠폰’에서 확인 가능합니다.</li>
                <li class="dot-lists__list">지급되는 쿠폰 혜택은 변경될 수 있습니다.</li>
              </ul>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">중앙멤버십 혜택</span>
                <span class="subject-desc">리조트 할인, CU 모바일 상품권 등 다양한 혜택을 받을 수 있는 중앙멤버십 카드를 신청하세요!</span>
              </div>
              <div class="benefit-vip-advantage__vip">
                <table class="vip-table">
                  <tbody>
                    <tr>
                      <td class="vip-table__td">
                        <i class="icon-set icon_benefit-jm-resort"></i>
                        <p class="vip-table__text">리조트회원 우대</p>
                      </td>
                      <td class="vip-table__td">
                        <i class="icon-set icon_plus-gray-big"></i>
                      </td>
                      <td class="vip-table__td">
                        <i class="icon-set ico-benefit-jm-sale"></i>
                        <p class="vip-table__text">메가박스 최대 9,000원 할인
                        </p>
                      </td>
                      <td class="vip-table__td">
                        <i class="icon-set icon_plus-gray-big"></i>
                      </td>
                      <td class="vip-table__td">
                        <i class="icon-set icon_benefit-jm-health-chk"></i>
                        <p class="vip-table__text">건강검진 우대</p>
                      </td>
                      <td class="vip-table__td">
                        <i class="icon-set icon_plus-gray-big"></i>
                      </td>
                      <td class="vip-table__td">
                        <i class="icon-set ico-benefit-jm-cu"></i>
                        <p class="vip-table__text">CU 모바일 상품권 10% 할인</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul class="benefit-ul">
                <li class="dot-lists__lists">본 혜택은 아래 카드 신청하기에서 중앙멤버십을 별도 신청하신 고객에 한해 적용 됩니다.</li>
                <li class="dot-lists__list">중앙멤버십 카드는 VIP 기신청자의 경우 자동 연장되며 휴대폰 번호당 1개만 발급 가능합니다..</li>
                <li class="dot-lists__list">제휴 혜택은 사정에 따라 변경되거나 종료될 수 있습니다.</li>
              </ul>
              <div class="button-wrap button-wrap--vip">
                <a href="#" class="button button--link">중앙멤버십 상세 안내</a>
                <button class="button button--color">카드 신청하기</button>
              </div>
              <div class="benefit-vip-advantage__sub-description">
                <span class="subject">VIP CULTURE EVENT</span>
                <span class="subject-desc">MEET PLAY SHARE 메가박스에서 당신의 문화생활을 위해 준비했어요~</span>
              </div>
              <ul class="benefit">
                <li v-for="item in cultureEvent" :key="item.id" class="benefit__list">
                  <IconListItem :item="item" class="benefit__item" :couponType="true" />
                </li>
              </ul>
              <ul class="benefit-ul">
                <li class="dot-lists__lists">VIP 회원 대상 교보문고 & 핫트랙스 10% 할인 쿠폰을 드립니다. (오프라인 / 1만원 이상 결제 시 사용 가능)</li>
                <li class="dot-lists__list">VIP 회원 중 마케팅 정보 수신 동의 회원 대상에 한하여 제공됩니다.</li>
                <li class="dot-lists__list">할인 쿠폰은 매월 초 메가박스APP으로 자동 발급됩니다. (나의 메가박스> 제휴쿠폰)</li>
                <li class="dot-lists__list">할인 쿠폰 사용 전 쿠폰 내 유의 사항을 반드시 확인 바랍니다.</li>
                <li class="dot-lists__list">제휴 혜택은 사정에 따라 내용이 변경되거나 종료될 수 있습니다.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
    <top-button/>
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
      vipBenefit: [
        {
          iconImg: require('@/assets/icon_benefit-movie.png'),
          iconAlt: '영화 아이콘',
          iconSize: 72,
          title: '영화',
          desc: 'VIP 영화관람 쿠폰'
        },
        {
          iconImg: require('@/assets/icon_point-cafeteria.png'),
          iconAlt: '매점 아이콘',
          iconSize: 72,
          title: '매점',
          desc: 'VIP 매점이용 쿠폰'
        }
      ],
      cultureEvent: [
        {
          iconImg: require('@/assets/icon_benefit-kyobo.png'),
          iconAlt: '교보문고 아이콘',
          iconSize: 72,
          title: '교보문고',
          desc: '10% 할인 쿠폰'
        },
        {
          iconImg: require('@/assets/icon_benefit-hot-tracks.png'),
          iconAlt: '핫트랙스 아이콘',
          iconSize: 72,
          title: '핫트랙스',
          desc: '10% 할인 쿠폰'
        }
      ],
      specialCoupon: {
        iconImg: require('@/assets/icon_benefit-movie.png'),
        iconAlt: '핫트랙스 아이콘',
        iconSize: 72,
        title: '핫트랙스',
        desc: '영화 관람 쿠폰 2매'
      }
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

.benefit-vip-lounge {
  background-image: url(../assets/bg_benefit-common-lounge.png);
  overflow: hidden;
  height: 344px;
  margin: 40px 0 0 0;
  padding: 0;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: transparent;

  &__title-area {
    float: left;
    width: 339px;
    height: 100%;
    text-align: center;
  }

  &__title {
    padding: 140px 0 0 0;
    line-height: 1.1;
    font-size: 31px;
    margin: 0;
  }

  &__text {
    padding: 12px 0 0 0;
    line-height: 1.3;
    margin: 0;

    &--type2 {
      padding: 30px 0 20px 0;
      line-height: 1.1;
    }
  }

  &__content-area {
    float: left;
    width: calc(100% - 339px);
    height: 100%;
  }

  &__login-before {
    height: 100%;
    padding: 75px 0 0 0;
    text-align: center;
  }
}

.benefit-vip-advantage {
  &__sub-description {
    margin-top: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  &__box-area {
    overflow: hidden;
    padding: 15px 0 0 0;
  }

  &__mission {
    margin-top: 15px;
    padding: 40px 0;
    text-align: center;
    border: 1px solid #ebebeb;
    border-radius: 10px;
  }

  &__vip{
    margin-top: 15px;
    padding: 30px 0 30px 0;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f4f5;
  }
}

.benefit-slider {
  margin: 70px 0;
}

.benefit-vip-selection {
  &__box-area {
    overflow: hidden;
  }

  &__box {
    float: left;
    width: 350px;
    height: 245px;
    margin: 0 0 0 25px;
    padding: 40px 0 0 142px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    background-color: #fff;
    background-position: 40px 40px;
    background-repeat: no-repeat;
    box-sizing: border-box;

    &:first-child {
      margin-left: 0;
    }

    &--vip {
      background-image: url("../assets/bg_benefit-vip-selection-vip.png");
    }

    &--premium {
      background-image: url("../assets/bg_benefit-vip-selection-vip-p.png");

      .benefit-vip-selection__title {
        color: #956c08;
      }
    }

    &--vvip {
      background-image: url("../assets/bg_benefit-vip-selection-vvip.png");

      .benefit-vip-selection__title {
        color: #513397;
      }
    }
  }

  &__title {
    font-size: 19px;
    line-height: 1.1;
    margin: 0;
  }

  &__text {
    padding: 15px 0 0 0;
    color: #222;
    margin: 0;
  }

  &__period-area {
    margin: 20px 0 0 0;
    padding: 15px 0;
    border: 1px solid #eeeff0;
    border-radius: 10px;
    background-color: #f9f9fa;
    text-align: center;

    .dot-lists__list {
      display: inline-block;
      position: relative;
      margin: 0 10px;
      padding: 0 0 0 10px;
      line-height: 1.1;
    }
  }
}

.benefit {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  overflow: hidden;
  padding: 15px 0 0 0;

  &__list {
    flex: 0 0 calc((100% - 40px) / 2);
  }

  &-ul {
    margin-top: 15px;
  }
}

.subject {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 400;
  color: #222;
  line-height: 1.1;

  &-desc {
    display: inline-block;
    position: relative;
    margin: 0 0 0 8px;
    padding: 0 0 0 10px;
    vertical-align: middle;
    color: #444;
    font-size: 15px;

    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 14px;
      background-color: #dedede;
    }

    &--strong {
      color: #01738b;
      font-weight: normal;
    }
  }
}

.mission-table {
  display: inline-table;
  width: auto;
  margin: 0;
  border: 0;
  table-layout: fixed;
  border-collapse: collapse;
  empty-cells: show;

  &__td {
    padding: 0;
    text-align: left;

    &-div {
      margin-top: 5px;
    }

    &:last-child {
      padding: 0 0 0 50px;
    }
  }

  &__title {
    display: inline-block;
    width: 200px;
    height: 38px;
    margin: 0 15px 0 0;
    text-align: center;
    line-height: 38px;
    border-radius: 19px;
    background-color: #f2f4f5;
  }

  &__text {
    display: inline-block;
    margin: 0;
    padding: 0;
  }
}

.vip-table{
  display: inline-table;
  width: auto;
  margin: 0;
  border: 0;
  table-layout: fixed;
  border-collapse: collapse;
  empty-cells: show;

  &__td{
    padding: 0 20px;
    vertical-align: top;
  }

  &__text{
    padding: 30px 0 0 0;
    line-height: 1.1;
    color: #222;
    margin: 0;
  }
}

.button-wrap {
  .button {
    width: 120px;
    padding: 0;
    background-color: transparent;
    line-height: 46px;
    height: 46px;
    border: 1px solid #c1c1c1;
    color: #444;
    font-weight: 400;
    border-radius: 4px;
    box-sizing: border-box;

    &--link {
      height: 46px;
      padding: 0 30px;
      line-height: 44px;
      margin: 0 3px;
      width: auto;
      color: #503396;
      display: inline-block;
      border: 1px solid #503396;
    }

    &--color {
      width: auto;
      color: #fff;
      margin: 0 3px;
      display: inline-block;
      border: 0;
      background-color: #503396;
      padding: 0 30px;
      text-decoration: none;
    }
  }

  &--vip {
    padding: 20px 0 0 0;
    text-align: center;
  }
}

.icon-question-circle-big {
  width: 93px;
  height: 93px;
  background-image: url("../assets/icon_question-circle-big.png");
}

.icon_benefit-mission {
  margin-right: 35px;
  width: 72px;
  height: 72px;
  background-image: url("../assets/icon_benefit-mission.png");
}

.icon_plus-circle {
  margin-right: 35px;
  width: 16px;
  height: 16px;
  background-image: url("../assets/icon_plus-circle.png");
}

.icon_benefit-coin{
  width: 72px;
  height: 72px;
  background-image: url("../assets/icon_benefit-coin.png");
}

.icon_plus-gray-big{
  margin-top: 18px;
  width: 31px;
  height: 31px;
  background-image: url("../assets/icon_plus-gray-big.png");
}

.icon_benefit-coin2{
  width: 90px;
  height: 72px;
  background-image: url("../assets/icon_benefit-coin2.png");
}

.icon_benefit-jm-resort{
  width: 72px;
  height: 72px;
  background-image: url("../assets/icon_benefit-jm-resort.png");
}

.ico-benefit-jm-sale{
  width: 72px;
  height: 72px;
  background-image: url("../assets/icon_benefit-jm-sale.png");
}

.icon_benefit-jm-health-chk{
  width: 72px;
  height: 72px;
  background-image: url("../assets/icon_benefit-jm-health-chk.png");
}

.ico-benefit-jm-cu{
  width: 72px;
  height: 72px;
  background-image: url("../assets/icon_benefit-jm-cu.png");
}

</style>
