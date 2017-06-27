<template>
  <div id="app">
    <hero></hero>
    <usp-slider></usp-slider>
    <social></social>
    <bottom></bottom>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Hearts from './components/Hearts'
import UspSlider from './components/UspSlider'
import Social from './components/Social'
import Bottom from './components/Bottom'

export default {
  name: 'app',
  components: {
    Hero,
    'hearts': Hearts,
    UspSlider,
    Social,
    Bottom
  }
}
</script>

<style lang="scss">
  @import "scss/style.scss";
</style>
