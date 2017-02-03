<template>
  <div class="row">
    <div :class="'col-lg-' + width">
      <div class="block-quote">
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
      </div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'block-quote',
    props: [
      'title',
      'body',
      'width'
    ],
    data () {
      return {
        content: 'hello quote'
      }
    }
  }
</script>
