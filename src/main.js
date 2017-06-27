// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import srConfig from './scrollReveal'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    currentSlide: 0
  },
  mounted: () => {
    srConfig.sr.reveal('.sr-moveRightSlow', srConfig.moveRightSlow)
    srConfig.sr.reveal('.sr-moveLeftSlow', srConfig.moveLeftSlow)
    srConfig.sr.reveal('.sr-fadeInSlow', srConfig.fadeInSlow)
    srConfig.sr.reveal('.sr-fadeInUp', srConfig.fadeInUp)
    srConfig.sr.reveal('.sr-fadeInDown', srConfig.fadeInDown)
    srConfig.sr.reveal('.sr-fadeInDownShort', srConfig.fadeInDownShort)
    srConfig.sr.reveal('.sr-fadeInLeft', srConfig.fadeInLeft)
    srConfig.sr.reveal('.sr-fadeInRight', srConfig.fadeInRight)
    srConfig.sr.reveal('.sr-rotateIn', srConfig.rotateIn)
    srConfig.sr.reveal('.delay', { delay: 500 })
    srConfig.sr.reveal('.delay-2x', { delay: 1000 })

    // hero mousemove parallax
    const heroEl = document.querySelector('.hero-bg')
    const par1 = document.querySelector('#parallax-1')
    const par2 = document.querySelector('#parallax-2')
    const movementStrength = 10
    let wHeight = $(window).height()
    let wWidth = $(window).width()
    let height = movementStrength / wHeight
    let width = movementStrength / wWidth

    $('.hero-bg').mousemove(e => {
      let pageX = e.pageX - (wWidth / 2)
      let pageY = e.pageY - (wHeight / 2)
      let newvalueX = (width * pageX * -1) + 5
      let newvalueY = height * pageY * -1

      heroEl.style.transform = 'translate3d(' + newvalueX + 'px, ' + newvalueY + 'px, 0px)'
      par1.style.transform = 'translate3d(' + newvalueX * 2 + 'px, ' + newvalueY * 2 + 'px, 0px)'
      par2.style.transform = 'translate3d(' + newvalueX * 4 + 'px, ' + newvalueY * 4 + 'px, 0px)'
    })

    $('.btn-hero').on('click', () => {
      $('html, body').animate({
        scrollTop: $('section.usp-slider').offset().top
      }, 750)
    })

    $('.usp-slider__nav').on('click', () => {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 500)
    })
  }
})
