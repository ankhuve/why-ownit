<template>
  <div class="hearts">
    <div class="heart heart--large sr-fadeInUp pulse infinite slow"></div>
    <div class="heart sr-fadeInLeft delay"></div>
    <div class="heart sr-fadeInRight delay"></div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {}
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins/breakpoints";

  .hearts{
    position: relative;
    width: 100%;
    height: 100%;

    $base-heart-height: 40%;

    @include media-breakpoint-up(sm){
      $base-heart-height: 50%;
    }

    @include media-breakpoint-up(md){
      $base-heart-height: 50%;
    }

    $margin-top: #{$base-heart-height / 5};

    .heart{
      background: url('../assets/heart.svg') no-repeat center;
      height: $base-heart-height;
      top: $margin-top;
      width: auto;
      margin: 0 auto;
      position: relative;
      z-index: 2;

      &:not(:first-of-type){
        z-index: 1;
        width: $base-heart-height;
      }

      &:nth-of-type(2){
        margin-top: 10%;
        left: -5%;
        position: absolute;
      }

      &:last-of-type{
        margin-top: 10%;
        right: -5%;
        position: absolute;

      }

      &.heart--large{
        height: $base-heart-height * 1.5;
      }
    }

  }
</style>
