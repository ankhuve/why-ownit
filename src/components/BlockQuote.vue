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
    padding: 1em 0 2em;

    &.bordered{
      > *{
        padding-left: 1em;
      }

      > p{

        border-left: #f7c600 solid 2px;
      }
    }
  }

  @include media-breakpoint-up(sm){
    .block-quote{
      padding: 1em 1em 2em;
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
