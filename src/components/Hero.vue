<template>
  <div class="container-fluid hero">
    <div class="hero-bg animated fadeIn slow">
      <div id="parallax-1" class="parallax"></div>
      <div id="parallax-2" class="parallax"></div>

      <div class="col-xs-12">
        <h1 class="text-uppercase">{{ msg }}</h1>

      </div>

      <div class="hero--footer">
        <div class="row justify-content-center">

          <div class="col-xs-12 text-center">
            <button class="btn-hero sr-fadeInDownShort delay mini-bounce infinite"></button>
          </div>

        </div>
        <div class="row justify-content-center">

          <div class="col-xs-12 mt-3">
            <h4 class="sr-fadeInDownShort delay-2x">Lär känna oss!</h4>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hero',
  data () {
    return {
      msg: 'Varför Ownit?'
    }
  }
}
</script>
