<template>
  <div class="container-fluid hero animated fadeIn slow">
    <div class="hero-bg">
      <div id="parallax-1" class="parallax"></div>
      <div id="parallax-2" class="parallax"></div>

      <div class="col-xs-12">
        <h1 class="text-uppercase">{{ title }}</h1>

      </div>

      <div class="hero--footer">
        <div class="row justify-content-center">

          <div class="col-xs-12">
            <button type="button" class="btn-hero sr-fadeInDownShort delay mini-bounce infinite"/>
          </div>

        </div>
        <div class="row justify-content-center">

          <div class="col-xs-12 mt-1">
            <h5 class="sr-fadeInDownShort delay-2x">Lär känna oss!</h5>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins/breakpoints";

  .hero{
    color: #f7c600;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    overflow: hidden;
    padding: 0;

    h1{
      padding-top: 4rem;
    }

    .hero--footer{
      width: 100%;
      position: absolute;
      bottom: 10vh;
    }

    @include media-breakpoint-up(lg){
      .hero--footer{
        width: 100%;
        position: absolute;
        bottom: 4rem;
      }
    }

    .btn-hero{
      background: url('../assets/CTA-button_80px.png') no-repeat center center;
      background-size: contain;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      border: none;
      transition: box-shadow 0.3s;
      outline: none;

      &:hover{
        cursor: pointer;
        box-shadow: rgba(247, 198, 0, 0.79) 0 0 0 3px;
      }
    }

    @include media-breakpoint-up(sm){
      .btn-hero{
        height: 65px;
        width: 65px;
      }
    }

    .parallax{
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
    }

    #parallax-1{
      background: url('../assets/play-star.png') no-repeat center center;
      background-size: contain;
    }

    #parallax-2{
      background: url('../assets/sofa.png') no-repeat center 60vh;
      background-size: 1500px;
    }

    .hero-bg{
      background: url('../assets/starry-sky.png') repeat-x center center;
      background-size: cover;
      height: 100%;
    }

    @include media-breakpoint-up(md){
      #parallax-2{
        // soffa
        background-size: 1800px;
      }
    }

    @media screen and (min-width: 1740px){
      .hero-bg{
        background-size: contain;
      }

      #parallax-1{
        // play-stjärna
        background-size: contain;
      }
    }
  }
</style>

<script>
import $ from 'jquery'

export default {
  name: 'hero',
  data () {
    return {
      title: 'Varför just Ownit?',
      wWidth: 0,
      wHeight: 0,
      movement: {
        height: 0,
        width: 0,
        strength: 20
      },
      elms: {
        hero: {},
        par1: {},
        par2: {}
      }
    }
  },
  methods: {
    calculateMovement () {
      this.wHeight = $(window).height()
      this.wWidth = $(window).width()
      this.movement.height = this.movement.strength / this.wHeight
      this.movement.width = this.movement.strength / this.wWidth
    },
    disableParallax () {
      this.elms.hero.style.transform = this.elms.par1.style.transform = this.elms.par2.style.transform = ''
    }
  },
  mounted () {
    // hero mousemove parallax
    this.elms.hero = document.querySelector('.hero-bg')
    this.elms.par1 = document.querySelector('#parallax-1')
    this.elms.par2 = document.querySelector('#parallax-2')
    this.calculateMovement()

    $('.hero-bg').mousemove(e => {
      if (this.wWidth > 576) {
        let pageX = e.pageX - (this.wWidth / 2)
        let pageY = e.pageY - (this.wHeight / 2)
        let newvalueX = (this.movement.width * pageX * -1) + 5
        let newvalueY = this.movement.height * pageY * -1

        this.elms.hero.style.transform = 'translate3d(' + newvalueX + 'px, ' + newvalueY + 'px, 0px)'
        this.elms.par1.style.transform = 'translate3d(' + newvalueX * 2 + 'px, ' + newvalueY * 2 + 'px, 0px)'
        this.elms.par2.style.transform = 'translate3d(' + newvalueX * 4 + 'px, ' + newvalueY * 4 + 'px, 0px)'
      } else {
        this.disableParallax()
      }
    })

    $('.btn-hero').on('click', () => {
      $('html, body').animate({
        scrollTop: $('section.usp-slider').offset().top
      }, 500)
    })

    window.addEventListener('resize', e => {
      this.calculateMovement()
      if (this.wWidth < 576) {
        this.disableParallax()
      }
    })
  }
}
</script>
