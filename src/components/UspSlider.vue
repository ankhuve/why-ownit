<template>
  <section class="usp-slider">

    <div class="container">
      <block-quote :title="sliderDescription.title" :body="sliderDescription.body" width="6" class="justify-content-center"></block-quote>
    </div>

    <div class="container">
      <nav>
        <div class="row">

          <div class="selected-box-border"></div>
          <div class="selected-box"></div>

          <div class="usp-slider__nav col-md-4" @mouseenter='moveSelectedBox' @click='changeSlide(0)' data-usp=0>
            <gaming></gaming>
          </div>

          <div class="usp-slider__nav col-md-4" @mouseenter='moveSelectedBox' @click='changeSlide(1)' data-usp=1>
            <hearts></hearts>
          </div>

          <div class="usp-slider__nav col-md-4" @mouseenter='moveSelectedBox' @click='changeSlide(2)' data-usp=2>
            <streaming></streaming>
          </div>

        </div>
      </nav>
    </div>

    <div class="container-fluid mt-4">
      <div class="col-xs-12">
        <div class="usp-slider__body">
          <!-- slides here -->
          <div class="usp-slider__slide" id="gaming" data-slide=0>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div class="col-xs-12">
                <h1>Gaming är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-4" data-animation="fadeInUp" data-delay=300>
              <div class="col-md-6">
                <div class="col-xs-12">
                  <iframe width="100%" height="300" src="https://www.youtube.com/embed/Z-CWz8nAFgs" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>

              <div class="col-md-6" data-animation="fadeInRight" data-delay=500>
                <block-quote title="Vi avskyr lagg när vi spelar" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping!" width="12"></block-quote>
              </div>
            </div>
          </div>
          <div class="usp-slider__slide" id="love" data-slide=1>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div class="col-xs-12">
                <h1>Våra kunder är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-4" data-animation="fadeInUp" data-delay=300>
              <div class="col-md-6">
                <div class="col-xs-12">
                  <block-quote title="Vi avskyr lagg när vi spelar" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping!" width="12"></block-quote>
                </div>
              </div>

              <div class="col-md-6" data-animation="fadeInRight" data-delay=500>
                <block-quote title="Vi avskyr lagg när vi spelar" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping!" width="12"></block-quote>
              </div>
            </div>
          </div>
          <div class="usp-slider__slide" id="streaming" data-slide=2>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div class="col-xs-12">
                <h1>Soffmys är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-4" data-animation="fadeInUp" data-delay=300>
              <div class="col-md-6">
                <div class="col-xs-12">
                  <block-quote title="Vi avskyr lagg när vi spelar" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping!" width="12"></block-quote>
                </div>
              </div>

              <div class="col-md-6" data-animation="fadeInRight" data-delay=500>
                <block-quote title="Vi avskyr lagg när vi spelar" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping!" width="12"></block-quote>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<style>
  .usp-slider .selected-box, .usp-slider .selected-box-border{
    width: calc(100% / 3);
    position: absolute;
    transform: translate3d(100%, 0, 0);
    transition: transform 0.25s ease;
  }

  .usp-slider .selected-box{
    // border-top: rgba(0,0,0,0) solid 4px;
    background: #13323a;
    height: calc(100% - 4px);
    transform: translate3d(100%, 4px, 0);
  }

  .usp-slider .selected-box-border{
    height: 4px;
    background: #f7c600;
  }

  .usp-slider__nav{
    cursor: pointer;
    padding: 1rem;
    overflow: hidden;
    width: 100%;
    height: 280px;
  }

  .usp-slider__body{
    width: 100%;
    overflow: hidden;
  }

  .usp-slider__slide{
    display: none;
    //position: absolute;
    //top: 0;
    //left: 0;
  }

  .usp-slider__slide.active{
    display: block;
  }
</style>

<script>
  import BlockQuote from './BlockQuote'
  import Hearts from './Hearts'
  import Gaming from './Gaming'
  import Streaming from './Streaming'
  import scrollReveal from '../scrollReveal'

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
    methods: {
      moveSelectedBox (e) {
        let boxId = e.target.dataset.usp
        const boxSelector = document.querySelector('.selected-box-border')

        boxSelector.style.transform = 'translate3d(' + boxId * 100 + '%, 0, 0)'
      },
      changeSlide (n) {
        const boxSelector = document.querySelector('.selected-box')
        boxSelector.style.transform = 'translate3d(' + n * 100 + '%, 4px, 0)'

        document.querySelectorAll('.usp-slider__slide').forEach(slide => slide.classList.remove('active'))

        const activeSlide = document.querySelector('.usp-slider__slide[data-slide="' + n + '"]')
        activeSlide.classList.add('active')
        this.animateSlideIn(activeSlide)
      },
      animateSlideIn (slide) {
        const children = slide.children
        console.log('first child: ', slide.children)
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
