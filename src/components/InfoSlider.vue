<template>
  <div class="info-section col-sm-12">
    <div class="btn-group col-lg-6 justify-content-center">
      <button type="button" class="slider-nav btn btn-primary" @click="changeSlide" data-slide-id="0">Tjänster</button>
      <button type="button" class="slider-nav btn btn-primary" @click="changeSlide" data-slide-id="1">Fastighetsägare</button>
      <button type="button" class="slider-nav btn btn-primary" @click="changeSlide" data-slide-id="2">Företag</button>
    </div>
    <div class="info-slider">
      <div class="slides-wrapper">
        <template v-for="(slide, index) in slides">
          <div class="slide" :data-id="index">
            <div class="slide-content row" data-animation="fadeInUp">
              <template v-for="(col, service) in slide">
                <div :class="'justify-content-center col-lg-' + col.cols">
                  <block-quote class="text-center" :title="col.title" :body="col.body">
                    <template v-if="col.link">
                      <a :href='col.link' target="_blank"><button type='button' class='btn btn-primary col-sm-12'>Läs mer</button></a>
                    </template>
                  </block-quote>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  $city-offset: 280px;

  .info-section{
    padding-bottom: 18em;
    transition: transform 0.3s;

    .info-slider{
      width: inherit;
      overflow: hidden;

      > .slides-wrapper{
        width: 300%;
        transition: all 0.3s;
        transform: translate3d(0 * -33.333%, 0, 0) scale(0.9);
        -webkit-transform: translate3d(0 * -33.333%, 0, 0) scale(0.9);
        -moz-transform: translate3d(0 * -33.333%, 0, 0) scale(0.9);
        -ms-transform: translate3d(0 * -33.333%, 0, 0) scale(0.9);
        -o-transform: translate3d(0 * -33.333%, 0, 0) scale(0.9);
        height: 0;
        visibility: hidden;
        overflow: hidden;
        opacity: 0;

        &.active{
          visibility: visible;
          opacity: 1;
          height: inherit;
        }

        .slide{
          width: calc(100% / 3);
          display: inline-block;
          position: relative;
          padding: 0 15px;
          vertical-align: top;
        }
      }

    }
  }

  .slide-content{
    .service-icon{
      background: no-repeat center center;
      background-size: contain;
      height: 3.2em;
      width: auto;

      &#icon-tv{
        background-image: url('../assets/img/tv.png');
      }

      &#icon-telephony{
        background-image: url('../assets/img/telephony.png');
      }

      &#icon-broadband{
        background-image: url('../assets/img/broadband.png');
      }
    }

    .block-quote{
      padding-bottom: 0;
      > h2{
        font-size: 2.2em;
      }

      a > button{
        font-size: 1.2em;
      }
    }
  }
</style>
<script>
import $ from 'jquery'
import BlockQuote from './BlockQuote.vue'

export default {
  data () {
    return {
      slider: {},
      slideHeight: 0,
      sliderActivated: false,
      slides: {
        0: {
          tv: {
            title: 'TV',
            iconPath: '../assets/img/tv.png',
            body: '<div class="service-icon" id="icon-tv"></div>Ownit tv – Vår mest flexibla tjänst någonsin, kanske Sveriges mest flexibla tv-tjänst! Med Ownit tv skräddarsyr du enkelt ditt tv-tittande, precis som du vill ha det!',
            link: 'https://www.ownit.se/privat-tv',
            cols: 4
          },
          broadband: {
            title: 'Bredband',
            iconPath: '/assets/img/bredband.png',
            body: '<div class="service-icon" id="icon-broadband"></div>Surfa snabbt och säkert med vårt bredband via fiber, välj mellan flera olika hastigheter ända upp till 1000 Mbit/sek!',
            link: 'https://www.ownit.se/privat-bredband',
            cols: 4
          },
          telephony: {
            title: 'Telefoni',
            iconPath: '/assets/img/telefoni.png',
            body: '<div class="service-icon" id="icon-telephony"></div>Självklart erbjuder vi en riktigt bra telefonitjänst – med oss ringer du alltid mer för mindre!',
            link: 'https://www.ownit.se/privat-telefoni',
            cols: 4
          }
        },
        1: {
          owner: {
            title: 'Fastighetsägare',
            body: 'TV & Bredband till dina fastigheter.',
            link: 'https://www.ownit.se/fastighetsagare-hyresvard',
            cols: 4
          },
          newProduction: {
            title: 'Nyproduktion',
            body: 'Framtidssäkrad fiber till din fastighet.',
            link: 'https://www.ownit.se/fastighetsagare-byggherre',
            cols: 4
          },
          brf: {
            title: 'BRF',
            body: 'TV & Bredband till din bostadsrättsförening.',
            link: 'https://www.ownit.se/fastighetsagare-bostadsrattsforening',
            cols: 4
          }
        },
        2: {
          company: {
            title: 'Företag',
            body: 'Snabb och pålitlig fiberanslutning till ditt företag.',
            link: 'https://www.ownit.se/foretag-ownit',
            cols: 12
          }
        }
      },
      activeSlide: -1
    }
  },
  methods: {
    changeSlide (e) {
      if (!this.sliderActivated) {
        this.slider.classList.add('active')
        this.sliderActivated = true
      }

      // make only the last clicked slider nav button active
      for (let i = 0; i < this.sliderNavs.length; i++) {
        this.sliderNavs[i].classList.remove('active')
      }
      // this.sliderNavs.forEach((nav) => {
      //   nav.classList.remove('active')
      // })
      e.target.classList.add('active')

      this.activeSlide = e.target.dataset.slideId
      this.adjustSlideHeight()

      // scroll to the clicked button
      $('html, body').animate({
        scrollTop: $(e.target).offset().top - (e.target.offsetHeight)
      }, 500)
    },
    // translate the slider to the correct slide and adjust height
    adjustSlideHeight () {
      if (this.sliderActivated) {
        let activeSlide = document.querySelector('.slide[data-id="' + this.activeSlide + '"] > .slide-content')
        if (activeSlide) {
          this.slideHeight = document.querySelector('.slide[data-id="' + this.activeSlide + '"] > .slide-content').offsetHeight
        } else {
          this.slideHeight = 0
        }

        $(this.slider).css({
          'transform': 'translate3d(' + this.activeSlide * -(100 / 3) + '%, 0, 0) scale(1)',
          '-webkit-transform': 'translate3d(' + this.activeSlide * -(100 / 3) + '%, 0, 0) scale(1)',
          '-moz-transform': 'translate3d(' + this.activeSlide * -(100 / 3) + '%, 0, 0) scale(1)',
          '-ms-transform': 'translate3d(' + this.activeSlide * -(100 / 3) + '%, 0, 0) scale(1)',
          '-o-transform': 'translate3d(' + this.activeSlide * -(100 / 3) + '%, 0, 0) scale(1)',
          'height': this.slideHeight
        })
      }
    }
  },
  mounted () {
    this.slider = document.querySelector('.slides-wrapper')
    this.sliderNavs = document.querySelectorAll('.slider-nav')
    window.addEventListener('resize', this.adjustSlideHeight)
  },
  components: {
    BlockQuote
  }
}
</script>
