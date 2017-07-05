<template>
  <div id="app">
    <hero></hero>
    <usp-slider></usp-slider>
    <social></social>
    <ground></ground>
  </div>
</template>

<script>
import Hero from './components/Hero'
import UspSlider from './components/UspSlider'
import Social from './components/Social'
import Ground from './components/Ground'

export default {
  name: 'app',
  components: {
    Hero,
    UspSlider,
    Social,
    Ground
  }
}
</script>

<style lang="scss">
  @import "scss/style.scss";
</style>
