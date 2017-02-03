import ScrollReveal from 'scrollReveal'

export default {
  sr: ScrollReveal({
    // reset: true,
    beforeReveal: function (domEl) {
      domEl.classList.add('animated')
      console.log('visar: ', domEl)
    },
    afterReset: function (domEl) {
      domEl.classList.remove('animated')
      console.log('döljer: ', domEl)
    }
  }),

// animations
  fadeInUp: {
    origin: 'bottom',
    distance: '90px',
    easing: 'ease-in-out',
    scale: 0.9
  },

  fadeInDown: {
    origin: 'top',
    distance: '90px',
    easing: 'ease-in-out',
    scale: 0.9
  },

  fadeInDownShort: {
    origin: 'top',
    distance: '30px',
    easing: 'ease-in-out',
    scale: 0.9
  },

  fadeInLeft: {
    origin: 'left',
    distance: '90px',
    easing: 'ease-in-out',
    scale: 0.9
  },

  fadeInRight: {
    origin: 'right',
    distance: '90px',
    easing: 'ease-in-out',
    scale: 0.9
  },

  rotateIn: {
    duration: 500,
    delay: 200,
    // distance: 40,
    rotate: { y: 20 },
    easing: 'ease-in-out',
    scale: 0.9
  }
}
