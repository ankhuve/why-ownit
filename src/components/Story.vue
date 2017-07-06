<template>
  <section class="story">


    <div class="row justify-content-center mt-2 sr-fadeInUp">
      <div class="col-xl-12 col-lg-8 text-center">
        <block-quote class="text-center" title="Möt oss på Ownit" body="Följ med bakom kulisserna och träffa hjältarna som varje dag gör allt för att din kundupplevelse ska bli som allra bäst."/>
      </div>
    </div>
    <div class="row justify-content-center sr-fadeInUp">
      <div class="col-xl-8 col-lg-8 col-md-11 embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/0uKKXRqT7bg?iv_load_policy=3" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

  </section>
</template>

<script>
  import BlockQuote from './BlockQuote'

  export default {
    name: 'story',
    data () {
      return {}
    },
    components: {
      BlockQuote
    }
  }
</script>
