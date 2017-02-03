// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import scrollReveal from './scrollReveal'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    currentSlide: 0
  },
  mounted: () => {
    scrollReveal.sr.reveal('.sr-fadeInUp', scrollReveal.fadeInUp)
    scrollReveal.sr.reveal('.sr-fadeInDown', scrollReveal.fadeInDown)
    scrollReveal.sr.reveal('.sr-fadeInDownShort', scrollReveal.fadeInDownShort)
    scrollReveal.sr.reveal('.sr-fadeInLeft', scrollReveal.fadeInLeft)
    scrollReveal.sr.reveal('.sr-fadeInRight', scrollReveal.fadeInRight)
    scrollReveal.sr.reveal('.sr-rotateIn', scrollReveal.rotateIn)
    scrollReveal.sr.reveal('.delay', { delay: 500 })
    scrollReveal.sr.reveal('.delay-2x', { delay: 1000 })

    // hero mousemove parallax
    const heroEl = document.querySelector('.hero-bg')
    const par1 = document.querySelector('#parallax-1')
    const par2 = document.querySelector('#parallax-2')
    const movementStrength = 10
    let wHeight = $(window).height()
    let wWidth = $(window).width()
    let height = movementStrength / wHeight
    let width = movementStrength / wWidth

    $('.hero-bg').mousemove(function (e) {
      let pageX = e.pageX - (wWidth / 2)
      let pageY = e.pageY - (wHeight / 2)
      let newvalueX = (width * pageX * -1) + 5
      let newvalueY = height * pageY * -1

      heroEl.style.transform = 'translate3d(' + newvalueX + 'px, ' + newvalueY + 'px, 0px)'
      par1.style.transform = 'translate3d(' + newvalueX * 2 + 'px, ' + newvalueY * 2 + 'px, 0px)'
      par2.style.transform = 'translate3d(' + newvalueX * 4 + 'px, ' + newvalueY * 4 + 'px, 0px)'
    })

    $('.btn-hero').on('click', function () {
      $('html, body').animate({
        scrollTop: $('section.usp-slider').offset().top
      }, 750)
    })

    $('.usp-slider__nav').on('click', function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 500)
    })
  }
})
