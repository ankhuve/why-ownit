<template>
  <section class="ground">
    <div class="ground-top--wrapper justify-content-center">
      <div class="ground-top--house"></div>
      <div class="ground-top--grass"></div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center sr-fadeInDown delay">
        <div class="col-lg-8 col-xs-12">
          <block-quote title="Lorem ipsum dolor sit amet" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper lacinia dolor eu fringilla. Aenean sodales libero dolor, et sodales massa aliquet id. Donec tempor blandit massa sed pulvinar." width="12"></block-quote>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  section.ground{
    background: #97c668;
    background: -moz-linear-gradient(top, #97c668 0%, #7aa24c 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, #97c668), color-stop(100%, #7aa24c));
    background: -webkit-linear-gradient(top, #97c668 0%, #7aa24c 100%);
    background: -o-linear-gradient(top, #97c668 0%, #7aa24c 100%);
    background: -ms-linear-gradient(top, #97c668 0%, #7aa24c 100%);
    background: linear-gradient(to bottom, #97c668 0%, #7aa24c 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#97c668', endColorstr='#7aa24c', GradientType=0 );
    min-height: 500px;
    position: relative;
    width: 100%;

    .ground-top--wrapper{
      top: -250px;
      height: 250px;
      position: relative;
      display: block;
      width: 100%;
      overflow: hidden;

      .ground-top--house{
        background: url('../assets/ownit-house.svg') no-repeat center center;
        background-size: contain;
        height: 50%;
        width: 20%;
        z-index: 1;
        position: relative;
        -webkit-transform: translate(300%, 40%);
        -moz-transform: translate(300%, 40%);
        -ms-transform: translate(300%, 40%);
        transform: translate(300%, 40%);
      }

      @media screen and (min-width: 1200px){
        .ground-top--house{
          height: 180px;
          width: 300px;
        }
      }

      .ground-top--grass{
        width: 120%;
        height: 75%;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        background: #97c668;
        position : absolute;
        left: 50%;
        top: 90%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }
  }
</style>

<script>
  import BlockQuote from './BlockQuote'
  import scrollReveal from '../scrollReveal'

  export default {
    name: 'usp-slider',
    data () {
      return {}
    },
    components: {
      BlockQuote
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
