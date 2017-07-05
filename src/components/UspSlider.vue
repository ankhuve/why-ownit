<template>
  <section class="usp-slider">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <block-quote :title="sliderDescription.title" :body="sliderDescription.body"/>
        </div>
      </div>
    </div>

    <div class="container">
      <nav>
        <div class="row">

          <div class="selected-box-border"></div>
          <div class="selected-box"></div>

          <div class="usp-slider__nav" @mouseenter='moveSelectedBox' @click='changeSlide(0)' data-usp=0>
            <gaming/>
          </div>

          <div class="usp-slider__nav" @mouseenter='moveSelectedBox' @click='changeSlide(1)' data-usp=1>
            <hearts/>
          </div>

          <div class="usp-slider__nav" @mouseenter='moveSelectedBox' @click='changeSlide(2)' data-usp=2>
            <streaming/>
          </div>

        </div>
      </nav>
    </div>

    <div class="container-fluid sr-fadeInSlow delay-2x">
      <div class="row justify-content-center" id="nav-helper">
        <div class="col-xs-12">
          <h4>(PSST! Klicka på en av bilderna ovan)</h4>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="col-xs-12">
        <div class="usp-slider__body">
          <!-- slides here -->
          <div class="usp-slider__slide" id="gaming" data-slide=0>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div class="col-xs-12">
                <h1>Gaming är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-2" data-animation="fadeInLeft" data-delay=300>
              <div class="col-xl-7 embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/V-Edgb-0BXI?iv_load_policy=3" frameborder="0" allowfullscreen></iframe>
              </div>

              <div class="col-xl-5">
                <block-quote title="Vi älskar laggfri gaming" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping! Vi har själva arrangerat tävlingar inom E-sport och fler ska det bli framöver. Följ oss på sociala medier så har du stenkoll på när nästa tävling drar igång!">
                  <a href="http://www.infernoonline.com/ownit-csgo-challange/" target="_blank"><button class="btn btn-primary">Lira med oss!</button></a>
                </block-quote>

              </div>
            </div>
          </div>
          <div class="usp-slider__slide" id="love" data-slide=1>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div class="col-xs-12">
                <h1>Våra kunder är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-2" data-animation="fadeInUp" data-delay=300>
              <div class="col-lg-7">
                <block-quote title="Vi älskar våra kunder" body="För tredje året i rad har Ownit haft Sveriges nöjdaste privatkunder! Vi arbetar ständigt på att hålla dig som kund i centrum för vår uppmärksamhet. Och en stor del av det är att alltid kunna erbjuda så flexibla och enkla lösningar som möjligt. Därför har vi tagit bort alla onödiga knappval, vidarekopplingar och presenterar våra kötider i realtid på <a href='https://ownit.se' target='_blank'>ownit.se</a>">
                  <button class="btn btn-primary" data-scroll="get-ownit">Kan du få Ownit?</button>
                </block-quote>
              </div>

              <div class="col-lg-5" data-animation="fadeInRight" data-delay=500>
                <img class="img-responsive" src="../assets/trippelmedalj.png"/>
              </div>
            </div>
          </div>
          <div class="usp-slider__slide" id="streaming" data-slide=2>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div>
                <h1>Soffmys är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-2" data-animation="fadeInRight" data-delay=300>
              <div class="col-lg-6">
                <block-quote title="Vi älskar streaming" body="Mot Netflix är Ownit den näst snabbaste leverantören i Sverige. Vi tycker inte att en hemmakväll ska bestå av pixliga filmer och buffrande – därför håller vi oss alltid uppdaterade med den senaste tekniken inom bredband. Vi gör alltid allt för att du som kund ska ha, inte bara den snabbaste, utan också den mest stabila bredbandsuppkopplingen via fiber som finns att få.">
                    <button class="btn btn-primary" data-scroll="get-ownit">Kan du få Ownit?</button>
                </block-quote>
              </div>

              <div class="col-lg-5" data-animation="fadeInRight" data-delay=500>
                <img class="img-responsive" src="../assets/sofa-2.png"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins/breakpoints";

  .usp-slider{

    #nav-helper{
      margin-top: 2rem;
    }

    @include media-breakpoint-up(sm){
      #nav-helper{
        margin-top: 5rem;
      }
    }

    .selected-box, .selected-box-border{
      width: calc(100% / 3);
      position: absolute;
      transform: translate3d(100%, 0, 0);
      transition: transform 0.25s ease;
    }

    .selected-box{
      /*border-top: rgba(0,0,0,0) solid 4px;*/
      background: #13323a;
      height: calc(100% - 4px);
      transform: translate3d(100%, 4px, 0);
    }

    .selected-box-border{
      height: 4px;
      background: #f7c600;
    }

    .usp-slider__nav{
      cursor: pointer;
      padding: 1rem;
      overflow: hidden;
      width: 33.3333%;
      height: 15vh;
      z-index: 1;
    }

    @include media-breakpoint-up(md){
      .usp-slider__nav{
        height: 185px;
        padding: 2rem;
      }
    }

    @include media-breakpoint-up(lg){
      .usp-slider__nav{
        height: 240px;
      }
    }

    @include media-breakpoint-up(xl){
      .usp-slider__nav{
        height: 280px;
      }
    }

    .usp-slider__body{
      width: 100%;
      overflow: hidden;
    }

    .usp-slider__slide{
      display: none;
    }

    .usp-slider__slide.active{
      display: block;
    }
  }

</style>

<script>
  import BlockQuote from './BlockQuote'
  import Hearts from './Hearts'
  import Gaming from './Gaming'
  import Streaming from './Streaming'
  import scrollReveal from '../scrollReveal'
  import $ from 'jquery'

  export default {
    name: 'usp-slider',
    data () {
      return {
        sliderDescription: {
          title: 'Varför välja Ownit?',
          body: 'Den frågan ställer vi ofta oss själva, så att vi alltid kommer ihåg att våra kunder är vår största passion. Vi vill alltid leverera den bästa servicen, tillsammans med de bästa tjänsterna!'
        },
        currentSlide: 0
      }
    },
    components: {
      BlockQuote,
      Hearts,
      Gaming,
      Streaming
    },
    mounted () {
      $('.usp-slider__nav').on('click', (e) => {
        $('html, body').animate({
          scrollTop: $(e.currentTarget).offset().top - 20
        }, 500)
      })

      $('[data-scroll="get-ownit"]').click(() => {
        $('html, body').animate({
          scrollTop: $('.address-start-search').offset().top
        }, 500)
      })
    },
    methods: {
      moveSelectedBox (e) {
        let boxId = e.target.dataset.usp
        const boxSelector = document.querySelector('.selected-box-border')

        boxSelector.style.transform = 'translate3d(' + boxId * 100 + '%, 0, 0)'
      },
      changeSlide (n) {
        // hide the helper text
        document.querySelector('#nav-helper').style.display = 'none'

        const boxSelector = document.querySelector('.selected-box')
        boxSelector.style.transform = 'translate3d(' + n * 100 + '%, 4px, 0)'

        document.querySelectorAll('.usp-slider__slide').forEach(slide => slide.classList.remove('active'))

        const activeSlide = document.querySelector('.usp-slider__slide[data-slide="' + n + '"]')
        activeSlide.classList.add('active')
        this.animateSlideIn(activeSlide)
      },
      animateSlideIn (slide) {
        const children = slide.children
        for (let k = 0; k < children.length; k++) {
          const animation = children[k].dataset.animation
          if (children[k].hasAttribute('data-delay')) {
            scrollReveal[animation].delay = children[k].getAttribute('data-delay')
          } else {
            scrollReveal[animation].delay = 0
          }

          children[k].removeAttribute('data-sr-id')
          children[k].setAttribute('style', '')
          scrollReveal.sr.reveal(children[k], scrollReveal[animation])
        }
      }
    }
  }
</script>
