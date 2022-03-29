<template>
  <header class="header">
    <h1 class="header__ci">
      <a href="/" title="event main으로 가기" class="header__home-link">MEGABOX : Life Theater</a>
    </h1>
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

    &__home-link {
      font-size: 14px;
    }
  }
</style>
