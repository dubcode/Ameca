<template>
  <div :class="{ 'scrolling': isScrollTop }">
    <div class="--row">
      <Header />
      <Hero />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import Footer from '~/components/Footer.vue'
export default {
  name: 'ScrollTop',
  components: {
    Header,
    Hero,
    Footer
  },
  data () {
    return {
      // Define the default location of the scrollbar
      scrollTop: null,

      // Define the default state
      isScrollTop: false
    }
  },
  mounted () {
    // Listening for scrolling events
    window.addEventListener('scroll', () => {
      this.scrollTop = document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop ||
      document.querySelector(this.el).scrollTop

      // Control the hiding or display of scroll buttons
      if (this.scrollTop > 150) {
        this.isScrollTop = true
      } else {
        this.isScrollTop = false
      }
    }, true)
  },
  methods: {
    /**
     * Scroll to the top
     */
    scrollToTop () {
      const $this = this

      // Return top animation effects
      setTimeout(function animation () {
        if ($this.scrollTop > 0) {
          setTimeout(() => {
            // Stepping speed
            $this.scrollTop = $this.scrollTop - 30
            // Return to the top
            if (document.documentElement.scrollTop > 0) {
              document.documentElement.scrollTop = $this.scrollTop - 30
            } else if (window.pageYOffset > 0) {
              window.pageYOffset = $this.scrollTop - 30
            } else if (document.body.scrollTop > 0) {
              document.body.scrollTop = $this.scrollTop - 30
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop = $this.scrollTop - 30
            }

            animation()
          }, 1)
        }
      }, 1)
    }
  }
}
</script>
