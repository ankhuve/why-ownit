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

    <div class="container-fluid sr-fadeInSlow delay-2x">
      <div class="row justify-content-center" id="nav-helper">
        <div class="col-xs-12">
          <h4>(PSST! Klicka på en av bilderna ovan)</h4>
        </div>
      </div>
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

            <div class="row mt-4" data-animation="fadeInLeft" data-delay=300>
              <div class="col-md-5">
                <div class="col-xs-12">
                  <iframe width="100%" height="350" src="https://www.youtube.com/embed/V-Edgb-0BXI?iv_load_policy=3" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>

              <div class="col-md-7" data-animation="fadeInRight" data-delay=500>
                <block-quote title="Vi älskar laggfri gaming" body="Därför har vi sett till att Ownit är snabbast i Sverige mot spelplattformen Steam. Aldrig mer behöver du klaga på din ping! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper lacinia dolor eu fringilla. Aenean sodales libero dolor, et sodales massa aliquet id. Donec tempor blandit massa sed pulvinar." width="12"></block-quote>
                <a href="http://www.infernoonline.com/ownit-csgo-challange/" target="_blank"><button class="btn btn-primary">Lira med oss!</button></a>
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
              <div class="col-md-7">
                <div class="col-xs-12">
                  <block-quote title="Vi älskar våra kunder" body="För tredje året i rad har Ownit haft Sveriges nöjdaste privatkunder! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper lacinia dolor eu fringilla. Aenean sodales libero dolor, et sodales massa aliquet id. Donec tempor blandit massa sed pulvinar. Donec accumsan diam quis tortor condimentum, quis rhoncus lectus tincidunt. Donec vel massa sed dolor interdum euismod." width="12"></block-quote>
                </div>
              </div>

              <div class="col-md-5" data-animation="fadeInRight" data-delay=500>
                <img class="img-responsive" src="../assets/trippelmedalj.png"/>
              </div>
            </div>
          </div>
          <div class="usp-slider__slide" id="streaming" data-slide=2>
            <div data-animation="fadeInUp" class="row justify-content-center">
              <div class="col-xs-12">
                <h1>Soffmys är vår passion!</h1>
              </div>
            </div>

            <div class="row mt-4" data-animation="fadeInRight" data-delay=300>
              <div class="col-md-6">
                <block-quote title="Vi älskar streaming" body="Mot Netflix är Ownit den näst snabbaste leverantören i Sverige. Vi tycker inte att en hemmakväll ska bestå av pixliga filmer och buffrande - därför lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper lacinia dolor eu fringilla. Aenean sodales libero dolor, et sodales massa aliquet id." width="12"></block-quote>
              </div>

              <div class="col-md-5" data-animation="fadeInRight" data-delay=500>
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
  .usp-slider{
    .selected-box, .selected-box-border{
      width: calc(100% / 3);
      position: absolute;
      transform: translate3d(100%, 0, 0);
      transition: transform 0.25s ease;
    }

    .selected-box{
      // border-top: rgba(0,0,0,0) solid 4px;
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
      width: 100%;
      height: 280px;
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
