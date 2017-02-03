<template>
  <div class="streaming"></div>
</template>

<script>
  export default {
    data: () => {
      return {
        text: 'not-trigger-yet'
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .streaming{
    background: url('../assets/Netflix.svg') no-repeat center center;
    background-size: contain;
    height: 100%;
  }
</style>
