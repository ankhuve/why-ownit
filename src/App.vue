<template>
  <div id="app">
    <hero></hero>
    <usp-slider></usp-slider>
  </div>
</template>

<script>
import Hero from './components/Hero'
import Hearts from './components/Hearts'
import UspSlider from './components/UspSlider'

export default {
  name: 'app',
  components: {
    Hero,
    'hearts': Hearts,
    UspSlider
  }
}
</script>

<style lang="sass">
  @import "scss/style.scss";
</style>
