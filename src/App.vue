<template>
  <div class="why-ownit">
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
  name: 'why-ownit',
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
</style>
