// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import srConfig from './scrollReveal'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {},
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
  }
})
