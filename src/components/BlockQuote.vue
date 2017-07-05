<template>
  <div class="block-quote">
    <h2>{{ title }}</h2>
    <p v-html="body"/>
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins/breakpoints";

  .block-quote{
    border-left: 4px;
    text-align: left;
    padding: 1rem 0 2rem;

    &.bordered{
      > *{
        padding-left: 1rem;
      }

      > p{

        border-left: #f7c600 solid 2px;
      }
    }
  }

  @include media-breakpoint-up(sm){
    .block-quote{
      padding: 1rem 1rem 2rem;
    }
  }
</style>

<script>
  export default {
    name: 'block-quote',
    props: [
      'title',
      'body'
    ]
  }
</script>
