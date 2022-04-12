<template>
  <div class="search-area">
  <div class="search-area__util">
    <p class="search-area__result-count">
      <strong>전체 <b class="search-area__result-count--number">7</b>건</strong>
    </p>
    <div class="board-search">
      <input type="text" title="검색어를 입력해 주세요." placeholder="검색어를 입력해 주세요." class="board-search__input">
      <button type="button" class="board-search__button">검색</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SearchArea'
}
</script>

<style lang="scss" scoped>
.search-area{
  width: 1100px;
  margin: 0 auto;
  &__util{
    margin: 40px 0 15px 0;
    text-align: right;
  }
  &__result-count{
    position: relative;
    float: left;
    padding-top: 15px;
    line-height: 1.1;
    font-size: 15px;
    margin: 0;
    &--number{
      color: #01738b;
    }
  }
  .board-search{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 230px;
    height: 36px;
    margin: 0;
    padding: 0 31px 0 0;
    border: 1px solid #d8d9db;
    border-radius: 3px;
    box-sizing: border-box;
    &__input{
      display: block;
      width: 100%;
      height: 34px;
      border: 0;
      padding: 0 10px;
      line-height: 30px;
      color: #444;
    }
    &__button{
      position: absolute;
      right: 1px;
      top: 1px;
      width: 30px;
      height: 32px;
      font-size: 0;
      line-height: 0;
      border: 0;
      background: #fff url("../assets/icon_search-white.png") no-repeat center;
      cursor: pointer;
      padding: 0;
    }
  }
}
</style>
