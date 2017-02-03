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
      return {
        text: 'not-trigger-yet'
      }
    },
    methods: {
      waypointHandler (direction, going) {
        if (direction.y === 'down' && going === 'out') {
          this.heartsOut()
        } else if (direction.y === 'down' && going === 'in') {
          console.log('going in from top')
          this.heartsIn()
        } else if (direction.y === 'up' && going === 'in') {
          this.fadeBackground('#092129')
        }
        this.text = 'the Waypoint has been triggered with: direction: { x: ' + direction.x + ', y: ' + direction.y + ' } and going: ' + going
        console.log(this.text)
      },
      fadeBackground (color) {
        console.log('ska fadea bakgrunden ', color)
        document.querySelector('body').style.background = color
      },
      heartsIn () {
        console.log('HeartsIn', document.querySelector('.waypoint-hearts'))
        // show the hearts
        document.querySelector('.waypoint-hearts').style.display = 'block'
        console.log(document.querySelector('.waypoint-hearts h1').style.animationDelay = document.querySelector('.waypoint-hearts h1').dataset.delay)
      },
      heartsOut () {
        this.fadeBackground('white')
        console.log('HeartsOut', document.querySelector('.waypoint-hearts'))
        // document.querySelector('.waypoint-hearts').style.display = 'none'
      }
    }
  }
</script>

<style scoped>
  .hearts{
    position: relative;
  }

  h1{
    padding-top: 2rem;
  }

  body{
    transition: background 0.35s;
  }
</style>
