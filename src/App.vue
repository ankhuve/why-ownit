<template>
  <div id="app">
    <header class="header--fake"><h2>Ownit header</h2></header>
    <hero></hero>
    <usp-slider></usp-slider>
    <story></story>
    <social></social>
    <ground></ground>
  </div>
</template>

<script>
import Hero from './components/Hero'
import UspSlider from './components/UspSlider'
import Social from './components/Social'
import Ground from './components/Ground'
import Story from './components/Story'

export default {
  name: 'app',
  components: {
    Hero,
    UspSlider,
    Social,
    Ground,
    Story
  }
}
</script>

<style lang="scss">
  @import "scss/style.scss";

  .header--fake{
    height: 120px;
    background: white;
    padding: 3rem;

    > h2{
      color: #ca1719;
    }
  }

  @include media-breakpoint-up(lg){
    .header--fake{
      height: 144px;
    }
  }
</style>
